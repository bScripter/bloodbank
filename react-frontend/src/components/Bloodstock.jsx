import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Bloodtile from './Bloodtile'

const Bloodstock = () => {

  const [records, setRecords] = useState([])

   useEffect( () => {
        axios.get("http://localhost:8081/bloodquantity")
        .then(res => {
            setRecords(res.data.message)
        })
        .catch(err => console.log(err))
    },[])

    console.log(records);


  return (
    <div>
      <div className='ml-2  pb-[50px] pr-8'>
          <h2 className='font-md text-2xl mx-8  '>Blood Stock</h2>
          <div className='grid grid-cols-4'>
            {
              records.map((value) => <Bloodtile key={value.blood_type} bloodName={value.blood_type} bloodQuantity={value.blood_quantity}  />)
            }
          </div>
      </div>
    </div>
  )
}

export default Bloodstock
