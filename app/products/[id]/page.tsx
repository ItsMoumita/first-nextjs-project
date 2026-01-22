"use client";
import { getProductById } from '@/lib/products/list'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

 type details_type = {
  images: string[];
  brand: string;
}

export default function ProductDetails() {

    
  const param = useParams();  
  const id = param.id as string
  // console.log("ID:", id);
  // console.log(typeof id);

  const [productDetails, setProductDetails] = useState<details_type>();

    useEffect(() => {
          async function fetchedDetails () {
          try{
           const res = await getProductById(id);
          //  console.log(res.data);
          setProductDetails(res.data);
        
          }catch(error){
            console.log(error)
          }
     }

     fetchedDetails();

    },[id]);
    console.log(productDetails);
  return (
    <div className='flex flex-col md:flex-row min-h-[700px] py-2'>
      <div className="max-w-1/3">
         <img src={productDetails?.images?.[0]} alt="" />
      </div>
      <div className="max-w-2/3">
           <h1>{productDetails?.brand}</h1>
      </div>
    </div>
  )
}
