import React from 'react'
import bloodbank from "../assets/bloodbank.png"
import { Link } from 'react-router-dom'

const Bloodbank = () => {
  return (
    <div className='mx-6 mt-2 flex items-center  gap-3 cursor-pointer  text-white p-3 hover:border-b-2 hover:transition-all'>
    <img src={bloodbank} alt="Blood Bank Icon"  className='h-5'/>
    <Link to="/BloodBank"><p className='text-xl font-semibold hover:text-white'>Blood Bank</p></Link>
</div>
  )
}

export default Bloodbank
