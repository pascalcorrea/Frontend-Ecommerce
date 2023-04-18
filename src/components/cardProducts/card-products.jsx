import CartContext from "../../context/cart/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";



const CardProducts = ({product}) => {
    const { addItemToCart, cartCount } = useContext(CartContext);
    


    const {image, price, _id, name, stock} = product;

    const addProductHandler = () => { if(cartCount < stock) addItemToCart(product) }


  return (
    <div>
        <Link to={`/product/${_id}`}>
          <div className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src={image}
                alt="Guitar"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">{name}</h3>
              </div>
              <p className="text-sm font-medium text-gray-900">
                ${price}
              </p>
            </div>
          </div>
        </Link>
        {stock === 0 ? <h5 className="text-red-900">Sin Stock</h5> :  <Button onClick={addProductHandler} >comprar</Button>}
      </div>
  )
}

export default CardProducts