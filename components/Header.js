'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
export default function Header(){
  const [user,setUser]=useState(null)
  useEffect(()=>{ try{ const u=JSON.parse(localStorage.getItem('allnow_user')); setUser(u) }catch(e){} },[])
  return (
    <header className='bg-gray-800 border-b border-gray-700'>
      <div className='container flex items-center justify-between p-4'>
        <Link href='/'><a className='text-2xl font-bold'>AllNow</a></Link>
        <nav className='space-x-4'>
          <Link href='/gaming'><a>Gaming</a></Link>
          <Link href='/live'><a>Live</a></Link>
          <Link href='/explore'><a>Explore</a></Link>
          {user ? <Link href={'/profile/'+user.username}><a>Profile</a></Link> : <Link href='/auth/login'><a>Login</a></Link>}
        </nav>
      </div>
    </header>
  )
}
