import React,{useState} from 'react'
import { IoClose } from "react-icons/io5";
import axios from 'axios';
import { useParams } from 'react-router-dom';
function DModal({open,close}) {

    const {id} = useParams
    const [post,setPost] = useState({
        donor_id:'',
        donor_name:'',
        donor_blood_type:'',
        campaign_id:'',
        quantity:'',
        last_donated:'',
        contact_detail:'',
        address:'',
        gender:"",
        age:''
  
    
    })
    
    
    const handleInput = (event) =>{
     setPost({...post, [event.target.name]: event.target.value})
    }
    
    const handleSubmit =  async ( event ) =>{
      event.preventDefault();
      try{
        await axios.post("http://localhost:8081/donor", post)
      }
      catch(error) { console.log(error)}
  
      const form = document.getElementById("donorForm");
      form.reset();
  
      
  
    }
  


    if(!open) return null
  return (
    
    <div className='ml-10 mb-20 border absolute top-0 left-0 min-h-screen w-[108%] flex justify-center items-center flex-col  backdrop-blur-md p-10'>
        <div className='border border-black p-20 rounded-2xl relative shadow-md'>

        
        <IoClose  onClick={()=> close(false)} className=' absolute top-1 left-0 cursor-pointer ml-3 text-3xl self-start' />
        <form id='donorForm' onSubmit={handleSubmit}>
            <div className=" mb-4" >
                <label className='label'>Donor id</label>
                <input name='donor_id'  onChange={handleInput}  type='text' required className="input m-4 p-2 border-2 border-black" ></input>
            </div>
            <div className=" mb-4" >
            <label className='label'>Donor Name</label>
            <input  type='text' name='donor_name'   onChange={handleInput}  required className="input m-4 p-2 border-2 border-black" ></input>
            </div>
            <div className="mb-5">
            <label className='label'>Gender</label>
            <label className="text-l  mr-6 ml-10">
                <input  onChange={handleInput}  className = 'mr-4' type="radio" name="gender" value="male"></input>
                Male
            </label>
            <label className='text-l  mr-6'>
                <input  onChange={handleInput}  type="radio" className = 'mr-4' name="gender" value="Female"></input>
                Female
            </label>
            <label>
                <input  onChange={handleInput} type="radio" className = 'mr-4' name="gender" value="transgender"></input>
                Other
            </label>
            </div>
            <div className='mb-5'>
            <label className='label '>Age</label>
            <input  onChange={handleInput} type='text' name='age' required className='input m-4 p-2 border-2 border-black'></input>
           </div>
           
           <div className='mb-5'>
           <label className='label'>Blood Type</label>
            <select className="border border-black rounded" id='btype'  onChange={handleInput}  name='donor_blood_type'>
                <option value='O+ve'>O+ve</option>
                <option value='A+ve'>A+ve</option>
                <option value='B+ve'>B+ve</option>
                <option value='AB+ve'>AB+ve</option>
                <option value='O-ve'>O-ve</option>
                <option value='A-ve'>A-ve</option>
                <option value='AB-ve'>AB-ve</option>
                <option value='B-ve'>B-ve</option>
            </select>
           </div>
           <div className='mb-5'>
            <label className='label'>Quantitiy</label>
            <input type='text' name='quantity' required className='input input m-4 p-2 border-2 border-black   ' onChange={handleInput} ></input>
           </div>

           <div className='mb-5'>
            <label className='label '>Campaign ID</label>
            <input type='text' name='campaign_id' required className='input m-4 p-2 border-2 border-black'  onChange={handleInput} ></input>
           </div>

         
           <div className='mb-5'>
            <label className='label'>Last donated</label>
            <input type='date' className='border border-black' name="last_donated" onChange={handleInput} ></input>
           </div>

           <div className='mb-5'>
            <label className='label '>Contact Detail</label>
            <input type='text' name='contact_detail' required className='input m-4 p-2 border-2 border-black' onChange={handleInput} ></input>
           </div>

           <div className='mb-5'>
            <label className='label '>Address</label>
            <input type='text' name='address' required className='input m-4 p-2 border-2 border-black' onChange={handleInput} ></input>
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

export default DModal