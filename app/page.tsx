"use Client";
import Image from "next/image";
import Hero from "./components/Hero-section/Hero";
import Sale from "./components/Sale/Sale";


export default function Home() {
  return (
   
    <>
    <div>
      <Hero />
    </div>
    <div className="flex justify-center items-center">
      <Sale />
    </div>
    </>
  );
}
