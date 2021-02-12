---
id: community-proposals
title: Community proposals
sidebar_label: Community proposals
slug: /community-proposals
---

## tokenCreator

We'd like to convince others to use the tokenCreator method we have to help ensure more secondary marketplaces honor creator fees

tokenCreator would be needed both for secondary markets but also for terminal and other platforms trying to reliably get the of creator

We're thinking of proposing a new EIP with this change. Let us know your thoughts in our [Discord](http://discord.foundation.app)!

```solidity
function tokenCreator(uint256 tokenId) public view returns (address payable);
```

## Fees

We've implemented our contracts according to the OpenSea spec, which means in their next version that honors fees onchain, it guarantees those fees go to creators.

`HasSecondarySaleFees` is:

```solidity
function getFeeRecipients(uint256 id) public view virtual returns (address payable[] memory);

function getFeeBps(uint256 id) public view virtual returns (uint256[] memory);
```

and the interface is registered with `ERC165`.


We have some ideas though for an EIP that would make for a more efficient solution, and we're thinking of trying to make this an NFT community standard. What do you think? Feel free to join the conversation in our [Discord](http://discord.foundation.app).