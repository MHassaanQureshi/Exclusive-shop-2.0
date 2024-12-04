"use Client";
import Image from "next/image"
interface Pram{
    name:string;
    img:string;
    price:string;
}
export default function Product({name,img,price}:Pram){
    return(
        <>
        <div className="flex flex-col bg-gray-300 w-[80%]">
            <div className="flex ">
                <span className="flex">
                    <span className="absolute bg-[#DB4444] p-1 text-white ml-1 mt-1 text-sm rounded-lg"><p>-40%</p></span>
                    <span>
                        <span className="absolute right-[3rem] flex flex-col gap-2 p-2">
                            <Image src="/images/like.png" alt="unable to load" width={30} height={20} className="bg-white rounded-2xl p-2"/>
                            <Image src="/images/group.png" alt="unable to load" width={30} height={20} className="bg-white rounded-2xl p-2" />
                        </span>
                        <span className="flex items-center w-full ml-4">
                        <Image src={img} alt="unable to load" width={200} height={100} />
                        </span>
                    </span>
                </span>
            </div>
            <div className="bg-white p-2">
                <div>
                    <h1>{name}</h1>
                    <p className="absolute text-[#DB4444] p-1  ml-1 mt-1 text-sm ">{price}</p>
                </div>
            </div>
        </div>
        </>
    )
}