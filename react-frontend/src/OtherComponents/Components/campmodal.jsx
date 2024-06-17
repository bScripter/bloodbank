import React,{useState} from 'react'
import { IoClose } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import axios from 'axios';
function campModal({open,close}) {


  const {id} = useParams
  const [post,setPost] = useState({
    campaign_id:'',
    campaign_name:'',
    bb_id:id,
    campaign_date:'',
    status:'upcoming',
    loaction:'',
    contact:'',

  
  })
  
  
  const handleInput = (event) =>{
   setPost({...post, [event.target.id]: event.target.value})
  }
  
  const handleSubmit =  async ( event ) =>{
    event.preventDefault();
    try{
      await axios.post("http://localhost:8081/campaigns", post)
    }
    catch(error) { console.log(error)}

    const form = document.getElementById("campForm");
    form.reset();

    

  }




    if(!open) return null
  return (
    
    <div className='ml-10 mb-20 border absolute top-0 left-0 min-h-screen w-[95%] flex justify-center items-center flex-col  backdrop-blur-md p-10'>
      <div className='border  rounded-2xl border-black p-20  relative shadow-md'>

        <IoClose onClick={()=> close(false)} className=' absolute top-1 left-0 cursor-pointer ml-3 text-3xl self-start' />
        <form onSubmit={handleSubmit} id='campForm'>
            <div className=" mb-4" >
            <label className='label'>Campaign ID</label>
            <input onChange={handleInput} type='text' id='campaign_id' required className="input p-2 m-2 border-2 rounded-md border-black" ></input>
            </div>

            <div className=" mb-4" >
            <label className='label'>Campaign Name</label>
            <input onChange={handleInput} id="campaign_name" type='text' required className="input p-2 m-2 rounded-md border-2 border-black" ></input>
            </div>
            
          
           <div className='mb-5'>
            <label className='label'>Location</label>
            <input onChange={handleInput} id="location" type='text' required className='input rounded-md p-2 m-2 border-2 border-black'></input>
           </div>

           

           <div className='mb-5'>
            <label className='label'>Date</label>
            <input type='date' onChange={handleInput} id="campaign_date" className='rounded-md p-2 m-2 border-2 border-black'></input>
           </div>
           
           <div className=" mb-4" >
            <label className='label'>Contact NO.</label>
            <input onChange={handleInput} type='text' id="contact" required className="input p-2 m-2 border-black border-2 rounded-md" ></input>
            </div>

           <div>
            <button className=' border-black *
             px-4 py-2 rounded-full text-white  bg-emerald-500  text-xl  'type='submit'>Submit</button>
           </div>
           

        </form>
        </div>
    </div>

  )
}

export default campModal