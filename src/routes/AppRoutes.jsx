import { Routes, Route, Navigate } from 'react-router-dom';
import UserContext from '../context/UserContext';
import { useContext, useEffect, useState } from 'react';

import LayoutMain from '../components/layout/Layaout.main';
import Auth from '../pages/auth/Auth';
import Cart from '../pages/cart/Cart';
import Home from '../pages/home/Home';
import Products from '../pages/products/Products';
import MyProfile from '../pages/account/MyProfile';
import Product from '../pages/products/product/Product';




const AppRoutes = ({atributo}) => {
  console.log(atributo)
  const {userState, verifyToken} = useContext(UserContext);

  const isLogged = userState.authStatus;

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const call = async() => {
      await verifyToken()
      setLoading(false)
    }
    call()
  }, [userState.authStatus])
 

  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutMain />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<Product />} />
          {isLogged === false && <Route path='/auth' element={<Auth />} />}
          <Route path='/cart' element={<Cart />} />
          {isLogged === true && <Route path='/user/myprofile' element={<MyProfile />} />}
          <Route path='*' element={<Navigate to='/'/>} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes;