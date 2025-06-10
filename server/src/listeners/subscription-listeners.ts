import { EventLog } from "ethers";
import { getSubscriptionContract } from "~shared/src/contracts/subscriptions-contract.js";

const pairs: string[] = []

const subscriptionsContract = getSubscriptionContract()


export const initPairTracking = async()=>{

    //* This  happens ONLY ONCE when you start the server._____________
    const blockNumber = await RPCprovider.getBlockNumber() 
    //$ This is only for anvil blocks where they can be 0:
    const fromBlock = Math.max(0, blockNumber - 100); //$ ".max"  returns the larger of the two values.
    const previousPairCreatedEvents: EventLog[] = await pairFactoryContractWS.queryFilter('PairCreated', fromBlock, blockNumber) as EventLog[]
    

    previousPairCreatedEvents.forEach((eventLog: EventLog)=>{
        console.log(eventLog.args.pair);
        pairs.push(eventLog.args.pair)
    })
    //*______________________________________________________________
    
    
    pairFactoryContractWS.on('PairCreated', (pairAddress: string, _token0Address: string, _token1Address: string)=>{
        console.log('New pair created: ' + pairAddress);

    })

}    

initPairTracking() //* Normally you would put this in the entry file but I preferred import everything from this file.