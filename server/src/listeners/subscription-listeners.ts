import { SUBSCRIPTION_CA } from "src/boostrap-env.js";
import { webSocketProvider } from "src/lib/providers.js";
import { getSubscriptionContract } from "~shared/src/contracts/subscriptions-contract.js";

const subscriptionContract = getSubscriptionContract(SUBSCRIPTION_CA!, webSocketProvider)



export const initPairTracking = async()=>{
    subscriptionContract.on('SubscriptionCreated', (subscriber: string, plainId: number)=>{
        console.log('New Subscriber: ' + subscriber);
        console.log('Plan Id: ' + plainId);
    })

}    

initPairTracking() //* Normally you would put this in the entry file but I preferred import everything from this file.