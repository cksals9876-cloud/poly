'use client'
// import { useState } from 'react'

interface Props {
  error: Error
}

export default function Error({ error }: Props) {
  return <>{error.message}</>
}
