import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { scrollToTop } from '../../utils/ScrollUtils'
import './Hero.css'

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="hero min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 text-black" style={{ backgroundImage: 'url(/path/to/your/image.jpg)', backgroundSize: 'cover' }}>
      <div 
        className="text-center bg-white bg-opacity-20 backdrop-blur-md p-10 rounded-xl border border-gray-700 shadow-2xl transform transition-all hover:scale-105"
        data-aos="fade-up"
      >
        <h1 
          className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600" 
          data-aos="zoom-in"
        >
          Se acercan las fiestas...
        </h1>
        <p 
          className="text-xl mb-6 text-gray-300" 
          data-aos="fade-down"
        >
          ¡Hace tus pedidos con Descuentos!
        </p>
        <Link
          to="/tienda"
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-black rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-block"
          data-aos="zoom-in"
          onClick={scrollToTop}
        >
          Ir a la tienda
        </Link>
        <Link
          to="/contacto"
          className="mt-4 px-6 py-2 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full hover:from-green-600 hover:to-green-800 transition-all duration-300 inline-block"
          data-aos="zoom-in"
        >
          Contáctanos
        </Link>
      </div>
    </section>
  )
}

export default Hero