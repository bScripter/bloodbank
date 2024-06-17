import React from 'react'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Login from './container/Login'
import Main_Container from './container/Main_Container'
import BloodBankSection from './container/BloodBankSection'
import HospitalSection from './components/HospitalSection'
import FormDialog from './components/FormDialog'
import FormHospital from './components/FormHospital'
import EditBloodBank from './components/EditBloodBank'
import EditHospital from './components/EditHospital'
import Home from './homepage/Home'
import Hlogin from './homepage/components/donor/Loginform'
import Blogin from './homepage/components/bloodbanklogin/bloodbank'
import Hospital_request from './OtherComponents/Components/Hospital_request'
import BloodbankOC from './OtherComponents/Components/BloodbankOC'
import Blood_accept_form from './OtherComponents/Components/Blood_accept_form'
import Donorlist from './OtherComponents/Components/Donorlist'
import Campaign  from './OtherComponents/Components/Campaign'
import StockCard from './OtherComponents/Components/StockCard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route  index element={<Home />}  />
        <Route path='/hlogin' element={<Hlogin />} />
        <Route path='/blogin' element={<Blogin />} />
        <Route path='/hospitalrequest' element={<Hospital_request />} /> 

        <Route exact path='/bloodbankoc' element={<BloodbankOC/>} >

        <Route exact path='/bloodbankoc/request/:id' element={<Blood_accept_form/>} />
        <Route exact path='/bloodbankoc/donor' element={<Donorlist />} />
        <Route exact path='/bloodbankoc/campaign/:id' element={<Campaign />} />
        <Route exact path='/bloodbankoc/stock/:id' element={<StockCard />} />

        </Route>

        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/Dashboard' element={<Main_Container />} />
        <Route exact path='/BloodBank' element={<BloodBankSection /> } />
        <Route exact path='/Hospital' element={<HospitalSection/>} />
        <Route exact path='/BloodBank/addBloodBank' element={<FormDialog />} />
        <Route exact path='/Hospital/addHospital' element={<FormHospital />} />
        <Route  path='/BloodBank/editBloodBank/:id' element={<EditBloodBank/> } />
        <Route  path='/BloodBank/delete/:id' element={<BloodBankSection /> } />
        <Route  path='/Hospital/editHospital/:id' element={<EditHospital/> } />
        <Route path='/Hospital/delete/:id' element={<HospitalSection /> } />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
