"use client";
import Product from "../Product/Product";
import Timer from "../Timer/Timer";
import Image from "next/image";
import React, { useRef } from "react";
interface Props{
  text1:string;
  text2:string;
}
export default function Sale({text1,text2}:Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Function to scroll left
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

  const targetDate = new Date("2024-12-31T23:59:59");

  return (
    <>
      <div className="w-full items-center flex justify-center flex-col gap-4">
        <div className="w-[90%] flex flex-col gap-4">
          <span className="flex items-center gap-2 align-middle">
            <span className="bg-[#DB4444] h-[2rem] text-[#DB4444]">...</span>
            <h1 className="text-[#DB4444] font-bold">{text1}</h1>
          </span>
          <span>
            <div className="flex flex-col gap-1">
              <span className="pb-4 text-2xl font-bold">{text2}</span>
              <span>
                <Timer targetDate={targetDate} />
              </span>
            </div>
            
          </span>
        </div>
        <div
          ref={scrollRef}
          className="w-[90%] mx-auto p-2 flex h-auto mt-8 items-stretch overflow-x-auto snap-x snap-mandatory scroll-smooth"
        >
          <Product name="AK-900 Wired Keyboard" img="/images/keyboard.png" price="100" from="120" review="100"/>
          <Product name="IPS LCD Gaming Monitor" img="/images/monitor.png" price="600" from="820" review="10"/>
          <Product name="S-Series Comfort Chair " img="/images/chair.png" price="230" from="300" review="50"/>
          <Product name="AK-900 Wired Keyboard" img="/images/keyboard.png" price="100" from="120" review="100"/>
          <Product name="AK-900 Wired Keyboard" img="/images/keyboard.png" price="100" from="120" review="100"/>
          <Product name="AK-900 Wired Keyboard" img="/images/keyboard.png" price="100" from="120" review="100"/>
          <Product name="AK-900 Wired Keyboard" img="/images/keyboard.png" price="100" from="120" review="100"/>
            
            </div>
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
      
    </>
  );
}
