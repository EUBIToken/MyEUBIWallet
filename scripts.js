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
const sendEubiButton = document.getElementById("sendEubiButton");
const sendEubiPreloader = document.getElementById("sendEubiPreloader");
const approveEubiButton = document.getElementById("approveEubiButton");
const hideApprovalOwner = document.getElementById("hideApprovalOwner");
const approvalOwner = document.getElementById("approvalOwner");
const useApprovalCheckbox = document.getElementById("useApprovalCheckbox");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const pass3 = document.getElementById("pass3");
const decryptButton = document.getElementById("decryptButton");
const lockAndStoreMSG = document.getElementById("lockAndStoreMSG");
const customNode = document.getElementById("customNode");
const customNode3 = document.getElementById("customNode3");
const customNode2 = document.getElementById("customNode2");
var walletAddressRAW = "0x0000000000000000000000000000000000000000";
var contractAddress = "0x8AFA1b7a8534D519CB04F4075D3189DF8a6738C1";
var privateKeyRAW = "";
var networkId = 24734;
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}
const collapsibleOptions = [];
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.collapsible');
	var instances = M.Collapsible.init(elems, collapsibleOptions);
});
const loadTokenContractIMPL = function(address){
	return new web3.eth.Contract(JSON.parse('[{"constant": false,"inputs": [{"name": "spender","type": "address"},{"name": "value","type": "uint256"}],"name": "approve","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": false,"inputs": [{"name": "from","type": "address"},{"name": "to","type": "address"},{"name": "value","type": "uint256"}],"name": "transferFrom","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "who","type": "address"}],"name": "balanceOf","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "to","type": "address"},{"name": "value","type": "uint256"}],"name": "transfer","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"constant": true,"inputs": [{"name": "owner","type": "address"},{"name": "spender","type": "address"}],"name": "allowance","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"}]'), address);
};
const createWallet = async function(){
	walletMessage.innerHTML = "Your private key is: " + web3.eth.accounts.create().privateKey + "<br/>Please store the private key somewhere safe, since you need it to unlock your wallet.";
};
const loadTokenContract = function(address){
	loadingTokenContract = loadedTokenContracts[address];
	if(loadingTokenContract == undefined){
		loadingTokenContract = loadTokenContractIMPL(address);
		loadedTokenContracts[address] = loadingTokenContract;
	}
	return loadingTokenContract;
}
const refreshTokenBalance = async function(tokenAddress, tokenBalanceElement, walletAddress, tokenName, decimals){
	loadTokenContract(tokenAddress).methods.balanceOf(walletAddress).call().then(function(value){
		var vl = value.length;
		if(vl > decimals){
			vl -= decimals;
			value = value.substring(0, vl) + "." + value.substring(vl).padEnd(decimals, "0");
		} else{
			value = "0." + value.padStart(decimals, "0");
		}
		tokenBalanceElement.innerHTML = "You have " + value + " " + tokenName + " Tokens";
	}, function(error){
		tokenBalanceElement.innerHTML = "ERROR: Can't load " + tokenName + " balance";
	});
};
const reloadWallet = async function(){
	eubiBalance.innerHTML='Identifying blockchain...';
	nativeBalance.innerHTML='';
	networkId = await web3.eth.getChainId();
	switch(networkId){
		case 24734:
			eubiBalance.innerHTML='Loading EUBI balance...';
			nativeBalance.innerHTML='Loading MintME balance...';
			contractAddress = "0x8AFA1b7a8534D519CB04F4075D3189DF8a6738C1";
			refreshTokenBalance("0x8AFA1b7a8534D519CB04F4075D3189DF8a6738C1", eubiBalance, walletAddressRAW, "EUBI", 12);
			web3.eth.getBalance(walletAddressRAW).then(function(value){
				var vl = value.length;
				if(vl > 18){
					vl -= 18;
					value = value.substring(0, vl) + "." + value.substring(vl).padEnd(18, "0");
				} else{
					value = "0." + value.padStart(18, "0");
				}
				nativeBalance.innerHTML = "You have " + value + " MintME to pay for gas";
			}, function(error){
				nativeBalance.innerHTML = "ERROR: Can't load MintME balance!";
			});
			break;
		case 56:
			eubiBalance.innerHTML='Loading bEUBI balance...';
			nativeBalance.innerHTML='Loading BNB balance...';
			contractAddress = "0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D";
			refreshTokenBalance("0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D", eubiBalance, walletAddressRAW, "bEUBI", 18);
			web3.eth.getBalance(walletAddressRAW).then(function(value){
				var vl = value.length;
				if(vl > 18){
					vl -= 18;
					value = value.substring(0, vl) + "." + value.substring(vl).padEnd(18, "0");
				} else{
					value = "0." + value.padStart(18, "0");
				}
				nativeBalance.innerHTML = "You have " + value + " BNB to pay for gas";
			}, function(error){
				nativeBalance.innerHTML = "ERROR: Can't load BNB balance!";
			});
			break;
		default:
			eubiBalance.innerHTML = "EUBI is not deployed on this blockchain!";
			nativeBalance.innerHTML='Loading unknown balance...';
			web3.eth.getBalance(walletAddressRAW).then(function(value){
				var vl = value.length;
				if(vl > 18){
					vl -= 18;
					value = value.substring(0, vl) + "." + value.substring(vl).padEnd(18, "0");
				} else{
					value = "0." + value.padStart(18, "0");
				}
				nativeBalance.innerHTML = "You have " + value + " unknown to pay for gas";
			}, function(error){
				nativeBalance.innerHTML = "ERROR: Can't load unknown balance!";
			});
			break;
	}
};
const loadWallet = async function(){
	walletMessage.innerHTML = "Loading wallet...";
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
		beforeWalletLoad.style.display = "none";
		myWalletAddress.innerHTML = "Your wallet address is: " + walletAddressRAW;
		afterWalletLoad.style.display = "block";
		reloadWallet();
	}
};
const loadWallet2 = async function(){
	walletMessage.innerHTML = "Decrypting and loading wallet...";
	var walletStorage = localStorage.getItem('savedeubiwallet');
	if (walletStorage == null){
		walletMessage.innerHTML = "Quick wallet access not yet set up!";
	} else{
		try{
			loadedAccount = web3.eth.accounts.decrypt(walletStorage, pass3.value);
			privateKeyRAW = loadedAccount.privateKey;
		} catch(err){
			loadedAccount = null;
		}
		if(loadedAccount == null){
			walletMessage.innerHTML = "Can't load wallet!";
		} else{
			walletAddressRAW = loadedAccount.address;
			beforeWalletLoad.style.display = "none";
			myWalletAddress.innerHTML = "Your wallet address is: " + walletAddressRAW;
			afterWalletLoad.style.display = "block";
			reloadWallet();
		}
	}
};
const convDecimalToRaw = function(value, decimals){
	value = value.split(".");
	if(value.length == 1){
		value[1] = '0';
	}
	return new BigInt(value[0]).mul(rawUnitsToken).add(new BigInt(value[1].padEnd(decimals, "0"))).toString();
};
const sendeubitx = async function(meth){
	sendEubiButton.disabled = true;
	approveEubiButton.disabled = true;
	sendEubiPreloader.style.visibility = "visible";
	//write transaction
	sendEubiMessage.innerHTML = "Writing transaction...";
	var transaction = {};
	var decimals = 12;
	var contractAddress2 = "0x8AFA1b7a8534D519CB04F4075D3189DF8a6738C1";
	switch(networkId){
		case 24734:
			break;
		case 56:
			decimals = 18;
			contractAddress2 = "0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D";
			break;
		default:
			sendEubiMessage.innerHTML = "EUBI is not deployed on this blockchain!";
			sendEubiButton.disabled = false;
			approveEubiButton.disabled = false;
			sendEubiPreloader.style.visibility = "hidden";
			return;
	}
	if(useApprovalCheckbox.checked){
		transaction.data = loadedTokenContracts[contractAddress2].methods.transferFrom(approvalOwner.value, sendto.value, convDecimalToRaw(eubiamount.value, decimals)).encodeABI();
	} else{
		transaction.data = loadedTokenContracts[contractAddress2].methods[meth](sendto.value, convDecimalToRaw(eubiamount.value, decimals)).encodeABI();
	}
	transaction.gas = "100000"
	transaction.to = contractAddress2;
	transaction.privateKey = privateKeyRAW;
	sendEubiMessage.innerHTML = "Signing transaction...";
	//sign and send transaction
	web3.eth.accounts.signTransaction(transaction, privateKeyRAW).then(function(value){
		sendEubiMessage.innerHTML = "Sending transaction...";
		web3.eth.sendSignedTransaction(value.rawTransaction).then(function(value){
			if(value === null){
				sendEubiMessage.innerHTML = "Transaction sent successfully!";
				sendEubiButton.disabled = false;
				approveEubiButton.disabled = false;
				sendEubiPreloader.style.visibility = "hidden";
			} else{
				if(decimals == 12){
					sendEubiMessage.innerHTML = "Transaction sent successfully! <a href=\"https://www.mintme.com/explorer/tx/" + value.transactionHash + "\">view on blockchain explorer</a>";
				} else{
					sendEubiMessage.innerHTML = "Transaction sent successfully! <a href=\"https://www.bscscan.com/tx/" + value.transactionHash + "\">view on blockchain explorer</a>";
				}
				sendEubiButton.disabled = false;
				approveEubiButton.disabled = false;
				sendEubiPreloader.style.visibility = "hidden";
			}
			reloadWallet();
		}, function(error){
			sendEubiMessage.innerHTML = "Can't send transaction!";
			sendEubiButton.disabled = false;
			approveEubiButton.disabled = false;
			sendEubiPreloader.style.visibility = "hidden";
			reloadWallet();
		});
	}, function(error){
		sendEubiMessage.innerHTML = "Can't sign transaction!";
		sendEubiButton.disabled = false;
		approveEubiButton.disabled = false;
		sendEubiPreloader.style.visibility = "hidden";
	});
};
const encryptAndStore = async function(){
	lockAndStoreMSG.innerHTML = "Encrypting and storing wallet...";
	var password2 = pass1.value;
	if(pass2.value == password2){
		localStorage.setItem("savedeubiwallet", JSON.stringify(web3.eth.accounts.encrypt(privateKeyRAW, password2)));
		lockAndStoreMSG.innerHTML = "Wallet encrypted and stored!";
	} else{
		lockAndStoreMSG.innerHTML = "The two passwords doesn't match!";
	}
};
const selectBlockchain = async function(blockchain){
	switch(blockchain){
		case "MintME1":
			customNode.style.display = "none";
			customNode3.style.display = "none";
			web3.setProvider("https://node1.mintme.com:443");
			reloadWallet();
			break;
		case "MintME2":
			customNode.style.display = "none";
			customNode3.style.display = "none";
			web3.setProvider("https://node2.mintme.com:443");
			reloadWallet();
			break;
		case "BinanceSmartChain":
			customNode.style.display = "none";
			customNode3.style.display = "none";
			web3.setProvider("https://bsc-dataseed.binance.org/");
			reloadWallet();
			break;
		case "CustomNode":
			customNode.style.display = "block";
			customNode3.style.display = "block";
			break;
		default:
			web3.setProvider(customNode2.value);
			reloadWallet();
			break;
	}
};
const logout = async function(){
	loadedAccount = null;
	privateKeyRAW = "";
	walletAddressRAW = "0x0000000000000000000000000000000000000000";
	privateKey.value = "";
	pass3.value = "";
	walletMessage.innerHTML = "Wallet unloaded!";
	afterWalletLoad.style.display = "none";
	beforeWalletLoad.style.display = "block";
};
const checkAllowance = async function(){
	if(useApprovalCheckbox.checked){
		switch(networkId){
			case 24734:
				loadTokenContract(contractAddress).methods.allowance(approvalOwner.value, walletAddressRAW).call().then(function(value){
					var vl = value.length;
					var decimals = 12;
					if(vl > decimals){
						vl -= decimals;
						value = value.substring(0, vl) + "." + value.substring(vl).padEnd(decimals, "0");
					} else{
						value = "0." + value.padStart(decimals, "0");
					}
					sendEubiMessage.innerHTML = "Your remaining allowance: " + value + " EUBI";
				}, function(error){
					sendEubiMessage.innerHTML = "ERROR: Can't query allowance";
				});
				break;
			case 56:
				loadTokenContract(contractAddress).methods.allowance(approvalOwner.value, walletAddressRAW).call().then(function(value){
					var vl = value.length;
					var decimals = 18;
					if(vl > decimals){
						vl -= decimals;
						value = value.substring(0, vl) + "." + value.substring(vl).padEnd(decimals, "0");
					} else{
						value = "0." + value.padStart(decimals, "0");
					}
					sendEubiMessage.innerHTML = "Your remaining allowance: " + value + " bEUBI";
				}, function(error){
					sendEubiMessage.innerHTML = "ERROR: Can't query allowance";
				});
				break;
			default:
				sendEubiMessage.innerHTML = "EUBI is not deployed on this blockchain!";
				break;
		}
	} else{
		switch(networkId){
			case 24734:
				loadTokenContract(contractAddress).methods.allowance(walletAddressRAW, sendto.value).call().then(function(value){
					var vl = value.length;
					var decimals = 12;
					if(vl > decimals){
						vl -= decimals;
						value = value.substring(0, vl) + "." + value.substring(vl).padEnd(decimals, "0");
					} else{
						value = "0." + value.padStart(decimals, "0");
					}
					sendEubiMessage.innerHTML = "Remaining allowance: " + value + " EUBI";
				}, function(error){
					sendEubiMessage.innerHTML = "ERROR: Can't query allowance";
				});
				break;
			case 56:
				loadTokenContract(contractAddress).methods.allowance(walletAddressRAW, sendto.value).call().then(function(value){
					var vl = value.length;
					var decimals = 18;
					if(vl > decimals){
						vl -= decimals;
						value = value.substring(0, vl) + "." + value.substring(vl).padEnd(decimals, "0");
					} else{
						value = "0." + value.padStart(decimals, "0");
					}
					sendEubiMessage.innerHTML = "Remaining allowance: " + value + " bEUBI";
				}, function(error){
					sendEubiMessage.innerHTML = "ERROR: Can't query allowance";
				});
				break;
			default:
				sendEubiMessage.innerHTML = "EUBI is not deployed on this blockchain!";
				break;
		}
	}
};