import React from 'react'
import blood from "../assets/blood.png"

const Bloodtile = (prop) => {
  return (
    <div className='bg-white rounded-lg flex items-center justify-center ml-8 mt-8 shadow-lg border-r-4 p-6 hover:shadow-2xl cursor-pointer  '>
        <img src={blood} alt="Blood-icon" className='h-[75px]' />
        <div className='text-neutral-600 font-md'>
            <p>{prop.bloodName}</p>
            <p>{prop.bloodQuantity} Units</p>
        </div>
      
    </div>
  )
}

export default Bloodtile
