import { Button, Input } from "../../components";
import { Container } from "../../components/common";
import { VerifyContainer } from "./auth.styles";
import { useAuth } from "../../hooks/useAuth";

import { useState } from "react";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { Web3Button } from "@web3modal/react";
import { useWeb3Modal } from "@web3modal/react";

const chains = [arbitrum, mainnet, polygon];
const projectId = "7867b25f481533204f108720b1bc9304";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 2, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

export const SignupPage = () => {
  const { authenticate, isLoading } = useAuth();
  const [disabled, setDisabled] = useState(false);
  const { open, close } = useWeb3Modal();

  return (
    <Container>
      <VerifyContainer>
        <h1>Claim your Github Contributions on Lens</h1>
        <p>Verifying github contribution for pseudonymous Lens profiles</p>
        <Button
          onClick={() => authenticate()}
          label={isLoading ? "Signing in...." : "Sign In using MetaMask"}
          style={{ marginTop: "2rem" }}
        />
        <button onClick={() => open()}>Connect</button>
        <Web3Modal
          projectId="7867b25f481533204f108720b1bc9304"
          ethereumClient={ethereumClient}
        />
        ;
        <div className="dev-list">
          <div className="list">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" />
            <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlJTIwcG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" />
            <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" />
            <img src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1921&q=80" />
            <img src="https://images.unsplash.com/photo-1546791737-97c81ec08179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" />
          </div>
          <div>Join other 100+ Devs</div>
        </div>
      </VerifyContainer>
    </Container>
  );
};
