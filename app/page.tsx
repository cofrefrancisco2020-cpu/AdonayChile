'use client';

import {
  ArrowDownRight,
  ArrowUpRight,
  Camera,
  Check,
  ChevronRight,
  Hammer,
  MapPin,
  Menu,
  Ruler,
  Scissors,
  Sparkles,
  X,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const INSTAGRAM_URL = 'https://www.instagram.com/adonay_chile/?hl=es';
const MAP_URL =
  'https://www.google.com/maps/search/?api=1&query=Bernardo+O%27Higgins+1131%2C+Puerto+Natales%2C+Chile';

const services = [
  {
    number: '01',
    icon: Ruler,
    title: 'Fabricación a medida',
    text: 'Diseñamos sillones, sofás y piezas únicas desde la estructura hasta la última costura.',
  },
  {
    number: '02',
    icon: Scissors,
    title: 'Retapizado',
    text: 'Renovamos telas, cueros y rellenos para devolver comodidad y carácter a tus muebles.',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Restauración',
    text: 'Recuperamos piezas con historia, respetando su esencia y reforzando lo que el tiempo desgastó.',
  },
];

const products = [
  { name: 'Hamilton', type: 'Seccional', image: '/assets/producto-hamilton-real.jpg' },
  { name: 'Tranta', type: 'Sofá escultórico', image: '/assets/producto-tranta-real.jpg' },
  { name: 'Roma', type: 'Sillón tres cuerpos', image: '/assets/producto-roma-real.jpg' },
  { name: 'Agustina', type: 'Poltrona', image: '/assets/producto-agustina-real.jpg' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Tapicería Adonay, inicio">
          <Image src="/assets/logo-adonay.jpg" alt="" width={52} height={52} priority />
          <span>
            <strong>ADONAY</strong>
            <small>Fábrica &amp; Tapicería</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#trabajos">Trabajos</a>
          <a href="#proceso">Proceso</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a className="header-cta" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
          Cotizar proyecto <ArrowUpRight size={17} aria-hidden="true" />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Navegación móvil">
            {['servicios', 'trabajos', 'proceso', 'contacto'].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section className="hero" id="inicio">
        <Image
          className="hero-image"
          src="/assets/hero-seccional-patagonia-ai.png"
          alt="Sofá seccional de cuero en un interior inspirado en la Patagonia"
          width={1680}
          height={945}
          priority
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Hecho en Puerto Natales · Chile</p>
          <h1>
            Muebles con historia.
            <br />
            <em>Tapizados para quedarse.</em>
          </h1>
          <p className="hero-copy">
            Fabricamos, tapizamos y restauramos piezas únicas para hogares con identidad.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Cuéntanos tu idea <ArrowUpRight size={18} />
            </a>
            <a className="text-link" href="#trabajos">
              Ver nuestros trabajos <ArrowDownRight size={18} />
            </a>
          </div>
        </div>
        <div className="hero-proof" aria-label="Especialidades">
          <span><Check size={16} /> Diseño a medida</span>
          <span><Check size={16} /> Oficio local</span>
          <span><Check size={16} /> Restauración integral</span>
        </div>
      </section>

      <section className="intro section-pad" data-reveal>
        <div>
          <p className="eyebrow dark">Desde la estructura hasta la tela</p>
          <h2>Hacemos muebles que no se parecen a ningún otro.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Cada proyecto comienza con una conversación: cómo vives, qué necesitas y qué pieza quieres volver a disfrutar.
          </p>
          <p>
            Nuestro trabajo une oficio, materiales bien elegidos y terminaciones cuidadas para crear comodidad duradera.
          </p>
        </div>
      </section>

      <section className="services section-pad" id="servicios">
        <div className="section-heading" data-reveal>
          <p className="eyebrow dark">Nuestro oficio</p>
          <h2>Tres maneras de transformar tus espacios</h2>
        </div>
        <div className="service-grid">
          {services.map(({ number, icon: Icon, title, text }, index) => (
            <article className="service-card" data-reveal key={title} style={{ transitionDelay: `${index * 90}ms` }}>
              <span className="service-number">{number}</span>
              <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="craft" id="proceso">
        <div className="craft-image" data-reveal>
          <Image
            src="/assets/proceso-tapiceria-ai.png"
            alt="Detalle del proceso artesanal de tapizado en cuero"
            width={1456}
            height={1088}
          />
        </div>
        <div className="craft-copy" data-reveal>
          <p className="eyebrow">Precisión que se siente</p>
          <h2>El detalle no es el final. Es todo el proceso.</h2>
          <p>
            Desarmamos, reparamos, reforzamos y vestimos cada pieza con atención. Lo que no se ve sostiene todo lo que sí.
          </p>
          <ul>
            <li><span>01</span> Evaluamos tu mueble o idea</li>
            <li><span>02</span> Definimos medidas y materiales</li>
            <li><span>03</span> Fabricamos o restauramos</li>
            <li><span>04</span> Entregamos una pieza lista para vivir</li>
          </ul>
        </div>
      </section>

      <section className="signature section-pad" data-reveal>
        <div className="signature-copy">
          <p className="eyebrow dark">Piezas con carácter</p>
          <h2>Tu idea,<br /><em>nuestra manufactura.</em></h2>
          <p>
            Cambia la forma, la tela, el color y las proporciones. Diseñamos contigo una pieza que funcione en tu espacio y hable de ti.
          </p>
          <a className="button button-dark" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Crear una pieza única <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="signature-image">
          <Image
            src="/assets/sofa-verde-medida-ai.png"
            alt="Sofá verde de líneas curvas y capitoné, diseño conceptual a medida"
            width={1456}
            height={1088}
          />
          <span>Diseño a medida</span>
        </div>
      </section>

      <section className="work section-pad" id="trabajos">
        <div className="section-heading work-heading" data-reveal>
          <div>
            <p className="eyebrow dark">Catálogo real</p>
            <h2>Piezas hechas por Adonay</h2>
          </div>
          <a className="text-link dark-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Ver Instagram <Camera size={18} />
          </a>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <a
              className="product-card"
              data-reveal
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              key={product.name}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="product-image-wrap">
                <Image src={product.image} alt={`${product.type} ${product.name} realizado por Tapicería Adonay`} width={1080} height={1080} sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 25vw" />
              </div>
              <div>
                <span>{product.type}</span>
                <h3>{product.name}</h3>
              </div>
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="contact-main" data-reveal>
          <Sparkles size={32} strokeWidth={1.25} aria-hidden="true" />
          <p className="eyebrow">Tu próximo mueble comienza aquí</p>
          <h2>¿Fabricamos algo<br /><em>juntos?</em></h2>
          <p>Envíanos fotos, medidas o tu idea por Instagram. Te orientaremos para comenzar.</p>
          <a className="button button-light" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Hablar con Adonay <Camera size={18} />
          </a>
        </div>
        <a className="location-card" href={MAP_URL} target="_blank" rel="noreferrer" data-reveal>
          <MapPin size={30} strokeWidth={1.4} aria-hidden="true" />
          <div>
            <span>Visítanos en Puerto Natales</span>
            <strong>Bernardo O&apos;Higgins 1131</strong>
            <small>Magallanes y de la Antártica Chilena</small>
          </div>
          <ChevronRight aria-hidden="true" />
        </a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio">
          <Image src="/assets/logo-adonay.jpg" alt="" width={52} height={52} />
          <span><strong>ADONAY</strong><small>Fábrica &amp; Tapicería</small></span>
        </a>
        <p>Fabricamos, tapizamos y restauramos tus historias y sueños.</p>
        <div>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">@adonay_chile</a>
          <span>Puerto Natales · Chile</span>
        </div>
      </footer>
    </main>
  );
}
