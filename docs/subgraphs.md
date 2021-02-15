---
id: subgraphs
title: Subgraphs
sidebar_label: Subgraphs
slug: /subgraphs
---

All of the data from the Foundation protocol is public and free to use.

You can build your own UI with whatever features you would like using the same data.

### 🌐 [mainnet subgraph](https://thegraph.com/explorer/subgraph/f8n/f8n-mainnet) 🌐

Our mainnet subgraph contains all the info you can find on [foundation.app](https://foundation.app). (We use it too!)

### 🚧 [goerli subgraph](https://thegraph.com/explorer/subgraph/f8n/f8n-goerli) 🚧

Our goerli subgraph points to the Goerli testnet - the data you'll find there contains a lot of junk, but it serves as a good testing ground.

## Getting started

Here's an example query using the Foundation subgraph:

#### Query
```graphql
{
  nfts(where: {tokenId: "1" }) {
    owner {
      id
    }
  }
}
```

#### Result

```json
{
  "data": {
    "nfts": [
      {
        "owner": {
          "id": "0xcf0949bf6d2adf8032260fd08039c879cf71c128"
        }
      }
    ]
  }
}
```

## Table structure

Each of the fields in the Foundation subgraph includes a brief comment you can see on the dashboard to explain the data it holds. We aim to cross-link between entities where possible. e.g.:

```
The date/time when this NFT was minted in seconds since Unix epoch
dateMinted: BigInt!

The transfer details where this NFT was minted
mintedTransfer: NftTransfer

The current owner of this NFT
owner: Account!
```

If there's data you need that's not easily accessible or queryable, just let us know!

At a high level here is the data we store today:

### User-related info

#### Account

Every address that interacts with Foundation has an associated `Account` entity.

#### Creator

Creators includes any account that has minted an NFT on the Foundation platform.

### NFT-related info

#### NftContract

This entity holds any information that's common to all NFTs minted on Foundation.

#### Nft

Each individual NFT minted on Foundation. Note that NFT metadata such as name and description are not currently supported on the Foundation subgraph—in order to read this information you can read the metadata JSON from `https://ipfs.io/ipfs/${nft.tokenIPFSPath}`.

For example,

https://ipfs.io/ipfs/QmcsepfMDFh2udUQWtvcnZeARNFFCPA1n2WRWUH1ysWv4W/metadata.json

...returns:

```json
{
  "name":"Ancient Future",
  "description":"Here at the nexus of infinity, we inscribe ourselves upon the sacred discs. For We are the Ancients of a Future Civilization. \n\nSingle Edition VHS Text Art by Sarah Zucker, 2020. Created in studio with Hi8 Camcorder Title Feedback, digital animation and analog processing on VHS. Filmed in 4K from vintage CRT TV screen.\n",
  "image":"ipfs://ipfs/QmXRmfvvenqr4eJ62vjxvYqc5eWp6i2MjpkTh9VZcLiuTi/nft.mp4"
}
```

And the image for this NFT can be retrieved from here, using the data contained in the value for the `image` key above:

https://ipfs.io/ipfs/QmXRmfvvenqr4eJ62vjxvYqc5eWp6i2MjpkTh9VZcLiuTi/nft.mp4

Even if it's a video, the key to use is `image`.

#### NftTransfer

Data about every transfer event for NFTs minted on Foundation.

### Market-related info

#### NftAccountApproval

Tracks account-level approvals granted. For token specific approvals, see `nft.approvedSpender`.

#### NftMarketContract

Configuration that applies to all auctions listed on Foundation.

#### NftMarketAuction

Each individual auction listed on Foundation. If an auction is re-listed (after a sale or after unlisting by the seller), it will appear as a new unique auction.

#### NftMarketBid

All individual bids placed on Foundation.

## The auction lifecycle

Currently the only auction model we support is Reserve Auctions. More will be added in the future.

When an NFT is initially listed, it's state in the Foundation subgraph will be `nftMarketAuction.status=Open` with `nftMarketAuction.highestBid=null`.

Once the reserve price is met, `nftMarketAuction.highestBid!=null`.

Anyone can place bids on auctions until the end time has passed. So `nftMarketAuction.status=Open and nftMarketAuction.dateEnding<=nowInSeconds` means an auction is accepting bids and `nftMarketAuction.status=Open and nftMarketAuction.dateEnding>nowInSeconds` indicates that the auction countdown has completed and bids are no longer being accepted.

Since Ethereum requires a user-initiated transaction in order to react to the changing of time, users must claim their NFT after an auction has closed. Technically anyone can do this, but through the foundation.app UI we encourage the bidder to do so (and the foundation.app UI will allow sellers to complete the process as well). But it's on Ethereum, so anyone is free to do it if they please.

Once the NFT has been claimed, the auction status changes to `nftMarketAuction.status=Finalized`. `Finalized` indicates that the NFT has been transferred to the auction winner and the seller has received funds from the sale.

## Example queries

We recommend using [Insomnia](https://insomnia.rest/) or The Graph's website for testing queries.

When using Insomnia, you can `POST` a `GraphQL` request to `https://api.thegraph.com/subgraphs/name/f8n/f8n-mainnet`.

### Auctions that have not received a bid

#### Query
```graphql
query getAuctionsWithoutABid {
    nftMarketAuctions(
      where: {status: Open, highestBid: null}
    ) {
    nft {
      tokenId
      tokenIPFSPath
    }
    reservePriceInETH
  }
}
```

#### Result

```json
{
  "data": {
    "nftMarketAuctions": [
      {
        "nft": {
          "tokenIPFSPath": "Qmc3AhjGiqVdbw69MxMLQXb7Wcdjmkaeqz4NcZzWbmvxBo/metadata.json",
          "tokenId": "113"
        },
        "reservePriceInETH": "1"
      },
      {
        "nft": {
          "tokenIPFSPath": "QmWJkAhWwYnJ6yupJFobYKEMneZr1iR8UvMzQ1HpN1ygG9/metadata.json",
          "tokenId": "114"
        },
        "reservePriceInETH": "0.2"
      },
      // ...
    ]
  }
}
```

### Auctions that are currently counting down

#### Query

```graphql
query getAuctionsInProgress($nowInSeconds: BigInt!) {
    nftMarketAuctions(
      where: {status: Open, dateEnding_lt: $nowInSeconds}
    ) {
    nft {
      tokenId
      tokenIPFSPath
    }
    reservePriceInETH
  }
}
```

#### Result

```json
{
  "data": {
    "nftMarketAuctions": [
      {
        "nft": {
          "tokenIPFSPath": "QmSBo9HxsRKHmQGQ71uCJithwY8JWULUfUveYnH1gDW8ft/metadata.json",
          "tokenId": "118"
        },
        "reservePriceInETH": "0.5"
      },
      {
        "nft": {
          "tokenIPFSPath": "QmVpQHP1Csq5J7fhvGyC559kSCnCiV2f1RoUAgdr5z3bCo/metadata.json",
          "tokenId": "165"
        },
        "reservePriceInETH": "0.37"
      },
      // ...
    ]
  }
}
```

### NFTs and their auctions by a specific creator

#### Query

```graphql
query getNftsByCreator($creator: String!) {
  creator(id: $creator) {
    nfts {
      tokenId
      mostRecentAuction {
        status
        dateEnding
        reservePriceInETH
        highestBid {
          amountInETH
        }
      }
    }
  }
}
```

#### Result

```json
{
  "data": {
    "creator": {
      "nfts": [
        {
          "mostRecentAuction": {
            "dateEnding": "1612462892",
            "highestBid": {
              "amountInETH": "0.5"
            },
            "reservePriceInETH": "0.37305",
            "status": "Finalized"
          },
          "tokenId": "11"
        },
        {
          "mostRecentAuction": {
            "dateEnding": null,
            "highestBid": null,
            "reservePriceInETH": "1",
            "status": "Open"
          },
          "tokenId": "120"
        },
        // ...
      ]
    }
  }
}
```
