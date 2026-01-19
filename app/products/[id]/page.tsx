import { getProductById } from '@/lib/products/list'
import React from 'react'

type Props = {
  params: { id: string }
}

export default async function ProductDetails({ params }: Props) {
  const id = Number(params.id);  
  console.log("ID:", id);
  return (
    <div>ProductDetails page</div>
  )
}
