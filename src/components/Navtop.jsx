import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import ConnectWalletBtn from "./ConnectWalletBtn";
import { useSelector } from "react-redux";

export const Navtop = () => {
  const { rltStatus } = useSelector((state) => state.login);
  return (
    <Navbar expand="lg" className="mt-50 mb-50">
      <Container>
        <div className={!rltStatus && "ms-auto"}>
          <ConnectWalletBtn />
        </div>
      </Container>
    </Navbar>
  );
};
