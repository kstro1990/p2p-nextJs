import React from 'react'
import Navbar from '../Navbar/Navbar'


const Layaout : React.FC = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
        <footer>la pata de de la app</footer>
    </>
  )
}

export default Layaout