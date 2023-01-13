import productReducer from "./slices/ProductSlice"
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
const store = configureStore({
    reducer: {
        productStore: productReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false })
    //   .concat(sagaMiddleware)
      .concat(logger),
})
export default store 