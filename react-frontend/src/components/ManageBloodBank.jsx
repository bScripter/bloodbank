import React,{ useEffect, useState} from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import axios from 'axios'






const ManageBloodBank = () => {
    
    const [records, setRecords] = useState([])

   useEffect( () => {
        axios.get("http://localhost:8081/bloodBank")
        .then(res => {
            console.log(res.data.message)
            setRecords(res.data.message)
            console.log(records)
        })
        .catch(err => console.log(err))
    },[])

    
       const deleteRecord = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8081/bloodBank/${id}`);
            
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
                <th>BloodBank Id</th>
                <th>BloodBank Name</th>
                <th>BloodBank Address</th>
                <th>BloodBank Contact</th>
                <th>BloodBank Email</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    records.map((value) => {
                        return(
                            <tr key={value.bb_id}>
                                <td>{value.bb_id}</td>
                                <td>{value.bb_name}</td>
                                <td>{value.bb_address}</td>
                                <td>{value.bb_contact}</td>
                                <td>{value.bb_email}</td>
                                <td><Link to={`/BloodBank/editBloodBank/${value.bb_id}`}><button className='bg-red-500 p-2 w-[100px] rounded-md hover:shadow-md  hover:shadow-red-600 text-white'>Edit</button> </Link></td>
                                <td> <button  onClick={() => deleteRecord(value.bb_id) } className='p-2 w-[100px] rounded-md border-2 border-red-500 hover:shadow-red-600 hover:shadow-md hover:bg-red-600 hover:text-white'>Delete</button> </td>
                            </tr>
                        )
                    })

                }
            </tbody>
        </table>

      
    </div>
  )
}

export default ManageBloodBank

