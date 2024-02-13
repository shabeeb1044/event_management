import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({ subsets: ["latin"],weight:['400','600','700'],variable:"--font-poppins" });

export const metadata = {
  title: "Evently",
  description: "Evently is a platform event management",
  icons:{
    icon:'/assets/images/logo.svg'
  }
};


export default function RootLayout({ children ,}: {children:ReactNode}) {
  return (
    <ClerkProvider>
       <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
    </ClerkProvider>
   
  );
}
