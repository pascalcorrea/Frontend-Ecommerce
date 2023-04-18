import CartContext from "../../../context/cart/CartContext";
import { useContext } from "react";

import './Checkout-item.scss';

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemToCart, clearItemFromCart, cartCount } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => {if(cartCount < cartItem.stock )addItemToCart(cartItem)};
  const removeItemHandler = () => removeItemToCart(cartItem);

  const {name, price, image, quantity} = cartItem

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={image} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
