'use strict';
M['AutoInit']();
const beforeWalletLoad = document['getElementById']('beforeWalletLoad'),
	MintMESelector = document['getElementById']('MintMESelector'),
	loadmode1 = document['getElementById']('loadmode1'),
	loadmode2 = document['getElementById']('loadmode2'),
	epkb = document['getElementById']('epkb'),
	privateKey = document['getElementById']('privateKey'),
	loadmode3 = document['getElementById']('loadmode3'),
	listofwallets = document['getElementById']('listofwallets'),
	pass3 = document['getElementById']('pass3'),
	storedWalletName2 = document['getElementById']('storedWalletName2'),
	afterWalletLoad = document['getElementById']('afterWalletLoad'),
	hideApprovalOwner = document['getElementById']('hideApprovalOwner'),
	approvalOwner = document['getElementById']('approvalOwner'),
	sendto = document['getElementById']('sendto'),
	eubiamount = document['getElementById']('eubiamount'),
	useApprovalCheckbox = document['getElementById']('useApprovalCheckbox'),
	sendEubiButton = document['getElementById']('sendEubiButton'),
	approveEubiButton = document['getElementById']('approveEubiButton'),
	CoinTypeText = document['getElementById']('CoinTypeText'),
	sendtoNative = document['getElementById']('sendtoNative'),
	NativeAmount = document['getElementById']('NativeAmount'),
	LiquidityToken2 = document['getElementById']('LiquidityToken2'),
	sendNativeButton = document['getElementById']('sendNativeButton'),
	sendNativeMessage = document['getElementById']('sendNativeMessage'),
	sendNativePreloader = document['getElementById']('sendNativePreloader'),
	pass1 = document['getElementById']('pass1'),
	pass2 = document['getElementById']('pass2'),
	storedWalletName = document['getElementById']('storedWalletName'),
	lockAndStoreMSG = document['getElementById']('lockAndStoreMSG'),
	myWalletAddress = document['getElementById']('myWalletAddress'),
	eubiBalance = document['getElementById']('eubiBalance'),
	nativeBalance = document['getElementById']('nativeBalance'),
	dividendsMenu = document['getElementById']('dividendsMenu'),
	pendingDividends = document['getElementById']('pendingDividends'),
	stakedTokensText = document['getElementById']('stakedTokensText'),
	burnedTokensText = document['getElementById']('burnedTokensText'),
	BrowserStoredWallet = document['getElementById']('BrowserStoredWallet'),
	NGAmount = document['getElementById']('NGAmount'),
	withdrawDividendButton = document['getElementById']('withdrawDividendButton'),
	unstakeEubiButton = document['getElementById']('unstakeEubiButton'),
	stakeEubiButton = document['getElementById']('stakeEubiButton'),
	burnEubiButton = document['getElementById']('burnEubiButton'),
	PancakeSwap = document['getElementById']('PancakeSwap'),
	PancakeAmount = document['getElementById']('PancakeAmount'),
	PancakeButton = document['getElementById']('PancakeButton'),
	PancakeApproveEUBIButton = document['getElementById']('PancakeApproveEUBIButton'),
	PancakeApprovePRSSButton = document['getElementById']('PancakeApprovePRSSButton'),
	customNode = document['getElementById']('customNode'),
	customNode2 = document['getElementById']('customNode2'),
	customNode3 = document['getElementById']('customNode3'),
	MultipurpuseModal = document['getElementById']('MultipurpuseModal'),
	walletMessage = document['getElementById']('walletMessage'),
	SendEubiMessage2 = document['getElementById']('SendEubiMessage2'),
	SendNativeMessage2 = document['getElementById']('SendNativeMessage2'),
	StakeTokensModal = document['getElementById']('StakeTokensModal'),
	PancakeMessage = document['getElementById']('PancakeMessage'),
	BlockchainSettings = document['getElementById']('BlockchainSettings'),
	sellEUBIButton = document['getElementById']('sellEUBIButton'),
	EUBI2PRSS = document['getElementById']('EUBI2PRSS'),
	PRSS2EUBI = document['getElementById']('PRSS2EUBI'),
	ApproveRaceTrackLiquidityButton = document['getElementById']('ApproveRaceTrackLiquidityButton'),
	RaceTrackLiquidityButton = document['getElementById']('RaceTrackLiquidityButton'),
	EUBI2VIPG = document['getElementById']('EUBI2VIPG'),
	VIPG2EUBI = document['getElementById']('VIPG2EUBI'),
	LiquidityToken0 = document['getElementById']('LiquidityToken0'),
	LiquidityToken1 = document['getElementById']('LiquidityToken1'),
	BNB2EUBIPool = document['getElementById']('BNB2EUBIPool'),
	PRSS2EUBIPool = document['getElementById']('PRSS2EUBIPool'),
	addPancakeLiquidityButton = document['getElementById']('addPancakeLiquidityButton'),
	EUBI2BNBLiquidityBalance = document['getElementById']('EUBI2BNBLiquidityBalance'),
	MigrationBridgeMenu = document['getElementById']('MigrationBridgeMenu'),
	BridgeDepositAddress = document['getElementById']('BridgeDepositAddress'),
	MigrateTokenButton = document['getElementById']('MigrateTokenButton'),
	stopRaceTrackButton = document['getElementById']('stopRaceTrackButton'),
	AsyncFunction = Object['getPrototypeOf'](async function() {})['constructor'],
	web3 = new Web3('https://mintme.polyeubitoken.com'),
	loadedTokenContracts = [],
	BigInt = web3['utils']['BN'],
	PancakeRouter = new web3['eth']['Contract']([{"inputs": [{"internalType": "address","name": "tokenA","type": "address"},{"internalType": "address","name": "tokenB","type": "address"},{"internalType": "uint256","name": "amountADesired","type": "uint256"},{"internalType": "uint256","name": "amountBDesired","type": "uint256"},{"internalType": "uint256","name": "amountAMin","type": "uint256"},{"internalType": "uint256","name": "amountBMin","type": "uint256"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "deadline","type": "uint256"}],"name": "addLiquidity","outputs": [{"internalType": "uint256","name": "amountA","type": "uint256"},{"internalType": "uint256","name": "amountB","type": "uint256"},{"internalType": "uint256","name": "liquidity","type": "uint256"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "token","type": "address"},{"internalType": "uint256","name": "amountTokenDesired","type": "uint256"},{"internalType": "uint256","name": "amountTokenMin","type": "uint256"},{"internalType": "uint256","name": "amountETHMin","type": "uint256"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "deadline","type": "uint256"}],"name": "addLiquidityETH","outputs": [{"internalType": "uint256","name": "amountToken","type": "uint256"},{"internalType": "uint256","name": "amountETH","type": "uint256"},{"internalType": "uint256","name": "liquidity","type": "uint256"}],"stateMutability": "payable","type": "function"},{"inputs": [{"internalType": "uint256","name": "amountIn","type": "uint256"},{"internalType": "address[]","name": "path","type": "address[]"}],"name": "getAmountsOut","outputs": [{"internalType": "uint256[]","name": "amounts","type": "uint256[]"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "token","type": "address"},{"internalType": "uint256","name": "liquidity","type": "uint256"},{"internalType": "uint256","name": "amountTokenMin","type": "uint256"},{"internalType": "uint256","name": "amountETHMin","type": "uint256"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "deadline","type": "uint256"},{"internalType": "bool","name": "approveMax","type": "bool"},{"internalType": "uint8","name": "v","type": "uint8"},{"internalType": "bytes32","name": "r","type": "bytes32"},{"internalType": "bytes32","name": "s","type": "bytes32"}],"name": "removeLiquidityETHWithPermit","outputs": [{"internalType": "uint256","name": "amountToken","type": "uint256"},{"internalType": "uint256","name": "amountETH","type": "uint256"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "tokenA","type": "address"},{"internalType": "address","name": "tokenB","type": "address"},{"internalType": "uint256","name": "liquidity","type": "uint256"},{"internalType": "uint256","name": "amountAMin","type": "uint256"},{"internalType": "uint256","name": "amountBMin","type": "uint256"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "deadline","type": "uint256"},{"internalType": "bool","name": "approveMax","type": "bool"},{"internalType": "uint8","name": "v","type": "uint8"},{"internalType": "bytes32","name": "r","type": "bytes32"},{"internalType": "bytes32","name": "s","type": "bytes32"}],"name": "removeLiquidityWithPermit","outputs": [{"internalType": "uint256","name": "amountA","type": "uint256"},{"internalType": "uint256","name": "amountB","type": "uint256"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "amountOutMin","type": "uint256"},{"internalType": "address[]","name": "path","type": "address[]"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "deadline","type": "uint256"}],"name": "swapExactETHForTokens","outputs": [{"internalType": "uint256[]","name": "amounts","type": "uint256[]"}],"stateMutability": "payable","type": "function"},{"inputs": [{"internalType": "uint256","name": "amountIn","type": "uint256"},{"internalType": "uint256","name": "amountOutMin","type": "uint256"},{"internalType": "address[]","name": "path","type": "address[]"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "deadline","type": "uint256"}],"name": "swapExactTokensForETH","outputs": [{"internalType": "uint256[]","name": "amounts","type": "uint256[]"}],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "uint256","name": "amountIn","type": "uint256"},{"internalType": "uint256","name": "amountOutMin","type": "uint256"},{"internalType": "address[]","name": "path","type": "address[]"},{"internalType": "address","name": "to","type": "address"},{"internalType": "uint256","name": "deadline","type": "uint256"}],"name": "swapExactTokensForTokens","outputs": [{"internalType": "uint256[]","name": "amounts","type": "uint256[]"}],"stateMutability": "nonpayable","type": "function"}], '0x10ed43c718714eb63d5aa57b78b54704e256024e'),
	c100 = new BigInt(0x64),
	c99 = new BigInt(0x63),
	getChainId2 = web3['eth']['getChainId'],
	MultipurpuseModalInstance = M['Modal']['getInstance'](MultipurpuseModal),
	SendEUBIModalInstance = M['Modal']['getInstance'](document['getElementById']('SendEUBIModal')),
	NativeSendModalInstance = M['Modal']['getInstance'](document['getElementById']('NativeSendModal')),
	WithdrawDividendsModalInstance = M['Modal']['getInstance'](document['getElementById']('WithdrawDividendsModal')),
	UnstakeTokensModalInstance = M['Modal']['getInstance'](document['getElementById']('UnstakeTokensModal')),
	StakeTokensModalInstance = M['Modal']['getInstance'](document['getElementById']('StakeTokensModal')),
	BurnTokensModalInstance = M['Modal']['getInstance'](document['getElementById']('BurnTokensModal')),
	deleteWalletModalInstance = M['Modal']['getInstance'](document['getElementById']('deleteWalletModal')),
	PancakeApproveEUBIModalInstance = M['Modal']['getInstance'](document['getElementById']('PancakeApproveEUBIModal')),
	PancakeApprovePRSSModalInstance = M['Modal']['getInstance'](document['getElementById']('PancakeApprovePRSSModal')),
	PancakeAddLiquidityModalInstance = M['Modal']['getInstance'](document['getElementById']('PancakeAddLiquidityModal')),
	PancakeModalInstance = M['Modal']['getInstance'](document['getElementById']('PancakeModal'));
var loadedAccount = null,
	contractAddress = '0x8AFA1b7a8534D519CB04F4075D3189DF8a6738C1',
	networkId = 0x609e,
	minPancakeOutput = '0',
	PancakeTargetFrom = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
	PancakeTargetTo = '0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D',
	PancakeAmountIn = '0',
	allSavedWallets = [],
	selectedTargetWallet = -0x1,
	walletProvider2 = undefined,
	chainReselectType = 'error';
web3['eth']['getChainId'] = new AsyncFunction('return 0x609e;'), history['scrollRestoration'] ? history['scrollRestoration'] = 'manual' : window['onbeforeunload'] = function() {
	window['scrollTo'](0x0, 0x0);
};
const escapeHtml = function(_0x4ed2cb) {
		var _0x4c4014 = {
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'\"': '&quot;',
			'\'': '&#039;'
		};
		return _0x4ed2cb['replace'](/[&<>"']/g, function(_0x3e5f57) {
			return _0x4c4014[_0x3e5f57];
		});
	},
	ilierateAllWallets = async function() {
		listofwallets['innerHTML'] = '<strong>Which wallet do you want to load?</strong><br/>';
		var _0x30e615 = allSavedWallets['length'];
		for(var _0x5ade14 = 0x0; _0x5ade14 < _0x30e615; _0x5ade14++) {
			var _0x16c062 = allSavedWallets[_0x5ade14];
			_0x16c062 != 'deleted wallet' && listofwallets['insertAdjacentHTML']('beforeEnd', '<p><label class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"' + escapeHtml(_0x16c062['address']) + '\"><input name=\"group1\" type=\"radio\" onclick=\"selectedTargetWallet = ' + _0x5ade14['toString']() + ';\"/><span style=\"color: black;\">' + escapeHtml(_0x16c062['name']) + '</span></label></p>');
		}
	}; {
	var walletStorage = localStorage['getItem']('savedeubiwallets');
	walletStorage != null && (allSavedWallets = JSON['parse'](walletStorage)), walletStorage = localStorage['getItem']('savedeubiwallet'), walletStorage != null && (walletStorage = '{\"name\": \"Auto-migrated quick wallet access\",' + walletStorage['substring'](0x1), allSavedWallets[allSavedWallets['length']] = JSON['parse'](walletStorage)), ilierateAllWallets();
}
const flushWalletStorage = async function() {
	localStorage['setItem']('savedeubiwallets', JSON['stringify'](allSavedWallets)), localStorage['removeItem']('savedeubiwallet'), ilierateAllWallets();
}, loadTokenContractIMPL = function(_0x435a95) {
	return new web3['eth']['Contract'](JSON['parse']('[{\"constant\": false,\"inputs\": [{\"name\": \"spender\",\"type\": \"address\"},{\"name\": \"value\",\"type\": \"uint256\"}],\"name\": \"approve\",\"outputs\": [{\"name\": \"\",\"type\": \"bool\"}],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"from\",\"type\": \"address\"},{\"name\": \"to\",\"type\": \"address\"},{\"name\": \"value\",\"type\": \"uint256\"}],\"name\": \"transferFrom\",\"outputs\": [{\"name\": \"\",\"type\": \"bool\"}],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [{\"name\": \"owner\",\"type\": \"address\"}],\"name\": \"stakedForDividends\",\"outputs\": [{\"name\": \"\",\"type\": \"uint256\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"target\",\"type\": \"address\"},{\"name\": \"amount\",\"type\": \"uint256\"}],\"name\": \"burnForDividends\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [{\"name\": \"who\",\"type\": \"address\"}],\"name\": \"balanceOf\",\"outputs\": [{\"name\": \"\",\"type\": \"uint256\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"addr\",\"type\": \"address\"},{\"name\": \"amount\",\"type\": \"uint256\"},{\"name\": \"data\",\"type\": \"bytes\"}],\"name\": \"withdrawDividendsTo\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"to\",\"type\": \"address\"},{\"name\": \"value\",\"type\": \"uint256\"}],\"name\": \"transfer\",\"outputs\": [{\"name\": \"\",\"type\": \"bool\"}],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"target\",\"type\": \"address\"},{\"name\": \"amount\",\"type\": \"uint256\"}],\"name\": \"stakeForDividends\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"to\",\"type\": \"address\"},{\"name\": \"amount\",\"type\": \"uint256\"}],\"name\": \"unstake\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [{\"name\": \"addr\",\"type\": \"address\"}],\"name\": \"pendingDividends\",\"outputs\": [{\"name\": \"\",\"type\": \"uint256\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [{\"name\": \"owner\",\"type\": \"address\"},{\"name\": \"spender\",\"type\": \"address\"}],\"name\": \"allowance\",\"outputs\": [{\"name\": \"\",\"type\": \"uint256\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [{\"name\": \"owner\",\"type\": \"address\"}],\"name\": \"burnedForDividends\",\"outputs\": [{\"name\": \"\",\"type\": \"uint256\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"}]'), _0x435a95);
}, createWallet = async function() {
	loadedAccount = web3['eth']['accounts']['create'](), walletMessage['innerHTML'] = 'Your wallet was successfully created, please backup your private key after wallet creation!', MultipurpuseModalInstance['open'](), loadedAccount.address = loadedAccount['address'], beforeWalletLoad['style']['display'] = 'none', afterWalletLoad['style']['display'] = 'block', MintMESelector.click();
}, loadTokenContract = function(_0x238b44) {
	var _0x49c574;
	return _0x49c574 = loadedTokenContracts[_0x238b44], _0x49c574 == undefined && (_0x49c574 = loadTokenContractIMPL(_0x238b44), loadedTokenContracts[_0x238b44] = _0x49c574), _0x49c574;
}, refreshTokenBalance = async function(_0x2a0f86, _0x17b594, _0xaa6238, _0x40c472, _0x5d466b) {
	_0x40c472 = escapeHtml(_0x40c472), loadTokenContract(_0x2a0f86)['methods']['balanceOf'](_0xaa6238)['call']()['then'](async function(_0x19eb08) {
		var _0x201b24 = _0x19eb08['length'];
		_0x201b24 > _0x5d466b ? (_0x201b24 -= _0x5d466b, _0x19eb08 = _0x19eb08['substring'](0x0, _0x201b24) + '.' + _0x19eb08['substring'](_0x201b24)['padEnd'](_0x5d466b, '0')) : _0x19eb08 = '0.' + _0x19eb08['padStart'](_0x5d466b, '0'), _0x17b594['innerHTML'] = 'You have ' + escapeHtml(_0x19eb08) + ' ' + _0x40c472 + ' Tokens';
	}, async function(_0x18455e) {
		_0x17b594['innerHTML'] = 'ERROR: Can\'t load ' + _0x40c472 + ' balance: ' + escapeHtml(_0x18455e['message']) + '!';
	});
}, conv2dec = function(_0x3966d9, _0x5245fd) {
	var _0x4c2dca = _0x3966d9['length'];
	return _0x4c2dca > _0x5245fd ? (_0x4c2dca -= _0x5245fd, _0x3966d9['substring'](0x0, _0x4c2dca) + '.' + _0x3966d9['substring'](_0x4c2dca)['padEnd'](_0x5245fd, '0')) : '0.' + _0x3966d9['padStart'](_0x5245fd, '0');
}, reloadWallet = async function() {
	if(loadedAccount.metamask){
		BlockchainSettings.style.display = 'none';
		epkb.style.display = 'none';
		BrowserStoredWallet.style.display = 'none';
	} else{
		BlockchainSettings.style.display = 'list-item';
		epkb.style.display = 'block';
		BrowserStoredWallet.style.display = 'list-item';
	}
	myWalletAddress['innerHTML'] = 'Your wallet address is: ' + escapeHtml(loadedAccount.address);
	eubiBalance['innerHTML'] = 'Identifying blockchain...', nativeBalance['innerHTML'] = '', networkId = await web3['eth']['getChainId']();
	switch(networkId) {
		case 0x609e:
			CoinTypeText['innerHTML'] = 'Send MintME', SendNativeMessage2['innerHTML'] = 'Are you sure you want to send MintME?', SendEubiMessage2['innerHTML'] = 'Are you sure you want to send EUBI?', eubiBalance['innerHTML'] = 'Loading EUBI balance...', nativeBalance['innerHTML'] = 'Loading MintME balance...', contractAddress = '0x8AFA1b7a8534D519CB04F4075D3189DF8a6738C1', refreshTokenBalance('0x8AFA1b7a8534D519CB04F4075D3189DF8a6738C1', eubiBalance, loadedAccount.address, 'EUBI', 0xc), web3['eth']['getBalance'](loadedAccount.address)['then'](async function(_0x2d57cb) {
				nativeBalance['innerHTML'] = 'You have ' + escapeHtml(conv2dec(_0x2d57cb, 0x12)) + ' MintME to pay for gas';
			}, async function(_0x2b7454) {
				nativeBalance['innerHTML'] = 'ERROR: Can\'t load MintME balance: ' + escapeHtml(_0x2b7454['message']) + '!';
			});
			//Fetch bridge deposit address using XMLHttpRequest
			let xhttp = new XMLHttpRequest();
			xhttp.onload = async function(){
				if(this.status == 200){
					BridgeDepositAddress.innerHTML = escapeHtml(this.responseText);
				} else{
					BridgeDepositAddress.innerHTML = 'Unable to fetch deposit address!';
				}
			};
			xhttp.onerror = async function(){
				BridgeDepositAddress.innerHTML = 'An unknown error have occoured when fetching deposit address!';
			};
			xhttp.open("GET", "https://eubi-token-bridge.herokuapp.com/getdepaddr/" + loadedAccount.address);
			xhttp.send();
			break;
		case 0x38:
			EUBI2BNBLiquidityBalance['innerHTML'] = 'Fetching BNB-bEUBI Liquidity balance...', CoinTypeText['innerHTML'] = 'Send BNB', SendNativeMessage2['innerHTML'] = 'Are you sure you want to send BNB?', SendEubiMessage2['innerHTML'] = 'Are you sure you want to send bEUBI?', eubiBalance['innerHTML'] = 'Loading bEUBI balance...', nativeBalance['innerHTML'] = 'Loading BNB balance...', contractAddress = '0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D', refreshTokenBalance('0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D', eubiBalance, loadedAccount.address, 'bEUBI', 0x12), web3['eth']['getBalance'](loadedAccount.address)['then'](async function(_0x279cdd) {
				nativeBalance['innerHTML'] = 'You have ' + escapeHtml(conv2dec(_0x279cdd, 0x12)) + ' BNB to pay for gas';
			}, async function(_0x3da997) {
				nativeBalance['innerHTML'] = 'ERROR: Can\'t load BNB balance: ' + escapeHtml(_0x3da997['message']) + '!';
			});
			
			//Liquidity-specific stuff
			refreshTokenBalance('0x7700eea0633210437ffcc6b10c02e0515054b08f', EUBI2BNBLiquidityBalance, loadedAccount.address, 'BNB-bEUBI Liquidity', 0x12)
			//0x7700eea0633210437ffcc6b10c02e0515054b08f
			break;
		case 0x4:
			CoinTypeText['innerHTML'] = 'Send Testnet Ethereum', SendNativeMessage2['innerHTML'] = 'Are you sure you want to send Testnet Ethereum?', SendEubiMessage2['innerHTML'] = 'Are you sure you want to send EUBI?', stakedTokensText['innerHTML'] = 'Loading staked tokens...', eubiBalance['innerHTML'] = 'Loading EUBIng balance...', pendingDividends['innerHTML'] = 'Loading pending dividends...', nativeBalance['innerHTML'] = 'Loading Testnet Ethereum balance...', contractAddress = '0x8e4d858128c9ba2d3a7636892268fab031eddaf8', refreshTokenBalance('0x8e4d858128c9ba2d3a7636892268fab031eddaf8', eubiBalance, loadedAccount.address, 'EUBI', 0x12), web3['eth']['getBalance'](loadedAccount.address)['then'](async function(_0x36a8db) {
				nativeBalance['innerHTML'] = 'You have ' + escapeHtml(_0x36a8db) + ' Testnet Ethereum to pay for gas';
			}, async function(_0x9739d7) {
				nativeBalance['innerHTML'] = 'ERROR: Can\'t load Testnet Ethereum balance: ' + escapeHtml(_0x9739d7['message']) + '!';
			});
			var _0x498066 = loadTokenContract('0x8e4d858128c9ba2d3a7636892268fab031eddaf8');
			_0x498066['methods']['pendingDividends'](loadedAccount.address)['call']()['then'](async function(_0x2f292a) {
				pendingDividends['innerHTML'] = 'You have ' + escapeHtml(conv2dec(_0x2f292a, 0x12)) + ' ETH worth of pending dividends';
			}, async function(_0x517e26) {
				pendingDividends['innerHTML'] = 'ERROR: Can\'t load pending dividends: ' + escapeHtml(_0x517e26['message']) + '!';
			}), _0x498066['methods']['stakedForDividends'](loadedAccount.address)['call']()['then'](async function(_0x2d381d) {
				stakedTokensText['innerHTML'] = 'You have ' + escapeHtml(conv2dec(_0x2d381d, 0x12)) + ' EUBI staked for dividends';
			}, async function(_0x17e9ac) {
				stakedTokensText['innerHTML'] = 'ERROR: Can\'t load staking balance: ' + escapeHtml(_0x17e9ac['message']) + '!';
			}), _0x498066['methods']['burnedForDividends'](loadedAccount.address)['call']()['then'](async function(_0x24d7a1) {
				burnedTokensText['innerHTML'] = 'You have ' + escapeHtml(conv2dec(_0x24d7a1, 0x12)) + ' EUBI burned for dividends';
			}, async function(_0x3c03b4) {
				burnedTokensText['innerHTML'] = 'ERROR: Can\'t load staking balance: ' + escapeHtml(_0x3c03b4['message']) + '!';
			});
			break;
		default:
			eubiBalance['innerHTML'] = 'EUBI is not deployed on this blockchain!', nativeBalance['innerHTML'] = 'Loading unknown balance...', web3['eth']['getBalance'](loadedAccount.address)['then'](async function(_0x2b0fbb) {
				nativeBalance['innerHTML'] = 'You have ' + escapeHtml(conv2dec(_0x2b0fbb, 0x12)) + ' unknown to pay for gas';
			}, async function(_0x1a86db) {
				nativeBalance['innerHTML'] = 'ERROR: Can\'t load unknown balance: ' + escapeHtml(_0x1a86db['message']) + '!';
			});
			break;
	}
	PancakeSwap['style']['display'] = networkId == 0x38 ? 'list-item' : 'none', dividendsMenu['style']['display'] = networkId == 0x4 ? 'list-item' : 'none', MigrationBridgeMenu.style.display = networkId == 0x609e ? 'list-item' : 'none';
}, loadWallet = async function() {
	var privateKey2 = privateKey['value'];
	loadedAccount = null;
	if(privateKey2['length'] == 0x42)
		try {
			loadedAccount = web3['eth']['accounts']['privateKeyToAccount'](privateKey2);
		} catch (_0x5bb345) {
			loadedAccount = null, privateKey2 = '';
		}
	loadedAccount == null ? (walletMessage['innerHTML'] = 'Can\'t load wallet', MultipurpuseModalInstance['open']()) : (walletMessage['innerHTML'] = 'Your wallet was successfully loaded, thank you for using MyEUBIWallet!', MultipurpuseModalInstance['open'](), beforeWalletLoad['style']['display'] = 'none', afterWalletLoad['style']['display'] = 'block', MintMESelector.click());
}, loadWallet2 = async function() {
	if(selectedTargetWallet < 0x0)
		walletMessage['innerHTML'] = 'Please select which wallet to load!', MultipurpuseModalInstance['open']();
	else {
		try {
			loadedAccount = web3['eth']['accounts']['decrypt'](JSON['stringify'](allSavedWallets[selectedTargetWallet]), pass3['value']);
		} catch (_0xe1f177) {
			loadedAccount = null;
		}
		loadedAccount == null ? (walletMessage['innerHTML'] = 'Can\'t load wallet!', MultipurpuseModalInstance['open']()) : (loadedAccount.address = loadedAccount['address'], beforeWalletLoad['style']['display'] = 'none', afterWalletLoad['style']['display'] = 'block', walletMessage['innerHTML'] = 'Your wallet was successfully loaded, thank you for using MyEUBIWallet!', MultipurpuseModalInstance['open'](), MintMESelector.click());
	}
}, deleteWallet = async function() {
	allSavedWallets[selectedTargetWallet] = 'deleted wallet', flushWalletStorage();
}, renameWallet = async function() {
	allSavedWallets[selectedTargetWallet]['name'] = storedWalletName2['value'], flushWalletStorage();
}, convDecimalToRaw = function(_0x1a56d3, _0x5e0e30) {
	var _0x21b23b = 'invalid';
	try {
		while(_0x1a56d3['startsWith']('0')) {
			_0x1a56d3 = _0x1a56d3['substring'](0x1);
			if(_0x1a56d3['startsWith']('.') || _0x1a56d3 == '') {
				_0x1a56d3 = '0' + _0x1a56d3;
				break;
			}
		}
		_0x1a56d3 = _0x1a56d3['split']('.'), _0x1a56d3['length'] == 0x1 && (_0x1a56d3[0x1] = '0'), _0x1a56d3['length'] == 0x1 && (_0x1a56d3 = [
			_0x1a56d3[0x0],
			'0'
		]);
		if(_0x1a56d3['length'] == 0x2 && _0x5e0e30 >= _0x1a56d3[0x1]['length']) {
			var _0x3cdf33 = new BigInt(_0x1a56d3[0x0]);
			if(_0x3cdf33['toString']() == _0x1a56d3[0x0]) {
				var _0x998fa0 = '1' ['padEnd'](_0x5e0e30 + 0x1, '0'),
					_0xf74268 = new BigInt(_0x998fa0);
				if(_0xf74268['toString']() == _0x998fa0) {
					_0x998fa0 = _0x1a56d3[0x1]['padEnd'](_0x5e0e30, '0');
					var _0xc0897b = new BigInt(_0x998fa0);
					_0xc0897b['toString']()['padStart'](_0x5e0e30, '0') == _0x998fa0 && (_0x21b23b = _0x3cdf33['mul'](_0xf74268)['add'](_0xc0897b)['toString']());
				}
			}
		}
	} catch (_0x388b8f) {}
	return _0x21b23b == 'invalid' && (walletMessage['innerHTML'] = 'Invalid amount!', MultipurpuseModalInstance['open']()), _0x21b23b;
}, SignAndSendFreakingTransaction = async function(transaction, enableButtons, networkId2){
	if(loadedAccount.metamask){
		transaction.from = loadedAccount.address;
		transaction.gas = web3.utils.toHex(transaction.gas.toString());
		walletProvider2.request({
			method: 'eth_sendTransaction',
			params: [transaction],
		}).then(async function(value){
			walletMessage['innerHTML'] = 'Transaction sent successfully!';
			enableButtons();
			MultipurpuseModalInstance.open();
		}).catch(async function(error){
			//Null coalescing protection
			error = error ?? [];
			if (error.code === 4001) {
				walletMessage['innerHTML'] = 'MetaMask Transaction rejected!';
			} else{
				if(error.replace === undefined){
					walletMessage['innerHTML'] = "Unknown error occoured when sending transaction!";
				} else{
					walletMessage['innerHTML'] = escapeHtml(error);
				}
			}
			enableButtons();
			MultipurpuseModalInstance.open();
		});
	} else{
		loadedAccount['signTransaction'](transaction)['then'](async function(_0xecc11f) {
			web3['eth']['sendSignedTransaction'](_0xecc11f['rawTransaction'])['then'](async function(_0x353738) {
				if(_0x353738 === null)
					walletMessage['innerHTML'] = 'Transaction sent successfully!';
				else
					switch(networkId2) {
						case 0x609e:
							walletMessage['innerHTML'] = 'Transaction sent successfully! <a href=\"https://www.mintme.com/explorer/tx/' + escapeHtml(_0x353738['transactionHash']) + '\">view on blockchain explorer</a>';
							break;
						case 0x38:
							walletMessage['innerHTML'] = 'Transaction sent successfully! <a href=\"https://www.bscscan.com/tx/' + escapeHtml(_0x353738['transactionHash']) + '\">view on blockchain explorer</a>';
							break;
						case 0x4:
							walletMessage['innerHTML'] = 'Transaction sent successfully! <a href=\"https://rinkeby.etherscan.io/tx/' + escapeHtml(_0x353738['transactionHash']) + '\">view on blockchain explorer</a>';
							break;
					}
				enableButtons(), MultipurpuseModalInstance['open'](), reloadWallet();
			}, async function(_0x4eb6de) {
				enableButtons(), walletMessage['innerHTML'] = 'Can\'t send transaction: ' + escapeHtml(_0x4eb6de['message']) + '!', MultipurpuseModalInstance['open'](), reloadWallet();
			});
		}, async function(_0x5d67c0) {
			enableButtons(), walletMessage['innerHTML'] = 'Can\'t sign transaction: ' + escapeHtml(_0x5d67c0['message']) + '!', MultipurpuseModalInstance['open']();
		});
	}
	
}, NativeSend = async function() {
	sendNativeButton['disabled'] = !![];
	var _0x13f221 = {};
	_0x13f221['to'] = sendtoNative['value'];
	var _0x50da5b = convDecimalToRaw(NativeAmount['value'], 0x12),
	Freak2 = function(){
		SignAndSendFreakingTransaction(_0x13f221, async function(){
			sendNativeButton['disabled'] = ![];
		}, networkId);
	};
	if(_0x50da5b == 'invalid') {
		sendNativeButton['disabled'] = ![];
		return;
	}
	_0x13f221['value'] = web3.utils.toHex(_0x50da5b);
	try {
		web3['eth']['estimateGas'](_0x13f221)['then'](async function(_0x5bb9cb) {
			_0x13f221['gas'] = _0x5bb9cb;
			Freak2();
		}, async function(_0x370ba2) {
			_0x13f221['gas'] = '21000';
			Freak2();
		});
	} catch (_0x203233) {
		walletMessage['innerHTML'] = 'Invalid address!', MultipurpuseModalInstance['open'](), sendNativeButton['disabled'] = ![];
		return;
	}
}, sendeubitx = async function(_0x11ced0) {
	sendEubiButton['disabled'] = !![], approveEubiButton['disabled'] = !![];
	var _0x276100 = {},
		_0x5af999 = 0x12,
		_0x544398 = '0x8AFA1b7a8534D519CB04F4075D3189DF8a6738C1',
		_0x15a352 = networkId;
	switch(_0x15a352) {
		case 0x609e:
			_0x5af999 = 0xc;
			break;
		case 0x38:
			_0x544398 = '0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D';
			break;
		case 0x4:
			_0x544398 = '0x8e4d858128c9ba2d3a7636892268fab031eddaf8';
			break;
		default:
			walletMessage['innerHTML'] = 'EUBI is not deployed on this blockchain!', MultipurpuseModalInstance['open'](), sendEubiButton['disabled'] = ![], approveEubiButton['disabled'] = ![];
			return;
	}
	try {
		var _0x76c1da = sendto['value'],
			_0x4ff01a = convDecimalToRaw(eubiamount['value'], _0x5af999);
		if(_0x4ff01a == 'invalid') {
			sendEubiButton['disabled'] = ![], approveEubiButton['disabled'] = ![];
			return;
		} else
			useApprovalCheckbox['checked'] ? _0x276100['data'] = loadedTokenContracts[_0x544398]['methods']['transferFrom'](approvalOwner['value'], _0x76c1da, _0x4ff01a)['encodeABI']() : _0x276100['data'] = loadedTokenContracts[_0x544398]['methods'][_0x11ced0](_0x76c1da, _0x4ff01a)['encodeABI']();
	} catch (_0x278f79) {
		walletMessage['innerHTML'] = 'Invalid address!', MultipurpuseModalInstance['open'](), sendEubiButton['disabled'] = ![], approveEubiButton['disabled'] = ![];
		return;
	}
	_0x276100['to'] = _0x544398;
	var _0x51c04b = function() {
		SignAndSendFreakingTransaction(_0x276100, async function(){
			sendEubiButton['disabled'] = ![];
			approveEubiButton['disabled'] = ![];
		}, _0x15a352);
	};
	web3['eth']['estimateGas'](_0x276100)['then'](async function(_0x154fd3) {
		_0x276100['gas'] = _0x154fd3;
		_0x51c04b();
	}, async function(_0x154fd3) {
		_0x276100['gas'] = '100000';
		_0x51c04b();
	});
}, ManageDividends = async function(_0x10ea09) {
	withdrawDividendButton['disabled'] = !![], unstakeEubiButton['disabled'] = !![], stakeEubiButton['disabled'] = !![], burnEubiButton['disabled'] = !![];
	var _0x2315ac = {},
		_0x599ef0 = convDecimalToRaw(NGAmount['value'], 0x12);
	if(_0x599ef0 == 'invalid') {
		withdrawDividendButton['disabled'] = ![], unstakeEubiButton['disabled'] = ![], stakeEubiButton['disabled'] = ![], burnEubiButton['disabled'] = ![], walletMessage['innerHTML'] = 'Please enter amount!', MultipurpuseModalInstance['open']();
		return;
	}
	switch(_0x10ea09) {
		case 'withdraw':
			_0x2315ac['data'] = loadedTokenContracts['0x8e4d858128c9ba2d3a7636892268fab031eddaf8']['methods']['withdrawDividendsTo'](loadedAccount.address, _0x599ef0, '0x00')['encodeABI']();
			break;
		case 'unstake':
			_0x2315ac['data'] = loadedTokenContracts['0x8e4d858128c9ba2d3a7636892268fab031eddaf8']['methods']['unstake'](loadedAccount.address, _0x599ef0)['encodeABI']();
			break;
		case 'stake':
			_0x2315ac['data'] = loadedTokenContracts['0x8e4d858128c9ba2d3a7636892268fab031eddaf8']['methods']['stakeForDividends'](loadedAccount.address, _0x599ef0)['encodeABI']();
			break;
		case 'burn':
			_0x2315ac['data'] = loadedTokenContracts['0x8e4d858128c9ba2d3a7636892268fab031eddaf8']['methods']['burnForDividends'](loadedAccount.address, _0x599ef0)['encodeABI']();
			break;
		default:
			withdrawDividendButton['disabled'] = ![], unstakeEubiButton['disabled'] = ![], stakeEubiButton['disabled'] = ![], burnEubiButton['disabled'] = ![], walletMessage['innerHTML'] = 'Undefined action!', MultipurpuseModalInstance['open']();
			break;
	}
	_0x2315ac['gas'] = '200000';
	_0x2315ac['to'] = '0x8e4d858128c9ba2d3a7636892268fab031eddaf8';
	SignAndSendFreakingTransaction(_0x2315ac, async function(){
		withdrawDividendButton['disabled'] = ![];
		unstakeEubiButton['disabled'] = ![];
		stakeEubiButton['disabled'] = ![];
		burnEubiButton['disabled'] = ![];
	}, 0x4);
}, encryptAndStore = async function() {
	var _0x28750c = pass1['value'];
	if(pass2['value'] == _0x28750c) {
		var _0x2654da = loadedAccount['encrypt'](_0x28750c);
		_0x2654da['name'] = storedWalletName['value'], allSavedWallets[allSavedWallets['length']] = _0x2654da, flushWalletStorage(), walletMessage['innerHTML'] = 'Wallet encrypted and stored!';
	} else
		walletMessage['innerHTML'] = 'The two passwords doesn\'t match!';
	MultipurpuseModalInstance['open']();
}, selectBlockchain2 = async function(_0x3a860d){
	web3['eth']['getChainId'] = getChainId2;
	web3['setProvider'](_0x3a860d);
	web3['eth']['getChainId'] = new AsyncFunction('return ' + escapeHtml((await getChainId2())['toString']()) + ';');
	reloadWallet();
}, selectBlockchain = async function(_0x35a64f) {
	var _0x3a860d;
	switch(_0x35a64f) {
		case 'MintME1':
			customNode['style']['display'] = 'none', customNode3['style']['display'] = 'none', _0x3a860d = 'https://mintme.polyeubitoken.com';
			break;
		case 'MintME2':
			customNode['style']['display'] = 'none', customNode3['style']['display'] = 'none', _0x3a860d = 'https://node2.mintme.com:443';
			break;
		case 'BinanceSmartChain':
			customNode['style']['display'] = 'none', customNode3['style']['display'] = 'none', _0x3a860d = 'https://bsc-dataseed.binance.org/';
			break;
		case 'rinkeby':
			customNode['style']['display'] = 'none', customNode3['style']['display'] = 'none', _0x3a860d = 'wss://rinkeby-light.eth.linkpool.io/ws';
			break;
		case 'CustomNode':
			customNode['style']['display'] = 'block', customNode3['style']['display'] = 'block';
			break;
		case 'MetaMask':
			customNode['style']['display'] = 'none', customNode3['style']['display'] = 'none', _0x3a860d = window.ethereum;
			break;
		case 'BinanceChainWallet':
			customNode['style']['display'] = 'none', customNode3['style']['display'] = 'none', _0x3a860d = window.BinanceChain;
			break;
		case 'error':
			walletMessage.innerHTML = 'Invalid blockchain selection mode!';
			MultipurpuseModalInstance.open();
			return;
		default:
			web3['setProvider'](customNode2['value']), reloadWallet();
			break;
	}
	_0x3a860d != undefined && (selectBlockchain2(_0x3a860d));
}, logout = async function() {
	walletProvider2 = undefined, chainReselectType = 'error', selectedTargetWallet = -0x1, loadedAccount = null, privateKey['value'] = '', pass3['value'] = '', walletMessage['innerHTML'] = 'Wallet unloaded!', afterWalletLoad['style']['display'] = 'none', beforeWalletLoad['style']['display'] = 'block';
}, checkAllowance = async function() {
	var _0x17bb19 = function(_0x2dbaa6, _0x2427a7, _0x93678e, _0x4a29c6) {
			try {
				var _0x51d9be, _0x1911b4;
				_0x4a29c6 == 'Your remaining allowance: ' ? (_0x51d9be = approvalOwner['value'], _0x1911b4 = loadedAccount.address) : (_0x51d9be = loadedAccount.address, _0x1911b4 = sendto['value']), loadTokenContract(_0x2dbaa6)['methods']['allowance'](_0x51d9be, _0x1911b4)['call']()['then'](async function(_0x4b5447) {
					var _0x5557ae = _0x4b5447['length'];
					_0x5557ae > _0x2427a7 ? (_0x5557ae -= _0x2427a7, _0x4b5447 = _0x4b5447['substring'](0x0, _0x5557ae) + '.' + _0x4b5447['substring'](_0x5557ae)['padEnd'](_0x2427a7, '0')) : _0x4b5447 = '0.' + _0x4b5447['padStart'](_0x2427a7, '0'), walletMessage['innerHTML'] = escapeHtml(_0x4a29c6 + _0x4b5447) + _0x93678e, MultipurpuseModalInstance['open']();
				}, async function(_0x10eb7c) {
					walletMessage['innerHTML'] = 'ERROR: Can\'t query allowance: ' + escapeHtml(_0x10eb7c['message']) + '!', MultipurpuseModalInstance['open']();
				});
			} catch (_0x30b680) {
				walletMessage['innerHTML'] = 'invalid address!', MultipurpuseModalInstance['open']();
			}
		},
		_0x4ee7d8 = useApprovalCheckbox['checked'] ? 'Your remaining allowance: ' : 'Remaining allowance: ';
	networkId == 0x38 ? _0x17bb19('0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D', 0x12, ' bEUBI', _0x4ee7d8) : _0x17bb19(contractAddress, 0xc, ' EUBI', _0x4ee7d8);
}, FastAppr2 = async function(_0x4daff8, addr){
	PancakeApproveEUBIButton.disabled = true;
	PancakeApprovePRSSButton.disabled = true;
	var _0x21840c = {};
	_0x21840c['gas'] = '100000', _0x21840c['to'] = _0x4daff8, _0x21840c['data'] = '0x095ea7b3000000000000000000000000' + addr + 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';
	SignAndSendFreakingTransaction(_0x21840c, async function(){
		PancakeApproveEUBIButton.disabled = false;
		PancakeApprovePRSSButton.disabled = false;
	}, 0x38);
}, PancakeswapApprove = async function(_0x4daff8) {
	FastAppr2(_0x4daff8, '10ed43c718714eb63d5aa57b78b54704e256024e');
}, PancakeSwapTokens = async function() {
	var _0x281f2a = {};
	PancakeButton['disabled'] = !![];
	if(PancakeTargetFrom == '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c')
		_0x281f2a['value'] = PancakeAmountIn, _0x281f2a['data'] = PancakeRouter['methods']['swapExactETHForTokens'](minPancakeOutput, [
			PancakeTargetFrom,
			PancakeTargetTo
		], loadedAccount.address, '115792089237316195423570985008687907853269984665640564039457584007913129639935')['encodeABI']();
	else {
		var _0x2ac66e;
		PancakeTargetTo == '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' ? _0x281f2a['data'] = PancakeRouter['methods']['swapExactTokensForETH'](PancakeAmountIn, minPancakeOutput, [
			PancakeTargetFrom,
			PancakeTargetTo
		], loadedAccount.address, '115792089237316195423570985008687907853269984665640564039457584007913129639935')['encodeABI']() : _0x281f2a['data'] = PancakeRouter['methods']['swapExactTokensForTokens'](PancakeAmountIn, minPancakeOutput, [
			PancakeTargetFrom,
			PancakeTargetTo
		], loadedAccount.address, '115792089237316195423570985008687907853269984665640564039457584007913129639935')['encodeABI']();
	}
	_0x281f2a['to'] = '0x10ed43c718714eb63d5aa57b78b54704e256024e';
	var Freak2 = function(){
		SignAndSendFreakingTransaction(_0x281f2a, async function(){
			PancakeButton['disabled'] = ![];
		}, 0x38);
	};
	try {
		web3['eth']['estimateGas'](_0x281f2a)['then'](async function(_0x5bb9cb) {
			_0x281f2a['gas'] = _0x5bb9cb;
			Freak2();
		}, async function(_0x370ba2) {
			_0x281f2a['gas'] = '300000';
			Freak2();
		});
	} catch (_0x2e6d16) {
		walletMessage['innerHTML'] = 'invalid address!', MultipurpuseModalInstance['open'](), PancakeButton['disabled'] = ![];
	}
}, PrePancake = async function() {
	var pancakePairSelect = 0;
	if(sellEUBIButton.checked){
		pancakePairSelect = 1;
		PancakeTargetFrom = '0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D';
		PancakeTargetTo = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
	}else if(EUBI2PRSS.checked){
		pancakePairSelect = 2;
		PancakeTargetFrom = '0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D';
		PancakeTargetTo = '0x17e6d3E7B727b31Ab6eB9B5b0A38f00389589c80';
	}else if(PRSS2EUBI.checked){
		pancakePairSelect = 3;
		PancakeTargetFrom = '0x17e6d3E7B727b31Ab6eB9B5b0A38f00389589c80';
		PancakeTargetTo = '0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D';
	}/*else if(EUBI2VIPG.checked){
		pancakePairSelect = 4;
		PancakeTargetFrom = '0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D';
		PancakeTargetTo = '0x4CC4E019A770Bb7A2CCD83Dc25D0Dd0C7ce2447B';
	}else if(VIPG2EUBI.checked){
		pancakePairSelect = 5;
		PancakeTargetFrom = '0x4CC4E019A770Bb7A2CCD83Dc25D0Dd0C7ce2447B';
		PancakeTargetTo = '0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D';
	}*/ else{
		PancakeTargetFrom = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
		PancakeTargetTo = '0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D';
	}
	PancakeAmountIn = convDecimalToRaw(PancakeAmount['value'], 0x12);
	if(PancakeAmountIn != 'invalid'){
		PancakeRouter['methods']['getAmountsOut'](PancakeAmountIn, [
			PancakeTargetFrom,
			PancakeTargetTo
		])['call']()['then'](async function(_0x43904f) {
			_0x43904f = _0x43904f[1];
			switch(pancakePairSelect){
				case 0:
					PancakeMessage['innerHTML'] = 'Do you want to swap BNB for ' + escapeHtml(conv2dec(_0x43904f, 0x12)) + ' bEUBI via PancakeSwap?';
					break;
				case 1:
					PancakeMessage['innerHTML'] = 'Do you want to swap bEUBI for ' + escapeHtml(conv2dec(_0x43904f, 0x12)) + ' BNB via PancakeSwap?';
					break;
				case 2:
					PancakeMessage['innerHTML'] = 'Do you want to swap bEUBI for ' + escapeHtml(conv2dec(_0x43904f, 0x12)) + ' bPRSS via PancakeSwap?';
					break;
				case 3:
					PancakeMessage['innerHTML'] = 'Do you want to swap bPRSS for ' + escapeHtml(conv2dec(_0x43904f, 0x12)) + ' bEUBI via PancakeSwap?';
					break;
				case 4:
					PancakeMessage['innerHTML'] = 'Do you want to swap bEUBI for ' + escapeHtml(conv2dec(_0x43904f, 0x12)) + ' VIPG via PancakeSwap?';
					break;
				case 5:
					PancakeMessage['innerHTML'] = 'Do you want to swap VIPG for ' + escapeHtml(conv2dec(_0x43904f, 0x12)) + ' bEUBI via PancakeSwap?';
					break;
				
			}
			PancakeModalInstance['open']();
		}, async function(_0x5b8027) {
			minPancakeOutput = '0', PancakeMessage['innerHTML'] = 'Do you want to swap tokens via PancakeSwap?', PancakeModalInstance['open']();
		});
	}
};

//Experimental MyEUBIWallet features

const handleChainChanged = async function(){
	//HACK: If we run selectBlockchain again, well reload the blockchain id.
	selectBlockchain(chainReselectType);
};

const handleAccountChanged = async function(value){
	if(value.length > 0 && loadedAccount.metamask){
		loadedAccount.address = value[0];
		reloadWallet();
	}
};

const setWalletProvider2 = async function(w2){
	if(walletProvider2 != undefined){
		walletProvider2.removeListener('chainChanged', handleChainChanged);
		walletProvider2.removeListener('accountsChanged', handleAccountChanged);
	}
	walletProvider2 = undefined;
	w2.on('chainChanged', handleChainChanged);
	w2.on('accountsChanged', handleAccountChanged);
	w2.request({ method: 'eth_requestAccounts' }).then(async function(value){
		loadedAccount = [];
		loadedAccount.metamask = true;
		loadedAccount.address = value[0];
		walletMessage['innerHTML'] = 'Your wallet was successfully loaded, thank you for using MyEUBIWallet!';
		MultipurpuseModalInstance['open']();
		loadedAccount.address = loadedAccount['address'];
		web3.setProvider(w2);
		beforeWalletLoad['style']['display'] = 'none';
		afterWalletLoad['style']['display'] = 'block';
		walletProvider2 = w2;
		selectBlockchain2(w2);
	}).catch((error) => {
		if (error.code === 4001) {
			walletMessage['innerHTML'] = 'Please connect to wallet!';
			MultipurpuseModalInstance['open']();
		} else {
			walletMessage['innerHTML'] = escapeHtml(error);
			MultipurpuseModalInstance['open']();
		}
	});
};

const loadWalletUsingMetaMask = async function() {
	if(ethereum === undefined){
		walletMessage['innerHTML'] = 'Please install MetaMask!';
		MultipurpuseModalInstance['open']();
	} else{
		chainReselectType = 'MetaMask';
		setWalletProvider2(ethereum);
	}
};

const loadBinanceChainWallet = async function() {
	if(BinanceChain === undefined){
		walletMessage['innerHTML'] = 'Please install Binance Chain Wallet!';
		MultipurpuseModalInstance['open']();
	} else{
		chainReselectType = 'BinanceChainWallet';
		setWalletProvider2(BinanceChain);
	}
};

const migrate = async function(){
	MigrateTokenButton.disabled = true;
	let xhttp = new XMLHttpRequest();
	xhttp.onload = async function(){
		var response = this.responseText;
		if(response === null){
			response = 'An unknown error have occoured when migrating tokens!';
		} else{
			response = escapeHtml(response);
		}
		walletMessage.innerHTML = response;
		MultipurpuseModalInstance.open();
		MigrateTokenButton.disabled = false;
	};
	xhttp.onerror = async function(){
		walletMessage.innerHTML = 'An unknown error have occoured when migrating tokens!';
		MultipurpuseModalInstance.open();
	};
	xhttp.open("GET", "https://eubi-token-bridge.herokuapp.com/flushtobinance/" + loadedAccount.address);
	xhttp.send();
};

//MyEUBIWallet PancakeSwap spending permit - support for adding/removing liquidity
//NOTE: Only MetaMask/Binance Chain Wallet is supported. Legacy wallet loading modes are not yet supported.
const EIP712Domain = [
	{ name: 'name', type: 'string' },
	{ name: 'version', type: 'string' },
	{ name: 'chainId', type: 'uint256' },
	{ name: 'verifyingContract', type: 'address' }
], Permit = [
	{ name: 'owner', type: 'address' },
	{ name: 'spender', type: 'address' },
	{ name: 'value', type: 'uint256' },
	{ name: 'nonce', type: 'uint256' },
	{ name: 'deadline', type: 'uint256' }
],signPancakePermit = function(amount, pairaddr){
	let domain = {
		name: 'MyEUBIWallet PancakeSwap integration',
		version: '1',
		chainId: 0x38,
		verifyingContract: pairaddr
	};
	let message = {
		owner: loadedAccount.address,
		spender: '0x10ed43c718714eb63d5aa57b78b54704e256024e',
		value: amount,
		nonce: 0,
		deadline: (Math.floor(Date.now() / 1000) + 1200).toString()
	};
	let data = JSON.stringify({
		types: {
			EIP712Domain,
			Permit
		},
		domain,
		primaryType: 'Permit',
		message
	});
	return web3.currentProvider.send('eth_signTypedData_v4', [loadedAccount.address, data]);
};
var selectedPoolToken0 = 'BNB', selectedPoolToken1 = '0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D';
const addPancakeLiquidity = async function(){
	addPancakeLiquidityButton.disabled = true;
	var transaction = {};
	transaction.to = '0x10ED43C718714eb63d5aA57B78B54704E256024E';
	transaction.gas = '300000';
	transaction.chainId = 0x38;
	let amt0 = convDecimalToRaw(LiquidityToken0.value, 18);
	if(amt0 == 'invalid'){
		addPancakeLiquidityButton.disabled = false;
	} else{
		let amt1 = convDecimalToRaw(LiquidityToken1.value, 18);
		if(amt1 == 'invalid'){
			addPancakeLiquidityButton.disabled = false;
		} else{
			if(BNB2EUBIPool.checked){
				transaction.data = PancakeRouter.methods.addLiquidityETH('0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D', amt1, 0, 0, loadedAccount.address, (Math.floor(Date.now() / 1000) + 1200).toString()).encodeABI();
				transaction.value = amt0;
			} else{
				transaction.data = PancakeRouter.methods.addLiquidity('0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D', '0x17e6d3E7B727b31Ab6eB9B5b0A38f00389589c80', amt0, amt1, 0, 0, loadedAccount.address, (Math.floor(Date.now() / 1000) + 1200).toString()).encodeABI();
			}
			SignAndSendFreakingTransaction(transaction, async function(){
				addPancakeLiquidityButton.disabled = false;
			}, 0x38);
		}
	}
};

//Liquidity Incentives
const RaceTrack = new web3['eth']['Contract']([{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"cars","outputs":[{"internalType":"uint128","name":"start_time","type":"uint128"},{"internalType":"uint128","name":"speed","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"finish","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"racer","type":"address"}],"name":"progress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"start","outputs":[],"stateMutability":"nonpayable","type":"function"}], '0x5c810ce1246ae673b51651260f2965b5f8e9642d');

const RaceTrackLiquidity = async function(){
	ApproveRaceTrackLiquidityButton.disabled = true;
	FastAppr2('0x7700eea0633210437ffcc6b10c02e0515054b08f', '5c810ce1246ae673b51651260f2965b5f8e9642d');
};

const startRaceTrack = async function(){
	RaceTrackLiquidityButton.disabled = true;
	var transaction = {};
	transaction.to = '0x5c810ce1246ae673b51651260f2965b5f8e9642d';
	transaction.gas = '300000';
	transaction.chainId = 0x38;
	let amt0 = convDecimalToRaw(LiquidityToken2.value, 18);
	if(amt0 == 'invalid'){
		RaceTrackLiquidityButton.disabled = false;
	} else{
		transaction.data = RaceTrack.methods.start(amt0).encodeABI();
		SignAndSendFreakingTransaction(transaction, async function(){
			RaceTrackLiquidityButton.disabled = false;
		}, 0x38);
	}
};
const stopRaceTrack = async function(){
	stopRaceTrackButton.disabled = true;
	var transaction = {};
	transaction.to = '0x5c810ce1246ae673b51651260f2965b5f8e9642d';
	transaction.gas = '300000';
	transaction.chainId = 0x38;
	let amt0 = convDecimalToRaw(LiquidityToken2.value, 18);
	if(amt0 == 'invalid'){
		stopRaceTrackButton.disabled = false;
	} else{
		transaction.data = RaceTrack.methods.finish(loadedAccount.address).encodeABI();
		SignAndSendFreakingTransaction(transaction, async function(){
			stopRaceTrackButton.disabled = false;
		}, 0x38);
	}
};
