import Image from "next/image";
import Link from "next/link";
export default function Buttonup(){
    return(
        <button className="fixed bottom-5 right-5 z-50 bg-gray-400 border-black border-8 rounded-full">
            <Link href=""><Image src="/images/up.png" alt="unable to load" width={20} height={40} /></Link>        </button>
    )
}