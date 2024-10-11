import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Features from './Features'
import Workflow from './Workflow'
import Price from './Price'
import Testimonial from './Testimonial'
import Footer from './Footer'

const Layout = () => {
    return (
        <>
            <NavBar />
            <div className="max-w-7xl mx-auto pt-20 px-6">
                <Hero />
                <Features />
                <Workflow />
                <Price />
                <Testimonial />
                <Footer />
            </div>
        </>
    )
}

export default Layout
