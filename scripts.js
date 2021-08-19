const web3 = new Web3("https://node1.mintme.com:443");
const walletMessage = document.getElementById("walletMessage");
const sendEubiMessage = document.getElementById("sendEubiMessage");
const eubiamount = document.getElementById("eubiamount");
const myWalletAddress = document.getElementById("myWalletAddress");
const afterWalletLoad = document.getElementById("afterWalletLoad");
const privateKey = document.getElementById("privateKey");
const beforeWalletLoad = document.getElementById("beforeWalletLoad");
const sendto = document.getElementById("sendto");
const eubiBalance = document.getElementById("eubiBalance");
const loadedTokenContracts = [];
var loadedAccount = null;
const BigInt = web3.utils.BN;
const rawUnitsToken = new BigInt("1000000000000");
const nativeBalance = document.getElementById("nativeBalance");
var walletAddressRAW = "0x0000000000000000000000000000000000000000";
var privateKeyRAW = "";
const loadTokenContractIMPL = function(address){
	return new web3.eth.Contract(JSON.parse('[{"constant": false,"inputs": [{"name": "spender","type": "address"},{"name": "value","type": "uint256"}],"name": "approve","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [],"name": "totalSupply","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "from","type": "address"},{"name": "to","type": "address"},{"name": "value","type": "uint256"}],"name": "transferFrom","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "who","type": "address"}],"name": "balanceOf","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "to","type": "address"},{"name": "value","type": "uint256"}],"name": "transfer","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "owner","type": "address"},{"name": "spender","type": "address"}],"name": "allowance","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"anonymous": false,"inputs": [{"indexed": true,"name": "from","type": "address"},{"indexed": true,"name": "to","type": "address"},{"indexed": false,"name": "value","type": "uint256"}],"name": "Transfer","type": "event"},{"anonymous": false,"inputs": [{"indexed": true,"name": "owner","type": "address"},{"indexed": true,"name": "spender","type": "address"},{"indexed": false,"name": "value","type": "uint256"}],"name": "Approval","type": "event"}]'), address);
};
const createWallet = async function(){
	walletMessage.innerHTML = "Your private key is: " + web3.eth.accounts.create().privateKey + "<br/>Please store the private key somewhere safe, since you need it to unlock your wallet.";
};
const refreshTokenBalance = async function(tokenAddress, tokenBalanceElement, walletAddress, tokenName){
	loadingTokenContract = loadedTokenContracts[tokenAddress];
	if(loadingTokenContract == undefined){
		loadingTokenContract = loadTokenContractIMPL(tokenAddress);
		loadedTokenContracts[tokenAddress] = loadingTokenContract;
	}
	loadingTokenContract.methods.balanceOf(walletAddress).call().then(function(value){
		vl = value.length;
		if(vl > 12){
			vl -= 12;
			value = value.substring(0, vl) + "." + value.substring(vl).padEnd(12, "0");
		} else{
			value = "0." + value.padStart(12, "0");
		}
		tokenBalanceElement.innerHTML = "You have " + value + " " + tokenName + " Tokens";
	}, function(error){
		tokenBalanceElement.innerHTML = "ERROR: Can't load " + tokenName + " balance";
	});
};
const reloadWallet = async function(){
	myWalletAddress.innerHTML = "Your wallet address is: " + walletAddressRAW;
	afterWalletLoad.style.visibility = "visible";
	refreshTokenBalance("0x8AFA1b7a8534D519CB04F4075D3189DF8a6738C1", eubiBalance, walletAddressRAW, "EUBI");
	web3.eth.getBalance(walletAddressRAW).then(function(value){
		vl = value.length;
		if(vl > 18){
			vl -= 18;
			value = value.substring(0, vl) + "." + value.substring(vl).padEnd(18, "0");
		} else{
			value = "0." + value.padStart(18, "0");
		}
		nativeBalance.innerHTML = "You have " + value + " MintME to pay for gas";
	}, function(error){
		nativeBalance.innerHTML = "ERROR: Can't load MintME balance";
	});
};
const loadWallet = async function(){
	privateKeyRAW = privateKey.value;
	try{
		loadedAccount = web3.eth.accounts.privateKeyToAccount(privateKeyRAW);
	} catch(err){
		loadedAccount = null;
	}
	if(loadedAccount == null){
		walletMessage.innerHTML = "Can't load wallet";
	} else{
		walletAddressRAW = loadedAccount.address;
		beforeWalletLoad.remove();
		reloadWallet();
	}
};
const showInnerMenu = async function(menu){
	var temp = async function(menu1, menu2){
		if(menu1 == menu2){
			document.getElementById(menu1).style.visibility = "visible";
		} else{
			document.getElementById(menu1).style.visibility = "hidden";
		}
	};
	temp("sendeubi", menu);
};
const convDecimalToRaw = function(value){
	value = value.split(".");
	if(value.length == 1){
		value[1] = '0';
	}
	return new BigInt(value[0]).mul(rawUnitsToken).add(new BigInt(value[1].padEnd(12, "0"))).toString();
};
const sendeubitx = async function(){
	//write transaction
	var transaction = {};
	transaction.data = loadedTokenContracts["0x8AFA1b7a8534D519CB04F4075D3189DF8a6738C1"].methods.transfer(sendto.value, convDecimalToRaw(eubiamount.value)).encodeABI();
	transaction.gas = "60000"
	transaction.to = "0x8AFA1b7a8534D519CB04F4075D3189DF8a6738C1";
	transaction.from = walletAddressRAW;
	//sign transaction
	web3.eth.accounts.signTransaction(transaction, privateKeyRAW).then(function(value){
		web3.eth.sendSignedTransaction(value.rawTransaction).then(function(value){
			window.alert("Transaction sent successfully!");
		}, function(error){
			window.alert("Can't send transaction!");
		});
	}, function(error){
		window.alert("Can't sign transaction!");
	});
};