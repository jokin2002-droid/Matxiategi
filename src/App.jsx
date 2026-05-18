import { useEffect } from 'react'
import { LanguageProvider } from './LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Catalog from './components/Catalog'
import WhyUs from './components/WhyUs'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    document.title = 'Matxiategi S.L. | Instalaciones Eléctricas en Bergara'
  }, [])

  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <Hero />
        <Services />
        <Catalog />
        <WhyUs />
        <Location />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App