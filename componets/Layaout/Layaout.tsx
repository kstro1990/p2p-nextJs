import React from 'react'
import Navbar from '../Navbar/Navbar'



const Layaout : React.FC = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
        
    </>
  )
}

export default Layaout