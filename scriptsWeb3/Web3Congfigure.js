const Web3 = require('web3');

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined' ) {
    //then we are in browser and metamask is running
    web3 = new Web3(window.ethereum);

} else {
    //we are on server or user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/daf2ac3c93d5408f8ae10fe67c9e9bca'
    );
    web3 = new Web3(provider);
}

module.exports = web3;