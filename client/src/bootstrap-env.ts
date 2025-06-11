//! This needs to be in its own file and imported before anything that will use environment variables.
//! NEXT_PUBLIC variables will be loaded from .env file in this directory.


import dotenv from 'dotenv';

//* QUESTIONS? read README 


dotenv.config({ path: `./nextjs-specific-config/${process.env.ENVIRONMENT}.env` }); //* Defined in npm script

dotenv.config({path: '../shared/eth.env'}) //* All CA's

const requiredVars = [
    //* These come from ../shared/
	// 'PRIVATE_KEY',
	// 'RPC_HTTP_URL',
    'BACKEND_URL',

    "ANVIL_RPC_HTTP_URL",
    "ANVIL_SUBSCRIPTION_CONTRACT",
    
    "SEPOLIA_RPC_HTTP_URL",
    "SEPOLIA_SUBSCRIPTION_CONTRACT"

];

requiredVars.forEach((varName) => {
	if (!process.env[varName]) {
		throw new Error(`Missing environment variable: ${varName}`);
	}
});

