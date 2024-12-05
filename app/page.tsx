"use Client";
import Image from "next/image";
import Hero from "./components/Hero-section/Hero";
import Sale from "./components/Sale/Sale";
import Browsecat from "./components/Browsecat/Browsecat";


export default function Home() {
  return (
   
    <>
    <div>
      <Hero />
    </div>
    <div className="flex justify-center items-center flex-col">
      <Sale />
      <button className="w-[60%] px-2 py-1  flex items-center justify-center bg-[#DB4444] text-white border-none">View All products</button>
    </div>
    
    <div className="flex mt-20 justify-center items-center flex-col gap-5 ">
      <Browsecat />
      <button className="w-[60%] px-2 py-1  flex items-center justify-center bg-[#DB4444] text-white border-none">View All products</button>
    </div>

    </>
  );
}
