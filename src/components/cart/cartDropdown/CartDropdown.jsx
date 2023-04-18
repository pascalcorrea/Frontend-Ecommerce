import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import CartContext from "../../../context/cart/CartContext";
import { Button } from "@mui/material";
import CartItem from "../CartItem/CartItem";

import './CartDropDown.scss'

const CartDropdown = () => {
    const navigate = useNavigate()
    const {cartItems} = useContext(CartContext)

    const goToCartCheckoutHandler = () => {
        navigate('/cart')
    }

  return (
    <div>
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem._id} cartItem={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
                
            </div>
            <Button onClick={goToCartCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    </div>
  )
}

export default CartDropdown