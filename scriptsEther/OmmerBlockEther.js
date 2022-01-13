const ethers = require('ethers');
const wssUrl = 'wss://mainnet.infura.io/ws/v3/daf2ac3c93d5408f8ae10fe67c9e9bca';

//await provider.getBlockWithTransactions(100004) can also be used

async function init() {
    const myWSSProvider = new ethers.providers.JsonRpcProvider(wssUrl)

    //giving the hash of uncle block, got it from etherscan. 
    const ommerBlock = await myWSSProvider.getBlock(
        '0x3c174a8f0a5cbf3e3defd68394843760696b5ee6938846d8cf1516a376d400bd');

    console.log(ommerBlock);
}

init();

