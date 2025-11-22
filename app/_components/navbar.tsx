"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
// import logo from ''

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" ">
      <div className=" bg-[#52392C] px-6 flex justify-between items-center py-2">
        <div className="flex gap-4">
          <Image
            className="w-[100px]"
            width={100}
            height={100}
            src="/assets/logo.svg"
            alt=""
          />
          <input
            type="text"
            placeholder="Search for Products, Brands, Category..."
            className=" bg-[#79655B] px-2 py-1 text-white rounded-lg"
          />
        </div>

        {/* ---------------desktop nav-------------- */}
        <div className="hidden md:flex justify-between text-white gap-6 items-center py-2">
          <Link href="#">All Products</Link>
          <Link href="#">Contact</Link>
          <button className="bg-[#321C10] px-4 py-2 rounded-4xl">
            Sign in
          </button>
        </div>

        {/* -----------------Mobile Toggle Button------------------ */}
        <div className="md:hidden ">
          <button className="text-white" onClick={toggleMenu}>
            {isOpen ? <RxCross2 size={28} /> : <FiAlignJustify size={28} />}
          </button>
        </div>
      </div>
      {/* ---------------------Mobile menu------------------ */}
      {isOpen && (
        <div className="md:hidden shadow-md px-6 py-4 space-y-2 left-0 top-5 flex flex-col bg-white text-center ">
          <Link className="hover:bg-gray-400 py-2 rounded-2xl" href="#">
            All Products
          </Link>
          <Link className="hover:bg-gray-400 py-2 rounded-2xl" href="#">
            Contact
          </Link>
          <button className="bg-[#321C10] px-4 py-2 rounded-4xl text-white">
            Sign in
          </button>
        </div>
      )}
    </nav>
  );
}
