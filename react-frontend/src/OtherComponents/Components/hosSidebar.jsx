import { MdAccountCircle, MdOutlineCampaign } from 'react-icons/md';
import { FaHandHoldingMedical } from 'react-icons/fa';
import { FaHandHoldingWater } from "react-icons/fa";
import { useParams } from 'react-router-dom';

const id="bb_001"





const content = [
   

    {
        name: 'Welcome Bloodbank',
        icon:<MdAccountCircle className='w-10 h-10' />,
        path: '/bloodbankoc/request/'+id
    },
    {
        name: 'Donors',
        icon: <FaHandHoldingMedical className='w-10 h-10' />,
        path: `/bloodbankoc/donor/`
    },
    {
        name: 'Campaign',
        icon: <MdOutlineCampaign className='w-10 h-10' />,
        path: '/bloodbankoc/campaign/'+id
    },
    {
        name: 'Stock',
        icon: <FaHandHoldingWater className='w-10 h-10' />,
        path: '/bloodbankoc/stock/'+id
    },
];

const hcontent = [
    {
        name: 'Welcome hospital',
        icon:<MdAccountCircle className='w-10 h-10' />,
        path: '/hospitalrequest'
    },
    
];

export {content, hcontent}
