
import React,{useEffect,useState} from 'react'
import {getBalance,getProofOfHumanity} from '../backendScripts/blockScoutFunctions.js';
import { useWeb3React } from "@web3-react/core";

function Main() {
const [emeraldBalance,setEmeraldBalance]=useState(0);
const [fantomBalance,setFantomBalance]=useState(0);
const [polygonBalance,setPolygonBalance]=useState(0);
const [pohStatus,setpohStatus]=useState("x");
  const { chainId, account, activate, active, library } =
    useWeb3React();
useEffect(async () => {
	setFantomBalance(await getBalance('FANTOM',account));
		 setEmeraldBalance(await getBalance('EMERALD',account));
		 setPolygonBalance(await getBalance('POLYGON',account));
		  var status=await getProofOfHumanity('0xf49a19f72d0e106df462cfd6b5bebe42b6001616');
		  console.log(status)
		  setpohStatus(JSON.stringify(status));
  }, []);

    return (
	    <>
        <div>
        </div>
	    <div>Rose Balance {emeraldBalance}</div>
	    <div>Fantom Balance {fantomBalance}</div>
	    <div>Polygon Balance {polygonBalance}</div>
	    <div> Proof Of Humanity Infobelow</div>
	    <div>{pohStatus}</div>
	 </>
    )
}

export default Main
