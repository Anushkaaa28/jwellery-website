import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsOnLandingPage = ({products}) => {
   
  
  return (
    <>
    <div className='d-flex flex-wrap justify-content-around'>
        {
            products.map((product)=>(
                <div key={product.id} className="card p-0" style={{width:"14rem"}}>
                 <img src={product.img} className="card-img-top" alt="..."/>
                 <div className="card-body">
                  <p className="card-text">{product.name}</p>
                  <p className="card-text">₹{product.price}</p>
                  {/* <button className='btn btn-light'>View more</button> */}
                  <Link to={`/Homepage/${product.id}`} type='button' className='btn btn-light' product={product}>View more</Link>

                </div>
                </div>
            ))
        }
        </div>
    </>
   
  )
}

export default ProductsOnLandingPage