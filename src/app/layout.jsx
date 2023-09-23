import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/app/components/NavBar'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Task Creator',
  description: 'Generador y editor de tareas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
