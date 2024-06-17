import React, { useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"


const EditBloodBank = () => {

  const{id} = useParams();

  const [records, setRecords] = useState({
    bb_id:id,
    bb_name:'',
    bb_address:'',
    bb_contact:'',
    bb_email:''  
  })

  useEffect( () => {
    axios.get("http://localhost:8081/bloodBank/"+id)
    .then(res => {
        setRecords({
          ...records, bb_name: res.data.message.bb_name, bb_address: res.data.message.bb_address, bb_contact: res.data.message.bb_contact,
          bb_email: res.data.message.bb_email
        })
      
    })
    .catch(err => console.log(err))
  },[])


  const navigate = useNavigate()

  const handleSubmit = ( event ) => {
      event.preventDefault();
      axios.put("http://localhost:8081/bloodBank", records)
      .then(res => {
        navigate("/BloodBank")
      })
      .catch(err => console.log(err))

  }
  return (
    <div>
      <div className='flex item-center justify-between'>
        <h1 className='text-4xl font-semibold m-8'>Edit Details</h1>
        <Link to="/BloodBank"><button className='text-xl m-8 font-md bg-red-500 text-white  p-2 w-[75px] rounded-md'>Back</button></Link>
      </div>
      <div className='flex justify-center'>
        <form id='update'  className='border-2 border-red-500 w-[500px] rounded-md  px-3 py-5'>
          
         
          <div className='flex flex-col items-center gap-10'>
          <div className='flex items-center'>          
            <label htmlFor="bloodBankID" className='text-red-500 text-left font-medium mr-3 text-xl'>Registered ID</label>
            <input type="text" name="bb_id" value={records.bb_id} disabled id='bloodBankID'   placeholder='Enter the Registered ID' className='border-2 p-2 rounded-md text-xl' />
          </div>
          <div className='flex items-center'>          
            <label htmlFor="bloodBankName" className='text-red-500 text-left font-medium mr-3 text-xl'>Registered Name</label>
            <input type="text" name="bb_name"  value={records.bb_name} disabled id='bloodBankName'   placeholder='Enter the name' className='border-2 p-2 rounded-md text-xl' />
          </div>
          <div className='flex items-center'>
            <label htmlFor="bloodBankAddress" className='text-red-500 font-medium mr-3 text-xl'>Address</label>
            <input type="text" name="bb_addres" id='bloodBankAddress' onChange={ e => setRecords({...records,bb_address: e.target.value} )} placeholder='Enter the address' className='border-2 p-2 rounded-md text-xl ' />
          </div>
          <div className='flex items-center'>
            <label htmlFor="bloodBankContactDetails" className='text-red-500 font-medium text-xl mr-3'>Contact Details</label>
            <input type="text" name="bb_contact" id='bloodBankContactDetails' onChange={ e => setRecords({...records,bb_contact: e.target.value} )} placeholder='Enter the contact details' className='border-2 p-2 rounded-md text-xl ' />
          </div>
          <div className='flex items-center'>
            <label htmlFor="bloodBankEmail" className='text-red-500 font-medium  mr-3 text-xl'>Email Address</label>
            <input type="text" name="bb_email" id='bloodBankEmail' onChange={ e => setRecords({...records, bb_email: e.target.value} )} placeholder='Enter the Email address' className='border-2 p-2 rounded-md text-xl ' />
          </div>
            <div className='flex items-center jusitfy-center gap-3'>
                <button type="submit"   onClick={handleSubmit} className='text-white w-[100px] bg-red-500 hover:shadow-red-600 hover:shadow-md p-2 rounded-md '>Update</button>
                <button type="submit"  className='text-white w-[100px] bg-red-500 hover:shadow-red-600 hover:shadow-md p-2 rounded-md '>Cancel</button>
            </div>
          </div>

          

        </form>
        </div>
      
    </div>
  )
}

export default EditBloodBank
