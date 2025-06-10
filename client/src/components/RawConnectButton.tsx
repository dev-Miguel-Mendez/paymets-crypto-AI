"use client"

import { useAccountContext } from "@/app/context/AccountContext";

export default function  RawConnectButton() {
    const { setAccount, account} = useAccountContext();

    const handleConnect = async ()=>{
            console.log('TEST1');
        if (typeof window !== 'undefined' && (window as any).ethereum) {

            console.log('TEST2');
            

            const accounts: string[] = await (window as any).ethereum.request({method: 'eth_accounts'})
            setAccount(accounts[0])

            return
        }            
    }

    const formattedAccount = account ? account.substring(0, 6) + '...' + account.substring(account.length - 4) : 'Connect'   

    return (
        
        <button className="h-10 hover:cursor-pointer hover:underline color bg-[#6467F2] px-4 text-white  rounded-3xl"
        onClick={handleConnect}>
            {formattedAccount}
        </button>
    )
}