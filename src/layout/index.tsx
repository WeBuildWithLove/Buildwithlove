import Footer from '@/components/Global/Footer'
import Navbar from '@/components/Global/Navbar'
import React from 'react'
import { Toaster } from 'react-hot-toast'

function Layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
      <Toaster />
    </>
  )
}

export default Layout