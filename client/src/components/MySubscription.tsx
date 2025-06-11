"use client"

import { useEffect, useState } from "react"
import axios from 'axios'
import { Contract, BrowserProvider} from "ethers"
import { getSubscriptionContract } from "~shared/src/contracts/subscriptions-contract"
import toast from "react-hot-toast"
import { useAccount } from "wagmi"

type Props = {
    backendUrl: string
    anvilSubscriptionContractCa: string
    sepoliaSubscriptionContractCa: string
}

export default function MySubscription({ backendUrl, anvilSubscriptionContractCa, sepoliaSubscriptionContractCa }: Props) {
    const [subscriptionId, setSubscriptionId] = useState<number | null>(null);
    const [nextPayment, setNextPayment] = useState<number | null>(null);
    const [contract, setContract] = useState<Contract | null>(null);
    const { isConnected, chainId, address: account} = useAccount();

    const contracts: Record<number, string> = {
        31337: anvilSubscriptionContractCa,
        11155111: sepoliaSubscriptionContractCa
    }

    useEffect(() => {
        const verifySubscription = async () => {
            if (!isConnected || !chainId) return;
            
            //* Get the subscription contract and signer
            const browserProvider = new BrowserProvider(window.ethereum)
            const signer = await browserProvider?.getSigner();
            const SubscriptionContract = getSubscriptionContract(contracts[chainId], signer);
            setContract(SubscriptionContract);

            //* Verify the subscription
            try {
                const response = await axios.get<VerifySubscriptionResponse>(`${backendUrl}/mysubscription/${account}`);
                const id = response.data?.data?.subscriptionId;
                const nextPaymentTime = response.data?.data?.nextPayment;   

                setNextPayment(nextPaymentTime);
                setSubscriptionId(id);
            } catch (error) {
                console.error("Error fetching subscription:", error);
            }
        };

        verifySubscription();
    }, [isConnected, chainId]);

    const handleCancel = async () => {
        if (!contract) return; //* Just in case
         try{
             const tx = await contract.cancel();
             toast.success('Processing cancellation, please wait...')
             await tx.wait()
             setSubscriptionId(null);
             toast.success('Subscription cancelled')
         }catch(error: any){
             console.error('Error message:', error.message);
            // Ethers.js v6: structured fields
            if (error.code === 'CALL_EXCEPTION') {
                if(error.reason){
                    toast.error(error.reason)
                }else{
                    toast.error('Metamask error, likely low gas')
                }
            }
         }
    };

    const handlePay = () => {
        //* Simulate payment with no payment due
        toast.error('You have no payment due')
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-8 w-full max-w-md shadow-md space-y-6">
                <div className="text-center">
                    <div className="text-3xl">📦</div>
                    <h2 className="text-2xl font-bold text-white mt-2">Your Subscription</h2>
                    <p className="text-sm text-gray-400">Manage your active subscription with ease</p>
                </div>

                {subscriptionId !== null ? (
                    <div className="space-y-5 text-center">
                        <p className="text-gray-300">
                            You’re subscribed under ID:
                        </p>
                        <p className="text-lg font-mono text-white bg-white/10 px-4 py-2 rounded-lg inline-block">
                            #{subscriptionId}
                        </p>
                        {/* //* Next Payment */}
                        <div className="text-gray-300">
                            Next payment due:
                            <div className="text-white font-semibold mt-1">
                                {new Date(nextPayment! * 1000).toLocaleString()}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button onClick={handleCancel}
                            className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-xl transition">
                                Cancel
                            </button>
                            <button onClick={handlePay}
                            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-xl transition">
                                Pay Now
                            </button>
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-400 text-center">You don’t have an active subscription right now.</p>
                )}
            </div>
        </div>
    );
}
