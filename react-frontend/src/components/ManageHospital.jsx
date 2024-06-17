import React, {useState,useEffect} from 'react'
import { hospital } from '../constants/bloodbank'
import { Link } from 'react-router-dom'
import axios from 'axios'




const ManageHospital = () => {

    const [records, setRecords] = useState([])

   useEffect( () => {
        axios.get("http://localhost:8081/hospital")
        .then(res => {
            setRecords(res.data.message)
        })
        .catch(err => console.log(err))
    },[])

    
       const deleteRecord = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8081/hospital/${id}`);
            
            console.log(response);
        } catch (error) {
            console.error('Error deleting record:', error);
         }
         location.reload()
        };




  return (
    <div id='bloodbank' className='flex justify-center items-center '>
        <table className='table-auto  border-4'>
            <thead className='bg-red-500 border-b-4 text-white'>
                <tr>
                <th>Hospital Id</th>
                <th>Hospital Name</th>
                <th>Hospital Address</th>
                <th>Hospital Contact</th>
                <th>Hospital email</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    records.map((value) => {
                        return(
                            <tr key={value.hs_id}>
                                <td>{value.hs_id}</td>
                                <td>{value.hs_name}</td>
                                <td>{value.hs_address}</td>
                                <td>{value.hs_contact}</td>
                                <td>{value.hs_email}</td>
                                <td><Link to={`/Hospital/editHospital/${value.hs_id}`}><button className='bg-red-500 p-2 w-[100px] rounded-md hover:shadow-md  hover:shadow-red-600 text-white'>Edit</button></Link></td>
                                <td><button onClick={() => deleteRecord(value.hs_id)} className='p-2 w-[100px] rounded-md border-2 border-red-500 hoverr:shadow-red-600 hover:shadow-md hover:bg-red-600 hover:text-white'>Delete</button> </td>
                            </tr>
                        )
                    })

                }
            </tbody>
        </table>

      
    </div>
  )
}

export default ManageHospital

