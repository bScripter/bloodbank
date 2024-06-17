import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Requests = () => {
 
  const [records, setRecords] = useState([])

  useEffect( () => {
       axios.get("http://localhost:8081/request")
       .then(res => {
           setRecords(res.data.message)
       })
       .catch(err => console.log(err))
   },[])


  return (

    <div>
        <div className='ml-2 pb-[50px] pr-8 mt-4'>
          <h2 className='font-md text-2xl mx-8  '>Blood Transfusion Request</h2>
          <div >
          <table className='table-auto m-8 border-4'>
                <thead>
                    <tr className=' bg-red-500 text-white'>
                        <th>Request ID</th>
                        <th>Requested Blood type</th>
                        <th>Requested Amount</th>
                        <th>Hospital ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      records.map((value) => {
                        return(
                        <tr className='' key={value.req_id} >
                          <td>{value.req_id}</td>
                          <td>{value.requested_blood_type}</td>
                          <td>{value.request_quantity}</td>
                          <td>{value.hs_id}</td>
                       
                        </tr>)
                      })
                    }

                </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default Requests
