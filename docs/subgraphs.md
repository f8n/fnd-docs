---
id: subgraphs
title: Subgraphs
sidebar_label: Subgraphs
slug: /subgraphs
---

All of the data from the Foundation protocol is public and free to use.

You can build your own UI with whatever features you would like using the same data, and even if the company working on building Foundation were to cease to exist, that data will live on and your app will continue to function.

Our [mainnet subgraph](https://thegraph.com/explorer/subgraph/f8n/f8n-mainnet) contains all the info you can find on [foundation.app](https://foundation.app). (We use it too!)

Our [goerli subgraph](https://thegraph.com/explorer/subgraph/f8n/f8n-goerli) points to the Goerli testnet - the data you'll find there contains a lot of junk, but it serves as a good testing ground.


## Example queries

### Find all live auctions

#### Request
```graphql
{
  nftMarketAuctions (where:{ status:Open, initialBid_not: null }, first:1) {
    auctionId
    nft {
      tokenId
      tokenIPFSPath
    }
    dateEnding
    dateCreated
    dateStarted
    dateFinalized
    reservePriceInETH
    initialBid {
      bidder {
        id
      }
      amountInETH
    }
    highestBid {
      bidder {
        id
      }
      amountInETH
    }
  }
}
```

#### Response
```graphql
{
  "data": {
    "nftMarketAuctions": [
      {
        "auctionId": "106",
        "dateCreated": "1612471174",
        "dateEnding": "1613036477",
        "dateFinalized": null,
        "dateStarted": "1612950077",
        "highestBid": {
          "amountInETH": "0.5",
          "bidder": {
            "id": "0xd1b219a9d6d9b121c7de210b4fba83efce83f8cc"
          }
        },
        "initialBid": {
          "amountInETH": "0.5",
          "bidder": {
            "id": "0xd1b219a9d6d9b121c7de210b4fba83efce83f8cc"
          }
        },
        "nft": {
          "tokenIPFSPath": "QmSBo9HxsRKHmQGQ71uCJithwY8JWULUfUveYnH1gDW8ft/metadata.json",
          "tokenId": "118"
        },
        "reservePriceInETH": "0.5"
      }
    ]
  }
}
```