import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SearchBar from '@/components/SearchBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Malaysian Pay Gap',
  description: 'Breaking Wage Taboo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-100`}>
        <Navbar />
        <SearchBar />
        <main className='px-9 -z-50 sticky'>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
