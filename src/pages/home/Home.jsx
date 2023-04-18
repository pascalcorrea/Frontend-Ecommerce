import UserContext from "../../context/UserContext";
import { useContext, useState, useEffect } from "react";
import ProductContext from "../../context/products/ProductContext"; 
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/carrucel/1.png'
import img2 from '../../assets/carrucel/2.png'
import img3 from '../../assets/carrucel/3.png'
import img4 from '../../assets/carrucel/4.png'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import CardProducts from "../../components/cardProducts/card-products";

const Home = () => {
 
  const { products, getProducts } = useContext(ProductContext);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fecthProducts = async() => {
      await getProducts();
      setLoading(true);
    }
    fecthProducts()
  }, [])

  return (
    <div>
     <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>

    <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Nuestros Productos
          </h2>
          { !loading ? <Stack spacing={1}>
            <Skeleton variant="rectangular" width={300} height={300} />
          </Stack>: 
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => ( 
            <CardProducts key={product._id} product={product} />
          ))}
          </div> }
        </div>
      </div>
    </div>
    
  )
}

export default Home;