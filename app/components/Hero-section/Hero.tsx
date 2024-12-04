"use Client";
import Category from "../Category/Category";
import Image from "next/image";
export default function Hero(){
    return(
        <>
        <div className="flex flex-col items-center">
            <Category />
            <Image src="/images/hero.png" alt="unable to load" width={400} height={300}  className="p-4"/>
        </div>
        </>
    )
}