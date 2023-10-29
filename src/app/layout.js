import { Poppins } from 'next/font/google'
import './globals.css'

import ToastProvider from '@/providers/toast-provider'
import AuthProvider from '@/providers/auth-provider'
import Navbar from '@/components/Navbar'

const poppin = Poppins({
  weight: ["100", "200", "400", "500", "600", "700"],
  subsets: ['latin']
})

export const metadata = {
  title: 'Starter Repo',
  description: 'Developed by ~ Zain-ul-Abdin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppin.className}>
        <AuthProvider>
          <ToastProvider />
          <Navbar />
          <div className='mt-[70px] px-[20px] md:px-[50px]'>
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
