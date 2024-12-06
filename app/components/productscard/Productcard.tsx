"use client";


import Image from "next/image";
import React, { useRef } from "react";

import Product from "../Product/Product";
interface Props{
  text1:string;
  text2:string;
}
export default function Productscard({text1,text2}:Props) {
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
           <h1 className="text-[#DB4444] font-bold">{text1}</h1>
           </span>
            <span className="pb-4 text-2xl font-bold">{text2}</span>
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
          className="w-[90%] mx-auto p-2 flex h-auto mt-8 items-stretch scrollbar-none overflow-y-scroll
           overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hidden" >
            <Product name="The north coat" img="/images/hoodie.png" price="260" from="360" review="65" />
            <Product name="Gucci duffle bag" img="/images/bag.png" price="960" from="1160" review="95" />
            <Product name="RGB liquid CPU Cooler" img="/images/graphic-card.png" price="160" from="170" review="66" />
            <Product name="Small BookSelf" img="/images/table.png" price="460" from="560" review="65" />
            <Product name="The north coat" img="/images/hoodie.png" price="260" from="360" review="65" />
            <Product name="Gucci duffle bag" img="/images/bag.png" price="960" from="1160" review="95" />
            <Product name="RGB liquid CPU Cooler" img="/images/graphic-card.png" price="160" from="170" review="66" />
            <Product name="Small BookSelf" img="/images/table.png" price="460" from="560" review="65" />

            </div>
            
        </div>
      
    </>
  );
}
