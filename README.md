# POC - Hedera Consensus Service Filecoin
A proof of concept of using Hedera HCS and Filecoin as a baseline for an enterprise version of Itheum's data DEX. Once the POC is complete a new repo will be created to begin formal project delivery.

## Architecture
<iframe frameborder="0" style="width:100%;height:970px;" src="https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1&title=EnterpriseDex.drawio#R7Vxbd9q6Ev41rHXOQ7p8Bx5D0uzkrPQ0p7R7t4%2FCFqBTY7FtEUJ%2F%2FR7Jkq8COwHjpCsvCRbyTTPzzTcXMbCvVk9%2FxGi9%2FEQDHA4sI3ga2NcDyzIdy4N%2FfGSXjowMMx1YxCSQk%2FKBKfmF5aAhRzckwElpIqM0ZGRdHvRpFGGflcZQHNNtedqchuW7rtEC1wamPgrro3%2BRgC3lW7hGPn6LyWKp7mwa8psVUpPlQLJEAd0WhuyPA%2FsqppSln1ZPVzjki6fWJT3vZs%2B32YPFOGJtTthMfyz%2FZ3vse4hml1%2Bj0fDm2%2FWFvMojCjfyhe%2FYEm9WMHaNGOL%2FPn6Xz892alGSLVmFKIKjiTwfxww%2F7X0wM3td0BNMV5jFO5giT7CVrKWKZLLf5gs%2BVGPLwmIPh3IQSSEvsmvn6wAf5FI8Z1ms2jvjAPRCHtKYLemCRij8mI9OYrqJAswva8BRPuee0jUMmjD4f8zYTio52jAKQ0u2CuW3%2BImw74XPP%2FilPrjy6PpJXlkc7NRBBO%2F7vXhQOIsf5qeJI3Ve%2Bn78pfZK7ZDCJHQT%2B%2FjAPFfaKooX%2BND1RnrViHGIGHksP9zJxezWtH8KZ%2BEYxr6tQ4oC%2BPCf6ef%2FCtDhb51eE54D%2Fgy4vXl%2Fb7j9TqSxPCD%2FZz4In9AKRD%2BJZsk6W%2FOCTpU1ZrskDE%2FXSKzrFuC0rB2tLG2%2FzPaan1O2PrdufKalMT6vK9sb1YSSr%2BhlwN%2BfJDjHpznl4ppywIYLR%2FDndnL5pSiEKngt0Zp%2FXMfUx0nSvPAzEOpCiOrzhoWEw54YF48CnuIyJIsIxhhddygmy2yUkzPSyMl2uhKU5fYCki8EvJeAa9cgaY5bomSBMPQAk%2BoxCyb5B45wjBhOQTDkhjYDO%2FQWEvfKsHiLkmULi0wY5ha0xjGBBwcYToce8uMmU52TJ6xIZJeYaQ2dkjFmrK8JNUddGaPj9GGMCWguu%2BQ0GwYiKhihGLsh%2FPFfbHivldUokTYbrHWkwYpTYWXRrjBhTUnEksKVH%2FhArpZexUeYTiUkaJhvGYfnW8Mj54%2FdiqKnb5irfbZUR7glQ0cgBETNqXi63EYUJPEvLhKh5ZcwwbTWTyUaJ2BtymjMAW9OBNcQjLAOfncPN1N4bjAAfEUFH0FRoJ3JNajIIe%2BpD7pB%2BSnfvtyX7h%2Bm%2F2%2FSF1Ao%2B%2BZh1LHHzTA6PCuM9sNpzgiRbSC7cxi1WsKo3SvvUY%2Bp5z2lkE9j3lsCKixNWWIAZUsRXNYnbxLxBSwvjjGfCm%2BAtDOD9Lb%2Fkv%2FXMX4kePvv3wANrGEZDbLItAkNTLMrOLDrvkR5ARBlCb0hnKTzImhrZCew%2FRYHoEIDC57IyFxAZSKLUZQgX3qD%2BvcxnoOeRD7OVGuzDoRaVmeWExOH0xFvT2Uct4XKeGdVGdesresrjopfgzdwvJbewBn26Q3UYxawYLLZCdjeIkHLU0o42%2Byq3uE1pv0q1MvRJN3Pm%2FdLpbsn8fcnYM%2B8sK4p6E34Uv92iT6jWTJnzvS5o3dWfIaSSdvkguv0iYNunRNdLbEgwaV0n8HpkJa7%2FL0hKcltotBogUiUsAJpkun%2BQznHh5SIpbcH3EA%2BYW1g4u2wnipRdrzeibLiYe8I0SlCOG0R4lim9LL0owqXVInKLKX7muePD6cT7SPne%2B4Z0o9KRgV4%2FEQfeaCW1iWBJP7EUaIFsXlMVymDFLRyX%2BIwweKLrCTNJ795UHPccknlNYBanZHeYObnWR0pr0KuV%2BPDhKzmBHAtrVtniYOmqtnnOOCSLWQUUuenog5N2oBrBNDdRxKIzIAveK%2FUlDRt%2Feb1xHYrRt02Z9xhlqhP35f7u1beDw4KQu262NY6IdzSr%2B1RjTMlAGpo8C3N2t7TBbeyOw4AfxJUpKt3AayF4J8aDblHMxyWpYpkiOmLTLAm9lyRIEgVCCfkF5qJ63FpSOcMF3cnA%2Ff6kAXKXkl58iDrUGy0TPugZRofLHskb%2FE8opF7bjWFzucJz41WRHaK8mBNihJuc1i9gb%2FTw351swovfUaLEhLSfKAJEVlb%2B3pGGQP3sC99UBA6TbMNV1kLq9EWPw9DZVZOU9nRUR0qbQ1SdpbiqWfQ%2FsIzPvIprXZIScgU%2B56l93ewWGBedouETgqy97OmDE8i%2FZZ7moV3KsRTk5XWJXDGXa17P8GZcitmxa2Mxg2ORRzVvJTW3ylP%2BOL%2BrZOXLL0jXdTLIi8Z2WSRkdcQGVWbPp853xwdnu%2Fax80f2xWd7yBQU3RQU9tLObsozlVLZhrWXp2hawk27q4PpKDeJBkYN5ABw6iUGOzjqIF6bLt00Qsg%2B%2BVLdEcd1K0rGsN3kAAJJLMYiRXwY5x2CHDxR3jL35nyvyJCTMM%2FrhxSM9KlV0qnYnsxi%2FCPs3TahRglnGiKP7XrcA2TFylMyLUO3N1PEi2adBH0gw0qTX4x%2FQnsJOR0R6W%2BIJoMK0Pt1VXntsv%2B5hTsp4IpQ02cqCtwWV15YbMeQBQwIqkTnnyXDe%2F7Uu6aL4%2B%2FJGFwj3bAHAc8Uofz1dFkSWPyC%2BajUpOmdNOWV5ox5WfKawoMwQ9qfc3K0Cf0VJp4jxJFVX0ahmidkBRC%2BIkr8JIkmkgGfCqJWpXQ39ZI1NFF%2FobTlUjrO0juGOY5oXoXgDSs51pTiOdsbxCRgA2BTd%2BLOddOPvJFvj0fonDuPBR56yVYII6EtTHE9jqMCSziFSda4DqsKzg282PhTdbAByFcgXdBRMgOgzZsccLaCvqAgdTFr8IXr5241bzTS7sev0hpW%2B%2FSPrW0Xatvadezv1La9Xzfu7SPlPZw1Le0e2lxGJwuQDXb7rg8NkA9rqW2DqFZ9eTKGlwaNSmcdq%2Bxabr6yLSoeWpbQ4VEdFY%2BqG%2BvuuYFmy3n7%2FGGBw0gfP53yz9HNIBZN43dnHUif8p4kutykld79MhXYK1WK%2BEd0JkD%2FVIlger2r%2Bo6QDuj%2BVbdb2TlAN4Zs%2BA%2FlCADuturadcKX903amvqZXqF7ywdadfjaJVYWZoqsSLbeLKtL%2Fk3anCt7XFO4%2BCLzDwWqht7WNxIs957sbpdGZohVXY3wCDYbi0ibf4ixhbBF6KSEQQxr76mbvZ0d%2BZ9%2F7LBqnpvMEIe4PM7trndcM%2B8kyUEJF%2BBATc%2F%2BipcI9%2Blpc8D6BnNs3MDB0yzLZLoesnHOkPpDkr66bvssENqT9V6cK4sfuv9m72k8UdmOY1vNTQ4mUYlx%2FX8E2yjoqUdZNrtXvYmn0eNHc8uKvIHwxgfVGZdA8YJFdxureC9dAiOnHL23rHO0JFn15N0l3MmvDePc3GUbLKseoyRvxS9yZruqiWOFC1PN26JFHtTRai8l6u4cyvADJFQ3wpYqgbMdLtI3iK%2Fb%2BpXqNbNdRleXW9XZx0LKgvVF3TlaPWj%2BF0b6PJDlCTEr6DXibMOrfcs9IM3XuV3Ojy3wT9Wf4usckJHLcP1eEiGNPBweBGL%2FrEUnxaUBlqNfHPl49SyDjWTjcZWSRaqTf719pa5dU%2BzN%2FT%2FytvAB7zRLH4kvqbd6cR5r1FZsYcaaNWmATr7qQWF2b8PKzwlrrbe6eH2w%2BPKrR1eQ%2F%2BQaQyHx52gfuuxUyD26j%2BHWezFfy%2FRN%2BKMW%2F3Fn5Z1ne5K9J5Vk%2Bl7if7FGTRvj%2FhfS4neq1Op9xJ9V9LuvUTv1Tuq3kv0XUm79xK91%2Btvc6nk3fP2GJfj95xWPqPx%2FczMUyFoX30EcJj%2FJnpK7PJflrc%2F%2FgM%3D"></iframe>

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