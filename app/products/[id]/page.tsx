"use client";
import { getProductById } from '@/lib/products/list'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'



export default function ProductDetails() {

    
  const param = useParams();  
  const id = param.id as string
  console.log("ID:", id);
  console.log(typeof id);

  const [productDetails, setProductDetails] = useState();

    useEffect(() => {
          async function fetchedDetails () {
          try{
           const res = await getProductById(id);
           console.log(res.data);
          setProductDetails(res.data);
        
          }catch(error){
            console.log(error)
          }
     }

     fetchedDetails();

    },[id]);
    console.log(productDetails);
  return (
    <div>ProductDetails page {id}</div>
  )
}
