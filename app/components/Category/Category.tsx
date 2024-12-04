"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Category(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <>
        <div className="container mx-auto flex justify-between items-center w-[80%] ">
            
            <h1 className="text-black font-bold text-xl">Categories</h1>
            
            <div className="block lg:hidden">
                <button
                    onClick={() => setMenuOpen(!menuOpen)} 
                    className="text-black focus:outline-none"
                >
                    {menuOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <Image src="/images/cat-arrow.png" alt="unable to load" width={10} height={10} className="rotate-90" />
                    )}
                </button>
            </div>
           
            <ul className="hidden lg:flex flex-col text-2xl w-full ">
            <li>
              <span className="flex gap-4 items-center">
                        <p>Womans Fashion</p>
                        <Image src="/images/cat-arrow.png" alt="unable to load" width={10} height={10} className="w-[0.5rem] h-[1rem]"/>
                    </span>
              </li>
              <li>
              <span className="flex gap-4 items-center">
                        <p>Mans Fashion</p>
                        <Image src="/images/cat-arrow.png" alt="unable to load" width={10} height={10} className="w-[0.5rem] h-[1rem]"/>
                    </span>
              </li>
             
              <li>
              <p>Electronics</p>
              </li>
              <li>
              <p>Home & Lifestyle</p>  
                </li>
                <li>
                <p>Sports & Outdoor</p>
                </li>
                <li>
                <p>Baby’s & Toys</p>
                </li>
                <li>
                <p>Groceries & Pets</p>
                </li>
                <li>
                <p>Health & Beauty</p>
                </li>
            </ul>
        </div>
        
        {menuOpen && (
            <div className="lg:hidden w-[80%] flex flex-col bg-gray-300 bg-opacity-30 backdrop-blur-md rounded-lg  shadow-lg text-black  justify-center align-middle">
            <ul className="flex flex-col space-y-4 mt-4 p-4">
              <li>
              <span className="flex gap-4 items-center">
                        <p>Womans Fashion</p>
                        <Image src="/images/cat-arrow.png" alt="unable to load" width={10} height={10} className="w-[0.5rem] h-[1rem]"/>
                    </span>
              </li>
              <li>
              <span className="flex gap-4 items-center">
                        <p>Mans Fashion</p>
                        <Image src="/images/cat-arrow.png" alt="unable to load" width={10} height={10} className="w-[0.5rem] h-[1rem]"/>
                    </span>
              </li>
             
              <li>
              <p>Electronics</p>
              </li>
              <li>
              <p>Home & Lifestyle</p>  
                </li>
                <li>
                <p>Sports & Outdoor</p>
                </li>
                <li>
                <p>Baby’s & Toys</p>
                </li>
                <li>
                <p>Groceries & Pets</p>
                </li>
                <li>
                <p>Health & Beauty</p>
                </li>
            </ul>
          </div>
          
        )}
        </>
    )
}