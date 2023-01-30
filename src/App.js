
import './App.css';
import Home from "./Component/Home/Home"
import {Route,Routes} from "react-router-dom"
import Company from './Component/Company/Company';
import Student from './Component/Student/Student';
import Profile from './Component/Student/Profile';
import  Login  from './Component/Login/Login';
import  Register from './Component/Register/Register';
function App() {
  return (
    <div className="App">  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/company' element={<Company/>}/>
      <Route path='/student' element={<Student/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
