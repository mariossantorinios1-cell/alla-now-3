import Link from 'next/link'
import AdsPlaceholder from '../components/AdsPlaceholder'
export default function Home(){
  return (
    <section className='py-8'>
      <h1 className='text-4xl font-bold mb-4'>AllNow — LocalAuth Demo</h1>
      <p className='mb-6'>Deploy-ready demo using browser-only auth and storage. Use it to test flows before connecting Supabase.</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
        <Link href='/live'><a className='p-4 bg-gray-800 rounded'>Live</a></Link>
        <Link href='/gaming'><a className='p-4 bg-gray-800 rounded'>Gaming</a></Link>
        <Link href='/explore'><a className='p-4 bg-gray-800 rounded'>Explore</a></Link>
      </div>
      <AdsPlaceholder />
    </section>
  )
}
