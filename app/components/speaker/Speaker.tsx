import Timer from "../Timer/Timer";
import Image from "next/image";
export default function Speaker(){
    const targetDate = new Date("2024-12-31T23:59:59");
    return(

        <>
        <div className="bg-black">
            <div className=" text-white p-4 flex flex-col">
            <p className="text-[#00FF66]">Categories</p>
            <h1 className="text-2xl font-bold p-2">Enhance Your Music Experience</h1>
            <span className="bg-white text-black p-2 rounded-lg">
                <Timer targetDate={targetDate}/>
            </span>
            <span className="flex item center justify-center mt-4">
            <button className="bg-[#00FF66] w-[50%] p-2 rounded-lg">Buy Now</button>
            </span>
            </div>
            
            <div className="relative ml-5">
            <div className="absolute inset-0 w-[250px] h-[100px] bg-green-300 rounded-full blur-lg mt-24 ml-2"></div>
            <Image src="/images/jbl-speaker.png" alt="unable to load" width={300} height={300} className="relative" />
            </div>
        </div>
        
        </>
    )
}