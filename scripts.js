//begin auto-generated DOM binding section
const beforeWalletLoad = document.getElementById('beforeWalletLoad');
const loadmode1 = document.getElementById('loadmode1');
const loadmode2 = document.getElementById('loadmode2');
const privateKey = document.getElementById('privateKey');
const loadmode3 = document.getElementById('loadmode3');
const listofwallets = document.getElementById('listofwallets');
const pass3 = document.getElementById('pass3');
const storedWalletName2 = document.getElementById('storedWalletName2');
const afterWalletLoad = document.getElementById('afterWalletLoad');
const hideApprovalOwner = document.getElementById('hideApprovalOwner');
const approvalOwner = document.getElementById('approvalOwner');
const sendto = document.getElementById('sendto');
const eubiamount = document.getElementById('eubiamount');
const useApprovalCheckbox = document.getElementById('useApprovalCheckbox');
const sendEubiButton = document.getElementById('sendEubiButton');
const approveEubiButton = document.getElementById('approveEubiButton');
const CoinTypeText = document.getElementById('CoinTypeText');
const sendtoNative = document.getElementById('sendtoNative');
const NativeAmount = document.getElementById('NativeAmount');
const sendNativeButton = document.getElementById('sendNativeButton');
const sendNativeMessage = document.getElementById('sendNativeMessage');
const sendNativePreloader = document.getElementById('sendNativePreloader');
const pass1 = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');
const storedWalletName = document.getElementById('storedWalletName');
const lockAndStoreMSG = document.getElementById('lockAndStoreMSG');
const myWalletAddress = document.getElementById('myWalletAddress');
const eubiBalance = document.getElementById('eubiBalance');
const nativeBalance = document.getElementById('nativeBalance');
const dividendsMenu = document.getElementById('dividendsMenu');
const pendingDividends = document.getElementById('pendingDividends');
const stakedTokensText = document.getElementById('stakedTokensText');
const burnedTokensText = document.getElementById('burnedTokensText');
const NGAmount = document.getElementById('NGAmount');
const withdrawDividendButton = document.getElementById('withdrawDividendButton');
const unstakeEubiButton = document.getElementById('unstakeEubiButton');
const stakeEubiButton = document.getElementById('stakeEubiButton');
const burnEubiButton = document.getElementById('burnEubiButton');
const ReceiverPaidGasFees = document.getElementById('ReceiverPaidGasFees');
const RPGFReceiver = document.getElementById('RPGFReceiver');
const RPGFAmount = document.getElementById('RPGFAmount');
const RPGFTX = document.getElementById('RPGFTX');
const RPGFRedeemButton = document.getElementById('RPGFRedeemButton');
const PancakeSwap = document.getElementById('PancakeSwap');
const PancakeAmount = document.getElementById('PancakeAmount');
const PancakeButton = document.getElementById('PancakeButton');
const PancakeApproveButton = document.getElementById('PancakeApproveButton');
const customNode = document.getElementById('customNode');
const customNode2 = document.getElementById('customNode2');
const customNode3 = document.getElementById('customNode3');
const MultipurpuseModal = document.getElementById('MultipurpuseModal');
const walletMessage = document.getElementById('walletMessage');
const SendEUBIModal = document.getElementById('SendEUBIModal');
const SendEubiMessage2 = document.getElementById('SendEubiMessage2');
const NativeSendModal = document.getElementById('NativeSendModal');
const SendNativeMessage2 = document.getElementById('SendNativeMessage2');
const WithdrawDividendsModal = document.getElementById('WithdrawDividendsModal');
const UnstakeTokensModal = document.getElementById('UnstakeTokensModal');
const StakeTokensModal = document.getElementById('StakeTokensModal');
const BurnTokensModal = document.getElementById('BurnTokensModal');
const RPGFModal = document.getElementById('RPGFModal');
const deleteWalletModal = document.getElementById('deleteWalletModal');
const PancakeModal = document.getElementById('PancakeModal');
const PancakeMessage = document.getElementById('PancakeMessage');
//end auto-generated DOM binding section

//begin auto-generated modal instance binding section
M['AutoInit']();
const MultipurpuseModalInstance = M['Modal']['getInstance'](MultipurpuseModal);
const SendEUBIModalInstance = M['Modal']['getInstance'](SendEUBIModal);
const NativeSendModalInstance = M['Modal']['getInstance'](NativeSendModal);
const WithdrawDividendsModalInstance = M['Modal']['getInstance'](WithdrawDividendsModal);
const UnstakeTokensModalInstance = M['Modal']['getInstance'](UnstakeTokensModal);
const StakeTokensModalInstance = M['Modal']['getInstance'](StakeTokensModal);
const BurnTokensModalInstance = M['Modal']['getInstance'](BurnTokensModal);
const RPGFModalInstance = M['Modal']['getInstance'](RPGFModal);
const deleteWalletModalInstance = M['Modal']['getInstance'](deleteWalletModal);
const PancakeModalInstance = M['Modal']['getInstance'](PancakeModal);
//end auto-generated modal instance binding section
const web3 = new Web3('https://node1.mintme.com:443'),
	loadedTokenContracts = [];
var loadedAccount = null;
const BigInt = web3['utils']['BN'],
	MintMEReceiverPaidGasFees = new web3['eth']['Contract'](JSON['parse']('[{\"inputs\": [{\"internalType\": \"uint256\",\"name\": \"random\",\"type\": \"uint256\"},{\"internalType\": \"address\",\"name\": \"token\",\"type\": \"address\"},{\"internalType\": \"address\",\"name\": \"from\",\"type\": \"address\"},{\"internalType\": \"address\",\"name\": \"to\",\"type\": \"address\"},{\"internalType\": \"uint256\",\"name\": \"value\",\"type\": \"uint256\"},{\"internalType\": \"uint256\",\"name\": \"expiry\",\"type\": \"uint256\"},{\"internalType\": \"uint8\",\"name\": \"v\",\"type\": \"uint8\"},{\"internalType\": \"bytes32\",\"name\": \"r\",\"type\": \"bytes32\"},{\"internalType\": \"bytes32\",\"name\": \"s\",\"type\": \"bytes32\"}],\"name\": \"sendPreauthorizedTransaction\",\"outputs\": [],\"stateMutability\": \"nonpayable\",\"type\": \"function\"}]'), '0x1d81563e53a18136957ea28f441e06ac7b66de1b'),
	PancakeRouter = new web3['eth']['Contract'](JSON['parse']('[{\"inputs\": [{\"internalType\": \"uint256\",\"name\": \"amountIn\",\"type\": \"uint256\"},{\"internalType\": \"address[]\",\"name\": \"path\",\"type\": \"address[]\"}],\"name\": \"getAmountsOut\",\"outputs\": [{\"internalType\": \"uint256[]\",\"name\": \"amounts\",\"type\": \"uint256[]\"}],\"stateMutability\": \"view\",\"type\": \"function\"},{\"inputs\": [{\"internalType\": \"uint256\",\"name\": \"amountOutMin\",\"type\": \"uint256\"},{\"internalType\": \"address[]\",\"name\": \"path\",\"type\": \"address[]\"},{\"internalType\": \"address\",\"name\": \"to\",\"type\": \"address\"},{\"internalType\": \"uint256\",\"name\": \"deadline\",\"type\": \"uint256\"}],\"name\": \"swapExactETHForTokens\",\"outputs\": [{\"internalType\": \"uint256[]\",\"name\": \"amounts\",\"type\": \"uint256[]\"}],\"stateMutability\": \"payable\",\"type\": \"function\"},{\"inputs\": [{\"internalType\": \"uint256\",\"name\": \"amountIn\",\"type\": \"uint256\"},{\"internalType\": \"uint256\",\"name\": \"amountOutMin\",\"type\": \"uint256\"},{\"internalType\": \"address[]\",\"name\": \"path\",\"type\": \"address[]\"},{\"internalType\": \"address\",\"name\": \"to\",\"type\": \"address\"},{\"internalType\": \"uint256\",\"name\": \"deadline\",\"type\": \"uint256\"}],\"name\": \"swapExactTokensForETH\",\"outputs\": [{\"internalType\": \"uint256[]\",\"name\": \"amounts\",\"type\": \"uint256[]\"}],\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"inputs\": [{\"internalType\": \"uint256\",\"name\": \"amountIn\",\"type\": \"uint256\"},{\"internalType\": \"uint256\",\"name\": \"amountOutMin\",\"type\": \"uint256\"},{\"internalType\": \"address[]\",\"name\": \"path\",\"type\": \"address[]\"},{\"internalType\": \"address\",\"name\": \"to\",\"type\": \"address\"},{\"internalType\": \"uint256\",\"name\": \"deadline\",\"type\": \"uint256\"}],\"name\": \"swapExactTokensForTokens\",\"outputs\": [{\"internalType\": \"uint256[]\",\"name\": \"amounts\",\"type\": \"uint256[]\"}],\"stateMutability\": \"nonpayable\",\"type\": \"function\"}]'), '0x10ed43c718714eb63d5aa57b78b54704e256024e'),
	c100 = new BigInt(0x64),
	c99 = new BigInt(0x63);
var walletAddressRAW = '0x0000000000000000000000000000000000000000',
	contractAddress = '0x8AFA1b7a8534D519CB04F4075D3189DF8a6738C1',
	privateKeyRAW = '',
	networkId = 0x609e,
	minPancakeOutput = '0',
	PancakeTargetFrom = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
	PancakeTargetTo = '0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D',
	PancakeAmountIn = '0',
	allSavedWallets = [],
	selectedTargetWallet = -0x1;
history['scrollRestoration'] ? history['scrollRestoration'] = 'manual' : window['onbeforeunload'] = function() {
	window['scrollTo'](0x0, 0x0);
};
const escapeHtml = function(_0x18253f) {
		var _0x25f073 = {
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'\"': '&quot;',
			'\'': '&#039;'
		};
		return _0x18253f['replace'](/[&<>"']/g, function(_0x3a2c08) {
			return _0x25f073[_0x3a2c08];
		});
	},
	ilierateAllWallets = async function() {
		listofwallets['innerHTML'] = '<strong class=\"flow-text\">Which wallet do you want to load?</strong><br/>';
		var _0x206502 = allSavedWallets['length'];
		for(var _0x185eaa = 0x0; _0x185eaa < _0x206502; _0x185eaa++) {
			var _0x2c2c29 = allSavedWallets[_0x185eaa];
			_0x2c2c29 != 'deleted wallet' && listofwallets['insertAdjacentHTML']('beforeEnd', '<p><label class=\"tooltipped\" data-position=\"bottom\" data-tooltip=\"' + escapeHtml(_0x2c2c29['address']) + '\"><input name=\"group1\" type=\"radio\" onclick=\"selectedTargetWallet = ' + _0x185eaa['toString']() + ';\"/><span style=\"color: black;\">' + escapeHtml(_0x2c2c29['name']) + '</span></label></p>');
		}
	}; {
	var walletStorage = localStorage['getItem']('savedeubiwallets');
	walletStorage != null && (allSavedWallets = JSON['parse'](walletStorage)), walletStorage = localStorage['getItem']('savedeubiwallet'), walletStorage != null && (walletStorage = '{\"name\": \"Auto-migrated quick wallet access\",' + walletStorage['substring'](0x1), allSavedWallets[allSavedWallets['length']] = JSON['parse'](walletStorage)), ilierateAllWallets();
}
const flushWalletStorage = async function() {
	localStorage['setItem']('savedeubiwallets', JSON['stringify'](allSavedWallets)), localStorage['removeItem']('savedeubiwallet'), ilierateAllWallets();
}, loadTokenContractIMPL = function(_0x22005f) {
	return new web3['eth']['Contract'](JSON['parse']('[{\"constant\": false,\"inputs\": [{\"name\": \"spender\",\"type\": \"address\"},{\"name\": \"value\",\"type\": \"uint256\"}],\"name\": \"approve\",\"outputs\": [{\"name\": \"\",\"type\": \"bool\"}],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"from\",\"type\": \"address\"},{\"name\": \"to\",\"type\": \"address\"},{\"name\": \"value\",\"type\": \"uint256\"}],\"name\": \"transferFrom\",\"outputs\": [{\"name\": \"\",\"type\": \"bool\"}],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [{\"name\": \"owner\",\"type\": \"address\"}],\"name\": \"stakedForDividends\",\"outputs\": [{\"name\": \"\",\"type\": \"uint256\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"target\",\"type\": \"address\"},{\"name\": \"amount\",\"type\": \"uint256\"}],\"name\": \"burnForDividends\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [{\"name\": \"who\",\"type\": \"address\"}],\"name\": \"balanceOf\",\"outputs\": [{\"name\": \"\",\"type\": \"uint256\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"addr\",\"type\": \"address\"},{\"name\": \"amount\",\"type\": \"uint256\"},{\"name\": \"data\",\"type\": \"bytes\"}],\"name\": \"withdrawDividendsTo\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"to\",\"type\": \"address\"},{\"name\": \"value\",\"type\": \"uint256\"}],\"name\": \"transfer\",\"outputs\": [{\"name\": \"\",\"type\": \"bool\"}],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"target\",\"type\": \"address\"},{\"name\": \"amount\",\"type\": \"uint256\"}],\"name\": \"stakeForDividends\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": false,\"inputs\": [{\"name\": \"to\",\"type\": \"address\"},{\"name\": \"amount\",\"type\": \"uint256\"}],\"name\": \"unstake\",\"outputs\": [],\"payable\": false,\"stateMutability\": \"nonpayable\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [{\"name\": \"addr\",\"type\": \"address\"}],\"name\": \"pendingDividends\",\"outputs\": [{\"name\": \"\",\"type\": \"uint256\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [{\"name\": \"owner\",\"type\": \"address\"},{\"name\": \"spender\",\"type\": \"address\"}],\"name\": \"allowance\",\"outputs\": [{\"name\": \"\",\"type\": \"uint256\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"},{\"constant\": true,\"inputs\": [{\"name\": \"owner\",\"type\": \"address\"}],\"name\": \"burnedForDividends\",\"outputs\": [{\"name\": \"\",\"type\": \"uint256\"}],\"payable\": false,\"stateMutability\": \"view\",\"type\": \"function\"}]'), _0x22005f);
}, createWallet = async function() {
	loadedAccount = web3['eth']['accounts']['create'](), walletMessage['innerHTML'] = 'Your wallet was successfully created, thank you for using MyEUBIWallet!', MultipurpuseModalInstance['open'](), walletAddressRAW = loadedAccount['address'], privateKeyRAW = loadedAccount['privateKey'], beforeWalletLoad['style']['display'] = 'none', myWalletAddress['innerHTML'] = 'Your wallet address is: ' + escapeHtml(walletAddressRAW), afterWalletLoad['style']['display'] = 'block', reloadWallet();
}, loadTokenContract = function(_0xd7a08e) {
	return loadingTokenContract = loadedTokenContracts[_0xd7a08e], loadingTokenContract == undefined && (loadingTokenContract = loadTokenContractIMPL(_0xd7a08e), loadedTokenContracts[_0xd7a08e] = loadingTokenContract), loadingTokenContract;
}, refreshTokenBalance = async function(_0x1e82d2, _0x5385b5, _0x1c1cb6, _0x1f932c, _0x4bae88) {
	_0x1f932c = escapeHtml(_0x1f932c), loadTokenContract(_0x1e82d2)['methods']['balanceOf'](_0x1c1cb6)['call']()['then'](function(_0x18dc20) {
		var _0x42c3b9 = _0x18dc20['length'];
		_0x42c3b9 > _0x4bae88 ? (_0x42c3b9 -= _0x4bae88, _0x18dc20 = _0x18dc20['substring'](0x0, _0x42c3b9) + '.' + _0x18dc20['substring'](_0x42c3b9)['padEnd'](_0x4bae88, '0')) : _0x18dc20 = '0.' + _0x18dc20['padStart'](_0x4bae88, '0'), _0x5385b5['innerHTML'] = 'You have ' + escapeHtml(_0x18dc20) + ' ' + _0x1f932c + ' Tokens';
	}, function(_0x15038d) {
		_0x5385b5['innerHTML'] = 'ERROR: Can\'t load ' + _0x1f932c + ' balance: ' + escapeHtml(_0x15038d['message']) + '!';
	});
}, conv2dec = function(_0x42719a, _0xae61c5) {
	var _0xfc8d61 = _0x42719a['length'];
	return _0xfc8d61 > _0xae61c5 ? (_0xfc8d61 -= _0xae61c5, _0x42719a['substring'](0x0, _0xfc8d61) + '.' + _0x42719a['substring'](_0xfc8d61)['padEnd'](_0xae61c5, '0')) : '0.' + _0x42719a['padStart'](_0xae61c5, '0');
}, reloadWallet = async function() {
	eubiBalance['innerHTML'] = 'Identifying blockchain...', nativeBalance['innerHTML'] = '', networkId = await web3['eth']['getChainId']();
	switch(networkId) {
		case 0x609e:
			PancakeSwap['style']['display'] = 'none', ReceiverPaidGasFees['style']['display'] = 'list-item', CoinTypeText['innerHTML'] = 'Send MintME', SendNativeMessage2['innerHTML'] = 'Are you sure you want to send MintME?', SendEubiMessage2['innerHTML'] = 'Are you sure you want to send EUBI?', dividendsMenu['style']['display'] = 'none', eubiBalance['innerHTML'] = 'Loading EUBI balance...', nativeBalance['innerHTML'] = 'Loading MintME balance...', contractAddress = '0x8AFA1b7a8534D519CB04F4075D3189DF8a6738C1', refreshTokenBalance('0x8AFA1b7a8534D519CB04F4075D3189DF8a6738C1', eubiBalance, walletAddressRAW, 'EUBI', 0xc), web3['eth']['getBalance'](walletAddressRAW)['then'](function(_0xcf4dae) {
				nativeBalance['innerHTML'] = 'You have ' + escapeHtml(conv2dec(_0xcf4dae, 0x12)) + ' MintME to pay for gas';
			}, function(_0x1aaa50) {
				nativeBalance['innerHTML'] = 'ERROR: Can\'t load MintME balance: ' + escapeHtml(_0x1aaa50['message']) + '!';
			});
			break;
		case 0x38:
			PancakeSwap['style']['display'] = 'list-item', ReceiverPaidGasFees['style']['display'] = 'none', CoinTypeText['innerHTML'] = 'Send BNB', SendNativeMessage2['innerHTML'] = 'Are you sure you want to send BNB?', SendEubiMessage2['innerHTML'] = 'Are you sure you want to send bEUBI?', dividendsMenu['style']['display'] = 'none', eubiBalance['innerHTML'] = 'Loading bEUBI balance...', nativeBalance['innerHTML'] = 'Loading BNB balance...', contractAddress = '0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D', refreshTokenBalance('0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D', eubiBalance, walletAddressRAW, 'bEUBI', 0x12), web3['eth']['getBalance'](walletAddressRAW)['then'](function(_0x325e78) {
				nativeBalance['innerHTML'] = 'You have ' + escapeHtml(conv2dec(_0x325e78, 0x12)) + ' BNB to pay for gas';
			}, function(_0x37fcf2) {
				nativeBalance['innerHTML'] = 'ERROR: Can\'t load BNB balance: ' + escapeHtml(_0x37fcf2['message']) + '!';
			});
			break;
		case 0x4:
			PancakeSwap['style']['display'] = 'none', ReceiverPaidGasFees['style']['display'] = 'none', CoinTypeText['innerHTML'] = 'Send Testnet Ethereum', SendNativeMessage2['innerHTML'] = 'Are you sure you want to send Testnet Ethereum?', SendEubiMessage2['innerHTML'] = 'Are you sure you want to send EUBI?', dividendsMenu['style']['display'] = 'list-item', stakedTokensText['innerHTML'] = 'Loading staked tokens...', eubiBalance['innerHTML'] = 'Loading EUBIng balance...', pendingDividends['innerHTML'] = 'Loading pending dividends...', nativeBalance['innerHTML'] = 'Loading Testnet Ethereum balance...', contractAddress = '0x8e4d858128c9ba2d3a7636892268fab031eddaf8', refreshTokenBalance('0x8e4d858128c9ba2d3a7636892268fab031eddaf8', eubiBalance, walletAddressRAW, 'EUBI', 0x12), web3['eth']['getBalance'](walletAddressRAW)['then'](function(_0x29e99e) {
				nativeBalance['innerHTML'] = 'You have ' + escapeHtml(_0x29e99e) + ' Testnet Ethereum to pay for gas';
			}, function(_0x42bb18) {
				nativeBalance['innerHTML'] = 'ERROR: Can\'t load Testnet Ethereum balance: ' + escapeHtml(_0x42bb18['message']) + '!';
			});
			var _0x2e849f = loadTokenContract('0x8e4d858128c9ba2d3a7636892268fab031eddaf8');
			_0x2e849f['methods']['pendingDividends'](walletAddressRAW)['call']()['then'](function(_0x213c1d) {
				pendingDividends['innerHTML'] = 'You have ' + escapeHtml(conv2dec(_0x213c1d, 0x12)) + ' ETH worth of pending dividends';
			}, function(_0x481d54) {
				pendingDividends['innerHTML'] = 'ERROR: Can\'t load pending dividends: ' + escapeHtml(_0x481d54['message']) + '!';
			}), _0x2e849f['methods']['stakedForDividends'](walletAddressRAW)['call']()['then'](function(_0x49254a) {
				stakedTokensText['innerHTML'] = 'You have ' + escapeHtml(conv2dec(_0x49254a, 0x12)) + ' EUBI staked for dividends';
			}, function(_0x62d3bd) {
				stakedTokensText['innerHTML'] = 'ERROR: Can\'t load staking balance: ' + escapeHtml(_0x62d3bd['message']) + '!';
			}), _0x2e849f['methods']['burnedForDividends'](walletAddressRAW)['call']()['then'](function(_0xd15872) {
				burnedTokensText['innerHTML'] = 'You have ' + escapeHtml(conv2dec(_0xd15872, 0x12)) + ' EUBI burned for dividends';
			}, function(_0x1c7a89) {
				burnedTokensText['innerHTML'] = 'ERROR: Can\'t load staking balance: ' + escapeHtml(_0x1c7a89['message']) + '!';
			});
			break;
		default:
			eubiBalance['innerHTML'] = 'EUBI is not deployed on this blockchain!', nativeBalance['innerHTML'] = 'Loading unknown balance...', web3['eth']['getBalance'](walletAddressRAW)['then'](function(_0x1ba4e4) {
				nativeBalance['innerHTML'] = 'You have ' + escapeHtml(conv2dec(_0x1ba4e4, 0x12)) + ' unknown to pay for gas';
			}, function(_0x4cf006) {
				nativeBalance['innerHTML'] = 'ERROR: Can\'t load unknown balance: ' + escapeHtml(_0x4cf006['message']) + '!';
			});
			break;
	}
}, loadWallet = async function() {
	privateKeyRAW = privateKey['value'], loadedAccount = null;
	if(privateKeyRAW['length'] == 0x42)
		try {
			loadedAccount = web3['eth']['accounts']['privateKeyToAccount'](privateKeyRAW);
		} catch (_0x4176ec) {
			loadedAccount = null, privateKeyRAW = '';
		}
	loadedAccount == null ? (walletMessage['innerHTML'] = 'Can\'t load wallet', MultipurpuseModalInstance['open']()) : (walletMessage['innerHTML'] = 'Your wallet was successfully loaded, thank you for using MyEUBIWallet!', MultipurpuseModalInstance['open'](), walletAddressRAW = loadedAccount['address'], beforeWalletLoad['style']['display'] = 'none', myWalletAddress['innerHTML'] = 'Your wallet address is: ' + escapeHtml(walletAddressRAW), afterWalletLoad['style']['display'] = 'block', reloadWallet());
}, loadWallet2 = async function() {
	if(selectedTargetWallet < 0x0)
		walletMessage['innerHTML'] = 'Please select which wallet to load!', MultipurpuseModalInstance['open']();
	else {
		try {
			loadedAccount = web3['eth']['accounts']['decrypt'](JSON['stringify'](allSavedWallets[selectedTargetWallet]), pass3['value']), privateKeyRAW = loadedAccount['privateKey'];
		} catch (_0x2f950e) {
			loadedAccount = null;
		}
		loadedAccount == null ? (walletMessage['innerHTML'] = 'Can\'t load wallet!', MultipurpuseModalInstance['open']()) : (walletAddressRAW = loadedAccount['address'], beforeWalletLoad['style']['display'] = 'none', myWalletAddress['innerHTML'] = 'Your wallet address is: ' + escapeHtml(walletAddressRAW), afterWalletLoad['style']['display'] = 'block', walletMessage['innerHTML'] = 'Your wallet was successfully loaded, thank you for using MyEUBIWallet!', MultipurpuseModalInstance['open'](), reloadWallet());
	}
}, deleteWallet = async function() {
	allSavedWallets[selectedTargetWallet] = 'deleted wallet', flushWalletStorage();
}, renameWallet = async function() {
	allSavedWallets[selectedTargetWallet]['name'] = escapeHtml(storedWalletName2['value']), flushWalletStorage();
}, convDecimalToRaw = function(_0x387775, _0x150500) {
	var _0x4f4417 = 'invalid';
	try {
		while(_0x387775['startsWith']('0')) {
			_0x387775 = _0x387775['substring'](0x1);
			if(_0x387775['startsWith']('.') || _0x387775 == '') {
				_0x387775 = '0' + _0x387775;
				break;
			}
		}
		_0x387775 = _0x387775['split']('.');
		_0x387775['length'] == 0x1 && (_0x387775[0x1] = '0');
		_0x387775['length'] == 0x1 && (_0x387775 = [
			_0x387775[0x0],
			'0'
		]);
		if(_0x387775['length'] == 0x2 && _0x150500 >= _0x387775[0x1]['length']) {
			var _0x2892c7 = new BigInt(_0x387775[0x0]);
			if(_0x2892c7['toString']() == _0x387775[0x0]) {
				var _0x3afde = '1' ['padEnd'](_0x150500 + 0x1, '0'),
					_0x5d7eda = new BigInt(_0x3afde);
				if(_0x5d7eda['toString']() == _0x3afde) {
					_0x3afde = _0x387775[0x1]['padEnd'](_0x150500, '0');
					var _0x5cb0e4 = new BigInt(_0x3afde);
					_0x5cb0e4['toString']()['padStart'](_0x150500, '0') == _0x3afde && (_0x4f4417 = _0x2892c7['mul'](_0x5d7eda)['add'](_0x5cb0e4)['toString']());
				}
			}
		}
	} catch (_0x55f818) {}
	return _0x4f4417 == 'invalid' && (walletMessage['innerHTML'] = 'Invalid amount!', MultipurpuseModalInstance['open']()), _0x4f4417;
}, NativeSend = async function() {
	sendNativeButton['disabled'] = !![];
	var _0x2e4327 = {};
	_0x2e4327['to'] = sendtoNative['value'];
	var _0x2aa383 = convDecimalToRaw(NativeAmount['value'], 0x12);
	if(_0x2aa383 == 'invalid') {
		sendNativeButton['disabled'] = ![];
		return;
	}
	_0x2e4327['value'] = _0x2aa383;
	var _0x4bc032 = networkId,
		_0x1a22c9 = function(_0x46bfc0) {
			_0x2e4327['gas'] = _0x46bfc0, loadedAccount['signTransaction'](_0x2e4327)['then'](function(_0x347fbc) {
				web3['eth']['sendSignedTransaction'](_0x347fbc['rawTransaction'])['then'](function(_0x4d7dc3) {
					if(_0x4d7dc3 === null)
						walletMessage['innerHTML'] = 'Transaction sent successfully!';
					else
						switch(_0x4bc032) {
							case 0x609e:
								walletMessage['innerHTML'] = 'Transaction sent successfully! <a href=\"https://www.mintme.com/explorer/tx/' + escapeHtml(_0x4d7dc3['transactionHash']) + '\">view on blockchain explorer</a>';
								break;
							case 0x38:
								walletMessage['innerHTML'] = 'Transaction sent successfully! <a href=\"https://www.bscscan.com/tx/' + escapeHtml(_0x4d7dc3['transactionHash']) + '\">view on blockchain explorer</a>';
								break;
							case 0x4:
								walletMessage['innerHTML'] = 'Transaction sent successfully! <a href=\"https://rinkeby.etherscan.io/tx/' + escapeHtml(_0x4d7dc3['transactionHash']) + '\">view on blockchain explorer</a>';
								break;
						}
					sendNativeButton['disabled'] = ![], MultipurpuseModalInstance['open'](), reloadWallet();
				}, function(_0x4686e4) {
					sendNativeButton['disabled'] = ![], walletMessage['innerHTML'] = 'Can\'t send transaction: ' + escapeHtml(_0x4686e4['message']) + '!', MultipurpuseModalInstance['open'](), reloadWallet();
				});
			}, function(_0x670129) {
				sendNativeButton['disabled'] = ![], walletMessage['innerHTML'] = 'Can\'t sign transaction: ' + escapeHtml(_0x670129['message']) + '!', MultipurpuseModalInstance['open']();
			});
		};
	try {
		web3['eth']['estimateGas'](_0x2e4327)['then'](function(_0x4db2fb) {
			_0x1a22c9(_0x4db2fb);
		}, function(_0x4f41ab) {
			_0x1a22c9('21000');
		});
	} catch (_0x3390c7) {
		walletMessage['innerHTML'] = 'Invalid address!', MultipurpuseModalInstance['open'](), sendNativeButton['disabled'] = ![];
		return;
	}
}, sendeubitx = async function(_0x19dc3e) {
	sendEubiButton['disabled'] = !![], approveEubiButton['disabled'] = !![];
	var _0x8d19f2 = {},
		_0x358359 = 0x12,
		_0x4324ae = '0x8AFA1b7a8534D519CB04F4075D3189DF8a6738C1',
		_0x13acef = networkId;
	switch(_0x13acef) {
		case 0x609e:
			_0x358359 = 0xc;
			break;
		case 0x38:
			_0x4324ae = '0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D';
			break;
		case 0x4:
			_0x4324ae = '0x8e4d858128c9ba2d3a7636892268fab031eddaf8';
			break;
		default:
			walletMessage['innerHTML'] = 'EUBI is not deployed on this blockchain!', MultipurpuseModalInstance['open'](), sendEubiButton['disabled'] = ![], approveEubiButton['disabled'] = ![];
			return;
	}
	try {
		var _0x35aa8a = sendto['value'],
			_0x3c628e = convDecimalToRaw(eubiamount['value'], _0x358359);
		if(_0x3c628e == 'invalid') {
			sendEubiButton['disabled'] = ![], approveEubiButton['disabled'] = ![];
			return;
		} else
			useApprovalCheckbox['checked'] ? _0x8d19f2['data'] = loadedTokenContracts[_0x4324ae]['methods']['transferFrom'](approvalOwner['value'], _0x35aa8a, _0x3c628e)['encodeABI']() : _0x8d19f2['data'] = loadedTokenContracts[_0x4324ae]['methods'][_0x19dc3e](_0x35aa8a, _0x3c628e)['encodeABI']();
	} catch (_0x440f48) {
		walletMessage['innerHTML'] = 'Invalid address!', MultipurpuseModalInstance['open'](), sendEubiButton['disabled'] = ![], approveEubiButton['disabled'] = ![];
		return;
	}
	_0x8d19f2['to'] = _0x4324ae;
	var _0x4a4d0b = function(_0x2fe3c0) {
		_0x8d19f2['gas'] = _0x2fe3c0, loadedAccount['signTransaction'](_0x8d19f2)['then'](function(_0x386112) {
			web3['eth']['sendSignedTransaction'](_0x386112['rawTransaction'])['then'](function(_0x2e3f6b) {
				if(_0x2e3f6b === null)
					walletMessage['innerHTML'] = 'Transaction sent successfully!', sendEubiButton['disabled'] = ![], approveEubiButton['disabled'] = ![];
				else
					switch(_0x13acef) {
						case 0x609e:
							walletMessage['innerHTML'] = 'Transaction sent successfully! <a href=\"https://www.mintme.com/explorer/tx/' + escapeHtml(_0x2e3f6b['transactionHash']) + '\">view on blockchain explorer</a>';
							break;
						case 0x38:
							walletMessage['innerHTML'] = 'Transaction sent successfully! <a href=\"https://www.bscscan.com/tx/' + escapeHtml(_0x2e3f6b['transactionHash']) + '\">view on blockchain explorer</a>';
							break;
						case 0x4:
							walletMessage['innerHTML'] = 'Transaction sent successfully! <a href=\"https://rinkeby.etherscan.io/tx/' + escapeHtml(_0x2e3f6b['transactionHash']) + '\">view on blockchain explorer</a>';
							break;
					}
				sendEubiButton['disabled'] = ![], approveEubiButton['disabled'] = ![], MultipurpuseModalInstance['open'](), reloadWallet();
			}, function(_0x1c59e3) {
				walletMessage['innerHTML'] = 'Can\'t send transaction: ' + escapeHtml(_0x1c59e3['message']) + '!', MultipurpuseModalInstance['open'](), sendEubiButton['disabled'] = ![], approveEubiButton['disabled'] = ![], reloadWallet();
			});
		}, function(_0x415c32) {
			walletMessage['innerHTML'] = 'Can\'t sign transaction: ' + escapeHtml(_0x415c32['message']) + '!', MultipurpuseModalInstance['open'](), sendEubiButton['disabled'] = ![], approveEubiButton['disabled'] = ![];
		});
	};
	web3['eth']['estimateGas'](_0x8d19f2)['then'](_0x4a4d0b, function(_0x4b66fc) {
		_0x4a4d0b('100000');
	});
}, ManageDividends = async function(_0x9fdf26) {
	withdrawDividendButton['disabled'] = !![], unstakeEubiButton['disabled'] = !![], stakeEubiButton['disabled'] = !![], burnEubiButton['disabled'] = !![];
	var _0x48db48 = {},
		_0x20b32d = convDecimalToRaw(NGAmount['value'], 0x12);
	if(_0x20b32d == 'invalid') {
		withdrawDividendButton['disabled'] = ![], unstakeEubiButton['disabled'] = ![], stakeEubiButton['disabled'] = ![], burnEubiButton['disabled'] = ![], walletMessage['innerHTML'] = 'Please enter amount!', MultipurpuseModalInstance['open']();
		return;
	}
	switch(_0x9fdf26) {
		case 'withdraw':
			_0x48db48['data'] = loadedTokenContracts['0x8e4d858128c9ba2d3a7636892268fab031eddaf8']['methods']['withdrawDividendsTo'](walletAddressRAW, _0x20b32d, '0x00')['encodeABI']();
			break;
		case 'unstake':
			_0x48db48['data'] = loadedTokenContracts['0x8e4d858128c9ba2d3a7636892268fab031eddaf8']['methods']['unstake'](walletAddressRAW, _0x20b32d)['encodeABI']();
			break;
		case 'stake':
			_0x48db48['data'] = loadedTokenContracts['0x8e4d858128c9ba2d3a7636892268fab031eddaf8']['methods']['stakeForDividends'](walletAddressRAW, _0x20b32d)['encodeABI']();
			break;
		case 'burn':
			_0x48db48['data'] = loadedTokenContracts['0x8e4d858128c9ba2d3a7636892268fab031eddaf8']['methods']['burnForDividends'](walletAddressRAW, _0x20b32d)['encodeABI']();
			break;
		default:
			withdrawDividendButton['disabled'] = ![], unstakeEubiButton['disabled'] = ![], stakeEubiButton['disabled'] = ![], burnEubiButton['disabled'] = ![], walletMessage['innerHTML'] = 'Undefined action!', MultipurpuseModalInstance['open']();
			break;
	}
	_0x48db48['gas'] = '200000', _0x48db48['to'] = '0x8e4d858128c9ba2d3a7636892268fab031eddaf8', loadedAccount['signTransaction'](_0x48db48)['then'](function(_0x5a30be) {
		web3['eth']['sendSignedTransaction'](_0x5a30be['rawTransaction'])['then'](function(_0x36d2a7) {
			_0x36d2a7 === null ? (walletMessage['innerHTML'] = 'Transaction sent successfully!', MultipurpuseModalInstance['open'](), withdrawDividendButton['disabled'] = ![], unstakeEubiButton['disabled'] = ![], stakeEubiButton['disabled'] = ![], burnEubiButton['disabled'] = ![]) : (walletMessage['innerHTML'] = 'Transaction sent successfully! <a href=\"https://rinkeby.etherscan.io/tx/' + escapeHtml(_0x36d2a7['transactionHash']) + '\">view on blockchain explorer</a>', MultipurpuseModalInstance['open'](), withdrawDividendButton['disabled'] = ![], unstakeEubiButton['disabled'] = ![], stakeEubiButton['disabled'] = ![], burnEubiButton['disabled'] = ![]), reloadWallet();
		}, function(_0xe11864) {
			walletMessage['innerHTML'] = 'Can\'t send transaction: ' + escapeHtml(_0xe11864['message']) + '!', MultipurpuseModalInstance['open'](), withdrawDividendButton['disabled'] = ![], unstakeEubiButton['disabled'] = ![], stakeEubiButton['disabled'] = ![], burnEubiButton['disabled'] = ![], reloadWallet();
		});
	}, function(_0x3a568e) {
		walletMessage['innerHTML'] = 'Can\'t sign transaction: ' + escapeHtml(_0x3a568e['message']) + '!', MultipurpuseModalInstance['open'](), withdrawDividendButton['disabled'] = ![], unstakeEubiButton['disabled'] = ![], stakeEubiButton['disabled'] = ![], burnEubiButton['disabled'] = ![];
	});
}, encryptAndStore = async function() {
	var _0xfc7ab7 = pass1['value'];
	if(pass2['value'] == _0xfc7ab7) {
		var _0x42392a = web3['eth']['accounts']['encrypt'](privateKeyRAW, _0xfc7ab7);
		_0x42392a['name'] = escapeHtml(storedWalletName['value']), allSavedWallets[allSavedWallets['length']] = _0x42392a, flushWalletStorage(), walletMessage['innerHTML'] = 'Wallet encrypted and stored!';
	} else
		walletMessage['innerHTML'] = 'The two passwords doesn\'t match!';
	MultipurpuseModalInstance['open']();
}, selectBlockchain = async function(_0x5a4476) {
	switch(_0x5a4476) {
		case 'MintME1':
			customNode['style']['display'] = 'none', customNode3['style']['display'] = 'none', web3['setProvider']('https://node1.mintme.com:443'), reloadWallet();
			break;
		case 'MintME2':
			customNode['style']['display'] = 'none', customNode3['style']['display'] = 'none', web3['setProvider']('https://node2.mintme.com:443'), reloadWallet();
			break;
		case 'BinanceSmartChain':
			customNode['style']['display'] = 'none', customNode3['style']['display'] = 'none', web3['setProvider']('https://bsc-dataseed.binance.org/'), reloadWallet();
			break;
		case 'rinkeby':
			customNode['style']['display'] = 'none', customNode3['style']['display'] = 'none', web3['setProvider']('wss://rinkeby-light.eth.linkpool.io/ws'), reloadWallet();
			break;
		case 'CustomNode':
			customNode['style']['display'] = 'block', customNode3['style']['display'] = 'block';
			break;
		case 'browser':
			customNode['style']['display'] = 'none', customNode3['style']['display'] = 'none', web3['setProvider'](Web3['givenProvider']), reloadWallet();
			break;
		default:
			web3['setProvider'](customNode2['value']), reloadWallet();
			break;
	}
}, logout = async function() {
	selectedTargetWallet = -0x1, loadedAccount = null, privateKeyRAW = '', walletAddressRAW = '0x0000000000000000000000000000000000000000', privateKey['value'] = '', pass3['value'] = '', walletMessage['innerHTML'] = 'Wallet unloaded!', afterWalletLoad['style']['display'] = 'none', beforeWalletLoad['style']['display'] = 'block';
}, checkAllowance = async function() {
	var _0x32e0d1 = function(_0x5bcd14, _0x3120c0, _0xb52e7b) {
			try {
				loadTokenContract(_0x5bcd14)['methods']['allowance'](approvalOwner['value'], walletAddressRAW)['call']()['then'](function(_0x2ad3a9) {
					var _0x11229f = _0x2ad3a9['length'];
					_0x11229f > _0x3120c0 ? (_0x11229f -= _0x3120c0, _0x2ad3a9 = _0x2ad3a9['substring'](0x0, _0x11229f) + '.' + _0x2ad3a9['substring'](_0x11229f)['padEnd'](_0x3120c0, '0')) : _0x2ad3a9 = '0.' + _0x2ad3a9['padStart'](_0x3120c0, '0'), walletMessage['innerHTML'] = 'Your remaining allowance: ' + escapeHtml(_0x2ad3a9) + _0xb52e7b, MultipurpuseModalInstance['open']();
				}, function(_0x3dd455) {
					walletMessage['innerHTML'] = 'ERROR: Can\'t query allowance: ' + escapeHtml(_0x3dd455['message']) + '!', MultipurpuseModalInstance['open']();
				});
			} catch (_0x3d4390) {
				walletMessage['innerHTML'] = 'invalid address!', MultipurpuseModalInstance['open']();
			}
		},
		_0x431b75 = function(_0x1a08d0, _0x1a1774, _0x5198be) {
			try {
				loadTokenContract(_0x1a08d0)['methods']['allowance'](walletAddressRAW, sendto['value'])['call']()['then'](function(_0x502f50) {
					var _0x4b3842 = _0x502f50['length'];
					_0x4b3842 > _0x1a1774 ? (_0x4b3842 -= _0x1a1774, _0x502f50 = _0x502f50['substring'](0x0, _0x4b3842) + '.' + _0x502f50['substring'](_0x4b3842)['padEnd'](_0x1a1774, '0')) : _0x502f50 = '0.' + _0x502f50['padStart'](_0x1a1774, '0'), walletMessage['innerHTML'] = 'Remaining allowance: ' + escapeHtml(_0x502f50) + _0x5198be, MultipurpuseModalInstance['open']();
				}, function(_0x26100a) {
					walletMessage['innerHTML'] = 'ERROR: Can\'t query allowance: ' + escapeHtml(_0x26100a['message']) + '!', MultipurpuseModalInstance['open']();
				});
			} catch (_0x501aa2) {
				walletMessage['innerHTML'] = 'invalid address!', MultipurpuseModalInstance['open']();
			}
		};
	if(useApprovalCheckbox['checked'])
		switch(networkId) {
			case 0x609e:
				_0x431b75('0x8AFA1b7a8534D519CB04F4075D3189DF8a6738C1', 0xc, ' EUBI');
				break;
			case 0x38:
				_0x431b75('0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D', 0x12, ' bEUBI');
				break;
			case 0x4:
				_0x431b75('0x8e4d858128c9ba2d3a7636892268fab031eddaf8', 0x12, ' EUBI');
				break;
			default:
				walletMessage['innerHTML'] = 'EUBI is not deployed on this blockchain!', MultipurpuseModalInstance['open']();
				break;
		}
	else
		switch(networkId) {
			case 0x609e:
				_0x32e0d1('0x8AFA1b7a8534D519CB04F4075D3189DF8a6738C1', 0xc, ' EUBI');
				break;
			case 0x38:
				_0x32e0d1('0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D', 0x12, ' bEUBI');
				break;
			case 0x4:
				_0x32e0d1('0x8e4d858128c9ba2d3a7636892268fab031eddaf8', 0x12, ' EUBI');
				break;
			default:
				walletMessage['innerHTML'] = 'EUBI is not deployed on this blockchain!', MultipurpuseModalInstance['open']();
				break;
		}
}, createRPGF = function() {
	var _0x4f18c3 = web3['utils']['randomHex'](0x10),
		_0x1800dd = RPGFReceiver['value'],
		_0x4a9513 = convDecimalToRaw(RPGFAmount['value'], 0xc);
	if(_0x4a9513 != 'invalid') {
		var _0x27702e = loadedAccount['sign'](web3['eth']['abi']['encodeParameters']([
			'uint256',
			'address',
			'address',
			'address',
			'address',
			'uint256',
			'uint256'
		], [
			_0x4f18c3,
			'0x8AFA1b7a8534D519CB04F4075D3189DF8a6738C1',
			walletAddressRAW,
			_0x1800dd,
			_0x1800dd,
			_0x4a9513,
			'115792089237316195423570985008687907853269984665640564039457584007913129639935'
		]));
		navigator['clipboard']['writeText'](MintMEReceiverPaidGasFees['methods']['sendPreauthorizedTransaction'](_0x4f18c3, '0x8AFA1b7a8534D519CB04F4075D3189DF8a6738C1', walletAddressRAW, _0x1800dd, _0x4a9513, '115792089237316195423570985008687907853269984665640564039457584007913129639935', _0x27702e['v'], _0x27702e['r'], _0x27702e['s'])['encodeABI']()), walletMessage['innerHTML'] = 'Preauthorized transaction copied to clipboard!', MultipurpuseModalInstance['open']();
	}
}, redeemRPGF = async function() {
	RPGFRedeemButton['disabled'] = !![];
	var _0x203544 = {};
	_0x203544['gas'] = '150000', _0x203544['to'] = '0x1d81563e53a18136957ea28f441e06ac7b66de1b', _0x203544['privateKey'] = privateKeyRAW, _0x203544['data'] = RPGFTX['value'], web3['eth']['accounts']['signTransaction'](_0x203544, privateKeyRAW)['then'](function(_0x15fa13) {
		web3['eth']['sendSignedTransaction'](_0x15fa13['rawTransaction'])['then'](function(_0x1ef7b4) {
			_0x1ef7b4 === null ? (walletMessage['innerHTML'] = 'Transaction sent successfully!', MultipurpuseModalInstance['open'](), RPGFRedeemButton['disabled'] = ![]) : (walletMessage['innerHTML'] = 'Transaction sent successfully! <a href=\"https://rinkeby.etherscan.io/tx/' + escapeHtml(_0x1ef7b4['transactionHash']) + '\">view on blockchain explorer</a>', MultipurpuseModalInstance['open'](), RPGFRedeemButton['disabled'] = ![]), reloadWallet();
		}, function(_0x432614) {
			walletMessage['innerHTML'] = 'Can\'t send transaction: ' + escapeHtml(_0x432614['message']) + '!', MultipurpuseModalInstance['open'](), RPGFRedeemButton['disabled'] = ![], reloadWallet();
		});
	}, function(_0x247e2a) {
		walletMessage['innerHTML'] = 'Can\'t sign transaction: ' + escapeHtml(_0x247e2a['message']) + '!', MultipurpuseModalInstance['open'](), RPGFRedeemButton['disabled'] = ![];
	});
}, PancakeswapApprove = function(_0x1cc3a6) {
	var _0x536db7 = {};
	_0x536db7['gas'] = '100000', _0x536db7['to'] = _0x1cc3a6, _0x536db7['data'] = '0x095ea7b300000000000000000000000010ed43c718714eb63d5aa57b78b54704e256024effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', loadedAccount['signTransaction'](_0x536db7)['then'](function(_0x326c51) {
		web3['eth']['sendSignedTransaction'](_0x326c51['rawTransaction'])['then'](function(_0x1be928) {
			_0x1be928 === null ? (walletMessage['innerHTML'] = 'Transaction sent successfully!', MultipurpuseModalInstance['open']()) : (walletMessage['innerHTML'] = 'Transaction sent successfully! <a href=\"https://bscscan.com/tx/' + escapeHtml(_0x1be928['transactionHash']) + '\">view on blockchain explorer</a>', MultipurpuseModalInstance['open']()), reloadWallet();
		}, function(_0x123b47) {
			walletMessage['innerHTML'] = 'Can\'t send transaction: ' + escapeHtml(_0x123b47['message']) + '!', MultipurpuseModalInstance['open'](), reloadWallet();
		});
	}, function(_0x5d22bf) {
		walletMessage['innerHTML'] = 'Can\'t sign transaction: ' + escapeHtml(_0x5d22bf['message']) + '!', MultipurpuseModalInstance['open']();
	});
}, GrantPancakeApprovals = async function() {
	PancakeButton['disabled'] = !![], PancakeApproveButton['disabled'] = !![], PancakeswapApprove('0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D'), PancakeApproveButton['disabled'] = ![], PancakeButton['disabled'] = ![];
}, PancakeSwapTokens = async function() {
	var _0x3873c4 = {};
	PancakeButton['disabled'] = !![];
	if(PancakeTargetFrom == '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c')
		_0x3873c4['value'] = PancakeAmountIn, _0x3873c4['data'] = PancakeRouter['methods']['swapExactETHForTokens'](minPancakeOutput, [
			PancakeTargetFrom,
			PancakeTargetTo
		], walletAddressRAW, '115792089237316195423570985008687907853269984665640564039457584007913129639935')['encodeABI']();
	else {
		var _0x5b2947;
		PancakeTargetTo == '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' ? _0x3873c4['data'] = PancakeRouter['methods']['swapExactTokensForETH'](PancakeAmountIn, minPancakeOutput, [
			PancakeTargetFrom,
			PancakeTargetTo
		], walletAddressRAW, '115792089237316195423570985008687907853269984665640564039457584007913129639935')['encodeABI']() : _0x3873c4['data'] = PancakeRouter['methods']['swapExactTokensForTokens'](PancakeAmountIn, minPancakeOutput, [
			PancakeTargetFrom,
			PancakeTargetTo
		], walletAddressRAW, '115792089237316195423570985008687907853269984665640564039457584007913129639935')['encodeABI']();
	}
	_0x3873c4['gas'] = '300000', _0x3873c4['to'] = '0x10ed43c718714eb63d5aa57b78b54704e256024e';
	try {
		loadedAccount['signTransaction'](_0x3873c4)['then'](function(_0x19e7b5) {
			web3['eth']['sendSignedTransaction'](_0x19e7b5['rawTransaction'])['then'](function(_0x2e4344) {
				_0x2e4344 === null ? (walletMessage['innerHTML'] = 'Transaction sent successfully!', MultipurpuseModalInstance['open'](), PancakeButton['disabled'] = ![]) : (walletMessage['innerHTML'] = 'Transaction sent successfully! <a href=\"https://www.bscscan.com/tx/' + escapeHtml(_0x2e4344['transactionHash']) + '\">view on blockchain explorer</a>', MultipurpuseModalInstance['open'](), PancakeButton['disabled'] = ![]), reloadWallet();
			}, function(_0x4f63ba) {
				walletMessage['innerHTML'] = 'Can\'t send transaction: ' + escapeHtml(_0x4f63ba['message']) + '!', MultipurpuseModalInstance['open'](), PancakeButton['disabled'] = ![], reloadWallet();
			});
		}, function(_0x28be42) {
			walletMessage['innerHTML'] = 'Can\'t sign transaction: ' + escapeHtml(_0x28be42['message']) + '!', MultipurpuseModalInstance['open'](), PancakeButton['disabled'] = ![];
		});
	} catch (_0x327ff6) {
		walletMessage['innerHTML'] = 'invalid address!', MultipurpuseModalInstance['open'](), PancakeButton['disabled'] = ![];
	}
}, PrePancake = async function() {
	PancakeAmountIn = convDecimalToRaw(PancakeAmount['value'], 0x12), PancakeAmountIn != 'invalid' && PancakeRouter['methods']['getAmountsOut'](PancakeAmountIn, [
		PancakeTargetFrom,
		PancakeTargetTo
	])['call']()['then'](function(_0x8c0974) {
		_0x8c0974 = _0x8c0974[0x1], minPancakeOutput = new BigInt(_0x8c0974)['div'](c100)['mul'](c99);
		switch(PancakeTargetTo) {
			case '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c':
				PancakeMessage['innerHTML'] = 'Do you want to swap bEUBI for ' + escapeHtml(conv2dec(_0x8c0974, 0x12)) + ' BNB via PancakeSwap?';
				break;
			case '0x27fAAa5bD713DCd4258D5C49258FBef45314ae5D':
				PancakeMessage['innerHTML'] = 'Do you want to swap BNB for ' + escapeHtml(conv2dec(_0x8c0974, 0x12)) + ' bEUBI via PancakeSwap?';
				break;
			default:
				PancakeMessage['innerHTML'] = 'Do you want to swap tokens via PancakeSwap?';
				break;
		}
		PancakeModalInstance['open']();
	}, function(_0x25f708) {
		minPancakeOutput = '0', PancakeMessage['innerHTML'] = 'Do you want to swap tokens via PancakeSwap?', PancakeModalInstance['open']();
	});
};
