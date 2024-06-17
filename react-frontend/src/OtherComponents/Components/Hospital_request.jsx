import React from 'react'
import Sidebar from './Sidebar'
import hospital from '../assets/hospital1.jpeg'
import { useState } from 'react'
import axios from 'axios'

function Hospital_request() {

    const [post,setPost] = useState({
        req_id:'',
        patient_name:'',
        requested_blood_type:'',
        request_quantity:'',
        bb_id:"BB_001",
        gender:'',
        requested_date:''  
      })
      
      
      const handleInput = (event) =>{
       setPost({...post, [event.target.name]: event.target.value})
      }
      
      

      const handleSubmit =  async ( event ) =>{
        console.log(post)
        event.preventDefault();
        try{
          await axios.post("http://localhost:8081/request", post)
        }
        catch(error) { console.log(error)}
    
        const form = document.getElementById("reqForm");
        form.reset();
    
        
    
      }
   
  return (
    <div className='flex gap-10'>
    
    <Sidebar name='Hospital1'/>

  
   <div className={`w-[40%] flex justify-center  items-center  ml-32`}>
        
        <img className='border p-10  shadow-md rounded-md h-[60%] w-[80%]' src={hospital} alt="error"></img>
        
        
    </div>
    <div className='flex flex-col items-start h-screen  flex-2 justify-evenly'>
        <div className='ml-20  mt-20'>
        <h1 className=' text-center  font-bold text-3xl mb-2' >BLOOD REQUEST FORM</h1>
        </div>
        
        
    
    <div className='form-container mb-20'>
        <form className='border-2 border-black rounded-md p-10' onSubmit={handleSubmit} id='reqForm'>

            <div className=" mb-4" >
            <label className='label' htmlFor='req_id'>Request ID</label>
            <input onChange={handleInput} type='text' id='req_id' name='req_id' required className="input border-2 border-black rounded-md p-2 m-2" ></input>
            </div>

            <div className=" mb-4" >
            <label className='label' >Patient Name</label>
            <input onChange={handleInput} type='text' required name="patient_name" className="input border-2 border-black rounded-md p-2 m-2" ></input>
            </div>

            <div className=" mb-4" >
            <label htmlFor='' className='label' >Hospital ID</label>
            <input onChange={handleInput} type='text' required  name="hs_id" className="input border-2 border-black rounded-md p-2 m-2" ></input>
            </div>

            <div className="mb-5">
            <label className='label'>Gender</label>
            <label className="text-l  mr-6 ml-10">
                <input onChange={handleInput} className = 'mr-4'type="radio"  name="gender" value="male"></input>
                Male
            </label>
            <label className='text-l  mr-6'>
                <input  onChange={handleInput} type="radio" className = 'mr-4' name="gender" value="Female"></input>
                Female
            </label>
            <label>
                <input  onChange={handleInput} type="radio" className = 'mr-4' name="gender" value="transgender"></input>
                Transgender
            </label>
            </div>
           
           <div className='mb-5'>
           <label className='label'>Blood Type</label>
            <select className="border m-2 p-2 border-black rounded"id='btype' onChange={handleInput} name='requested_blood_type'>
                <option value='O+ve'>O+ve</option>
                <option value='A+ve'>A+ve</option>
                <option value='B+ve'>B+ve</option>
                <option value='AB+ve'>AB+ve</option>
                <option value='O-ve'>O-ve</option>
                <option value='A-ve'>A-ve</option>
                <option value='AB-ve'>AB-ve</option>
                <option value='B-ve'>B-ve</option>
            </select>
           </div>
           <div className='mb-5'>
            <label className='label'>Requried Quantitiy</label>
            <input type='text' name='request_quantity' onChange={handleInput} required className='input p-2 m-2 border-2 border-black rounded-md'></input>
           </div>
           <div className='mb-5'>
            <label className='label'>Date</label>
            <input type='date' name="requested_date" onChange={handleInput} className='border-2 m-2 p-2 rounded-md border-black'></input>
           </div>
           <div className='flex justify-center'>
            <button className=' border-black *
             px-4 py-2 rounded-full text-white  bg-emerald-500  text-xl ' type='submit'>Submit</button>
           </div>
           

        </form>
    </div>
    </div>
    </div>
    
  )
}

export default Hospital_request