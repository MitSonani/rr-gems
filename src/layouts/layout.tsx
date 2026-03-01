import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

const Layout = () => {
    return (
        <main className="bg-[#FAF8F5]">
            <Header />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Layout