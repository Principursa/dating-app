import React from "react";
import { Web3Provider } from "@ethersproject/providers";
import { injectedConnector } from "../connectors/injectedConnector";
import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { Button } from "rebass";
import { Card } from "rebass";
import ButtonStyled from "../components/button/button"
import  styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  width: 100vw;
  color: white;
`;
function Home() {
  const { chainId, account, activate, active, library } = useWeb3React();
  const onClick = async () => {
    activate(injectedConnector);
  };
  return (
    <>
      {active ? (
        <Wrapper>
          <Card>
            <div>Metamask is connected</div>
          </Card>
        </Wrapper>
      ) : (
        <Wrapper>
          <Card>
            Please connect MetaMask to continue
            <br />
            <br />
            <ButtonStyled onClick={onClick}>Connect</ButtonStyled>
          </Card>
        </Wrapper>
      )}
    </>
  );
}

export default Home;
