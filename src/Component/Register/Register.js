import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate=useNavigate();
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const user={name,email,password};
    const handleChange=(e)=>{
        console.log(user);
        e.preventDefault();
        fetch("http://localhost:8000/api/register",{
            method:"POST",
            body:JSON.stringify(user),
            mode:'cors',
            headers:{
                'Content-type':'application/json'
            }
        })
        .then((data)=>{
            console.log(data)
            navigate('/login')
            alert("Succesfully register")
            
          })
          .catch((err)=>{
            console.log(err)
            alert("Data might wrong")
          })
    }

  return (
    <div className='login'>
        <div className='login-div'>
            <div className='register'> <Link to="/login" className='register'>Login</Link></div>
            <div>Or</div>
            <h1>Register</h1>
            <label>Name</label>
            <input type="text" onChange={(e)=>{
                setName(e.target.value);
            }}/>
            <label>Email</label>
            <input type="email" onChange={(e)=>{
                setEmail(e.target.value);
            }}/>
            <label>Password</label>
            <input type="Password" onChange={(e)=>{
                setPassword(e.target.value);
            }}/>
            <button className='sing-in' onClick={handleChange}>Sing-In</button>
        </div>
    </div>
  )
}

export default Register