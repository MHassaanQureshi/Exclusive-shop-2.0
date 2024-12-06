"use client";
import Image from "next/image";
import Link from "next/link";

export default function Newarr() {
  return (
    <div className="w-[90%] mx-auto flex flex-col gap-4 ">
      <div>
        <span className="flex items-center gap-2 align-middle">
          <span className="bg-[#DB4444] h-[2rem] w-[1rem] "></span>
          <h1 className="text-[#DB4444] font-bold">Featured</h1>
        </span>
        <div>
          <h2 className="pb-4 text-2xl font-bold">New Arrival</h2>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4 md:flex-row">
        {/* PlayStation Card */}
        <div className="bg-black w-full h-[20rem] md:w-[40%] md:h-[30rem] relative">
          <Image
            src="/images/playstation.png"
            alt="PlayStation"
            width={200}
            height={200}
            className="absolute ml-24 z-10 mt-20 md:w-[80%] md:ml-30"
          />
          <div className="w-[60%] absolute mt-44 z-20 p-2 md:mt-[22rem] text-white">
            <h1 className="font-bold md:text-2xl">PlayStation 5</h1>
            <p>Black and White version of the PS5 coming out on sale.</p>
            <Link href="#" className="">
              Shop Now
            </Link>
          </div>
        </div>

        {/* Women Collection */}
        <div className="flex flex-col gap-4 md:w-[50%]">
        <div className="bg-black w-full h-[20rem] relative md:h-[15rem]">
          <Image
            src="/images/women.png"
            alt="Women's Collection"
            width={350}
            height={800}
            className="absolute z-10 md:w-[55%] md:h-[100%]"
          />
          <div className="w-[90%] absolute mt-48 z-20 p-2 text-white md:w-[40%] md:ml-[55%] md:mt-20">
            <h1 className="font-bold">Women’s Collections</h1>
            <p>Featured woman collections that give you another vibe.</p>
            <Link href="#" >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Smaller Cards */}
        <div className="flex w-full gap-2 md:h-[70%]">
          {/* Perfume Card */}
          <div className="bg-black w-full h-[20rem] relative md:h-[100%]">
            <Image
              src="/images/speaker.png"
              alt="Perfume"
              width={100}
              height={200}
              className="absolute z-10 mt-20 ml-5 md:w-[60%] md:mt-12 md:ml-10"
            />
            <div className="w-[100%] absolute mt-44 z-20 p-2 text-white">
              <h1 className="font-bold">Perfume</h1>
              <p>GUCCI INTENSE OUD EDP</p>
              <Link href="#" >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Speaker Card */}
          <div className="bg-black w-full h-[20rem] relative md:h-[100%] ">
            <Image
              src="/images/gucci.png"
              alt="Speakers"
              width={100}
              height={200}
              className="absolute z-10 mt-10 ml-5 md:w-[60%]"
            />
            <div className="w-[100%] absolute mt-44 z-20 p-2 text-white">
              <h1 className="font-bold">Speakers</h1>
              <p>Amazon wireless speakers</p>
              <Link href="#" >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
