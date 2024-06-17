import React from 'react'
import bloodDonation from "../assets/bloodDonation.png"

const Logo = () => {
  return (
    <div className='flex items-center gap-2 mx-6 pt-6'>
      <img src={bloodDonation} alt="Logo" />
      <p className='font-semibold text-white text-xl'>Blood Care</p>
    </div>
  )
}

export default Logo
