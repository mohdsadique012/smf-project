const ProductReducer = (state, action) => {
    switch (action.type) {
        case "IS_LOADING":
            return {
                ...state,
                is_loading: true
            };

        case "API_ERROR":
            return {
                ...state,
                is_loading: false,
                is_error: true
            };

        case "SET_API_DATA":
            let featureProducts = action.payload.category ;
            console.log(featureProducts,"featureProducts");
            return {
                ...state,
                is_loading: false,
                is_error: false,
                products: action.payload.category,
                featured_products: featureProducts,
                
            };
        case "SET_SINGLE_LOADING":
            return {
                ...state,
                is_single_loading: true
            };

        case "SET_SINGLE_ERROR":
            return {
                ...state,
                is_single_loading: false,
                is_single_error: true
            };
        case "SET_SINGLE_PRODUCT":
            // let single_product = action.payload.category 
            return {
                ...state,
                is_single_loading: false,
                is_single_error: false,
                single_product: action.payload.subcategory

            };

        case "SET_PRODUCT_LIST":
            let sss= action.payload.product;
            console.log(sss,"action.payload.product")
            return{
                ...state,
                product_lists: action.payload.product


            };
         case "SET_subcategory_PRODUCT_LIST":
           
        
            return{
                ...state,
                sub_product_lists: action.payload.product


            };
     

        default:
            return state;
    }
}

export default ProductReducer;