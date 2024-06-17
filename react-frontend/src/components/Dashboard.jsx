import React from 'react'
import home from "../assets/home.png"
import { Link, Outlet } from 'react-router-dom'



const Dashboard = () => {

  return (
    <div className='mx-6 mt-2 flex items-center  gap-3 cursor-pointer  text-white p-[10px] hover:border-b-2 hover:transition-all'>
        <img src={home} alt="Dashboard-icon"  className='h-5'/>
       
        <Link to="/Dashboard" className='text-xl font-semibold hover:text-white'>Dashboard</Link>
        <Outlet />
    </div>
  )
}

export default Dashboard
