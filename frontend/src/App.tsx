import { Outlet } from "react-router-dom";
import { Navbar } from "./components/common";
import "./App.css";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useEffect } from "react";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
