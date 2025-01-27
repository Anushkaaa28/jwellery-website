// import React from 'react'
import React, { useState, useRef, useEffect} from 'react'
import './Loginform.css'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RegisterPage = ({isLogin, setIsLogin}) => {

const [email, setEmail] = useState(""); 
const [password, setPassword] = useState("");
 
const navigate = useNavigate();

const inputRef = useRef();

useEffect(()=>{
    inputRef.current.focus();
},[])

     function submitFormData(e){
         e.preventDefault();
            console.log(email,password)
            const payload = {email : email ,password : password}
            localStorage.setItem('user1', JSON.stringify(payload))
            // toast.success("Registered successfully");
            setEmail("");
            setPassword("");
            navigate('/')
         
     }
   return (
     <>
     <div className='container-fluid w-100'>
     <div className='row  loginPage'  >
 
     <div className='col p-0'>
 
 
     </div>
 
     <div className='col p-0'>
     
             <form className='bg-light' onSubmit={submitFormData}>
         <div className="mb-3">
             <label for="exampleInputEmail1" className="form-label">Email address</label>
             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e)=>setEmail(e.target.value)}  ref={inputRef}/>
             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
         </div>
         <div className="mb-3">
             <label for="exampleInputPassword1" className="form-label">Password</label>
             <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)} />
         </div>
         <div className="mb-3 form-check">
             <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
             <label className="form-check-label" for="exampleCheck1">Check me out</label>
         </div>
         <button type="submit" class="btn btn-primary submitButton" style={{backgroundColor:"#002D69"}}>Register</button>
         <h6 className='text-center'>Already have an account?<Link to='/'>Login</Link></h6>

         </form>
     </div>
     </div>
 
 </div>
        
         </>
  )
}

export default RegisterPage