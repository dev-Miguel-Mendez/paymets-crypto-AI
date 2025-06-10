'use client';

import { Check } from 'lucide-react';
import { useAccountContext } from '@/app/context/AccountContext';
import { getSubscriptionContract } from '~shared/src/contracts/subscriptions-contract';
import { useEffect, useState } from 'react';
import { Contract } from 'ethers';

export default function Tiers() {
	const { browserProvider } = useAccountContext();
	const [contract, setContract] = useState<Contract | null>(null);
	useEffect(() => {
		if (!browserProvider) return;
		const run = async()=>{
		
			const signer = await browserProvider?.getSigner();
			const SubscriptionContract = getSubscriptionContract(process.env.NEXT_PUBLIC_ANVIL_SUBSCRIPTIONS_CA!,signer);
			setContract(SubscriptionContract);
		}
		run()
	}, [browserProvider]);

	const onPay = async (planId: string) => {
		if (!contract) return; //* Just in case
		const tx = await contract.subscribe(planId);
		await tx.wait()
	};

	const tiers = [
		{
			name: 'Basic',
			price: '0.1 ETH',
			features: ['Basic models', '10GB Storage', 'Email Support'],
			planId: '0',
		},
		{
			name: 'Pro',
			price: '0.2 ETH',
			features: [
				'Inermediate models',
				'Image generation',
				'Priority Support',
				'API Access',
			],
			planId: '1',
			popular: true,
		},
		{
			name: 'Enterprise',
			price: '0.3 ETH',
			features: [
				'Advanced models',
				'1TB Storage',
				'24/7 Support',
				'Custom Integration',
			],
			planId: '2',
		},
	];

	//prettier-ignore
	return (
    <div className="p-8 max-w-[1000px] mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold  mb-2">
          Subscription based
        </h1>
        <p className="text-gray-600">
          Choose the plan that works for you or choose one-time payments
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {tiers.map((tier) => (
          <div key={tier.name} className={`p-6 rounded-lg border-2 relative }`}>

            {/* //* ONLY APPLIED TO THE POPULAR TIER */}
            {tier.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#6467F2] px-3 py-1 rounded-full text-sm font-medium">Popular</span>
              </div>
            )}

            <div className="text-center mb-6">
                {/* //* Tier Name */}
              <h3 className="text-xl font-semibold mb-2">
                {tier.name}
              </h3>


              {/* //* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold ">
                  {tier.price}
                </span>
                <span className="">/month</span>
              </div>
            </div>

            {/* //* 3 Features  per tier */}
            <ul className="space-y-3 mb-6">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-center ">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-2 px-4 rounded-md font-medium transition-colors bg-[#6467F2]`} onClick={()=>{onPay(tier.planId)}}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
