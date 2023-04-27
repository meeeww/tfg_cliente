import React from 'react'
import Header from '../componentes/Header.jsx'
import Footer from '../componentes/Footer'

function MainLayout({children, laPagina}) {
    return (
        <div>
            <Header quePagina={laPagina}>Hey</Header>
            <div>{children}</div>
            <Footer></Footer>
        </div>
    )
}

export default MainLayout