---
name: 'create-component'
description: 'Next.js에서 React 컴포넌트를 조건에 맞게 템플릿으로 생성하는 스킬!'
---

요청된 경로에 맞게 아래 템플릿으로 Next.js 컴포넌트를 만들어 줘!
`컴포넌트이름` 부분에는 경로의 파일 이름이나 페이지 이름이 들어가도록 자동으로 작성해 줘!
별도 요청이 없으면 기본적으로 다음의 서버 컴포넌트로 만들어 줘!

```tsx
export default async function 컴포넌트이름() {
  return <></>
}
```

별도 요청이 있으면 다음의 클라이언트 컴포넌트로 만들어 줘!

```tsx
'use client'
// import { useState } from 'react'

export default function 컴포넌트이름() {
  return <></>
}
```
