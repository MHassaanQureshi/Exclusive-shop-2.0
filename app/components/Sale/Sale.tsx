"use Client";
import Product from "../Product/Product";

export default function Sale(){
    return(
        <>
        <div className="w-[90%] items-center flex justify-center  flex-col gap-4">
        <Product name="HAVIT HV-G92 Gamepad" price="120$" img="/images/controller.png"/>
        <Product name="HAVIT HV-G92 Gamepad" price="120$" img="/images/controller.png"/>
        <Product name="HAVIT HV-G92 Gamepad" price="120$" img="/images/controller.png"/>
        </div>
        </>
    )
}