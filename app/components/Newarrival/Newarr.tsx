import Image from "next/image"
import Link from "next/link"
export default function Newarr(){
    return(
        <div>
            <div className="w-[90%] flex flex-col gap-4">
          <span className="flex items-center gap-2 align-middle">
            <span className="bg-[#DB4444] h-[2rem] text-[#DB4444]">...</span>
            <h1 className="text-[#DB4444] font-bold">Featured</h1>
          </span>
          <span>
            <div className="flex flex-col gap-1">
              <span className="pb-4 text-2xl font-bold">New Arrival</span>
              
            </div>
            
          </span>
        </div>
            <div className="w-full flex flex-col gap-4">
                <div className="bg-black w-full h-[20rem]">
                    <div className="w-[50%]">
                    <Image src="/images/playstation.png" alt="unable to load" width={200} height={200} className="absolute ml-24 z-10 mt-20" />
                    </div>
                    <div className="w-[60%] absolute mt-44 z-20 p-2">
                    <span className="text-white w-full">
                        <h1 className="font-bold">PlayStation 5</h1>
                        <p>Black and White version of the PS5 coming out on sale.</p>
                        <Link href="">Shop Now</Link>
                    </span>
                    </div>
                </div>
                <div>
                    <div>
                    <div className="bg-black w-full h-[20rem]">
                    <div className="w-[100%]">
                    <Image src="/images/women.png" alt="unable to load" width={300} height={200} className="absolute  z-10 " />
                    </div>
                    <div className="w-[90%] absolute mt-48 z-20 p-2">
                    <span className="text-white w-full">
                        <h1 className="font-bold">Women’s Collections</h1>
                        <p>Featured woman collections that give you another vibe.</p>
                        <Link href="">Shop Now</Link>
                    </span>
                    </div>
                </div>
               </div>
                </div>
                <div className="flex w-full gap-2">
                    <div className="w-[50%]">
                    <div>
                    <div className="bg-black w-full h-[20rem]">
                    <div className="w-[100%]">
                    <Image src="/images/speaker.png" alt="unable to load" width={100} height={200} className="absolute  z-10  mt-10 ml-5" />
                    </div>
                    <div className="w-[40%] absolute mt-40 z-20 p-2">
                    <span className="text-white w-full">
                        <h1 className="font-bold">Perfume</h1>
                        <p>GUCCI INTENSE OUD EDP</p>
                        <Link href="">Shop Now</Link>
                    </span>
                    </div>
                </div>
               </div>
                    </div>
                    <div className="w-[50%]">
                    <div>
                    <div className="bg-black w-full h-[20rem]">
                    <div className="w-[100%]">
                    <Image src="/images/gucci.png" alt="unable to load" width={100} height={200} className="absolute  z-10 mt-10 ml-5" />
                    </div>
                    <div className="w-[40%] absolute mt-40 z-20 p-2">
                    <span className="text-white w-full">
                        <h1 className="font-bold">Speakers</h1>
                        <p>Amazon wireless speakers</p>
                        <Link href="">Shop Now</Link>
                    </span>
                    </div>
                </div>
               </div>
                    </div>
                </div>
            </div>
        </div>
    )
}