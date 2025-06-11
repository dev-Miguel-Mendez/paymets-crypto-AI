import { Request, Response } from 'express';
import {  VerifySubscriptionSchema } from '../zodSchemas/user-schema.js';
import { BadRequest } from '../lib/exceptions.js';
import { getSubscriptionContract } from '~shared/src/contracts/subscriptions-contract.js';
import { SUBSCRIPTION_CA } from 'src/boostrap-env.js';
import { httpProvider } from 'src/lib/providers.js';


export const verifySubscription = async (req: Request<VerifySubscriptionSchema, {}>,res: Response) => {
	const {walletAddress}  = req.params;
	const subscriptionContract = getSubscriptionContract(SUBSCRIPTION_CA, httpProvider);

	const subscription: [bigint, boolean, bigint] = await subscriptionContract.getUserPlanId(walletAddress);

	const [subscriptionId, isActive, nextPayment] = subscription;

	if (!isActive) {
		throw new BadRequest('Subscription is not active');
	}
	
	console.log(Number(subscriptionId));
	

	res.send({ message: 'Success', data: { subscriptionId: Number(subscriptionId), nextPayment: Number(nextPayment)} } as VerifySubscriptionResponse);
};


export const triggerBadRequest = async (_req: Request, _res: Response) => {
	
    throw new BadRequest('Bad request');

};
