'use client';

import { Check } from 'lucide-react';
import { useAccountContext } from '@/app/context/AccountContext';
import { getSubscriptionContract } from '~shared/src/contracts/subscriptions-contract';
import { useEffect, useState } from 'react';
import { Contract, parseEther } from 'ethers';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { WarningModal } from '../WarningModal';

type Props = {
    anvilSubscriptionContractCa: string
    SepoliaSubscriptionContractCa: string
};

export default function Tiers({ anvilSubscriptionContractCa  }: Props) {
	const { browserProvider } = useAccountContext();
	const [contract, setContract] = useState<Contract | null>(null);
	const router = useRouter()
	const [showWarningModal, setShowWarningModal] = useState(true);

	useEffect(() => {
		if (!browserProvider) return;
		const run = async()=>{
		
			const signer = await browserProvider?.getSigner();
			const SubscriptionContract = getSubscriptionContract(anvilSubscriptionContractCa, signer);
			setContract(SubscriptionContract);
		}
		run()
	}, [browserProvider]);

	const onPay = async (planId: string, price: string) => {
		try{
			if (!contract) return; //* Just in case
			const tx = await contract.subscribe(planId, {value: parseEther(price)});
			toast.success('Processing payment, please wait...')
			await tx.wait()

			router.push('/thanknyou')
			
		}catch(error: any){
			 console.error('Error message:', error.message);
			// Ethers.js v6: structured fields
			if (error.code === 'CALL_EXCEPTION' && error.reason) {
					toast.error(error.reason)
					return
			}else {
				toast.error('Metamask error, likely no funds to pay gas fee')
			}
		}
	};

	const tiers = [
		{
			name: 'Basic',
			price: '0.001',
			features: ['Basic models', '10GB Storage', 'Email Support'],
			planId: '0',
		},
		{
			name: 'Pro',
			price: '0.002',
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
			price: '0.003',
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
	<>
		{ showWarningModal && <WarningModal show={showWarningModal} onClose={() => setShowWarningModal(false)}></WarningModal>}
	
		<div className="p-8 max-w-[1000px] mx-auto">
		<div className="text-center mb-12">
			<h1 className="text-3xl font-bold  mb-2">
			available subscriptions for AI models
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
					{tier.price + ' ETH'}
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

				<button className={`w-full py-2 px-4 rounded-md font-medium hover:cursor-pointer bg-[#6467F2]`}
				onClick={()=>{onPay(tier.planId, tier.price)}}>
				Get Started
				</button>
			</div>
			))}
		</div>
		</div>
	</>	
  );
}
