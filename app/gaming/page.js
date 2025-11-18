'use client'

import { useEffect, useState } from 'react'

export default function Gaming() {
  const [savedGames, setSavedGames] = useState([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem('savedGames')
      if (data) setSavedGames(JSON.parse(data))
    }
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Gaming</h1>
    </div>
  )
}
