import React from 'react'
import hospital from '../assets/hospital.png'
import { Link, Outlet } from 'react-router-dom'

const Hospital = () => {
  return (
    <div className='mx-6  mt-2 flex items-center  gap-3 cursor-pointer  text-white p-[10px] hover:border-b-2 hover:transition-all'>
    <img src={hospital} alt="Dashboard-icon"  className='h-5'/>
    <Link to="/Hospital" > <p className='text-xl font-semibold'>Hospital</p></Link>
    
    
</div>
  )
}

export default Hospital
