---
title: usePaginatedParticipantsResult
nav: '5.2.8'
---

## Properties

### hasNext

• **hasNext**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

---

### loadMorePeers

• **loadMorePeers**: `Promise`<`void`\>

this function is to be called when loadPeers is called at least once. This will fetch the next batch of peers

---

### loadPeers

• **loadPeers**: `Promise`<`void`\>

call this function to load initial peers and also when you want to poll the peers information

---

### peers

• **peers**: `HMSPeer`[]

---

### total

• **total**: `number`
