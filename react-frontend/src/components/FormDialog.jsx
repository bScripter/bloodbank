import React, { useState } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"


const FormDialog = () => {
  const [post,setPost] = useState({
    bb_id:'',
    bb_name:'',
    bb_address:'',
    bb_contact:'',
    bb_email:''  
  })
  
  
  const handleInput = (event) =>{
   setPost({...post, [event.target.name]: event.target.value})
  }
  
  const handleSubmit =  async ( event ) =>{
    event.preventDefault();
    try{
      await axios.post("http://localhost:8081/bloodBank", post)
    }
    catch(error) { console.log(error)}

    const form = document.getElementById("bbForm");
    form.reset();

    

  }
  return (
    <div>
      <div className='flex item-center justify-between'>
        <h1 className='text-4xl font-semibold m-8'>Register as a Blood Bank</h1>
        <Link to="/BloodBank"><button className='text-xl m-8 font-md bg-red-500 text-white  p-2 w-[75px] rounded-md'>Back</button></Link>
      </div>
      <div className='flex justify-center'>
        <form onSubmit={handleSubmit} id='bbForm' className='border-2 border-red-500 w-[500px] rounded-md  px-3 py-5'>
          
         
          <div className='flex flex-col items-center gap-10'>
          <div className='flex items-center'>          
            <label htmlFor="bloodBankID" className='text-red-500 text-left font-medium mr-3 text-xl'>Registered ID</label>
            <input type="text" name="bb_id" autoComplete='false' id='bloodBankID' onChange={handleInput}  placeholder='Enter the Registered ID' className='border-2 p-2 rounded-md text-xl' />
          </div>
          <div className='flex items-center'>          
            <label htmlFor="bloodBankName" className='text-red-500 text-left font-medium mr-3 text-xl'>Registered Name</label>
            <input type="text" name="bb_name"  id='bloodBankName' onChange={handleInput}  placeholder='Enter the name' className='border-2 p-2 rounded-md text-xl' />
          </div>
          <div className='flex items-center'>
            <label htmlFor="bloodBankAddress" className='text-red-500 font-medium mr-3 text-xl'>Address</label>
            <input type="text" name="bb_address" id='bloodBankAddress' onChange={handleInput} placeholder='Enter the address' className='border-2 p-2 rounded-md text-xl ' />
          </div>
          <div className='flex items-center'>
            <label htmlFor="bloodBankContactDetails" className='text-red-500 font-medium text-xl mr-3'>Contact Details</label>
            <input type="text" name="bb_contact" id='bloodBankContactDetails' onChange={handleInput} placeholder='Enter the contact details' className='border-2 p-2 rounded-md text-xl ' />
          </div>
          <div className='flex items-center'>
            <label htmlFor="bloodBankEmail" className='text-red-500 font-medium  mr-3 text-xl'>Email Address</label>
            <input type="text" name="bb_email" id='bloodBankEmail' onChange={handleInput} placeholder='Enter the Email address' className='border-2 p-2 rounded-md text-xl ' />
          </div>

          <button type="submit" onClick={handleSubmit} className='text-white w-[100px] bg-red-500 hover:shadow-red-600 hover:shadow-md p-2 rounded-md '>Submit</button>
          </div>

          <p className='text-center mt-10'>Note: Please enter the verified Details. Once Submitted cannot change any information.</p>

        </form>
        </div>
      
    </div>
  )
}

export default FormDialog
