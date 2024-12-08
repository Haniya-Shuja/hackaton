import Footer from "@/components/footer";
import { Header } from "@/components/Header";
import Hero, { Hero1, CardDetails } from "@/components/hero";
import { Hero3 } from "@/components/hero";


import Image from "next/image";

export default function Home() {
  return (
   <div>
  
    <Header/>
    <Hero/>
   
    <Hero1/>
    <div className='font-bold text-4xl p-10 ml-96 '> <h1>Our Products</h1></div>
    <CardDetails/>
    <Hero3/>
    
 
    
    <br />
    <Footer/>
   </div>
  );
}
