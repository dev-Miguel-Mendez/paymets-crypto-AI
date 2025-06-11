import Tiers from "@/components/Subscriptions";

export default async function TiersPage() {

    const SubscriptionContractCa = process.env.SEPOLIA_SUBSCRIPTION_CONTRACT!
    
    return (
        <div>
            <Tiers SubscriptionContractCa={SubscriptionContractCa}></Tiers>
        </div>
    )
}