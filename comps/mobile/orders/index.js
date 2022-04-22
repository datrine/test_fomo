import { GiHamburgerMenu } from "react-icons/gi"
import { FaTimes } from "react-icons/fa"
import { useEffect, useRef, useState } from "react"
//let btn=(new HTMLButtonElement())
//btn.className
let OrdersIndex = () => {
    return <>
        <div className=" md:hidden mt-[80px] bg-[#dbdddf] pb-5 pt-2">
            <SelectClosableBanner />
        </div>
    </>
}

let SelectClosableBanner = ({ }) => {
    return <>
    <div className="p-2 h-[700px] mb-2 mt-3 bg-white ">
        <div className=" p-2 h-[full] flex flex-col items-center justify-between ">
            <img src="/shop.svg" />

            <h4 className=" text-[20px]" >Your orders will show here.</h4>
            <p>To get orders and accept payments from customers, you need to select a plan. 
                You’ll only be charged for your plan after your free trial ends.</p>
        </div>
        </div>
    </>}



        export {OrdersIndex};