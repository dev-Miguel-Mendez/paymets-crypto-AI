"use client"
import { ConnectButton } from '@rainbow-me/rainbowkit';


export default function  CustomConnectButton() {
    return (
        //prettier-ignore
        <ConnectButton.Custom>
            {({ account,chain, openAccountModal,openConnectModal, authenticationStatus,mounted,}) => {
                const ready = mounted && authenticationStatus !== 'loading';
                const connected = ready && account && chain;

                return (
                    <div{...(!ready && { 'aria-hidden': true, style: { opacity: 0, pointerEvents: 'none', userSelect: 'none',},})} >
                        {(() => {
                            if (!connected) {
                                return (
                                    <button onClick={openConnectModal}
                                    className="px-5 py-2 text-sm rounded-md bg-[#6467F2] text-white hover:bg-[#535458] transition shadow-sm hover:shadow-md"
                                    >
                                        Connect
                                    </button>
                                );
                            }

                            return (
                                <button onClick={openAccountModal}
                                    className="px-5 py-2 text-sm rounded-md bg-[#6467F2] text-white hover:bg-[#535458] transition shadow-sm hover:shadow-md"
                                >
                                    {account.displayName}
                                </button>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>

    )
}

