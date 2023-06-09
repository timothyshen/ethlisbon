"use client";
import Header from "./header";
import {
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  polygonMumbai,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { LensConfig, development,  LensProvider } from "@lens-protocol/react-web";
import { bindings as wagmiBindings } from "@lens-protocol/wagmi";

const lensConfig: LensConfig = {
  bindings: wagmiBindings(),
  environment: development,
};

import { Providers } from "./providers";

import "@rainbow-me/rainbowkit/styles.css";

const chains = [polygonMumbai, mainnet, polygon, optimism]
const { provider } = configureChains(
  [polygonMumbai],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains: chains
});

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <WagmiConfig client={client}>
            <RainbowKitProvider
              chains={chains}
              theme={lightTheme({
                accentColor: "black",
                accentColorForeground: "white",
                borderRadius: "medium",
              })}
            >
              <LensProvider config={lensConfig}>
                <Header />
                {children}
              </LensProvider>
            </RainbowKitProvider>
          </WagmiConfig>
        </Providers>
      </body>
    </html>
  );
}
