import React from 'react'
import { useRouter } from 'next/router'

const productItem = () => {

  const router = useRouter()
  const { productId } = router.query

  return (
    <div>Esta es el siguiente product: {productId} </div>
  )
}

export default productItem