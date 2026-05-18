import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const translations = {
  es: {
    // Navbar
    nav_services: 'Servicios',
    nav_catalog: 'Catálogo',
    nav_about: 'Nosotros',
    nav_location: 'Ubicación',
    nav_contact: 'Contacto',
    nav_cta: 'Pedir Presupuesto',
    // Hero
    hero_badge: 'Desde 1999 — Bergara, Gipuzkoa',
    hero_line1: 'EXPERTOS',
    hero_line2: 'EN ELECTRICIDAD',
    hero_line3: 'INDUSTRIAL',
    hero_desc: 'Instalaciones eléctricas residenciales e industriales, domótica, automatización y mantenimiento. Más de 25 años de confianza en Bergara y Gipuzkoa.',
    hero_cta1: 'Solicitar Presupuesto',
    hero_cta2: 'Ver Servicios →',
    hero_stat1: 'Años de experiencia',
    hero_stat2: 'Proyectos completados',
    hero_stat3: 'Clientes satisfechos',
    // Services
    svc_label: 'Lo que hacemos',
    svc_title1: 'NUESTROS',
    svc_title2: 'SERVICIOS',
    svc_intro: 'Soluciones eléctricas integrales para hogares y empresas de Gipuzkoa. Instaladores autorizados con más de 25 años de experiencia.',
    svc_more: 'Ver más info →',
    svc_cta: 'Solicitar presupuesto para este servicio →',
    // Catalog
    cat_label: 'Materiales',
    cat_title1: 'CATÁLOGO DE',
    cat_title2: 'PRODUCTOS',
    cat_sub: 'Trabajamos con los mejores fabricantes del sector. Suministro e instalación de materiales eléctricos de primera calidad.',
    cat_btn: 'Consultar disponibilidad →',
    cat_all: 'Todos',
    // WhyUs
    why_label: 'Por qué elegirnos',
    why_title1: 'MÁS DE 25 AÑOS',
    why_title2: 'A TU SERVICIO',
    why_badge: 'Fundada en Bergara',
    // Location
    loc_label: 'Dónde estamos',
    loc_title1: 'ENCUÉNTRANOS',
    loc_title2: 'EN BERGARA',
    loc_address: 'Dirección',
    loc_phone: 'Teléfono',
    loc_schedule: 'Horario',
    loc_schedule_val: 'Lun – Vie: 8:00 – 18:00\nSábados con cita previa',
    loc_maps: 'Cómo llegar →',
    // Contact
    con_label: 'Contacto',
    con_title1: 'PIDE TU',
    con_title2: 'PRESUPUESTO',
    con_desc: 'Cuéntanos tu proyecto y te llamamos. Presupuesto sin compromiso en menos de 24 horas.',
    con_call: 'Llamada directa',
    con_name: 'Nombre *',
    con_phone: 'Teléfono *',
    con_email: 'Email',
    con_service: 'Servicio que necesitas',
    con_msg: 'Describe tu proyecto *',
    con_submit: 'Solicitar Presupuesto Gratuito →',
    con_success_title: '¡Mensaje enviado!',
    con_success_desc: 'Nos pondremos en contacto contigo en menos de 24 horas.',
    con_success_btn: 'Enviar otro mensaje',
    con_placeholder_name: 'Tu nombre',
    con_placeholder_phone: '600 000 000',
    con_placeholder_email: 'tu@email.com',
    con_placeholder_msg: 'Cuéntanos qué necesitas, ubicación, dimensiones aproximadas...',
    con_select: 'Selecciona un servicio...',
    con_whatsapp: 'Escríbenos',
    // Footer
    footer_tagline: 'Instalaciones eléctricas profesionales\nen Bergara desde 1999.',
    footer_services: 'Servicios',
    footer_nav: 'Navegación',
    footer_contact: 'Contacto',
    footer_rights: 'Todos los derechos reservados',
  },
  eu: {
    // Navbar
    nav_services: 'Zerbitzuak',
    nav_catalog: 'Katalogoa',
    nav_about: 'Gu buruz',
    nav_location: 'Kokapena',
    nav_contact: 'Kontaktua',
    nav_cta: 'Aurrekontua eskatu',
    // Hero
    hero_badge: '1999tik — Bergara, Gipuzkoa',
    hero_line1: 'ADITUAK',
    hero_line2: 'ELEKTRIZITATE',
    hero_line3: 'INDUSTRIALEAN',
    hero_desc: 'Etxebizitza eta industria elektrizitate-instalazioak, domotika, automatizazioa eta mantentze-lanak. 25 urte baino gehiago Bergaran eta Gipuzkoan.',
    hero_cta1: 'Aurrekontua eskatu',
    hero_cta2: 'Zerbitzuak ikusi →',
    hero_stat1: 'Esperientzia-urte',
    hero_stat2: 'Proiektu burutuak',
    hero_stat3: 'Bezero poztuak',
    // Services
    svc_label: 'Zer egiten dugun',
    svc_title1: 'GURE',
    svc_title2: 'ZERBITZUAK',
    svc_intro: 'Gipuzkoako etxe eta enpresenrako elektrizitate-soluzio integralak. 25 urte baino gehiagoko esperientziarekin instalatzaile baimenduak.',
    svc_more: 'Informazio gehiago →',
    svc_cta: 'Zerbitzu honetarako aurrekontua eskatu →',
    // Catalog
    cat_label: 'Materialak',
    cat_title1: 'PRODUKTUEN',
    cat_title2: 'KATALOGOA',
    cat_sub: 'Sektorearen fabrikatzaile onenekin lan egiten dugu. Kalitate handiko material elektrikoen hornidura eta instalazioa.',
    cat_btn: 'Eskuragarritasuna kontsultatu →',
    cat_all: 'Guztiak',
    // WhyUs
    why_label: 'Zergatik hautatu',
    why_title1: '25 URTE BAINO GEHIAGO',
    why_title2: 'ZURE ZERBITZURA',
    why_badge: 'Bergaran sortua',
    // Location
    loc_label: 'Non gauden',
    loc_title1: 'AURKITU IEZAGUZU',
    loc_title2: 'BERGARAN',
    loc_address: 'Helbidea',
    loc_phone: 'Telefonoa',
    loc_schedule: 'Ordutegia',
    loc_schedule_val: 'Astelehen – Ostirala: 8:00 – 18:00\nLarunbatak hitzorduz',
    loc_maps: 'Nola iritsi →',
    // Contact
    con_label: 'Kontaktua',
    con_title1: 'ESKATU ZURE',
    con_title2: 'AURREKONTUA',
    con_desc: 'Kontatu zure proiektua eta deitu egingo dizugu. Konpromiso gabe aurrekontua 24 ordutan.',
    con_call: 'Dei zuzena',
    con_name: 'Izena *',
    con_phone: 'Telefonoa *',
    con_email: 'Emaila',
    con_service: 'Behar duzun zerbitzua',
    con_msg: 'Deskribatu zure proiektua *',
    con_submit: 'Doako Aurrekontua eskatu →',
    con_success_title: 'Mezua bidali da!',
    con_success_desc: '24 ordutan zurekin harremanetan jarriko gara.',
    con_success_btn: 'Beste mezu bat bidali',
    con_placeholder_name: 'Zure izena',
    con_placeholder_phone: '600 000 000',
    con_placeholder_email: 'zu@emaila.com',
    con_placeholder_msg: 'Esan iezaguzu zer behar duzun, kokapena, neurri gutxi gorabeherakoak...',
    con_select: 'Hautatu zerbitzu bat...',
    con_whatsapp: 'Idatzi iezaguzu',
    // Footer
    footer_tagline: 'Elektrizitate-instalazio profesionalak\nBergaran 1999tik.',
    footer_services: 'Zerbitzuak',
    footer_nav: 'Nabigazioa',
    footer_contact: 'Kontaktua',
    footer_rights: 'Eskubide guztiak erreserbatuak',
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es')
  const t = (key) => translations[lang][key] || key
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}