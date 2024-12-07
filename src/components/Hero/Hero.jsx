import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { scrollToTop } from '../../utils/ScrollUtils'
import './Hero.css'

function Hero() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
        });
    }, []);

    return (
        <section className="hero d-flex justify-content-center align-items-center text-center">
            <div
                className="bg-dark bg-opacity-50 p-4 rounded shadow-lg"
                data-aos="zoom-in"
            >
                <h1 className="display-4 mb-3" data-aos="fade-down">
                    Se acercan las fiestas...
                </h1>
                <p className="lead mb-4" data-aos="fade-up">
                    ¡Hace tus pedidos con Descuentos!
                </p>
                <Link
                    to="/tienda"
                    className="btn btn-lg custom-btn"
                    data-aos="fade-up"
                    onClick={scrollToTop}
                >
                    Ir a la tienda
                </Link>
            </div>
        </section>
    )
}

export default Hero