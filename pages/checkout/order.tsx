import React from 'react'

const numberOrden= Math.floor(Math.random() * 1000000) 

const order = () => {
  return (
    <div>
      <div>
        N° Orden {numberOrden}
      </div>
      <div>
        lista de productos
      </div>
      <div>
        <h4 className="mb-2">${numberOrden}</h4>
      </div>
    </div>
  )
}

export default order