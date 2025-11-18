'use client'

import { useEffect, useState } from 'react'

export default function Explore() {
  const [saved, setSaved] = useState([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('savedExplore')
      if (data) setSaved(JSON.parse(data))
    }
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Explore</h1>
    </div>
  )
}
