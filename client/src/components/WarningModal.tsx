


'use client';

import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  show: boolean;
  onClose: () => void;
};

export function WarningModal({ show, onClose }: Props) {
  return (
    <AnimatePresence>
      {show && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={onClose}
        >
          <motion.div onClick={(e) => e.stopPropagation()} initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }} className="bg-[#131313] border border-[#202020] rounded-xl w-full max-w-md p-6 text-white"
          >
            <p className="text-center font-bold mb-3">Ethereum Netowrk Warning 🔴</p>
            <p className="text-center  mb-4"> This application is only available on the Sepolia Testnet. Please switch your network to Sepolia to <span className='font-bold text-red-500'> avoid loss of funds</span>. Mainnet and all other networks are unsupported and will not function. </p>

            <div className="flex justify-center">
                <button onClick={onClose}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 hover:cursor-pointer"
                >
                Got it
              </button>
            </div>
                <p className="text-center font-bold mb-3 text-green-500"> Need free testnet Sepolia  ETH? </p>
                <p className="text-center font-bold mb-3 text-green-500">Visit the faucet to get 0.05 test-net Sepolia ETH 🧑‍💻</p>
                <div className="flex justify-center">
                    <a href="https://faucet.quicknode.com/ethereum/sepolia" target="_blank" rel="noopener noreferrer"
                    className="text-blue-500 font-semibold hover:underline">
                        https://faucet.quicknode.com/ethereum/sepolia
                    </a>
                </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}