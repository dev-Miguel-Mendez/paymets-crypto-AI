"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import RawConnectButton from "./RawConnectButton";
// import CustomConnectButton from "./CustomConnectButton";

export default function  Navbar() {

    // const { setAccount, account} = useAccountContext();

    const [term, setTerm] = useState<string | null>(null)

    const router = useRouter()

    const handleSearch = (e: React.KeyboardEvent)=>{
        if(e.key !== 'Enter') return
        router.push('/erc/' + term)
    
        return
    }

    return (
        <div className="flex  items-center bg-[#090A0B] w-full text-[#917e7e]">
            <div className="flex justify-around items-center flex-[4]">
                <Link href={'/mysubscription'} className="hover:underline color"> My Subscription </Link>
                <Link href={'/about'} className="hover:underline color"> About </Link>
                <Link href={'/subscriptions'} className="hover:underline color"> Subscription tiers </Link>
            </div>
            <div className="flex-[2] flex">
                <input className="pl-2  w-full rounded-[6px] h-[35px] bg-[#3a3b3f] placeholder-[#999797]" placeholder="Search Models"
                onChange={(e)=>{setTerm(e.target.value)}} onKeyDown={handleSearch}/>
            </div>
            <div className=" flex-[1] flex justify-center px-10 py-2 items-center ">
                {/* <CustomConnectButton></CustomConnectButton> */}
                <RawConnectButton></RawConnectButton>
            </div>
        </div>
    )
}


