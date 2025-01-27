import React from 'react'
import Navbar from '../components/Navbar'
import LandingPage from './landingPage'

const LayOut = ({setIsLogin, isLogin, products}) => {
  return (
<>
    <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
    <LandingPage products={products}/>

</>

  )
}

export default LayOut