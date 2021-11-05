# MyEUBIWallet v2.0

MyEUBIWallet v2.0 is a wallet for EUBI, MintME, bEUBI, and BNB token. MyEUBIWallet v2.0 supports loading wallet from private key, browser storage, MetaMask, and Binance Chain Wallet. Also, MyEUBIWallet v2.0 provides other functions like the Token Migration Bridge and PancakeSwap, which makes it the ideal wallet for any EUBI token holders.

https://eubitoken.github.io/MyEUBIWallet

## Using integrated wallets

If you use an integrated wallet, the private key is held by MyEUBIWallet, and MyEUBIWallet does the transaction signing. Integrated wallets are not recommended and are likely to be removed in MyEUBIWallet v3.0 since the private key is stored in MyEUBIWallet, which makes it vulnerable to stealing. If your wallet is loaded as an integrated wallet, then you will be able to change the blockchain from MyEUBIWallet.

### Creating a wallet

Step 1 - go to External Wallet -> Create Wallet

![image](https://user-images.githubusercontent.com/55774978/140485225-cbb180e4-4f00-4cea-9c88-efce26ee1036.png)

![image](https://user-images.githubusercontent.com/55774978/140486597-466e03c9-b9e6-4c5d-a6a5-4d164df41459.png)

Step 2 - copy the private key by going to Wallet details -> Copy private key, and store it somewhere safe

![image](https://user-images.githubusercontent.com/55774978/140486872-85a06673-64d2-41f8-b017-6c219d7e3824.png)

![image](https://user-images.githubusercontent.com/55774978/140487031-2e8b96ff-0d3d-45a3-bdcf-6102a7699017.png)

Alternatively, you can save your wallet in browser storage. Your private key will be encrypted with AES-256-GCM, one of the strongest possible encryption scheme.

![image](https://user-images.githubusercontent.com/55774978/140487668-901787c3-ebb4-473c-9d8b-2448fb8335a5.png)

### Loading a wallet from private key

Step 1 - go to External Wallet

![image](https://user-images.githubusercontent.com/55774978/140485225-cbb180e4-4f00-4cea-9c88-efce26ee1036.png)

Step 2 - import your private key

![image](https://user-images.githubusercontent.com/55774978/140487445-295fe539-3aa7-4de1-927a-08e36289c966.png)

NOTE: This method of getting into your wallet is not recommended since computer viruses can steal the private key from your clipboard, which is an easy target.

### Loading a wallet from browser storage

Step 1 - select which wallet you want to load

Step 2 - enter your wallet password

Step 3 - load your wallet

![image](https://user-images.githubusercontent.com/55774978/140488311-78d89d4d-bf4d-4017-80a5-7f648e3cbc05.png)

## Using remote wallets

When you use MyEUBIWallet with a remote wallet, MyEUBIWallet lets MetaMask/Binance Chain Wallet hold the private keys and do the signing, which reduces the risk of your private key getting stolen, and enables the use of hardware wallets. Also, using remote wallet mode can improve MyEUBIWallet performance by reusing cached data whenever possible.

Using remote wallets is easy: just select the remote wallet type

![image](https://user-images.githubusercontent.com/55774978/140488589-1b6e966a-2041-45e3-bcc6-936309f327d6.png)

### Limitations of the remote wallet mode

1. Remote wallet mode is experimental contains a lot of bugs.
2. Certain MyEUBIWallet features are unavailable, such as copying the private key or changing blockchains. Those have to be done in MetaMask/Binance Chain Wallet.

## Using MyEUBIWallet functions

### Sending EUBI/bEUBI tokens

Step 1 - Load your wallet

Step 2 - open the Send EUBI/bEUBI tokens menu

Step 3 - specify reciever's address and amount

Step 4 - click send

Step 5 - confirm your action by clicking yes
![image](https://user-images.githubusercontent.com/55774978/140489586-d3cae1e6-29b6-464c-8c42-1c2151cecf57.png)

You will see 3 buttons - send, set approval, and query approval.

1. send - transfer EUBI/bEUBI tokens to another account

2. approve - allow another account to spend your EUBI/bEUBI tokens

3. query approval - check how much approval a particular spender have left

You need to click send in order to send EUBI/bEUBI tokens. If you are connected to MintME blockchain, EUBI tokens will be sent, or if you are connected to the Binance Smart Chain, bEUBI tokens will be sent. A quick way to check if you are connected to MintME/Binance Smart Chain is to check the blockchain-specific functions. The token migration bridge is exclusive to the MintME blockchain, while PancakeSwap is exclusive to the Binance Smart Chain.

![image](https://user-images.githubusercontent.com/55774978/140490167-6d9c3da0-6244-4c4d-9bd9-ae15682d9827.png)

When you select spend using approval, you get to spend EUBI/bEUBI tokens that belonged to another wallet that have granted you a spending allowance. The send button keeps it's normal function, while query allowance will now return how much allowance YOU have left.

![image](https://user-images.githubusercontent.com/55774978/140490820-e7229ca6-6ccc-4f40-a2bd-4f730650a9da.png)

### Sending native cryptocurrencies

When you send native cryptocurrencies, you are sending the native cryptocurrency of whichever blockchain you are connected to. For example, if you are connected to MintME, then the native cryptocurrency of MintME is MintME. On the other hand, if you are connected to Binance Smart Chain, then the native cryptocurrency of Binance Smart Chain is BNB.

![image](https://user-images.githubusercontent.com/55774978/140491291-3926afca-514b-4175-bb06-7e0718566d25.png)

Sending native cryptocurrencies is much more simple than sending tokens.

Step 1 - Load your wallet

Step 2 - open the Send MintME (it's called Send BNB on Binance Smart Chain) menu

Step 3 - specify reciever's address and amount

Step 4 - click send

Step 5 - confirm your action by clicking yes

### Checking your balance

Sometimes, you need to check your balance. That's fine, you can open the Wallet details menu to check your balance.

![image](https://user-images.githubusercontent.com/55774978/140491514-2647e1b2-1c2e-44f8-9d8d-1840dd0110b0.png)

Also, in the wallet details menu, you have 3 buttons: reload wallet, copy private key, and unload wallet. Reload wallets cause MyEUBIWallet to fetch your latest balances, copy private key copies your private key into the clipboard, and unload wallet allows you to log out of MyEUBIWallet without reloading. Note that copy private key is not available when using a remote wallet.

### Changing blockchains

We mentioned the ability to change blockchains a lot without mentioning how to do it, so now, we will talk about it.

![image](https://user-images.githubusercontent.com/55774978/140491923-4e20e0ea-6f6c-4270-8d99-f193607a122e.png)

In the blockchain settings menu, you get to choose which blockchain to connect to. MintME (node 1) and MintME(node 2) will connect you to MintME, but with diffrent nodes. You can also use MetaMask/Binance Chain Wallet's injected Web3 providers if you want, since those are better for performance than connecting to nodes. If you connect to the Ethereum Rinkeby testnet, you can test the dividends-paying token concept on the Ethereum Rinkeby testnet. If you want to test there, just ask me for some testnet EUBI tokens. Altenatively, you can bring your own node. If you connect to a custom node that does not belong to a supported blockchain, then you will get errors when you try to send EUBI/bEUBI tokens, cause EUBI is not deployed there. The blockchain settings menu is not available when using remote wallets.

### Using the EUBI-bEUBI bridge

The EUBI-bEUBI bridge allows you to exchange EUBI tokens for bEUBI tokens at a rate of 10:1 + 10 EUBI fee. This feature is only available on the MintME blockchain.

Step 1 - load your wallet

Step 2 - send some EUBI tokens to the deposit address

Step 3 - migrate them over

![image](https://user-images.githubusercontent.com/55774978/140492621-9621ea8a-5b36-4351-935b-701cf55898bd.png)

NOTE: the EUBI-bEUBI bridge can take more than a minute to finish migrating your tokens.

### Using MyEUBIWallet PancakeSwap integration

MyEUBIWallet allows holders of bEUBI and bPRSS tokens to trade their tokens on PancakeSwap. Note that this feature is exclusive to the Binance Smart Chain, and is not offered on the MintME.com blockchain or Ethereum Rinkeby Testnet.

#### Spending approvals

Before you can sell a specific token or add it into liquidity for the first time, you need to approve PancakeSwap to spend your tokens.

Step 1 - load your wallet

Step 2 - select Binance Smart Chain

Step 3 - Open PancakeSwap menu

Step 4 - select the spending approvals tab

![image](https://user-images.githubusercontent.com/55774978/140494037-8b667666-042b-4a16-b58e-3730bdf2e5d0.png)

Step 5 - approve PancakeSwap to spend a specific token

![image](https://user-images.githubusercontent.com/55774978/140493137-c0cebfdd-cfbb-418d-9f30-ba3072db5dd0.png)

Step 6 - confirm the transaction

You only need to approve each token once for each wallet you are using, and you are set to start your jorney as a holder/liquidity provider of bEUBI.

#### Swapping tokens via PancakeSwap

Step 1 - load your wallet

Step 2 - select Binance Smart Chain

Step 3 - Open PancakeSwap menu

Step 4 - select the swap tab

Step 5 - Select the pair

Step 6 - fill in the amount of tokens you want to trade

Step 4 - click on trade

MyEUBIWallet will give you a confirmation of how many tokens you are getting from the trade.

![image](https://user-images.githubusercontent.com/55774978/140493892-d6cfb432-b9e7-447f-b755-01a909becdd8.png)

![image](https://user-images.githubusercontent.com/55774978/140494351-934cc09b-05ae-429c-88d0-654ca1590cca.png)
