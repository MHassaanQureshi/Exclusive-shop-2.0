import Image from "next/image"

export default function Footer(){
    return(

        <div className="flex flex-col bg-black items-center w-full justify-center text-white pt-2 pb-2">
            <div className="w-[80%] flex flex-col items-center justify-center md:flex-row md:items-start py-10">
                <div className="text-white flex flex-col p-4 items-center md:items-start">
                    <h1 className="font-extrabold">Exclusive</h1>
                    <ul className="flex flex-col p-4 items-center justify-center align-middle md:items-start md:p-0 md:mt-10 md:gap-4">
                        <li className="font-bold">Subscribe</li>
                        <li>Get 10% off your first order</li>
                        <li>
                        <span className="flex bg-transparent  border-2 border-white w-[80%] ">
                            <input type="text" className="p-2 bg-transparent w-[85%]" placeholder="Enter your email"/>
                            <button><Image src="/images/send.png" alt="" width={20} height={30} /></button>
                        </span>
                    </li>
                    </ul>
                </div>
                <div  className="flex flex-col p-4 items-center md:items-start md:gap-4">
                    <h1 className="font-extrabold">Support</h1>
                    <ul className="flex flex-col p-4 items-center md:items-start md:p-0">
                        <li>111 ,karachi,Pakistan</li>
                        <li>exclusive@gmail.com</li>
                        <li>+88015-88888-9999</li>
                    </ul>
                </div>
                <div className="flex flex-col p-4 items-center md:items-start ">
                    <h1 className="font-extrabold">Account</h1>
                    <ul className="flex flex-col p-4 items-center md:items-start md:p-0 md:gap-2">
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </div>
                <div className="flex flex-col p-4 items-center md:items-start">
                    <h1 className="font-extrabold">Quick Link</h1>
                    <ul className="flex flex-col p-4 items-center md:items-start md:p-0 md:gap-2">
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
               <div className="flex flex-col p-4 items-center">
                <h1 className="font-extrabold">Download App</h1>
                <p>Save $3 with App New User Only</p>
                <span className="flex mt-2">
                    <span>
                        <Image src="/images/qr.png" alt="" width={60} height={40} />
                    </span>
                    <span className="flex flex-col gap-2">
                    <Image src="/images/appstore.png" alt="" width={80} height={20} />
                    <Image src="/images/playstore.png" alt="" width={80} height={20} />
                    </span>
                </span>
               </div>
            </div>
            <div className="border-t-2 border-gray-400 w-[full] flex items-center">
                <h1 className="text-gray-200 text-sm">@Copyright Rimel 2022. All right reserved</h1>
            </div>
        </div>
    )
}