import Footer from '@/components/Global/Footer'
import Navbar from '@/components/Global/Navbar'
import React from 'react'

function Layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout