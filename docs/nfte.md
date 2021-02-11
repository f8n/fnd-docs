---
id: nfte
title: Embedding NFTs
sidebar_label: Embedding NFTs
slug: /embedding
---

:::info
This page contains info about a 3rd-party library that works equally well with Foundation NFTs and those from other NFT platforms. More info here: [nfte.app](https://nfte.app/)
:::

## npm package

_(For websites and apps built with React)_

Install with `npm i @nfte/react` or `yarn add @nfte/react`

```typescript
import { NFTE } from '@nfte/react';

<NFTE contract="0x..." tokenId="1"/>
```

---

## HTML / JS snippet

```html
<div className="nft-embed"></div>
<script
  async
  src="https://nfte.app/api/embed.js?contract=CONTRACT_ADDRESS&tokenId=TOKEN_ID">
</script>
```
