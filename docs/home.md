---
id: home
title: Docs
sidebar_label: Docs
slug: /
---

---

# Subgraphs

All of the data related to Foundation is public, and you can build your own UI with whatever features you would like.

[Mainnet](https://thegraph.com/explorer/subgraph/f8n/f8n-mainnet)

[Goerli](https://thegraph.com/explorer/subgraph/f8n/f8n-goerli)


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

---

## Contracts

### NFT contract
[Foundation NFT Contract](https://etherscan.io/token/0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405)

Our contract implements the ERC721 standard. More info [here](https://ethereum.org/en/developers/docs/standards/tokens/erc-721/).

### Marketplace contract
[Foundation Market Contract](https://etherscan.io/address/0xcDA72070E455bb31C7690a170224Ce43623d0B6f)