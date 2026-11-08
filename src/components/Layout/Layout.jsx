import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

export default function Layout() {
  return (
    <div className="flex flex-col flex-1 min-h-screen">
    <Navbar />

    <main className="flex-1">
        <Outlet />
    </main>

    <Footer />
</div>
  )
}
