import '@/styles/globals.css'
import Sidebar from '@/components/sidebar'
import Footer from '@/components/footer'
import React from 'react'

export default function MyApp({ Component }: { Component: React.ComponentType<any> }, pageProps: any) {
  return (
    <>
      <Sidebar children={undefined} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
