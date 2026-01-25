"use client";
import { getProductById } from '@/lib/products/list'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

 type details_type = {
  images: string[];
  brand: string;
  title: string;
  availabilityStatus: string;
  description: string;
  price: number;
  discountPercentage: number;
  stock: number;
}

export default function ProductDetails() {

    
  const param = useParams();  
  const id = param.id as string;
  const idNumber = parseInt(id, 10);
  // console.log("ID:", id);
  console.log(typeof id, typeof idNumber);

  const [productDetails, setProductDetails] = useState<details_type>();

    useEffect(() => {
          async function fetchedDetails () {
          try{
           const res = await getProductById(idNumber);
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
      <div className="md:max-w-2/5 ">
         <img className='w-ful h-[400px] border-2 border-gray-300 rounded-lg p-4 m-4' src={productDetails?.images?.[0]} alt="" />
      </div>
      <div className="m-4 py-5 px-5 space-y-4 items-center">
           <h1 className='text-gray-500 text-xl font-semibold'>{productDetails?.brand}</h1>
           <div className="flex items-center space-x-2 md:space-x-4">
            <h1 className='text-2xl lg:text-4xl font-semibold'>{productDetails?.title}</h1>
            <span className= 'text-sm px-2 text-green-400 bg-green-100 border border-green-400 rounded font-semibold'>{productDetails?.availabilityStatus}</span>
           </div>
           <p className='lg:max-w-[50%] font-medium'>{productDetails?.description}</p>
           <div className="flex gap-5 items-center">
            <h1 className='text-3xl md:text-4xl font-bold'>${productDetails?.price}</h1>
            <p className= ' text-white bg-red-700/70 font-semibold px-4 py-2 h-10 rounded-3xl'>{productDetails?.discountPercentage}% Off</p>
           </div>
           <p className='text-lg font-medium'>Quantity <span className='text-gray-400'>({productDetails?.stock} items available)</span></p>
         
      </div>
    </div>
  )
}
