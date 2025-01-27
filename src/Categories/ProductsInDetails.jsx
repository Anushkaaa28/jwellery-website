import React, { useEffect, useState } from 'react'
import { Link, Routes, useParams, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const ProductsInDetails = ({products}) => {
    const {Id} = useParams();
    // console.log("p-id",Id)

    

    const [prod, setProd] = useState({});
    // console.log("..........",products);

    useEffect(()=>{
        setProd(products.find((p)=>p.id == Id))
        // console.log("Single Product",prod.name);
    },[])


   
  return (
    <>
      <Navbar></Navbar>
      <div className='d-flex flex-wrap'>
        <div className='col p-5'>
          <img src={prod.img} height={"600px"}></img>
        </div>


        <div className='col p-5 m-5'>        
        <h4>Product : {prod.name}</h4>
        <h6 style={{color:"#0D5EBA"}}>By Bayside fine jewelry</h6>
        <hr></hr>
        <h5>MRP : ₹ {prod.price}</h5>
        <h6 className='text-success'> "Buy more, save more"  Buy any two products get one FREE</h6>

        <hr></hr>

        <button className='btn btn-dark w-100 my-5 py-2'>Add to Bag</button>

        <Link to={`/Homepage/${prod.id}/review`} className='me-5'>Reviews</Link> 
        <Link to={`/Homepage/${prod.id}/ratings`}>Ratings</Link>

        <Routes>
        <Route path="review" element={<Review />} ></Route>
        <Route path='ratings' element={<Ratings/>}></Route>
        </Routes>
        </div>


      </div>
      <footer>

<div className='d-flex flex-wrap justify-content-center  p-5'>

    <div className='' ><img className='leftFooter' src='../src/assets/footerImg.png' /></div>

    <div className=''>
    <div className="card leftFooter">
  <div className="card-body">
    <h3 className="card-title text-uppercase" style={{color:"#002D69"}}>Stay in touch?</h3>
    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
    </div>
</div>
<hr className='m-0'></hr>
<p className='p-3 text-center'>anushkakadu2@gmail.com    </p> 

</footer>
    </>

  )
}


  function Review(){
  return(
  <>
    <h4 className='text-dark'>Reviews..</h4>
    <h4>Very Good</h4>
  </>
  )
}

function Ratings(){
  return(
  <>
    <h4>Ratings..</h4>
          <p>
            <FaStar />
            <FaStar />
            <FaRegStarHalfStroke />
            <CiStar />
            <CiStar />
        </p>
  </>
  )
}


export default ProductsInDetails