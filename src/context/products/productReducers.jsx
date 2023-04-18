const productReducers = (state, action) => {
    const {type, payload} = action;

    switch (type) {

        case "GET_PRODUCTS":
            return {
                ...state,
                products: payload,
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

        case "GET_PRODUCT":
            return {
                ...state,
                product: [payload]
            }
        default:
            return state;
    }
}

export default productReducers