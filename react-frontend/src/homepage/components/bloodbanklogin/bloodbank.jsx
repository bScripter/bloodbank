import React,{useState, useEffect} from 'react';
import './bloodbank.css';
import { FaUserCircle, FaLock } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

function Loginform() {

  

  const [redirect, setRedirect] = useState(false)
  
  const [records, setRecords] = useState([])

  useEffect( () => {
       axios.get("http://localhost:8081/users")
       .then(res => {
           setRecords(res.data.message)
       })
       .catch(err => console.log(err))
   },[])


    const checkUser = (event) =>{
        
        event.preventDefault();
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value

        const str = "BB_"

        records.map( (value) => {
          if(value.password==password && value.username==username && value.username.includes(str)  ){
            console.log(value.username)
            setRedirect(true)

        }
      })
      
      }
        
  
    
    if(redirect){
       return <Navigate to= {`/bloodbankoc/request/${username.value}`} replace />
    }




  return (
    <div className="owrapper">
      <div className="wrapper">
        <h1>BLOOD BANK LOGIN</h1>
        <form onSubmit={checkUser}>
          <div className="input-box">
            <input type="text" placeholder="Username"  id="username" required />
            <FaUserCircle className="icon" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Password"  id="password" required />
            <FaLock className="icon" />
          </div>

          <button type="submit">Submit</button>
          
        </form>
      </div>
    </div>
  );
}

export default Loginform;
