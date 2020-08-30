import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
export const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)
