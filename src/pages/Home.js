import React from 'react'
import {Web3Provider } from "@ethersproject/providers"
import {injectedConnector} from '../connectors/injectedConnector'
import { useState,useEffect } from 'react'
import {useWeb3React} from "@web3-react/core"
import {Button } from "rebass"
import { Card } from 'rebass'
function Home() {
    const {chainId, account, activate, active,library} = useWeb3React()
    const onClick = async() => {
        activate(injectedConnector)
        
        
      }
    return (
        <>
        {active ? (
            <div>
                Metamask is connected
            </div>

        ):
        <div>
            Please connect MetaMask to continue
            <br/>
            <Button onClick={onClick}>
                Connect
            </Button>
        </div>
        }
        </>

    )
}

export default Home
