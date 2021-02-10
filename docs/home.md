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
  nftMarketAuctions (where:{ status:Open, initialBid_not: null }, first:3) {
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
        "dateStarted": null,
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
      },
      {
        "auctionId": "11",
        "dateCreated": "1611512203",
        "dateEnding": "1613017781",
        "dateFinalized": null,
        "dateStarted": null,
        "highestBid": {
          "amountInETH": "0.58",
          "bidder": {
            "id": "0x3b0aa499cc6acde1d4a7433da6968d7bb8bd8509"
          }
        },
        "initialBid": {
          "amountInETH": "0.58",
          "bidder": {
            "id": "0x3b0aa499cc6acde1d4a7433da6968d7bb8bd8509"
          }
        },
        "nft": {
          "tokenIPFSPath": "QmVXBuCGCVPxBx3dsbSYmancTS3hg6qjw1ahNQRtyj5k2Q/metadata.json",
          "tokenId": "17"
        },
        "reservePriceInETH": "0.58"
      },
      {
        "auctionId": "120",
        "dateCreated": "1612562034",
        "dateEnding": "1613025108",
        "dateFinalized": null,
        "dateStarted": null,
        "highestBid": {
          "amountInETH": "1",
          "bidder": {
            "id": "0xe4e401c47cf997fe0048928df6b8ccc407a47aa7"
          }
        },
        "initialBid": {
          "amountInETH": "1",
          "bidder": {
            "id": "0xe4e401c47cf997fe0048928df6b8ccc407a47aa7"
          }
        },
        "nft": {
          "tokenIPFSPath": "QmUW6XArUq39sweQMqaZAHQrjpy8rpKxQtbeLvg9gsF3ZN/metadata.json",
          "tokenId": "133"
        },
        "reservePriceInETH": "0.3"
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