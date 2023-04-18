export const addCartItem = (cartItems, productToAdd) => {
    // busque si cartItems contiene product add

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem._id === productToAdd._id
    );

    // si ya existe el product en mi carrito, incrementar la cantidad de ese product en mi carrito

    if(existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem._id === productToAdd._id ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
         )
    }
    // retorna un nuevo array con cartItems modifcados
    return [...cartItems, {...productToAdd, quantity: 1}]
}

export const removeCartItem = (cartItems, cartItemToRemove) => {
    // encontrar el producto del carrito para eliminar

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem._id === cartItemToRemove._id
    );

    // si ya existe el product en mi carrito, y tiene mas de 1 elemento, restar 1 , si solo hay 1 elemento lo elimina

    if(existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => 
            cartItem._id !== cartItemToRemove._id
         )
    }
    // si el carrito tiene mas de un elemento borra de a uno(disminuir)
    return cartItems.map((cartItem) => 
        cartItem._id === cartItemToRemove._id ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
}

export const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) =>  cartItem._id !== cartItemToClear._id)
}
