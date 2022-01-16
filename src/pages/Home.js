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
import Header from "../components/header/Header";

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  color: white;
*::selection {
  background-color: orangered;
}
ul li
{
    display: flex;
    list-style-type: none;
    padding: 20px;
}
a{
    color: white;
    font-size: medium;
    text-decoration: none;

}
a:hover{
    transition: all .2s ease-out;
    color: orange;
    font-size: large;
}

.Main{
    background-color: black;
}
.connect{
    padding: 40px;
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
              <Header/>
<Flex
  sx={{
    flexWrap: 'wrap',
  }}>
  <Box
    sx={{
      p: 3,
      flexGrow: 1,
      flexBasis: 350
    }}>
        
        <CardStyled>
            <div>
                <h2>
                Cherry Blossom
                </h2>
                </div>
        <ul>
            <li>
                <a href="#">
                    <h3>
                        My Profile
                    </h3>
                </a>
            </li>
            <li>

                <a href="#">
                    <h3>
                    View Guys
                    </h3>
                    </a>
            </li>
            <li>

                <a href="#"> 
                <h3>
                View Girls
                </h3>
                </a>
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
        <CardStyled>
            Main Content
        </CardStyled>
  </Box>
</Flex>
        </Wrapper>
      ) : (
        <Wrapper>

          <div className="connect">
            Please connect MetaMask to continue
            <br />
            <br />
            <ButtonStyled onClick={onClick}>Connect</ButtonStyled>
          </div>
        </Wrapper>
      )}
    </>
  );
}

export default Home;
