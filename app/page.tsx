import React from "react";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import Products from "./_components/products";

export default function page() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Products></Products>
    </>
  );
}
