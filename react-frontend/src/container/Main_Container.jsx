import React from 'react'
import Aside_Container from './Aside_Container' 
import Section_Container from './Section_Container'

const Main_Container = () => {
  return (
    <div className='flex'>
      <Aside_Container />
      <Section_Container />
    </div>
  )
}


export default Main_Container
