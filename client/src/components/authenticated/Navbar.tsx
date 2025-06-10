"use client"

// import { useAccountContext } from "@/context/AccountContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function  Navbar() {

    // const { setAccount, account} = useAccountContext();

    const [term, setTerm] = useState<string | null>(null)

    const router = useRouter()


    const handleConnect = async ()=>{
        // if (typeof window !== 'undefined' && (window as any).ethereum) {
        //     const accounts: string[] = await (window as any).ethereum.request({method: 'eth_accounts'})
        //     setAccount(accounts[0])

        //     return
        // }            
    }


    const handleSearch = (e: React.KeyboardEvent)=>{
        if(e.key !== 'Enter') return
        router.push('/erc/' + term)
    
        return
    }
    
    // const formattedAccount = account ? account.substring(0, 6) + '...' + account.substring(account.length - 4) : 'Connect'    

    return (
        <div className="flex  items-center bg-[#090A0B] w-full text-[#917e7e]">
            <div className="flex justify-around items-center flex-[4]">
                <Link href={'/'} className="hover:underline color"> Home - blocks </Link>
                <Link href={'/transact'} className="hover:underline color"> Transact</Link>
                <Link href={'/getbalance'} className="hover:underline color"> Get Balance</Link>
                <Link href={'/fundme'} className="hover:underline color"> Fund Me</Link>
                <Link href={'/create-pair'}> Create Pair</Link>
            </div>
            <div className="flex-[2] flex">
                <input className="pl-2  w-full rounded-[6px] h-[35px] bg-[#3a3b3f] placeholder-[#999797]" placeholder="Search Models"
                onChange={(e)=>{setTerm(e.target.value)}} onKeyDown={handleSearch}/>
            </div>
            <div className=" flex-[1] flex justify-end px-10 py-2 items-center ">
                <button className="h-10 hover:cursor-pointer hover:underline color bg-[#162138] px-4  rounded-3xl"
                onClick={handleConnect}>
                    {/* {formattedAccount} */}
                </button>
            </div>
        </div>
    )
}


