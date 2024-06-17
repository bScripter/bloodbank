import React from 'react'
import add from '../assets/add.png'

import ManageBloodBank from '../components/ManageBloodBank'
import { Link } from 'react-router-dom'
import FormDialog from '../components/FormDialog'

const BloodBankSection = () => {
  return (
    <div>
        <div className='flex items-center justify-between'>
          <h1 className='font-semibold text-4xl m-10 '>Blood Bank</h1>
          <div className='flex items-center mr-10'>
          <div className='flex m-10 items-center gap-2 border-2 border-red-400  rounded-md p-2  hover:shadow-md'>
            <img src={add} alt="add-icon" className='h-5  hover:border-red-500' />  
            <Link to="/BloodBank/addBloodBank"><h2 className='text-xl cursor-pointer  text-red-500 font-md'> Add a BloodBank </h2></Link>
          </div> 
          <Link to="/Dashboard"><button className='text-xl font-md bg-red-500 text-white  p-2 w-[75px] rounded-sm' >Back</button></Link>
          </div>
        </div>
        <ManageBloodBank />
        
        
        
    </div>
  )
}

export default BloodBankSection
