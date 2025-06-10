"use client"

import { BrowserProvider } from "ethers";
import React, { createContext, useContext, useEffect, useState } from "react";


type AccountContextValue = {
    browserProvider: BrowserProvider | null;
    account: string | null
    setAccount: React.Dispatch<React.SetStateAction<string | null>>
}


const AccountContext = createContext<AccountContextValue | null>(null);

export default function  AccountContextProvider({children}: {children: React.ReactNode}) {

    const [browserProvider, setBrowserProvider] = useState<BrowserProvider | null>(null);
    const [account, setAccount] = useState<string | null>(null)

    useEffect(() => {
        if (!(window as any).ethereum) return;

        const run = async () => {

            const provider = new BrowserProvider((window as any).ethereum);
            setBrowserProvider(provider);

            try {
                const accounts: string[] = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0] || null);
            } catch (err) {
                console.error("User denied account access or other error:", err);
            }
        };

        const handleAccountsChanged = (accounts: string[]) => {
            setAccount(accounts[0] || null);
            const provider = new BrowserProvider((window as any).ethereum);
            setBrowserProvider(provider);

        };

        (window as any).ethereum.on("accountsChanged", handleAccountsChanged);
        run();

        return () => {
            (window as any).ethereum.removeListener("accountsChanged", handleAccountsChanged);
        };
    }, []);


    const value = { browserProvider, account,  setAccount}

    return (
        <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
    )
}


export const useAccountContext = () => {
    const context = useContext(AccountContext);
    if (!context) {
        throw new Error('useAccountContext must be used within a <SideBarContextProvider>');
    }
    return context;
};
