import { Link } from 'react-router-dom'
import { FacebookIcon, InstagramIcon } from './SocialIcons'
import { scrollToTop } from '../../utils/ScrollUtils'
import './Footer.css'

function Footer() {
    const links = [
        { to: '/tienda', label: 'Tienda' },
        { to: '/about', label: 'Acerca de nosotros' },
        { to: '/contact', label: 'Contacto' },
    ];

    return (
        <footer className="custom-footer py-4">
            <div className="container">
                <div className="row text-center text-md-start">
                    <div className="col-md-4 mb-3">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                to={link.to}
                                className="footer-link d-block"
                                onClick={scrollToTop}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="col-md-4 mb-3 d-flex flex-column align-items-center">
                        <h5 className="text-center text-md-center">Síguenos en nuestras redes</h5>

                        <div className="d-flex flex-column flex-md-row align-items-center">
                            <Link
                                to="https://www.facebook.com/share/p/1DSfGbZSUq/"
                                className="footer-link me-md-3 mb-2 mb-md-0"
                                aria-label="Facebook"
                                onClick={scrollToTop}
                            >
                                <FacebookIcon /> Facebook
                            </Link>

                            <Link
                                to="https://www.instagram.com/drinks.sr?igsh=MW50NjlqdmJrYmMwNQ=="
                                className="footer-link mb-2 mb-md-0"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                onClick={scrollToTop}
                            >
                                <InstagramIcon /> Instagram
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3 text-md-end">
                        <h6>&copy; {new Date().getFullYear()} FL Bebidas</h6>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer