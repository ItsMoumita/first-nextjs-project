import React from "react";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import Products from "./_components/products";
import Footer from "@/components/ui/Footer";

export default function page() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Products></Products>
      <Footer></Footer>
    </>
  );
}
