import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import { routerConfig } from "./router/router.config.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

// import {
//   EthereumClient,
//   w3mConnectors,
//   w3mProvider,
// } from "@web3modal/ethereum";
// import { Web3Modal } from "@web3modal/react";
// import { configureChains, createConfig, WagmiConfig } from "wagmi";
// import { arbitrum, mainnet, polygon } from "wagmi/chains";

// const chains = [arbitrum, mainnet, polygon];
// const projectId = "7867b25f481533204f108720b1bc9304";

// const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors: w3mConnectors({ projectId, version: 2, chains }),
//   publicClient,
// });
// const ethereumClient = new EthereumClient(wagmiConfig, chains);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <>
        <RouterProvider router={routerConfig} />
      </>
    </Provider>
    {/* <Web3Modal projectId={projectId} ethereumClient={ethereumClient} /> */}
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <React.StrictMode>
//     <>
//       <>
//         <Provider store={store}>
//           <RouterProvider router={routerConfig} />
//         </Provider>
//       </>
//     </>
//   </React.StrictMode>
// );
