import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@mysten/dapp-kit/dist/index.css';
import Muyu from './muyu'
import WoodenFish from './components/WoodenFish'

import { createNetworkConfig, SuiClientProvider, WalletProvider,ConnectButton } from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


 
// Config options for the networks you want to connect to
const { networkConfig } = createNetworkConfig({
  devnet : { url: getFullnodeUrl('devnet') },
  testnet: { url: getFullnodeUrl('testnet') },
	localnet: { url: getFullnodeUrl('localnet') },
	mainnet: { url: getFullnodeUrl('mainnet') },
});
const queryClient = new QueryClient();




function App() {
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
    <SuiClientProvider networks={networkConfig} defaultNetwork="devnet">
      <WalletProvider>
      <ConnectButton />
        <Muyu />
        <WoodenFish />
      </WalletProvider>
    </SuiClientProvider>
  </QueryClientProvider>
  )
}

export default App
