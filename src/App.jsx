import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loginform from './components/Loginform'
// import {ToastContainer} from 'react-toastify'
// import LandingPage from './Pages/landingPage'
// import Navbar from './components/Navbar'
import RegisterPage from './components/RegisterPage'
import { Route, Routes } from 'react-router-dom'
import LayOut from './Pages/LayOut'
import ProductsInDetails from './Categories/ProductsInDetails'

function App() {

  const [isLogin, setIsLogin] = useState(false);


  const [products] = useState([
    {
      id: 1,
      img: "https://www.palmonas.com/cdn/shop/files/Heart_all_over_bracelet-1_0000.jpg?v=1734434031&width=360",
      name:"Hearts All Over Bracelet",
      price:3049
    },
    {
      id: 2,
      img: "https://www.palmonas.com/cdn/shop/files/PM-EARRINGS-037_1_0040.jpg?v=1737358668",
      name:"Small Heart Hoop Earrings",
      price:2099
    },
    {
      id: 3,
      img: "https://www.palmonas.com/cdn/shop/files/nk050.jpg?v=1690795905&width=360",
      name:"Black Onyx Necklace",
      price:2229
    },
    {
      id: 4,
      img: "https://www.palmonas.com/cdn/shop/files/BR170-G-MD2.jpg?v=1724500060&width=360",
      name:"Twisted Gold Cuff Bracelet",
      price:4199
    },
    {
      id: 5,
      img: "https://www.palmonas.com/cdn/shop/files/FRIDAYDROP_3.jpg?v=1695461578&width=360",
      name:"Vintage Heart Earrings",
      price:1899
    }
  ]);
    

  return (
   <>

    <Routes>
    <Route path='/' element={<Loginform isLogin={isLogin} setIsLogin={setIsLogin} />} ></Route>
    <Route path='register' element={<RegisterPage/>} > </Route>
    <Route path='Homepage' element={<LayOut isLogin={isLogin} setIsLogin={setIsLogin} products={products} />}> </Route>
    <Route path='Homepage/:Id/*' element={<ProductsInDetails products={products} /> }></Route>

    </Routes>




  {/* <RegisterPage/>
   {
    isLogin ? (<><Navbar isLogin={isLogin} setIsLogin={setIsLogin} /> <LandingPage/></>) : ( <Loginform isLogin={isLogin} setIsLogin={setIsLogin} />  )
   }

   
 <ToastContainer position='top-center'/> */}
      

    </>
  )
}

export default App
