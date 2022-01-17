
import React,{useEffect,useState} from 'react'
import {getBalance,getProofOfHumanity} from '../backendScripts/blockScoutFunctions.js';
import { useWeb3React } from "@web3-react/core";

function Profile() {
    const { chainId, account, activate, active, library } = useWeb3React();
    const [isRegistered, setisRegistered] = useState(false)
    const [pohStatus,setpohStatus]=useState("x");
    let dummyaddress = '0xf49a19f72d0e106df462cfd6b5bebe42b6001616'


    useEffect(async() => {
		  var status=await getProofOfHumanity(account);
          if(status.status == "REGISTERED"){
              setisRegistered(true)
              setpohStatus(JSON.stringify(status));

          }

    }, [])
    return (
        <>
        {
            isRegistered ? (

	    <div>{pohStatus}</div>


            ):
            (
                <div>
                    <a href="https://www.youtube.com/watch?v=PWFNi0ggUdU&ab_channel=UBIBlockchainCollective"> Register your Proof of humanity</a>
                    <br/>
                    <a href="https://www.proofofhumanity.id/"> more info</a>

                </div>

            )

        }
        </>

            
    )
}

export default Profile
