import React, { useState, useRef, useEffect} from 'react'
import './Loginform.css'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Loginform = ({isLogin, setIsLogin}) => {


    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
    },[])

    const navigate = useNavigate();

    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");

    const getData = localStorage.getItem('user1')
    console.log(getData);
    
    const data = JSON.parse(getData);

    // console.log(data)

    function submitFormData(e){
        e.preventDefault();
        if(email==data.email && password==data.password){
        toast.success("submitted")
        setIsLogin(isLogin = true)
        navigate('Homepage');
        }
        else{
        toast.error("Enter valid data")
        setIsLogin(isLogin = false)
        navigate('/');

        }
        setEmail("");
        setPassword("");
    }
  return (
    <>
    <div className='container-fluid w-100'>
    <div className='row  loginPage'  >

    <div className='col p-0'>

        {/* <img className='sideImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFnq5x7f8kxk7WiwrHwIC79tiQWFPkEPqKRKb36mnvb4gJvBpoHcMjJ3k9xCtmGsjaxPs&usqp=CAU' /> */}

    </div>

    <div className='col p-0 '>
            <form className='bg-light formBg' onSubmit={submitFormData}>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e)=>setEmail(e.target.value)} ref={inputRef} />
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
        <button type="submit" class="btn btn-primary submitButton" style={{backgroundColor:"#002D69"}}>Login</button><br></br>
            <h6 className='text-center'>Don't have an account? <Link to='register'>Create Account</Link></h6>
        {/* <button onClick={getFormValues}>Login</button> */}
        </form>
    </div>
    </div>

</div>
       
        </>

  )
}

export default Loginform