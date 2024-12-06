import Image from "next/image"
interface props{
    img:string;
    text1:string;
text2:string;
}
export default function Help({img,text1,text2}:props){
    return(
        <div className="w-full flex flex-col items-center mt-10">
            <div className="bg-black p-2 rounded-full border-gray-500 border-8">
            <Image src={img} alt="unable to load" width={30} height={30} />
            </div>
            <div className="flex flex-col items-center p-2">
                <h1 className="font-extrabold">{text1}</h1>
                <p>{text2}</p>
            </div>
        </div>
    )
}