import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from '../components/Profile'
import Logo from '../components/Logo'
import Dashboard from '../components/Dashboard'
import Bloodbank from '../components/Bloodbank'
import Hospital from '../components/Hospital'
const Aside_Container = () => {
  return (
    <div >
      <div className="side__container h-full bg-red-500 w-[320px]"> 
        <Logo />
        <Profile />
        <Dashboard />
        <Bloodbank />
        <Hospital />
       </div>
    </div>
  )
}

export default Aside_Container
