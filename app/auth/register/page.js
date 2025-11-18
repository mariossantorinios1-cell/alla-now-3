'use client'
import { useState } from 'react'
import { register } from '../../../lib/localAuth'
import { useRouter } from 'next/navigation'
export default function Register(){ const [username,setUsername]=useState(''); const [email,setEmail]=useState(''); const [pw,setPw]=useState(''); const [msg,setMsg]=useState(''); const router=useRouter()
  const doRegister=()=>{ const res = register({username,email,password:pw}); if(res.error) setMsg(res.error); else { setMsg('Registered'); router.push('/') } }
  return (<div className='p-6 max-w-md mx-auto'><h2 className='text-2xl mb-4'>Register</h2><input className='w-full p-2 mb-2 bg-gray-900 rounded' placeholder='Username' value={username} onChange={e=>setUsername(e.target.value)} /><input className='w-full p-2 mb-2 bg-gray-900 rounded' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} /><input className='w-full p-2 mb-2 bg-gray-900 rounded' placeholder='Password' type='password' value={pw} onChange={e=>setPw(e.target.value)} /><button onClick={doRegister} className='px-4 py-2 bg-yellow-500 rounded'>Register</button><p className='mt-2 text-sm text-gray-400'>{msg}</p></div>) }
