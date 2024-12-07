import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function AboutUs() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true
        });
    }, []);

    return (
        <section className="custom-container d-flex flex-column text-center">
            <div className="container mb-3">
                <h1 className="display-6 fw-bold mb-3" data-aos="fade-down">
                    Acerca de nosotros...
                </h1>

                <div>
                    <p className="fs-5 fs-sm-6 fs-md-7 fs-lg-8 lh-lg mb-3" data-aos="fade-up" data-aos-delay="150">
                        Desde <strong>2020</strong>, nos dedicamos a la comercialización de Bebidas, esta tienda la
                        hicimos para acercar los mejores productos a nuestros clientes.
                    </p>

                    <p className="fs-5 fs-sm-6 fs-md-7 fs-lg-8 lh-lg mb-3" data-aos="fade-up" data-aos-delay="300">
                        Gracias a esta tienda tenemos un alcance a todo el país y los países limítrofes.
                    </p>

                    <p className="fs-5 fs-sm-6 fs-md-7 fs-lg-8 lh-lg mb-3" data-aos="fade-up" data-aos-delay="700">
                        Agradecemos a todos por sus recomendaciones.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutUs