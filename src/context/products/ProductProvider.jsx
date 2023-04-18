import axiosClient from "../../Config/axiosClient";
import productReducers from "./productReducers";
import ProductContext from "./ProductContext";

import { useReducer } from "react";



const ProductProvider = ({children}) => {

    const initialState = {
        products: [],
        product: [{
            id_: "",
            name: "",
            color: "",
            price: "",
            image: "",
            brand: "",
            stock: ""
        }]
    }

    const [productState, dispatch] = useReducer(productReducers, initialState)

    const getProduct = async(id) => {
        const result = await axiosClient.get(`/products/${id}`)
        const product = result.data.info;

        dispatch({
            type: "GET_PRODUCT",
            payload: product
        })

        return product;
    }

    const getProducts = async() => {
        const result = await axiosClient.get("/products")

        dispatch({
            type: "GET_PRODUCTS",
            payload: result.data.info
        })
    }

    const reduceStock = async(cartItems) => {
        try {
          const productos = { cartItems }
          console.log(productos)
          const result = await axiosClient.put("/products/reduce", productos)
          console.log(result.data)
        } catch (error) {
          console.log(error)
        }
      }

    return(
        <ProductContext.Provider value={{
            getProduct,
            getProducts,
            products: productState.products,
            product: productState.product,
            reduceStock
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider