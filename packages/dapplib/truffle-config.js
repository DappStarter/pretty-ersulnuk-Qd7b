require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name razor six huge hockey inhale food giggle'; 
let testAccounts = [
"0x9142b02fec006deba56796cc9b6a61d50136405c44f60d6a334854390938194b",
"0x5d58889d5403d5093432ba4c753e74fb87d8efb4d22fcf555690c7316b523c47",
"0x4e7349ed9629a0f5e60594d9eba0ca307870bd082d0f418562ad027511c29596",
"0xd5995ed9a16ea981ba0f7018a40c12e506af132925893553817dcc0c60f889b8",
"0x79fa0365228ba46d942f92d62b1af493694c9a19c86d322883d52e2eb5dc435c",
"0x7c151931c68f677f5407a29806a0189b8633fe186ee794e8cf19886e8775fccd",
"0xbca21146cd1a4c1b7aef0464e35f4e933e5e637c02fe54f74e3eba1e7ae6f7a4",
"0x6de2491458c748081e9992c9b18bb4ce6930f6f177c0f94552a54e998a06b96f",
"0xacbf6b53b19bda07d72c7d9f17a829c1611bc29b385809ba9feb91a0b61c80a0",
"0xb38c6d56fa1f1bd6f6342984d02248adeec5772a4e22754ab3b41c7be6816f13"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

