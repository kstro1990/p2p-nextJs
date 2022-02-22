import React from 'react'
import Navbar from '../componets/Navbar/Navbar'
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const index = () => {
  return (
    <>
      <h1>Hola Mundo </h1>
      
      <Card title="Producto" subTitle="cualquier cosa" className='flex'>
        <div className='field'>
          Hola mi nombre es Frailejón  
        </div>
        <div className='field'>
          <Button label="Save" />
        </div>
      </Card>
      
    </>
  )
}

export default index