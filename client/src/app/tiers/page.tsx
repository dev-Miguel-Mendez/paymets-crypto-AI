import Tiers from "@/components/Tiers";

export default async function TiersPage() {

    const SubscriptionContractCa = process.env.ANVIL_SUBSCRIPTION_CONTRACT!
    
    return (
        <div>
            <Tiers SubscriptionContractCa={SubscriptionContractCa}></Tiers>
        </div>
    )
}