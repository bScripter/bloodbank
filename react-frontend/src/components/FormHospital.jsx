import React,{useState} from 'react'
import axios from 'axios' 
import { Link } from 'react-router-dom'

const FormHospital = () => {
    const [post,setPost] = useState({
        hs_id: '',
        hs_name:'',
        hs_address:'',
        hs_contact:'',
        hs_email:''   
    })
      
    const handleInput = (event) =>{
      setPost({...post, [event.target.name]: event.target.value})
     }
     
     const handleSubmit =  async ( event ) =>{
       event.preventDefault();
       try{
         await axios.post("http://localhost:8081/hospital", post)
       }
       catch(error) { console.log(error)}
   
       const form = document.getElementById("hsform");
       form.reset();

    }

    return (
         <div>
            <div className='flex item-center justify-between'>
        <h1 className='text-4xl font-semibold m-8'>Register as a Hospital</h1>
        <Link to="/Hospital"><button className='text-xl m-8 font-md bg-red-500 text-white  p-2 w-[75px] rounded-md'>Back</button></Link>
      </div>
      <div className='flex justify-center'>
        <form onSubmit={handleSubmit} id="hsform" className='border-2 border-red-500 w-[500px] rounded-md  px-3 py-5'>
          
         
          <div className='flex flex-col items-center gap-10'>
          <div className='flex items-center'>          
            <label htmlFor="hospitalID" className='text-red-500 text-left font-medium mr-3 text-xl'>Registered ID</label>
            <input type="text" name="hs_id"  id='hospitalID' onChange={handleInput}  placeholder='Enter the Registered ID' className='border-2 p-2 rounded-md text-xl' />
          </div>
          <div className='flex items-center'>          
            <label htmlFor="hospitalName" className='text-red-500 text-left font-medium mr-3 text-xl'>Registered Name</label>
            <input type="text" name="hs_name"  id='hospitalName' onChange={handleInput}  placeholder='Enter the name' className='border-2 p-2 rounded-md text-xl' />
          </div>
          <div className='flex items-center'>
            <label htmlFor="hospitalAddress" className='text-red-500 font-medium mr-3 text-xl'>Address</label>
            <input type="text" name="hs_address" id='hospitalAddress' onChange={handleInput} placeholder='Enter the address' className='border-2 p-2 rounded-md text-xl ' />
          </div>
          <div className='flex items-center'>
            <label htmlFor="hospitalontactDetails" className='text-red-500 font-medium text-xl mr-3'>Contact Details</label>
            <input type="text" name="hs_contact" id='hospitalontactDetails' onChange={handleInput} placeholder='Enter the contact details' className='border-2 p-2 rounded-md text-xl ' />
          </div>
          <div className='flex items-center'>
            <label htmlFor="HospitalEmail" className='text-red-500 font-medium  mr-3 text-xl'>Email Address</label>
            <input type="text" name="hs_email" id='HospitalEmail' onChange={handleInput} placeholder='Enter the Email address' className='border-2 p-2 rounded-md text-xl ' />
          </div>

          <button type="submit" className='text-white w-[100px] bg-red-500 hover:shadow-red-600 hover:shadow-md p-2 rounded-md '>Submit</button>
          </div>

        </form>
        </div>
      
        </div>
    )
}


export default FormHospital
