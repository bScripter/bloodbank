import {React,useState,useEffect} from 'react'
import { bloodRequest } from '../Data/bloodRequest'
import {columns} from '../Data/requestColumns'
import { useMemo } from 'react'
import { useTable,useGlobalFilter } from 'react-table'
import Searchbar from './Searchbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Blood_accept_form () {
    
    const {id} = useParams();
    const [records, setRecords] = useState([])

    useEffect( () => {
      axios.get("http://localhost:8081/request/"+id)
      .then(res => {
          setRecords(res.data.message)
        
      })
      .catch(err => console.log(err))
    },[])

    console.log(records)
    

    const col = useMemo(()=> columns,[])
    const Data =  useMemo(()=> records,[records] )   
    
    const button =document.getElementById("smbt")
    console.log(button)

    const handleButtonClick = (e) => {
        e.target.innerHTML = "Approved"
        
       
      }

    const Tableinstance = useTable({
        columns:col,
        data:Data
    },useGlobalFilter)

    const {getTableProps,getTableBodyProps,prepareRow,headerGroups,rows,
        state,setGlobalFilter
    } = Tableinstance;

    const {globalFilter} = state;
    
  return (
   
    <div className={`flex flex-col w-[90%] relative `}>
        <div>
            <h1 className=' ml-24 mt-8  text-4xl font-bold'>BLOOD REQUEST</h1>
        </div>
      <div className='flex w-[80%] items-center  mt-5 mb-5'>  
    <Searchbar filter={globalFilter} setfilter={setGlobalFilter} />
    
    
    </div>
    
        
    
    <div className='ml-20 container mx-auto p-4'>
        
        <table {...getTableProps()} className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps() } className="text-left">
                            {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()} className="px-4 py-2 border-b border-gray-300 text-gray-700 font-semibold">{column.render('Header')}</th>
                            ))}
                    
                </tr>
                    ))
                }
                
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row =>{
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()} className="hover:bg-gray-100">
                                {
                                    row.cells.map((cell) => {
                                        return  <td {...cell.getCellProps()} className="px-4 py-2 border-b border-gray-300 text-gray-900">
                                            {cell.column.id === 'button' ? (
                                                <button id="smbt" onClick={e => handleButtonClick(e)} className=' border-none shadow-md text-white font-bold px-4 py-1 ml-3 bg-green-500  hover:bg-green-400 rounded-full  '>Approve</button>)
                                                                        : (
                                                                    cell.render('Cell')
                    )}
                                                </td>
                                    })
                                }
                                
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default Blood_accept_form