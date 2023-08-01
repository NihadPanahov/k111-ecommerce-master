import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Routers from '../../routers/Routers'

const Layout = () => {
    return (
        <>
            <Header />
            <Routers />
            <Footer />
        </>

    )
}

export default Layout