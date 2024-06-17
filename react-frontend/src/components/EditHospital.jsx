import React, { useState,useEffect } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"




const EditHospital = () => {
  const{id} = useParams();

  const [records, setRecords] = useState({
    hs_id:id,
    hs_name:'',
    hs_address:'',
    hs_contact:'',
    hs_email:''  
  })

  useEffect( () => {
    axios.get("http://localhost:8081/hospital/"+id)
    .then(res => {
        setRecords({
          ...records, hs_name: res.data.message.hs_name, hs_address: res.data.message.hs_address, hs_contact: res.data.message.hs_contact,
          hs_email: res.data.message.hs_email
        })
      
    })
    .catch(err => console.log(err))
  },[])

  const navigate = useNavigate()

  const handleSubmit = ( event ) => {
      event.preventDefault();
      axios.put("http://localhost:8081/hospital", records)
      .then(res => {
        navigate("/Hospital")
      })
      .catch(err => console.log(err))

  }


  return (
    <div>
      <div className='flex item-center justify-between'>
        <h1 className='text-4xl font-semibold m-8'>Edit Details</h1>
        <Link to="/Hospital"><button className='text-xl m-8 font-md bg-red-500 text-white  p-2 w-[75px] rounded-md'>Back</button></Link>
      </div>
      <div className='flex justify-center'>
        <form id='updateForm' onSubmit={handleSubmit} className='border-2 border-red-500 w-[500px] rounded-md  px-3 py-5'>
          
         
          <div className='flex flex-col items-center gap-10'>
          <div className='flex items-center'>          
            <label htmlFor="hospitalId" className='text-red-500 text-left font-medium mr-3 text-xl'>Registered ID</label>
            <input type="text" name="hs_id"  id='hospitalId' value={records.hs_id} disabled  placeholder='Enter the Registered ID' className='border-2 p-2 rounded-md text-xl' />
          </div>
          <div className='flex items-center'>          
            <label htmlFor="hospitalName" className='text-red-500 text-left font-medium mr-3 text-xl'>Registered Name</label>
            <input type="text" name="hs_name"  id='hospitalName'  value={records.hs_name} disabled placeholder='Enter the name' className='border-2 p-2 rounded-md text-xl' />
          </div>
          <div className='flex items-center'>
            <label htmlFor="hospitalAddress" className='text-red-500 font-medium mr-3 text-xl'>Address</label>
            <input type="text" name="hs_address" id='hospitalAddress' onChange={e => setRecords({...records,hs_address: e.target.value})} placeholder='Enter the address' className='border-2 p-2 rounded-md text-xl ' />
          </div>
          <div className='flex items-center'>
            <label htmlFor="hospitalContactDetails" className='text-red-500 font-medium text-xl mr-3'>Contact Details</label>
            <input type="text" name="hs_contact" id='hospitalContactDetails' onChange={e => setRecords({...records,hs_contact: e.target.value})} placeholder='Enter the contact details' className='border-2 p-2 rounded-md text-xl ' />
          </div>
          <div className='flex items-center'>
            <label htmlFor="hospitalEmail" className='text-red-500 font-medium  mr-3 text-xl'>Email Address</label>
            <input type="text" name="hs_email" id='hospitalEmail' onChange={e => setRecords({...records,hs_email: e.target.value})} placeholder='Enter the Email address' className='border-2 p-2 rounded-md text-xl ' />
          </div>

            <div className='flex items-center jusitfy-center gap-3'>
                <button type="submit" className='text-white w-[100px] bg-red-500 hover:shadow-red-600 hover:shadow-md p-2 rounded-md '>Update</button>
                <button type="submit" className='text-white w-[100px] bg-red-500 hover:shadow-red-600 hover:shadow-md p-2 rounded-md '>Cancel</button>
            </div>
          </div>

          

        </form>
        </div>
      
    </div>
  )
}

export default EditHospital
