import { useContext } from 'react';

import CartContext from '../../context/cart/CartContext';

import CheckoutItem from '../../components/cart/checkoutItem/Checkout-item';

import PayPal from '../../components/PayPal';

import './Cart.scss';


const Cart = () => {

  const {cartItems, cartTotal} = useContext(CartContext)

  console.log(cartItems)

  return (
    <div className="checkout-container">
             <div className="checkout-header">
                <div className="header-block">
                     <span>Product</span>
                 </div>
                 <div className="header-block">
                     <span>Description</span>
                </div>
                 <div className="header-block">
                     <span>Quantity</span>
                 </div>
                 <div className="header-block">
                     <span>Price</span>
                 </div>
                <div className="header-block">
                    <span>Remove</span>
                 </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem._id} cartItem={cartItem}/>
            ))}
             <span className="total">Total: ${cartTotal}</span>
      
          { cartItems.length ? <PayPal/> : null }
        </div>
  )
}

export default Cart;