'use client'

import React from 'react'

export default function Player({ src }) {
  return (
    <video
      src={src}
      controls
      className="w-full max-h-[70vh] rounded-lg bg-black"
    />
  )
}
