import Wallet from "../wallet/wallet";
import styled from "styled-components";
import React from 'react'

const Wrapper = styled.div`
  .Navigation {
    background-color: #703042;
    padding-top: 1px;
    width: 100vw;
    padding-bottom: 1px;
    font-size: 1.1rem;
  }
  .ul-center {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    list-style-type: none;
  }
`;


function Header() {

    return (
        <Wrapper>
            <nav className="Navigation">
            <Wallet/>
            </nav>
            
        </Wrapper>

    )
}

export default Header
