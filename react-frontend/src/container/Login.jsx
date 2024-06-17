import React, { useState } from 'react'
import bloodDonation from "../assets/bloodDonation.png"
import {  Navigate } from 'react-router-dom'





const Login = () => {

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
       return <Navigate to="/Dashboard" replace />
    }




  return (
    <div className='flex items-center justify-center h-screen'>
    <div className='bg-red-500 h-[600px] rounded-md w-[500px]'>
        <div className='flex gap-2 items-center m-10'>
            <img src={bloodDonation} alt="Logo" />
            <h1 className='text-xl text-white font-semibold'>Blood Care</h1>
        </div>
        <form className='text-white' >
            <div>
                <h1 className='text-3xl m-12'>Login</h1>
                <div className='m-12'>
                    <label htmlFor="username" className='text-xl font-semibold mr-2'>Username</label>
                    <input type="text" id='username' placeholder='Enter the username' className='p-2 rounded-md text-black' autoComplete='true' required />
                </div>
                <div className='m-12'>
                    <label htmlFor="password"  className='text-xl font-semibold mr-3'>Password</label>
                    <input type="password" id='password' placeholder='Enter the password ' className='p-2 text-black rounded-md' autoComplete='true' required/>
                </div>
            </div>
          <button type='submit' onClick={checkUser} className='bg-white p-2 w-[100px] font-semibold rounded-md text-black ml-[200px] mb-12 '>Login</button>
            <p className='text-center'> Note: <span className='underline underline-offset-4'>Forgot password ?</span> Contact the Management.</p>

        </form>
        </div>
    </div>
  )
}

export default Login
