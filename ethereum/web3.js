import Web3 from 'web3';

let web3;

const getProvider = async () => {
    await window.web3.currentProvider.enable(); // request authentication
  };
  
getProvider();

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
	//We are in the browser and metamask is running.
	web3 = new Web3(window.web3.currentProvider);
} else {
	// We are on the server *OR* the user is not running metamask
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/v3/dec0b65ea2fb43e49511be1c2c1ff992'
	);

	web3 = new Web3(provider);
}

export default web3;