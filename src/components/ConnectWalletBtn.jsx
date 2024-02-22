import { ConnectWallet, darkTheme } from "@thirdweb-dev/react";
import React from "react";

const ConnectWalletBtn = ({width}) => {
  return (
    <ConnectWallet
      className={width}
      theme={darkTheme({
        colors: {
          modalBg:
            "linear-gradient(180deg, rgba(18, 183, 242, 0.25) 0%, rgba(19, 79, 171, 0.25) 100%)",
          dropdownBg:
            "linear-gradient(180deg, rgba(18, 183, 242, 0.25) 0%, rgba(19, 79, 171, 0.25) 100%)",
          primaryButtonBg: "linear-gradient(180deg, #12B7F2 0%, #134FAB 100%);",
          primaryButtonText: "#fff",
        },
      })}
      btnTitle={"Connect Wallet"}
      modalTitle={"Matar NFT"}
      modalSize={"compact"}
      modalTitleIconUrl={"https://matar-nft.onrender.com/favicon.ico"}
    />
  );
};

export default ConnectWalletBtn;
