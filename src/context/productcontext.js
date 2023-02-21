import { useContext, createContext, useEffect, useReducer } from "react";
import AllProducts from "../reducer/productReducer";
import  axios  from 'axios';
/* API URL */
const ALLPRODUCTURL = 'https://admin.thesoftwarecompany.in/category_lists/';
const SingleURL = "https://admin.thesoftwarecompany.in/subcategory_lists/";
const bestselling = "https://admin.thesoftwarecompany.in/product_lists?categoryId=birthday_gift";
const Cities = "https://admin.thesoftwarecompany.in/geoCoding/"
const trending = "https://admin.thesoftwarecompany.in/product_list/trending/"

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
    one_product:[],
    trending_product:[],
    bestselling_product:[],
    city:[]
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

    const fetchData = async (cityId) => {
        try {
          const response = await axios.post('https://admin.thesoftwarecompany.in/fetchCityCity', {
            city_id: cityId
          });
          const products = response.data.products; // Assuming the server returns the products data
          // Process the product data as needed
        } catch (error) {
          console.error(error);
        }
      }
     /* Fetch Single Product */
     const getSingleProduct = async (url) => {
        console.log(url)
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
        console.log(url)
        dispatch({ type: "SET_SINGLE_LOADING" })
        try {
            const res = await axios.get(url);
            const productlists = await res.data;
            console.log(productlists, "ProductList1222221111111111") 
            dispatch({ type: "SET_PRODUCT_LIST", payload:productlists })
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" })
        }
    };

    
    const getProductListBysubCategory = async (url) => {
        console.log(url)
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
        console.log(url)
        
        dispatch({ type: "SET_SINGLE_LOADING" })
        try {
            const res = await axios.get(url);
            const singleproduct = await res.data;
            console.log(singleproduct, "pppppppppppp") 
            dispatch({ type: "SET_PRODUCT", payload:singleproduct })
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" })
        }
    };
    const getlistbycities= async (url) => {
        console.log(url ,"ggggg")
        dispatch({ type: "SET_SINGLE_LOADING" })
        try {
            const res = await axios.get(url);
            console.log(res ,"rrrrrrrrrrty")
            const cities = await res.data;
            console.log(cities, "city000000000000011") 
            dispatch({ type: "SET_cities", payload:cities[1] })
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" })
        }
    };
    const getTrendingproduct= async (url) => {
        console.log(url)
        dispatch({ type: "SET_SINGLE_LOADING" })
        try {
            const res = await axios.get(url);
            const singleproduct = await res.data;
            console.log(singleproduct, "trending_data") 
            dispatch({ type: "SET_Trending_PRODUCT", payload:singleproduct })
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" })
        }
    };
    const getBestsellingproduct= async (url) => {
        console.log(url)
        dispatch({ type: "SET_SINGLE_LOADING" })
        try {
            const res = await axios.get(url);
            const singleproduct = await res.data;
            console.log(singleproduct, "Bestselling_data..........") 
            dispatch({ type: "SET_Bestselling_PRODUCT", payload:singleproduct.product
})
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" })
        }
    };



    useEffect(() => {
        getProducts(ALLPRODUCTURL);
        getSingleProduct(SingleURL);
        getBestsellingproduct(bestselling);
        getTrendingproduct(trending);
        getlistbycities(Cities)
        console.log(Cities,'4444444444')
    }, []);
  console.log(state,"statemmmmmmm" )

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct,getlistbycities, getProductListByCategory ,getProductListBysubCategory ,getSingleProductListByproduct ,getTrendingproduct,getBestsellingproduct }} >
            {children}
        </AppContext.Provider>
    );
}

const useProductGlobal = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useProductGlobal };