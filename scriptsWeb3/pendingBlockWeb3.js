const Web3 = require('web3');

const webSocketProvider = new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws/v3/daf2ac3c93d5408f8ae10fe67c9e9bca');

const web3Ws = new Web3(webSocketProvider);


const subscriptions = web3Ws.eth.subscribe('pendingTransactions', function(error, result){
    if (!error)
        console.log(result);
}).on("data", function(transaction){
    console.log(transaction);
});




// const web3 = new Web3(window.ethereum);
// window.ethereum.enable();




