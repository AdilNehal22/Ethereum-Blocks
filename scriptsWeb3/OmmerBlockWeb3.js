const Web3 = require('web3');

const webSocketProvider = new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/daf2ac3c93d5408f8ae10fe67c9e9bca');

const web3Ws = new Web3(webSocketProvider);


web3Ws.eth.getUncle(
    '0x913fe526e4d39687e72a58be7e2973ed991e08071a3d5d8f8660382c6f822beb',
    0).then(console.log);

//getUncleCount to get number of uncle blocks. 