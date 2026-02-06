import React from 'react'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="bg-[#FAF8F5]">
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default Layout