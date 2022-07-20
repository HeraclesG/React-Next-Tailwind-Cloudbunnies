import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function MainLayout({ children }) {
    return (
        <div className='bg-[#B1C6FF]'>
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default MainLayout