//! This needs to be in its own file and imported before anything that will use environment variables.

import dotenv from 'dotenv';

dotenv.config({ path: `config/express.env` });
dotenv.config({ path: `../shared/eth.env` }); //* Defined in npm script

const requiredVars = [
    'PORT',
	'PRIVATE_KEY',
	'RPC_HTTP_URL',
	'TOKEN_FACTORY_ADDRESS',
	'PAIR_FACTORY_ADDRESS',
	'WETH_ADDRESS',
	'ROUTER_ADDRESS'
];

requiredVars.forEach((varName) => {

	if (!process.env[varName]) {
		throw new Error(`Missing environment variable: ${varName}`);
	}



});

let SUBSCRIPTION_CA: string

if (process.env.ETH_NETWORK === 'anvil') {
    SUBSCRIPTION_CA = process.env.ANVIL_SUBSCRIPTION_CONTRACT!
} 

if (process.env.ETH_NETWORK === 'sepolia') {
    // SUBSCRIPTION_CA = process.env.SEPOLIA_SUBSCRIPTION_CONTRACT!
}

export { SUBSCRIPTION_CA }