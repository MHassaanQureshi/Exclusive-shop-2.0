"use client";
import Image from "next/image";

interface Pram {
  name: string;
  img: string;
  
}

export default function Catcard({ name, img }: Pram) {
  return (
    <div className="w-full snap-center flex-shrink-0 md:w-[50%] lg:w-[30%]">
      <div className="flex flex-col bg-gray-100 w-[70%] mx-auto rounded-lg shadow-md p-2   hover:bg-[#DB4444]">

    <div className="flex flex-col items-center justify-center mt-8 ">
      <Image src={img} alt={name} width={50} height={100} />
      <p>{name}</p>
    </div>


  </div>


       
      </div>
     
    
  );
}
