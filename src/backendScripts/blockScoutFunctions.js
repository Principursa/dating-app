//returns either the balance in rose or an error message
async function getBalance(address) {
	//fetch balance from https://explorer.emerald.oasis.munay.network/api
	try{
	var balance= await fetch('https://explorer.emerald.oasis.munay.network/api/?module=account&action=balance&address='+address);
		//check if response is ok
		if(balance.ok){
			//get json from response
			var balanceJSON= await balance.json()
			//return balance
			return (balanceJSON.result/(10**18))
		}
		else{
			//return error
			throw balanceJSON.status
		}
}
catch(err){
	return 'invalid address'
}
}

//returns the entire json string or an error message
async function getProofOfHumanity(address) {
	//fetch proof of Humanity JSON from 
	try{
	var proofOfHumanity= await fetch('https://api.poh.dev/profiles/'+address);
		//check if response is ok
		if(proofOfHumanity.ok){
			//get json from response
			var proofOfHumanityJSON= await proofOfHumanity.json()
			//return proof of humanity
			return proofOfHumanityJSON
		}
		else{
			//return error
			throw proofOfHumanity.json()
		}
}
catch(err){
	return (err)
}
}

export {getBalance,getProofOfHumanity}
