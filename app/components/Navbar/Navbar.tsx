"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className=" text-black p-4">
            <div className="container mx-auto flex justify-between items-center">
            
                <h1 className="text-black font-bold text-3xl">Exclusive</h1>
                
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
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
               
                <ul className="hidden lg:flex space-x-8 text-2xl">
                    <li>
                        <Link href="/" className="hover:border-b-2 border-red-700">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/About" className="hover:border-b-2 border-red-700">
                            About
                        </Link>
                    </li>
                    
                    <li>
                        <Link href="/Signup" className="hover:border-b-2 border-red-700">
                            Sign Up
                        </Link>
                    </li>
                    <li>
                        <Link href="/Contact" className="hover:border-b-2 border-red-700">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <span>
                            <input type="text" />
                            <button><Image src="/images/component 2.png" alt="" width={30} height={30} /></button>
                        </span>
                    </li>
                </ul>
            </div>
            
            {menuOpen && (
                <div className="lg:hidden w-[50%] bg- flex flex-col bg-gray-300 bg-opacity-30 backdrop-blur-md rounded-lg  shadow-lg text-black absolute mt-2 right-2 ">
                <ul className="flex flex-col space-y-4 mt-4 p-4">
                  <li>
                    <Link href="/" className="hover:border-b-2 border-red-700">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/About" className="hover:border-b-2 border-red-700">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/Signup" className="hover:border-b-2 border-red-700">
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link href="/Contact" className="hover:border-b-2 border-red-700">
                      Contact
                    </Link>
                  </li>
                  <li>
                        <span className="flex bg-white py-2">
                            <input type="text" />
                            <button><Image src="/images/component 2.png" alt="" width={30} height={30} /></button>
                        </span>
                    </li>
                    <li>
                        <ul className="flex item-center align-middle gap-3 ">
                        <li>
                        <Link href="/Cart"> <Image src="/images/cart.png" alt="" width={30} height={30} /></Link>
                    </li>
                    <li className="mt-1">
                        <Link href=""> <Image src="/images/heart.png" alt="" width={30} height={30} /></Link>
                    </li>
                        </ul>
                    </li>
                </ul>
              </div>
              
            )}
        </nav>
    );
}
