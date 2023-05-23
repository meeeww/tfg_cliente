import Header from '../components/Header'
import Footer from '../components/Footer'

// eslint-disable-next-line react/prop-types
function MainLayout({children, laPagina}) {
    return (
        <div>
            <Header quePagina={laPagina}></Header>
            <div>{children}</div>
            <Footer></Footer>
        </div>
    )
}

export default MainLayout