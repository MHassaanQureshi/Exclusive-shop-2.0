"use Client";
import Image from "next/image";
import Hero from "./components/Hero-section/Hero";
import Sale from "./components/Sale/Sale";
import Browsecat from "./components/Browsecat/Browsecat";
import Productcard from "./components/productscard/Productcard";
import Speaker from "./components/speaker/Speaker";
import Newarr from "./components/Newarrival/Newarr";
import Help from "./components/Help-design/Help";


export default function Home() {
  return (
   
    <>
    <div>
      <Hero />
    </div>
    <div className="flex justify-center items-center flex-col">
      <Sale text1="sales" text2="flash sales"/>
      <button className="w-[60%] px-2 py-1  flex items-center justify-center bg-[#DB4444] text-white border-none mt-4">View All products</button>
    </div>
    
    <div className="flex mt-20 justify-center items-center flex-col gap-5 ">
      <Browsecat />
      <button className="w-[60%] px-2 py-1  flex items-center justify-center bg-[#DB4444] text-white border-none">View All products</button>
    </div>
    <div className="flex mt-20 justify-center items-center flex-col gap-5 ">
      <Productcard text1="This month" text2="Best Selling Products" />
      <button className="w-[60%] px-2 py-1  flex items-center justify-center bg-[#DB4444] text-white border-none">View All products</button>
    </div>
      <div className="w-full mt-10 flex justify-center item-center p-2 ">
        <Speaker />
      </div>
      <div className="flex mt-20 justify-center items-center flex-col gap-5 ">
      <Productcard text1="Our Products" text2="Explore Our Products" />
      <button className="w-[60%] px-2 py-1  flex items-center justify-center bg-[#DB4444] text-white border-none">View All products</button>
    </div>
    <div className="w-full mt-10 p-2">

      <Newarr />
    </div>
    <div>
      <Help img="/images/icon-delivery.png" text1="FREE AND FAST DELIVERY" text2="Free delivery for all orders over $140"/>
      <Help img="/images/service.png" text1="24/7 CUSTOMER SERVICE" text2="Friendly 24/7 customer support"/>
      <Help img="/images/icon-secure.png" text1="MONEY BACK GUARANTEE" text2="We return money within 30 days"/>
    </div>
    </>
  );
}
