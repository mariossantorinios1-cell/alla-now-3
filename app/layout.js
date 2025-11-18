import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = { title: 'AllNow (LocalAuth)', description: 'All-in-one content platform (local auth)' }

export default function RootLayout({ children }){
  return (
    <html lang='en'>
      <body>
        <Header />
        <main className='container'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
