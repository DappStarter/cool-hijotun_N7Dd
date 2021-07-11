require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food make release saddle modify hotel light army genius'; 
let testAccounts = [
"0x80e6ff18f091580e6efd0d0537e797bb089cd578f8acf888ce122aefa7f92952",
"0x1475b90c07f36c3da7d7eaf82990aa4ca7eeaced1e10a2afb4000c2df51feb04",
"0x64ad9b163cf7df0757f88e9436be4858e68777325f7bf9513407b313e78b58ff",
"0x00ff1c6721389b781dcbaba299bbcb20ba236ff6a83159d0ac01893ca395590d",
"0xea05ec5d23ef86fd11520fe6fc56748bf329f47b1ef5d95a94c5bcac6a9c1314",
"0x673828c5977177325a26b4abda5fa48a434f1afdc797d2ca7b8db8477c028d1d",
"0xc4ccf035851158795fe44bb99a78ee03f04f312cc345ec97fb9cf7a4bfa5e99c",
"0x981ca667b404eaba44fa302d8db87c11bcadadff3355f82ad1d1b7c08d5d3cf5",
"0x1a3452747115920e13e70f97e3f5129bedea61eed31065f09cd6a2ed5296c545",
"0xad62e74a701e6593cbcc540e96db08b4d259358a0bfccb7dd95b1bef67e90c50"
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

