import React from 'react'
import Sidebar from './Sidebar'
import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom'

function BloodbankOC() {

  const location = useLocation();
  console.log(location);

  
  if(location.pathname === '/bloodbankoc' || location.pathname === '/bloodbankoc/')
    {
      console.log("yes");
      return <Navigate to={`/bloodbankoc/request/${id}`} />
    }

    
  return (
    

    <div className='flex w-100' >
       
        <Sidebar name='Bloodbank 1' />
        
       <Outlet />

      
    </div>

        
    
  )
}

export default BloodbankOC