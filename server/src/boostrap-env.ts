//! This needs to be in its own file and imported before anything that will use environment variables.

import dotenv from 'dotenv';

dotenv.config({ path: `config/local.env` });
dotenv.config({ path: `../shared/eth.env` }); //* Defined in npm script

const requiredVars = [
    'PORT',

	'SEPOLIA_TESTNET_PRIVATE_KEY',
    'SEPOLIA_RPC_WS_URL',
    'SEPOLIA_RPC_HTTP_URL',
    'SEPOLIA_TESTNET_PRIVATE_KEY',

	'ANVIL_PRIVATE_KEY',
	'ANVIL_RPC_HTTP_URL',
    'ANVIL_RPC_WS_URL',
    'ANVIL_SUBSCRIPTION_CONTRACT'
];

requiredVars.forEach((varName) => {

	if (!process.env[varName]) {
		throw new Error(`Missing environment variable: ${varName}`);
	}



});

let SUBSCRIPTION_CA: string
let PRIVATE_KEY: string
let WEBSOCKET_RPC_URL: string
let HTTP_RPC_URL: string

if (process.env.ETH_NETWORK === 'anvil') {
    SUBSCRIPTION_CA = process.env.ANVIL_SUBSCRIPTION_CONTRACT!
    PRIVATE_KEY = process.env.ANVIL_PRIVATE_KEY!
    WEBSOCKET_RPC_URL = process.env.ANVIL_RPC_WS_URL!
    HTTP_RPC_URL = process.env.ANVIL_RPC_HTTP_URL!
} 

if (process.env.ETH_NETWORK === 'sepolia') {
    SUBSCRIPTION_CA = process.env.SEPOLIA_SUBSCRIPTION_CONTRACT!
    PRIVATE_KEY = process.env.SEPOLIA_TESTNET_PRIVATE_KEY!
    WEBSOCKET_RPC_URL = process.env.SEPOLIA_RPC_WS_URL!
    HTTP_RPC_URL = process.env.SEPOLIA_RPC_HTTP_URL!
}

export { SUBSCRIPTION_CA, PRIVATE_KEY, WEBSOCKET_RPC_URL, HTTP_RPC_URL}