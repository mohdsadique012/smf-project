import { useContext, createContext, useEffect, useReducer } from "react";
import AllProducts from "../reducer/productReducer";
import  axios  from 'axios';
/* API URL */
const ALLPRODUCTURL = 'http://localhost:7600/category_lists';
const SingleURL = "http://localhost:7600/subcategory_lists";
const AppContext = createContext();

/* Initial State */
const intialState = {
    is_loading: false,
    is_error: false,
    products: [],
    featured_products: [],
    is_single_loading: false,
    is_single_error: false,
    single_product: [],
    product_lists: [],
    subcategory_product_lists: [],
    one_product:[]
};


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AllProducts, intialState);
    const getProducts = async (url) => {
        console.log(url,"url")
        dispatch({ type: "IS_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            console.log(products ,"product22222222222211s")
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
            
            console.log(singleProduct,'000000singleProduct000000')
            dispatch({ type: "SET_SINGLE_PRODUCT", payload:singleProduct })
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" })
        }
    };

     /* Fetch Single Product */
     const getProductListByCategory = async (url) => {
        
        dispatch({ type: "SET_SINGLE_LOADING" })
        try {
            const res = await axios.get(url);
            const productlists = await res.data;
            console.log(productlists, "ProductList11111111111") 
            dispatch({ type: "SET_PRODUCT_LIST", payload:productlists })
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" })
        }
    };

    
    const getProductListBysubCategory = async (url) => {
        
        dispatch({ type: "SET_SINGLE_LOADING" })
        try {
            const res = await axios.get(url);
            const productlistssubCategory = await res.data;
            console.log(productlistssubCategory, "Product12121212") 
            dispatch({ type: "SET_subcategory_PRODUCT_LIST", payload:productlistssubCategory })
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" })
        }
    };


    
    const getSingleProductListByproduct= async (url) => {
        
        dispatch({ type: "SET_SINGLE_LOADING" })
        try {
            const res = await axios.get(url);
            const singleproduct = await res.data;
            console.log(singleproduct, "Product12121212") 
            dispatch({ type: "SET_PRODUCT", payload:singleproduct })
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" })
        }
    };


    useEffect(() => {
        getProducts(ALLPRODUCTURL);
        getSingleProduct(SingleURL)
    }, []);
  console.log(state,"statemmmmmmm" )

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct, getProductListByCategory ,getProductListBysubCategory ,getSingleProductListByproduct }} >
            {children}
        </AppContext.Provider>
    );
}

const useProductGlobal = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useProductGlobal };