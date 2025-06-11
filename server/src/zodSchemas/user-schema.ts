import { z } from 'zod'


export const verifySubscriptionSchema = z.object({
    params: z.object({
        walletAddress: z.string({required_error: 'Wallet address is required'}).min(1).nonempty(),
    })  
})



export type VerifySubscriptionSchema = z.infer<typeof verifySubscriptionSchema>['params']