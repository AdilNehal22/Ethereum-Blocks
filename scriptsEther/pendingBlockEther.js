const ethers = require('ethers');
const wssUrl = 'wss://mainnet.infura.io/ws/v3/daf2ac3c93d5408f8ae10fe67c9e9bca';

//from docs of ether.js
// provider.getTransaction( hash ) ⇒ Promise< TransactionResponse >source
// Returns the transaction with hash or null if the transaction is unknown.

// If a transaction has not been mined, this method will search the transaction pool. Various backends may have more restrictive transaction pool access (e.g. if the gas price is too low or the transaction was only recently sent and not yet indexed) in which case this method may also return null.

const init = () => {

    //Instantiating an ethers WebSocketProvider instance.
    const myWSSProvider = new ethers.providers.WebSocketProvider(wssUrl);

    //Creating an event listener for pending transactions that will run each time a new 
    //transaction hash is sent from the node.
    myWSSProvider.on('pending', (tx)=>{
        myWSSProvider.getTransaction(tx).then(function(transaction){
            //returns promise, so consoling it. 
            console.log(transaction);
        });
    });

}

init();