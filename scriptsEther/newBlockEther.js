const ethers = require('ethers');
const wssUrl = 'wss://mainnet.infura.io/ws/v3/daf2ac3c93d5408f8ae10fe67c9e9bca';

const provider = new ethers.providers.WebSocketProvider(wssUrl);

provider.getBlock("latest").then(console.log);

//provider.getBlock("pending").then(console.log); 

//providerAPI docs