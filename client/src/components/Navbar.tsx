"use client"

import Link from "next/link";

//! DO NOT REMOVE THIS IMPORT COMMENT, READ THE README in this directory.
// import RawConnectButton from "./READ_THE_README/Raw_ConnectButton";

//! DO NOT REMOVE THIS IMPORT COMMENT, READ THE README in this directory.
import CustomConnectButton from "./CustomConnectButtonRainbow";



export default function  Navbar() {
    return (
        <div className="flex  items-center bg-[#090A0B] w-full text-[#917e7e]">
            <div className="flex justify-around items-center flex-[4]">
                <Link href={'/mysubscription'} className="hover:underline color"> My Subscription </Link>
                <Link href={'/'} className="hover:underline color"> Home </Link>
                <Link href={'/subscriptions'} className="hover:underline color"> Subscription tiers </Link>
            </div>
    
            <div className=" flex-[1] flex justify-center px-10 py-2 items-center ">
                <CustomConnectButton></CustomConnectButton>
                {/* <RawConnectButton></RawConnectButton> */}
            </div>
        </div>
    )
}


