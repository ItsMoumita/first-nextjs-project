import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export default function RootLayout ({
  children, }: {
        children: React.ReactNode
  }
){
  return(
    <html>
      <body className="md:max-w-10/12 mx-auto">
        {children}
      </body>
    </html>
  )
}