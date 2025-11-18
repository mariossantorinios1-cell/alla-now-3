'use client'
import { useState } from 'react'
export default function Upload(){ const [file,setFile]=useState(null); const [msg,setMsg]=useState('')
  const upload = async ()=>{ if(!file){ setMsg('Choose file'); return } const url = URL.createObjectURL(file); const id = Date.now(); localStorage.setItem('video_'+id, url); // store index
    const idx = JSON.parse(localStorage.getItem('allnow_videos')||'[]'); idx.unshift({ id, name:file.name, url }); localStorage.setItem('allnow_videos', JSON.stringify(idx)); setMsg('Uploaded: '+file.name) }
  return (<div className='p-6 max-w-3xl mx-auto'><h2 className='text-2xl mb-4'>Upload (local)</h2><input type='file' onChange={e=>setFile(e.target.files[0])} /><button onClick={upload} className='ml-2 px-3 py-1 bg-yellow-500 rounded'>Upload</button><p className='mt-2 text-sm text-gray-400'>{msg}</p></div>) }
