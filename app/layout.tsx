import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "@/components/ui/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      
      <body className="md:max-w-10/12 mx-auto bg-white">
      <Navbar></Navbar>
      {children}
       <Footer></Footer>
      </body>
     
    </html>
  );
}
