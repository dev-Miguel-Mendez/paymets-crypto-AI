import MySubscription from "@/components/MySubscription";

export default async function MySubscriptionPage() {

    const backendUrl = process.env.BACKEND_URL
    const SubscriptionContractCa = process.env.SEPOLIA_SUBSCRIPTION_CONTRACT!

    return (
        <MySubscription backendUrl={backendUrl!} SubscriptionContractCa={SubscriptionContractCa!}></MySubscription>
    )
}