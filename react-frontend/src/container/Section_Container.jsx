import React from 'react'
import Bloodstock from '../components/Bloodstock'
import Campaign from '../components/Campaign'
import Requests from '../components/Requests'

import ModalWindow from '../components/ModalWindow'


const Section_Container = () => {
  
  return (
    <div >
      <div className='flex justify-between'>
        <h1 className='font-semibold text-4xl m-8 '>Dashboard</h1>
        <div>
          <ModalWindow />
        </div>
      </div>
    
        <Bloodstock />
        <div className="grid grid-cols-2">
          <Requests />
          <Campaign />

        </div>

        

      
     

      

      
        
     
       
      
   
      
    </div>
  )
}

export default Section_Container
