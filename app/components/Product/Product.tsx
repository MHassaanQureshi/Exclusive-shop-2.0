"use client";
import Image from "next/image";
import React from "react";
import { useCart } from "@/app/context/cartContext";

interface Pram {
  name: string;
  img: string;
  price: string;
  from: string;
  review: string;
}

export default function Product({ name, img, price, from,review }: Pram) {
  const { addToCart } = useCart();
  return (
    <div className="w-full snap-center flex-shrink-0 md:w-[50%] lg:w-[30%]">
      <div className="flex flex-col bg-gray-100 w-[95%] mx-auto rounded-lg shadow-md">
  <div className="relative group">
    
    <span className="absolute bg-[#DB4444] p-1 text-white ml-1 mt-1 text-sm rounded-lg">
      -40%
    </span>

    
    <div className="absolute right-4 top-2 flex flex-col gap-2">
      <Image
        src="/images/like.png"
        alt="like button"
        width={30}
        height={30}
        className="bg-white rounded-2xl p-2 shadow-sm"
      />
      <Image
        src="/images/Group.png"
        alt="group button"
        width={30}
        height={30}
        className="bg-white rounded-2xl p-2 shadow-sm"
      />
    </div>

    
    <div className="flex justify-center mt-8">
      <Image src={img} alt={name} width={200} height={100} />
    </div>

    
    <button className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => addToCart({ name, img, price, from, review })}>
      <h1 className="text-white text-lg px-4 py-2 rounded bg-black">Add to cart</h1>
    </button>
  </div>


        <div className="bg-white p-2">
          <h1 className="font-semibold text-lg">{name}</h1>
          <p className="text-[#DB4444] p-1 text-sm">${price}</p>
          <p className="text-gray-600 line-through">${from}</p>
          <span className="flex gap-2">
          <Image src="/images/fivestar.png" alt="unable to load" width={80} height={30} />
          <p>({review})</p>
          </span>
        </div>
      </div>
     
    </div>
  );
}
