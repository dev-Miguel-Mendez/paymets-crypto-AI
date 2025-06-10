//! This needs to be in its own file and imported before anything that will use environment variables.
//! NEXT_PUBLIC variables will be loaded from .env file in this directory.


import dotenv from 'dotenv';

// dotenv.config({ path: `../shared/config/${process.env.ETH_NETWORK}.env` }); //* Defined in npm script

// dotenv.config({path: '../shared/.env'}) //* FOR PRISMA ENV

dotenv.config({path: '../shared/eth.env'}) //* All CA's

const requiredVars = [
    //* These come from ../shared/
	// 'PRIVATE_KEY',
	// 'RPC_HTTP_URL',

    //* These is preloaded by NextJS .env
    'NEXT_PUBLIC_PROJECT_ID',
    "ANVIL_RPC_HTTP_URL",
    "SEPOLIA_RPC_HTTP_URL",
    "MAINNET_RPC_HTTP_URL",
    "NEXT_PUBLIC_ANVIL_SUBSCRIPTIONS_CA"

];

requiredVars.forEach((varName) => {
	if (!process.env[varName]) {
		throw new Error(`Missing environment variable: ${varName}`);
	}
});

