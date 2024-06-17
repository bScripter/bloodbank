import React,{useState, useEffect} from 'react'
import axios from 'axios'
import TableData from './TableData'

const Campaign = () => {

  const [records, setRecords] = useState([])

  useEffect( () => {
       axios.get("http://localhost:8081/campaigns")
       .then(res => {
           setRecords(res.data.message)
           
       })
       .catch(err => console.log(err))
   },[])

  return (
    <div>
      <div className='ml-2 mt-4 pb-[40px] pr-8'>
          <h2 className='font-md text-2xl mx-8  '>Blood Donation Campaigns</h2>
          <table className='table-auto m-8 border-4'>
                <thead>
                    <tr className=' bg-red-500 border-collapse text-white'>
                        <th>Campaign Names</th>
                        <th>Date</th>
                        <th>Campaign State</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((value) => <TableData key={value.campaign_name} campaignName={value.campaign_name} 
                        campaignDate={value.campaign_date.substr(0,10)} campaignStatus={value.campaign_status}  />)
                    }
                </tbody>
            </table>
      </div>
    </div>
  )
}

export default Campaign
