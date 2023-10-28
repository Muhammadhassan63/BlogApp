import { Poppins } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer.jsx'


const poppins = Poppins({ subsets: ['latin'], weight: ['500', '600', '700'] })

export const metadata = {
  title: 'Blog',
  description: 'Basic Blog app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
       <div className='max-w-4xl mx-auto px-2 bg-indigo-100 min-h-[100vh]'>
        <Header/>
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  )
}
