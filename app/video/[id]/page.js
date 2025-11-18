import Player from '../../components/Player'
export default function Video({ params }){ const { id } = params; const src = localStorage.getItem('video_'+id) || ''; return (<div className='p-6 max-w-5xl mx-auto'><h2 className='text-2xl mb-4'>Video {id}</h2>{ src ? <Player src={src} /> : <p className='text-sm text-gray-400'>No video uploaded.</p> }</div>) }
