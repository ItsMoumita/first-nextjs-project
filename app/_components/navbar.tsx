import Link from 'next/link'
import React from 'react'
// import logo from ''

export default function Navbar()  {
  return (
    <div className='bg-[#52392C]'>
        <nav className='w-10/12 mx-auto flex justify-between'>
            <div className="nav-left">
                <img className='w-[150px]' src="/assets/logo.svg" alt="" />
            </div>
            <div className="nav-right flex text-white gap-6 items-center">

                <Link href="#">All Products</Link>
                <Link href="#">Contact</Link>
                <button className='bg-[#321C10] px-4 py-2 rounded-2xl'>Sign In</button>
            </div>
        </nav>
    </div>
  )
}
