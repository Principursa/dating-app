import React, { useEffect, useState } from "react";
import {
  getBalance,
  getProofOfHumanity,
} from "../backendScripts/blockScoutFunctions.js";
import { useWeb3React } from "@web3-react/core";
import { Image } from "rebass";

function Profile() {
  const { chainId, account, activate, active, library } = useWeb3React();
  const [isRegistered, setisRegistered] = useState(false);
  const [pohStatus, setpohStatus] = useState({});
  const [emeraldBalance,setEmeraldBalance]=useState(0);
  const [fantomBalance,setFantomBalance]=useState(0);
  const [bscBalance,setBscBalance]=useState(0);
  let dummyaddress = "0xf49a19f72d0e106df462cfd6b5bebe42b6001616";
useEffect(async () => {
        setFantomBalance(await getBalance('FANTOM',account));
                 setEmeraldBalance(await getBalance('EMERALD',account));
                 setBscBalance(await getBalance('BSC',account));
                  var status=await getProofOfHumanity('0xf49a19f72d0e106df462cfd6b5bebe42b6001616');
  }, []);

  useEffect(async () => {
    var status = await getProofOfHumanity(dummyaddress);
    if (status.status == "REGISTERED") {
      setisRegistered(true);
      setpohStatus(status);
      console.log(status);
    }
  }, []);
  return (
    <>
      {isRegistered ? (
        <div>
            <div>Fantom Balance {fantomBalance}</div>
            <div>Bsc Balance {bscBalance}</div>
	      <div>Rose Balance {emeraldBalance}</div>

          <div>
            <h2>{pohStatus.first_name + " " + pohStatus.last_name}</h2>
          </div>
          <div>#{pohStatus.vanity_id}</div>
          <br />
	      <video controls muted width="250" autoPlay >
    <source src={pohStatus.video} type="video/mp4"/>
    Sorry, your browser doesn't support embedded videos.
</video>
	      <br />
          <div>

	      {/*<Image
              src={pohStatus.photo}
              sx={{
                width: ["50%", "40%"],
                borderRadius: 8,
              }}
            />*/}
          </div>
          <div>
            <a href={pohStatus.bio}>Bio</a>
          </div>
          <div>
            <a href={pohStatus.profile}>Profile</a>
          </div>
        </div>
      ) : (
        <div>
          <h2>
            <a href="https://www.youtube.com/watch?v=PWFNi0ggUdU&ab_channel=UBIBlockchainCollective">
              {" "}
              Not Registered on Proof of Humanity, Click here to find out more
            </a>
          </h2>
          <br />
          <h2>
            <a href="https://www.proofofhumanity.id/">
              {" "}
              Proof of Humanity site
            </a>
          </h2>
        </div>
      )}
    </>
  );
}

export default Profile;
