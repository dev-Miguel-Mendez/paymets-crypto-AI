import { BrowserProvider } from 'ethers';
import { JsonRpcSigner } from 'ethers';
import { JsonRpcApiProvider } from 'ethers';
import { Contract } from 'ethers';

export const getSubscriptionContract = ( CA: string, provider: JsonRpcApiProvider | BrowserProvider | JsonRpcSigner) => {
	const abi = [
		'function subscribe(uint256 planId) payable',
		// 'function pay(uint256 planId) payable',
		// 'function cancel(uint256 planId)',
		// 'function withdraw()',
		// 'function plans(uint256) view returns (uint256 cost, uint256 duration)',
		// 'function subscriptions(address, uint256) view returns (uint256 start, uint256 nextPayment, bool active)',
		// 'event PaymentReceived(address indexed subscriber, uint256 indexed planId, uint256 amount, uint256 date)',
		// 'event SubscriptionCreated(address indexed subscriber, uint256 indexed planId, uint256 date)',
		// 'event SubscriptionCancelled(address indexed subscriber, uint256 indexed planId, uint256 date)',
		// 'event Withdrawn(address indexed recipient, uint256 amount, uint256 date)',
	];
	const contract = new Contract(CA, abi, provider);

	return contract;
};
