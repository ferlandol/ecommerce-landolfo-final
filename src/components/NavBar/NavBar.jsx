import { NavLink } from 'react-router-dom'
import { scrollToTop } from '../../utils/ScrollUtils'
import NavBarLogo from '../NavBarLogo/NavBarLogo'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

function NavBar() {
    const categories = [
        'Aguas',
        'Gaseosas',
        'Vinos'
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container-fluid">
                <NavBarLogo />

                <button
                    className="navbar-toggler ms-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" activeClassName="active" onClick={scrollToTop}>Inicio</NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Menú</a>

                            <ul className="dropdown-menu">
                                {categories.map((category) => (
                                    <li key={category}>
                                        <NavLink to={`/tienda/${category}`} className="dropdown-item" activeClassName="active" onClick={scrollToTop}>{category}</NavLink>
                                    </li>
                                ))}

                                <li><hr className="dropdown-divider" /></li>

                                <li key="all">
                                    <NavLink to={`/tienda`} className="dropdown-item" activeClassName="active" onClick="scrollToTop">Catálogo</NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link" activeClassName="active" onClick={scrollToTop}>Contacto</NavLink>
                        </li>

                        <li>
                            <NavLink to="/about" className="nav-link" activeClassName="active" onClick={scrollToTop}>Acerca de nosotros</NavLink>
                        </li>
                    </ul>

                    <div className="ms-auto d-flex justify-content-center align-items-center flex-lg-row flex-column">
                        <CartWidget />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar