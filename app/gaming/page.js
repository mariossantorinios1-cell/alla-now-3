'use client'

import { useEffect, useState } from 'react'

export default function Gaming() {
  const [savedGames, setSavedGames] = useState([])

  useEffect(() => {
    // RUN ONLY IN BROWSER – prevents Vercel prerender error
    if (typeof window !== 'undefined') {
      try {
        const data = window.localStorage.getItem('savedGames')
        if (data) setSavedGames(JSON.parse(data))
      } catch (err) {
        console.error('localStorage error:', err)
      }
    }
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Gaming</h1>
    </div>
  )
}
