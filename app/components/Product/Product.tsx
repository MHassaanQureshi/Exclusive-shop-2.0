"use client";
import Image from "next/image";

interface Pram {
  name: string;
  img: string;
  price: string;
  from: string;
}

export default function Product({ name, img, price, from }: Pram) {
  return (
    <div className="w-full snap-center flex-shrink-0">
      <div className="flex flex-col bg-gray-300 w-[95%] mx-auto rounded-lg shadow-md">
        <div className="relative">
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
              src="/images/group.png"
              alt="group button"
              width={30}
              height={30}
              className="bg-white rounded-2xl p-2 shadow-sm"
            />
          </div>
          <div className="flex justify-center mt-8">
            <Image src={img} alt={name} width={200} height={100} />
          </div>
        </div>
        <div className="bg-white p-2">
          <h1 className="font-semibold text-lg">{name}</h1>
          <p className="text-[#DB4444] p-1 text-sm">${price}</p>
          <p className="text-gray-600 line-through">${from}</p>
        </div>
      </div>
    </div>
  );
}
