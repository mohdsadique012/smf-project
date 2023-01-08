import { useContext, createContext, useEffect, useReducer } from "react";
import AllProducts from "../reducer/productReducer";
import { axios } from 'axios';
/* API URL */
const ALLPRODUCTURL = 'http://admin.thesoftwarecompany.in/bestselling_lists';
const AppContext = createContext();

/* Initial State */
const intialState = {
    is_loading: false,
    is_error: false,
    products: [],
    featured_products: [],
    is_single_loading: false,
    is_single_error: false,
    single_product: {},

};


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AllProducts, intialState);
    const getProducts = async (url) => {
        console.log(url,"url")
        dispatch({ type: "IS_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            console.log(products ,"products")
            dispatch({ type: "SET_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }


     /* Fetch Single Product */
     const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" })
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct })
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" })
        }
    };

    useEffect(() => {
        getProducts(ALLPRODUCTURL);
    }, []);
  console.log(state,"state" )
  console.log(AllProducts,"AllProducts")
    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }} >
            {children}
        </AppContext.Provider>
    );
}

const useProductGlobal = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useProductGlobal };