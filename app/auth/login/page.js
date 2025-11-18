'use client'
import { useState } from 'react'
import { login } from '../../../lib/localAuth'
import { useRouter } from 'next/navigation'
export default function Login(){ const [email,setEmail]=useState(''); const [pw,setPw]=useState(''); const [msg,setMsg]=useState(''); const router=useRouter()
  const doLogin=()=>{ const res = login({email,password:pw}); if(res.error) setMsg(res.error); else { setMsg('Logged in'); router.push('/') } }
  return (<div className='p-6 max-w-md mx-auto'><h2 className='text-2xl mb-4'>Login</h2><input className='w-full p-2 mb-2 bg-gray-900 rounded' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} /><input className='w-full p-2 mb-2 bg-gray-900 rounded' placeholder='Password' type='password' value={pw} onChange={e=>setPw(e.target.value)} /><button onClick={doLogin} className='px-4 py-2 bg-yellow-500 rounded'>Login</button><p className='mt-2 text-sm text-gray-400'>{msg}</p></div>) }
