import React, {useState,useEffect} from 'react'
import axios from 'axios'
import blood  from '../assets/blood.jpeg'

import './card1.css'
import { useParams } from 'react-router-dom'

function StockCard() {
    
  const {id} = useParams();

  const [records ,  setRecords] = useState([])

  useEffect( () => {
       axios.get("http://localhost:8081/bloodquantity/"+id)

       .then(res => {
           setRecords(res.data.message)
       })
       .catch(err => console.log(err))
   },[])

   console.log(records)
  return (
    <div className='flex flex-col'>
    <div>
        <h1 className=' ml-24 mt-8 text-4xl font-bold mb-10'>BLOOD STOCK</h1>
    </div>
   
    <div className='outer'>
        {records.map((item)=>{
            return(
            <div className='card'>
              <img src={blood} alt="image" />  
            <h2 className='title'>{item.blood_type}</h2>
            <p className='text'>{item.blood_quantity} units</p>
            </div>
            )
        })}
    </div>

    </div>
  )
}

export default StockCard