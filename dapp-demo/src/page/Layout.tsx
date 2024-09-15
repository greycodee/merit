import { createNetworkConfig, SuiClientProvider, WalletProvider, ConnectButton } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import { Theme } from '@radix-ui/themes';



// Config options for the networks you want to connect to
const { networkConfig } = createNetworkConfig({
    devnet: { url: getFullnodeUrl('devnet') },
    testnet: { url: getFullnodeUrl('testnet') },
    localnet: { url: getFullnodeUrl('localnet') },
    mainnet: { url: getFullnodeUrl('mainnet') },
});
const queryClient = new QueryClient();

export default function Layout() {

    return (
        <QueryClientProvider client={queryClient}>
            <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
                <WalletProvider autoConnect>
                    <Theme appearance="dark" className='h-full w-full'>
                        <Header />
                        <Outlet />
                    </Theme>
                </WalletProvider>
            </SuiClientProvider>
        </QueryClientProvider>
    );
}