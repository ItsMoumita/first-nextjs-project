"use client";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import { RatingStars } from '@/components/ui/RatingStars';
import { getProducts } from '@/lib/products/list';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiCategory } from 'react-icons/bi';




type products_type = {
  id: number;
   title: string;
   category: string;
   description: string;
   stock: number;
   brand: string;
   images: string[];
    price: number;
    rating: number;
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

// console.log(categories);
    return (
        <div>
          {categories.map(category => (
            <div key={category} className="">
               <h1 className='text-3xl font-bold mt-5'>{category}</h1>
               <p className='text-xl font-bold  text-gray-400'>{category.length} Products Found</p>
                  
               <div className="grid grid-cols-4 gap-4 mt-12 mb-18">
                {allproducts.filter(product => product.category === category).map(filteredProduct => (
                <Link key={filteredProduct.id} href={`/products/${filteredProduct.id}`}>
                  <div key={filteredProduct.id} className="">
                       <Card className='border-gray-300 p-4'>
                        <CardContent className='p-12 shadow-lg rounded-lg '>

                        <img className='border-gray-300' src={filteredProduct.images[0]}></img>
                        </CardContent>

                        <CardFooter className='flex flex-col items-start p-5 shadow-lg rounded-lg '>
                           <CardTitle>{filteredProduct.title}</CardTitle>
                           <CardDescription className='flex justify-between gap-2'>
                            <span>{filteredProduct.brand}</span>
                            <span>•{filteredProduct.stock} items available</span>
                           </CardDescription>
                           <CardDescription className='flex justify-between gap-2'>
                            <CardTitle className='text-black'>${filteredProduct.price}</CardTitle>
                            <RatingStars rating={filteredProduct.rating} />
                           </CardDescription>
                        </CardFooter>
                       </Card>
                  </div>
                  </Link>
               ))}
               </div>
            </div>
          ))}
        </div>
    );
};

