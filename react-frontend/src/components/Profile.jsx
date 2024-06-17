import React from 'react'
import profile from "../assets/profile.png"

const Profile = () => {
  return (
    <div className='flex items-center m-6 gap-1 bg-white w-64 p-3  rounded-md  '>
      <img src={profile} alt="Profile Image" className='rounded-full h-10'  />
      <p className=' font-semibold text-l ml-3 '>Admin<br /> Hey! Welcome Back</p>
      
        
    </div>
  )
}

export default Profile
