type VerifySubscriptionResponse = {
    message: string;
    data: {
        subscriptionId: number;
        nextPayment: number;
    };
}