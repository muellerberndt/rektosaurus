# Rektosaurus

A test suite to check for client-side script injection on websites that display NFTs.

## Overview

NFTs contain a variety of metadata and content that gets processed and rendered all over the place. Some subspecies of NFTs (e.g. generative art) explicitly require arbitrary scripts to be executed. Allowing user-supplied code while preventing malicious actions is challenging. Rektosaurus implements a number of attacks to help test for client-side attacks.

## Deployment

To deploy your instance of Rektosaurus, clone the repository and create an `.env` file containing your API and wallet keys.

```
ALCHEMY_MAINNET_API_URL = "xyz"
ETHERSCAN_API_KEY = "xyz"
PRIVATE_KEY_ETHEREUM = "xyz"
```

Update the [config](https://hardhat.org/config/) and [deploy script](scripts/deploy.js) to your liking and run:

```
$ npx hardhat run scripts/deploy.js
```

Note that you'll have to mint or batchmint the NFTs for them to show up on marketplaces.

### Live deployment

An instance of the smart contract is live on [Mumbai](https://mumbai.polygonscan.com/address/0x0adF52ecC0F5d5d452a5F942be293a858F625849#code). [Payloads](payloads) are hosted on [rex.rektosaurus.io](https://rex.rektosaurus.io/).

## Contributing

Please submit your payload ideas via pull request and I'll add them to the webserver.


