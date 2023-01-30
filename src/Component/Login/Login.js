import React, { useState } from 'react'
import "./Login.css"
import {json, Link, useNavigate} from "react-router-dom"

function Login() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("");
    const user={email,password};
    const navigate=useNavigate();

    const handleChage=(e)=>{
        // console.log(user);
        e.preventDefault();
        fetch("http://localhost:8000/api/login",{
            method:"POST",
            body:JSON.stringify(user),
            headers:{
                'Content-type':'application/json'
            }
        })
        .then(data=>data.json())
        .then(data=>{
            // console.log(data.user);
            // console.log(data.user._id);
            localStorage.setItem("id",data.user._id)
            localStorage.setItem("jwt",data.accessToken)
        localStorage.setItem('name',data.user.name)
        localStorage.setItem('email',data.user.email)

        navigate('/student')
        alert("you are Loged-in")
        })
        .catch(err=>{
            alert("credential are wronge")
        })
    }
  return (
    <div className='login'>
        <div className='login-div'>
            <div className='register'> <Link to="/register" className='register'>Register</Link></div>
            <div>Or</div>
            <h1>Login</h1>
            
            <label>Email</label>
            <input type="email" onChange={(e)=>{
                setEmail(e.target.value);
            }}/>
            <label>Password</label>
            <input type="Password" onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
            <button className='sing-in' onClick={handleChage}>Sing-In</button>
        </div>
    </div>
  )
}

export default Login