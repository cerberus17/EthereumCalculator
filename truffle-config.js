var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "rabbit crater pig labor final garlic client accuse soap vendor swift useless";

module.exports = {
  networks: {
    development: {
      host: "localhost",
	    from: "0x65463bf6268e5cc409b6501ec846487b935a1446",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      host: "https://ropsten.infura.io",
      from: "0x0a78C28257b40d5076eA180Bc6a9e4c597c5EA98",
      port: 8545,
      network_id: "3" // Match any network id
    },
    ropstenI: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/VShyocnCY2wCt5tEottc"),
      from: "0x0a78C28257b40d5076eA180Bc6a9e4c597c5EA98",
      network_id: "3" // Match any network id
    },
    rinkebyI: {
      provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/VShyocnCY2wCt5tEottc"),
      from: "0x25e6c81c823d4e15084f8e93f4d9b7f365c0857d",
      network_id: "4", // Match any network id
      gas: "3000000",
      gasPrice: "2000000000",
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      //from: "0x25e6c81c823d4e15084f8e93f4d9b7f365c0857d",
      from: "0x8280562314a52839af005e0603686c07eb00d68f",
      network_id: "4", // Match any network id
      gas: "3000000",
      gasPrice: "2000000000",
    },
    live: {
      network_id: "1",
      host: "localhost",
      port: 8545,
      gas: "3000000",
      gasPrice: "2000000000",
    },
    liveI: {
      network_id: "1",
      provider: new HDWalletProvider(mnemonic, "https://mainnet.infura.io/VShyocnCY2wCt5tEottc"),
      gas: "300000",
      gasPrice: "2000000000",
    }
  }
};
