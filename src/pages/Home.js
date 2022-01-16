import React from "react";
import { Web3Provider } from "@ethersproject/providers";
import { injectedConnector } from "../connectors/injectedConnector";
import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { Button,Flex,Box } from "rebass";
import { Card } from "rebass";
import ButtonStyled from "../components/button/button"
import  styled from "styled-components";
import CardStyled from "../components/card/card";

const Wrapper = styled.div`
  align-items: center;
  height: 100vh;
  width: 100vw;
  color: white;
ul li
{
    list-style-type: none;
    padding: 20px;
}
a{
    color: white;
    font-size: large;
}

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
<Flex
  sx={{
    flexWrap: 'wrap'
  }}>
  <Box
    sx={{
      p: 3,
      flexGrow: 1,
      flexBasis: 256
    }}>
        
        <CardStyled>
            <div>
                Cherry Blossom
                </div>
        <ul>
            <li>
                <a href="#">My Profile</a>
            </li>
            <li>

                <a href="#">View Guys</a>
            </li>
            <li>

                <a href="#"> View Girls</a>
            </li>
        </ul>
        </CardStyled>
  </Box>
  <Box
    sx={{
      p: 3,
      flexGrow: 99999,
      flexBasis: 0,
      minWidth: 320
    }}>
    Main Content
  </Box>
</Flex>
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
