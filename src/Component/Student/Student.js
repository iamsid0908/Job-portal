import React from 'react'
import {Link} from 'react-router-dom'
import {useEffect,useState} from 'react'
import OutlinedCard from "../Card/Card"
import "./Profile.css"
import "./Student.css"

function Student() {
  const [jobs, setjobs] = useState([]);
  const name=localStorage.getItem('name');
  // const id=localStorage.getItem('id');
  // console.log(id);
  
  useEffect(() => {
    fetch("http://localhost:8000/api/job")
    .then(data=>data.json())
    .then(data=>{
      setjobs(data);
    })
  }, [])
 
  const logout=(e)=>{
    localStorage.clear();
    window.location.reload(false);
  }
  
  return (
    <>
    <div>
      <nav className='navbar'>
        <ul>
          <li>Logo</li>
        </ul>
        <ul className='right'>
          <li>Home</li>
          <li><Link to="/profile">Profile</Link></li>
          {!name?
          <li><Link to="/login">Login</Link></li>:
          <>
          <li>{name}</li>
          <li onClick={logout}>Logout</li>
          </>
          }
          
          
        </ul>
      </nav>
    </div>
   
    <div className='jobs-div'>
      {jobs.map((data)=>{
        return <OutlinedCard key={data.id} jobs={data}/>
      })

      }
    </div>
    </>
  )
}

export default Student