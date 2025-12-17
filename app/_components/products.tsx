"use client";
import { getProducts } from '@/lib/products/list';
import { useEffect, useState } from 'react';
import { BiCategory } from 'react-icons/bi';




type products_type = {
  id: number;
   title: string;
   category: string;
   description: string;
}




export default function Products ()  {
    const [allproducts, setAllproducts] = useState<products_type[]>([]);

    useEffect(() => {
          async function fetchedProduct () {
          try{
           const res = await getProducts();
          //  console.log(res.data);
           setAllproducts(res.data.products);
          }catch(error){
            console.log(error)
          }
     }

     fetchedProduct();

    },[]);

//  console.log(allproducts);

   const categories = [...new Set(allproducts?.map(product => product.category))]; 

console.log(categories);
    return (
        <div>
          {categories.map(category => (
            <div key={category} className="">
               
            </div>
          ))}
        </div>
    );
};

