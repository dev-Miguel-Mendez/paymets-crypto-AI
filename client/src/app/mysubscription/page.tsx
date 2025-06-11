import MySubscription from "@/components/MySubscription"

export default async function MySubscriptionPage() {

    const backendUrl = process.env.BACKEND_URL
    const anvilSubscriptionContractCa = process.env.ANVIL_SUBSCRIPTION_CONTRACT!
    const sepoliaSubscriptionContractCa = process.env.SEPOLIA_SUBSCRIPTION_CONTRACT!
    
    return (
        <MySubscription backendUrl={backendUrl!} anvilSubscriptionContractCa={anvilSubscriptionContractCa} sepoliaSubscriptionContractCa={sepoliaSubscriptionContractCa} ></MySubscription>
    )
}