import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import { useNavigate } from "react-router-dom";
import ProductContext from "../context/products/ProductContext";

const PayPal = () => {

    const { cartTotal, clearItemFromCheckout, cartItems } = useContext(CartContext)

    const {reduceStock} = useContext(ProductContext)
    // const navigate = useNavigate();

  return (
    <PayPalScriptProvider options={{ "client-id": "AeLxB27A0xjkrkd9CZvjUBWoZCcbzhd-eP0axuRHrkzBhytqNSR5xxBqepFaw6K2tHW0pA3sYbOXTCIC" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: cartTotal,
                                    currency: "USD"
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                        reduceStock(cartItems)
                        clearItemFromCheckout()
                        console.log(cartItems)
                        
                    });
                }}
            />
        </PayPalScriptProvider>
  )
}

export default PayPal;