"use client";


import Image from "next/image";
import React, { useRef } from "react";
import Catcard from "../Catcard/Catcard";

export default function Browsecat() {
  const scrollRef = useRef<HTMLDivElement>(null);

  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

 

  return (
    <>
      <div className="w-full items-center flex justify-center flex-col gap-4">
      <div className="w-[90%] flex flex-col gap-4 md:flex-row md:gap-20 md:justify-between">
        <span className="flex  flex-col gap-2 md:flex-col">
           <span className="flex gap-2">
           <span className="bg-[#DB4444] h-[2rem] text-[#DB4444] w-[1rem]">...</span>
           <h1 className="text-[#DB4444] font-bold">Categories</h1>
           </span>
            <span className="pb-4 text-2xl font-bold">Browse By Categorry</span>
          </span>
          <span className="flex gap-3 items-center justify-center mt-4">
              <Image
                src="/images/left-arrow.png"
                alt="unable to load"
                width={30}
                height={30}
                className="bg-gray-300 rounded-2xl cursor-pointer"
                onClick={scrollLeft}
              />
              <Image
                src="/images/right-arrow.png"
                alt="unable to load"
                width={30}
                height={30}
                className="bg-gray-300 rounded-2xl cursor-pointer"
                onClick={scrollRight}
              />
            </span>
        </div>
       
        <div
          ref={scrollRef}
          className="w-[90%] mx-auto p-2 flex h-auto mt-8 items-stretch 
           overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hidden"

        >
          <Catcard name="Phones" img="/images/cellphonecat.png"/>
          <Catcard name="Computers" img="/images/computercat.png"/>
          <Catcard name="Headphones" img="/images/headphonecat.png"/>
          <Catcard name="Smart Watch" img="/images/smartwatchcat.png"/>
          <Catcard name="Gamepad" img="/images/gamepadcat.png"/>
          <Catcard name="Cameras" img="/images/camera.png"/>
            
            </div>
           
        </div>
      
    </>
  );
}
