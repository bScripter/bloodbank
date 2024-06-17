import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Button = () => {
    

    const id = useParams(); 
   
    console.log(id);

    const deleteRecord = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.delete(`http://localhost:8081/bloodBank/${id}`);
        
        console.log(response);
    } catch (error) {
        console.error('Error deleting record:', error);
     }
    };



  return (
    <button  onClick={deleteRecord} className='p-2 w-[100px] rounded-md border-2 border-red-500 hover:shadow-red-600 hover:shadow-md hover:bg-red-600 hover:text-white'>
        Delete
    </button>
  )
}

export default Button

