# POC - Hedera Consensus Service Filecoin
A proof of concept of using Hedera HCS and Filecoin as a baseline for an enterprise version of Itheum's data DEX. Once the POC is complete a new repo will be created to begin formal project delivery.

## Architecture
![Set up](images/EnterpriseDex.png)



### Prerequisites

This demo assumes that you have an account on the Hedera Testnet. For example:

```
ACCOUNT_ID=0.0.123456789
PRIVATE_KEY=302e020100300506032b657004220420f4361ec73dc43e568f1620a7b7ecb7330790b8a1c7620f1ce353aa1de4f0eaa6
```

If you don't have one yet, sign up at [portal.hedera.com](https://portal.hedera.com/).

## Getting Started

You can clone this repository by running the following command:

```
git clone git@github.com:Itheum/poc-hedera-hcs-filecoin-dex-js.git
```

Copy the `.env.sample` file and rename the copy to `.env`

Then update the newly renamed `.env` file with your Hedera Testnet account info as indicated. For example:

```
ACCOUNT_ID=0.0.123456789
PRIVATE_KEY=302e020100300506032b657004220420f4361ec73dc43e568f1620a7b7ecb7330790b8a1c7620f1ce353aa1de4f0eaa6
TOPIC_ID=0.0.28583
```
The `TOPIC_ID` is used when connecting to an existing topic. If you don't have one, you can leave it as is.

After downloading and setting up our environment, we'll install our packages via [npm](https://docs.npmjs.com/about-npm/).

```
npm install
```

If installing the dependencies was succesful, now try to run the server!

```
node server.js
```

After running your server, it will prompt you to configure your chat, e.g.

```
1. What mode do you want to run in?  <--- "Default", "Minimal", "Debug"
2. What's your account ID?           <---  defaults to the .env schema
3. What's your private key?          <---  defaults to the .env schema
4. Should we create a new HCS topic, or connect to an existing one?
```
![Set up](images/initalize.jpg)
If everything was configured properly, the chat should now open at a random port location.

You can additionally run another instance of the chat application by creating a new terminal, and running the application again. This will find another unused, random port location, and deploy multiple instances to your local machine. With the environment configurability, you can test out multi-client chats.

You need pinata.cloud as well for the IPFS to work. So signup for a free account and get the api key and secret. Then create a file in `public/config.json` with your values. This file is not checked into GIT
```
{
  "pinataApiKey": "",
  "pinataSecretApiKey": "",
}
```

### Notes
- Tested on node 12
- Tested on hedera tesnet and works across multiple instances running (tested with 2 chat clients)
- Make sure to rename the .env.sample to .env so you get a "publicKey" error when running
- Didnt work with the defaul TOPIC_ID, so created a new one and it worked