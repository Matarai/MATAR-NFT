import React from "react";
import { Button, Col, Container, ProgressBar, Row } from "react-bootstrap";
import { Navtop } from "../components/Navtop";
import { nftSales } from "../translated-content/nftsales";
import NFTcards from "../assets/NFT CARDS.png";
import ConnectWalletBtn from "../components/ConnectWalletBtn";
import { SidebarNav } from "../components/SidebarNav";
import { isMobile, isTablet } from "react-device-detect";
import MobileNav from "../components/MobileNav";
import { useSelector } from "react-redux";
import { MobileFooter } from "../components/MobileFooter";
import {
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
  useNetwork,
  useNetworkMismatch,
} from "@thirdweb-dev/react";
import { toast } from "sonner";

export const NFTSales = () => {
  const { currentLanguage, rltStatus } = useSelector((state) => state.login);
  const [nftCount, setNftCount] = React.useState(1);
  const [loading, setLoading] = React.useState(false);

  const address = useAddress();
  const isMismatched = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  const { contract } = useContract(process.env.REACT_APP_CONTRACT_ADDRESS);
  const { contract: tokenConract } = useContract(
    process.env.REACT_APP_MATAR_TOKEN_ADDRESS
  );

  // Token Contract Read and Write
  const { data: allowance, isLoading: allowanceLoading } = useContractRead(
    tokenConract,
    "allowance",
    [address, process.env.REACT_APP_CONTRACT_ADDRESS]
  );
  const { mutateAsync: approve, isLoading: approveLoading } = useContractWrite(
    tokenConract,
    "approve"
  );
  const approveHandler = async (_amount) => {
    try {
      const data = await approve({
        args: [process.env.REACT_APP_CONTRACT_ADDRESS, _amount],
      });
      toast.success("Approved successfully");
    } catch (err) {
      console.error("contract call failure", err);
      toast.error(err.reason.toUpperCase() || "Failed to approve");
    }
  };

  // NFT Contract Read and Write
  const { data: totalMinted, isLoading: totalMintedLoading } = useContractRead(
    contract,
    "totalSupply"
  );
  const { data: maxSupply, isLoading: maxSupplyLoading } = useContractRead(
    contract,
    "maxSupply"
  );
  const { data: cost, isLoading: costLoading } = useContractRead(
    contract,
    "cost"
  );
  const { mutateAsync: mint, isLoading } = useContractWrite(contract, "mint");

  const mintHandler = async () => {
    // Network check
    if (isMismatched) {
      toast.error("Wrong Network try again", {
        position: "top-right",
      });
      // Prompt their wallet to switch networks
      switchNetwork(Number(process.env.REACT_APP_ACTIVE_CHAIN_ID));
      return;
    }
    setLoading(true);
    try {
      // Allowance check
      const totalCost = cost.mul(nftCount);
      if (allowance.lt(totalCost)) {
        toast.error("Insufficient MATAR allowance");
        await approveHandler(totalCost);
        setLoading(false);
        return;
      }

      // Mint
      const data = await mint({ args: [address, nftCount] });
      toast.success("Success!", {
        action: {
          label: "View",
          onClick: () => {
            window.open(
              `https://testnet.bscscan.com/tx/${data.receipt.transactionHash}`
            );
          },
        },
      });
      setLoading(false);
    } catch (err) {
      console.error("contract call failure", err);
      toast.error(err.reason.toUpperCase() || "Failed to mint");
    }
  };

  const handleIncrement = () => {
    setNftCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (nftCount === 1) return;
    setNftCount((prevCount) => prevCount - 1);
  };

  return (
    <main
      className={!rltStatus ? "d-flex w-100" : "d-flex flex-row-reverse w-100"}
    >
      <SidebarNav />
      <div className={`main ${isMobile && "text-center"}`}>
        {isMobile ? <MobileNav /> : <Navtop />}
        {isMobile && (
          <h1 className="fm-Russo f-64 mb-50 animate__animated animate__fadeInUp">
            {nftSales[currentLanguage].title}
          </h1>
        )}
        <Container>
          <Row
            className={`${isMobile && "flex-column-reverse mb-5"} ${
              rltStatus ? "mb-160 flex-row-reverse" : "mb-160"
            }`}
          >
            <Col className={rltStatus && "text-end"}>
              {!isMobile && (
                <h1 className="fm-Russo f-64 mb-50 animate__animated animate__fadeInUp">
                  {nftSales[currentLanguage].title}
                </h1>
              )}
              {isMobile && (
                <img src={NFTcards} alt="NFTcards" className="w-100 my-5" />
              )}
              <p className="f-20 fm-Manjari mb-75 animate__animated animate__fadeInUp">
                {nftSales[currentLanguage].description}
              </p>
              <div
                className={`mb-85 d-flex animate__animated animate__zoomIn ${
                  currentLanguage === "arabic" && "flex-row-reverse"
                }`}
              >
                <Button className="f-20 fm-Russo me-3 borderRadius mb-0 bg-primary">
                  {nftSales[currentLanguage].btn1}
                </Button>
                <Button variant="outline-primary f-20 fm-Russo rounded-0 px-5 me-3">
                  {nftSales[currentLanguage].btn2}
                </Button>
              </div>
              <div className={!rltStatus ? "my-5 text-start" : "my-5 text-end"}>
                <Row>
                  {currentLanguage === "arabic" &&
                    nftSales[currentLanguage].steps
                      .toReversed()
                      .map((step, index) => (
                        <Col
                          key={index}
                          className={`animate__animated animate__fadeInUp animate__delay-${
                            nftSales[currentLanguage].steps.length - index - 1
                          }s`}
                        >
                          <div>
                            <span className="fm-Keania f-35 tile p-2 mb-30">
                              {step.count}
                            </span>
                            <div
                              className={`${
                                index === 2 ? "mt-30" : `borderRight mt-30 pe-2`
                              } ${isMobile && "pe-2"}`}
                            >
                              <h3 className="f-16 fm-Russo">{step.title}</h3>
                              <p className="fm-Manjari f-12">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </Col>
                      ))}
                  {currentLanguage !== "arabic" &&
                    nftSales[currentLanguage].steps.map((step, index) => (
                      <Col
                        key={index}
                        className={`animate__animated animate__fadeInUp animate__delay-${index}s`}
                      >
                        <div>
                          <span className="fm-Keania f-35 tile p-2 mb-30">
                            {step.count}
                          </span>
                          <div
                            className={`${
                              index === 2 ? "mt-30" : "borderRight mt-30"
                            } ${isMobile && "pe-2"}`}
                          >
                            <h3 className="f-16 fm-Russo">{step.title}</h3>
                            <p className="fm-Manjari f-12">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </Col>
                    ))}
                </Row>
              </div>
            </Col>
            <Col>
              <div className="box-shadow pt-4 pb-3 animate__animated animate__zoomIn px-3">
                <Container>
                  <h2 className="f-40 text-center fm-Russo">Mint is Live!</h2>
                  <div className="text-center mt-45 mb-5">
                    <img
                      src={NFTcards}
                      alt="NFTcards"
                      className=""
                      style={{ width: "90%" }}
                    />
                  </div>
                  <div className="input-file p-2">
                    <Row>
                      <Col>
                        {" "}
                        <p className="mb-0 f-14 text-start">Total</p>
                      </Col>
                      <Col>
                        {" "}
                        <p className="mb-0 f-14 text-end">$100 MATAR + GAS</p>
                      </Col>
                    </Row>
                  </div>

                  <div className="mt-2">
                    <Row className="nftSalesMinterCard">
                      <Col>
                        <div className="d-flex input-file">
                          <div
                            className="p-2 px-4 cursor-pointer"
                            onClick={handleDecrement}
                          >
                            -
                          </div>
                          <div
                            className="p-2 w-100 text-center"
                            style={{
                              borderLeft: "2px solid rgba(255, 255, 255, 0.25)",
                              borderRight:
                                "2px solid rgba(255, 255, 255, 0.25)",
                            }}
                          >
                            {nftCount}
                          </div>
                          <div
                            className="p-2 px-4 cursor-pointer"
                            onClick={handleIncrement}
                          >
                            +
                          </div>
                        </div>
                      </Col>
                      <Col className="my-auto fm-Russo">
                        {address ? (
                          <Button
                            className="w-100 borderRadius bg-primary"
                            variant="primary"
                            onClick={mintHandler}
                            disabled={loading}
                          >
                            {isLoading ? "Minting..." : "Mint"}
                          </Button>
                        ) : (
                          <ConnectWalletBtn width={"w-100"} />
                        )}
                      </Col>
                    </Row>
                    <ProgressBar
                      now={
                        !totalMintedLoading && !maxSupplyLoading
                          ? (totalMinted.toNumber() / maxSupply.toNumber()) *
                            100
                          : 0
                      }
                      className="mt-25"
                    />
                    <div className="d-flex justify-content-between mt-2 f-14">
                      <p className="mb-0">Total Minted</p>
                      <p className="mb-0">
                        {!totalMintedLoading && !maxSupplyLoading
                          ? (
                              (totalMinted.toNumber() / maxSupply.toNumber()) *
                              100
                            ).toFixed(2)
                          : 0}
                        % ({totalMintedLoading ? "..." : totalMinted.toString()}
                        / {maxSupplyLoading ? "..." : maxSupply.toString()})
                      </p>
                    </div>
                  </div>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
        {isMobile || isTablet ? <MobileFooter /> : null}
      </div>
    </main>
  );
};
