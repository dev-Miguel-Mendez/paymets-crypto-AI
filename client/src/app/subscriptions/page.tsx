import Tiers from "@/components/Tiers"

export default async function TiersPage() {

    const anvilSubscriptionContractCa = process.env.ANVIL_SUBSCRIPTION_CONTRACT!
    const sepoliaSubscriptionContractCa = process.env.SEPOLIA_SUBSCRIPTION_CONTRACT!
    
    
    return (
        <div>
            <Tiers anvilSubscriptionContractCa={anvilSubscriptionContractCa} sepoliaSubscriptionContractCa={sepoliaSubscriptionContractCa}></Tiers>
        </div>
    )
}


