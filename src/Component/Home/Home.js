import React from 'react'

import "./Home.css"
import {Link} from 'react-router-dom';
import Company from '../Company/Company';
import Student from '../Student/Student';


function Home() {
  
  return (  
    <div className='home'>
        <div className='container'>
            <div className='company'><Link to="/company"><Company/></Link></div>
            <div className='student'><Link to="/student">student</Link> </div>
        </div>
    </div> 
  )
}

export default Home