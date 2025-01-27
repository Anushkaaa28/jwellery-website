import React from 'react'
import './LandingPage.css'
import Navbar from '../components/Navbar'
import ProductsOnLandingPage from '../Categories/ProductsOnLandingPage'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const LandingPage = ({products}) => {
  
        console.log("ppppppppppppppppp",products);


  return (
    <>

    {/* <Navbar/> */}
       

<img className='LandingImg' src='./src/assets/LandingPageImg.png'/>

<div className='container-fluid'>
<div>
    <h3 className='text-uppercase p-5' style={{color:"#002D69"}}>Shop by jewelry type</h3>
</div>

<div className='categories'>

<div className="card cardClass" style={{width:"15rem"}}  >
  <img src="./src/assets/Item 1.png" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Earrings</h5>
  </div>
</div>

<div className="card cardClass" style={{width:"15rem"}}  >
  <img src="./src/assets/Item 2.png" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">necklaces</h5>
  </div>
</div>

<div className="card cardClass" style={{width:"15rem"}}  >
  <img src="./src/assets/Item 3.png" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">bracelets</h5>
  </div>
</div>


<div className="card cardClass" style={{width:"15rem"}}  >
  {/* <img src="./src/assets/Item 5.png" className="card-img-top" alt="..." /> */}
  <img src="./src/assets/mangalsutra.jpeg" className="card-img-top" alt="..." />

  <div className="card-body">
    <h5 className="card-title">Mangalsutras</h5>
  </div>
</div>

<div className="card cardClass" style={{width:"15rem"}}  >
  <img src="./src/assets/Item 5.png" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Rings</h5>
  </div>
</div>

</div>
</div>

<div className=''>
<img src='https://www.palmonas.com/cdn/shop/files/dec_b1g1_web_banner.webp?v=1734964958&width=1500' width={"100%"} className='p-5'></img>

</div>


{/* <ProductsOnLandingPage /> */}

<div className='d-flex flex-wrap justify-content-evenly'>
        {
            products.map((product)=>(
                <div key={product.id} className="card p-0 mb-3" style={{width:"16rem"}}>
                 <img src={product.img} className="card-img-top" alt="..."/>
                 <div className="card-body">
                  <p className="card-text">{product.name}</p>
                  <p className="card-text">₹{product.price}</p>
                  <Link to={`/Homepage/${product.id}`} type='button' className='btn btn-outline-secondary' product={product}>View more</Link>

                </div>
                </div>
            ))
        }
        </div>

<br></br>
<footer>

<div className='d-flex flex-wrap justify-content-center  p-5'>

    <div className='' ><img className='leftFooter' src='./src/assets/footerImg.png' /></div>

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

export default LandingPage