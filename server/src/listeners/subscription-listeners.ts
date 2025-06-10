import { EventLog } from "ethers";
import { webSocketProvider } from "src/lib/providers.js";
import { getSubscriptionContract } from "~shared/src/contracts/subscriptions-contract.js";

const subscriptionContract = getSubscriptionContract(process.env.ANVIL_SUBSCRIPTION_CONTRACT!, webSocketProvider)



export const initPairTracking = async()=>{

    
    subscriptionContract.on('SubscriptionCreated', (pairAddress: string, _token0Address: string, _token1Address: string)=>{
        console.log('New Subscription: ' + pairAddress);

    })

}    

initPairTracking() //* Normally you would put this in the entry file but I preferred import everything from this file.