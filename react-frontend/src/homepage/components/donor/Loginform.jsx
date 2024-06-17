import React,{useState} from 'react';
import './donor.css';
import { FaUserCircle, FaLock } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';

function Loginform() {

    const [redirect, setRedirect] = useState(false)

    const checkUser = (event) =>{
        
        event.preventDefault();
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        const data ={
            username:"admin",
            password:"password"
        }

        if(data.password===password && data.username===username){
    
            setRedirect(true)

        }
        else{
            alert("incorrect password or username")
            return null;
        }
    }
    
    if(redirect){
       return <Navigate to="/hospitalrequest" replace />
    }






  return (
    <div className="owrapper">
      <div className="wrapper">
        <h1>HOSPITAL LOGIN</h1>
        <form onSubmit={checkUser}>
          <div className="input-box">
            <input type="text" placeholder="Username" id='username' required />
            <FaUserCircle className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" id='password' required />
            <FaLock className="icon" />
          </div>
          <button type="submit">Submit</button>
   
        </form>
      </div>
    </div>
  );
}

export default Loginform;
