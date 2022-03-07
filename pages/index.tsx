import React, { useEffect } from 'react'
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';


const index = () => {


  return (
    <>
      <h1>Lista de productos</h1>
      
      <div className='grid'>
        <div className='col'>
          <Card title="Producto" subTitle="de nabera ordenad" className='card'>
            <div className='field'>
              <div>
                <img alt='hola' src='https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'></img>
              </div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum mollitia, nam dolorem delectus quas libero earum voluptates quos rem iusto doloribus molestiae id possimus dignissimos? Soluta similique officia debitis aliquam 
            </div>
            <div>
              <Button label="Agregar" className="p-button-success" />
            </div>
          </Card>
        </div>

        <div className='col'>
          <Card title="Producto" subTitle="de nabera ordenad" className='card'>
            <div className='field'>
            <div>
              <img alt='hola' src='https://images.unsplash.com/photo-1583541277535-867505581d07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'></img>
            </div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quasi at itaque optio earum odit veniam tempore incidunt numquam perferendis deserunt delectus adipisci sit iure, cumque similique illum voluptates. Doloremque. 
            </div>
            <div>
              <Button label="Agregar" className="p-button-success" />
            </div>
          </Card>
        </div>

        <div className='col'>
          <Card title="Producto" subTitle="de nabera ordenad" className='card'>
            <div className='field'>
            <div>
              <img alt='hola' src='https://images.unsplash.com/photo-1562967916-eb82221dfb92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'></img>
            </div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda asperiores esse deleniti. Culpa recusandae est ipsum minima commodi dolore illo distinctio fuga, alias ducimus, dolorem ipsam repudiandae maxime ut tempore.
            </div>
            <div>
              <Button label="Agregar" className="p-button-success" />
            </div>
          </Card>
        </div>


      </div>

      
    </>
  )
}

export default index