'use client'
import { useState, useEffect } from 'react'
import { getMessages, saveMessage } from '../lib/localChat'
export default function ChatBoxLocal(){ const [msgs,setMsgs]=useState([]); const [text,setText]=useState('')
  useEffect(()=>{ setMsgs(getMessages()) },[])
  const send=()=>{ if(!text) return; const m={ id:Date.now(), username: 'anon', text, created_at: new Date().toISOString() }; saveMessage(m); setMsgs(getMessages()); setText('') }
  return (<div className='border border-gray-700 p-3 rounded bg-gray-800'><div className='h-40 overflow-auto mb-2'>{msgs.map(m=> <div key={m.id} className='py-1'>{m.username}: {m.text}</div>)}</div><div className='flex gap-2'><input value={text} onChange={e=>setText(e.target.value)} placeholder='Type a message' className='flex-1 p-2 bg-gray-900 rounded' /><button onClick={send} className='px-3 py-2 bg-yellow-500 text-black rounded'>Send</button></div></div>) }
