import React from 'react'
import "./Profile.css"
function Profile() {
  return (
    <div className='profile'>
        <div className='profile-div'>
            <h1>Profile</h1>
            <label>Name</label>
            <input type="text" placeholder="Name"/>
            <label>Email</label>
            <input type="email" placeholder="Email"/>
            <label>Passwprd</label>
            <input type="password" placeholder="Password"/>
            <label>Skills</label>
            <input type="text" placeholder="Skills"/>
            <label>Cgpa</label>
            <input type="number" placeholder="cgpa"/>
            <label>College</label>
            <input type="text" placeholder="College"/>
            <label>Github</label>
            <input type="text" placeholder="Github"/>
            <label>Linkedin</label>
            <input type="text" placeholder="Linked-In"/>
            <button>Submit</button>
        </div>
    </div>
  )
}

export default Profile