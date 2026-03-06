<template>
  <main class="home-page">
    <section class="hero" aria-label="Chi è Beauty Boutique">
      <div class="hero-inner">
        <div class="hero-text">
          <h1 class="hero-title">
            Chi è <strong class="brand-title">Beauty Boutique</strong>?
          </h1>

          <p class="hero-lead">
            Beauty Boutique è il tuo spazio di bellezza e benessere nel cuore della città.
            Trattamenti professionali, prodotti selezionati e un team dedicato a valorizzare la tua naturale bellezza.
          </p>

          <router-link
              to="/beauty-center"
              class="cta-link-hero"
              aria-label="Scopri di più su Beauty Boutique"
          >
            Scopri di più
          </router-link>
        </div>

        <picture class="hero-media" aria-hidden="false">
          <!--
          <source :srcset="heroAvif" type="image/avif" />
          <source :srcset="heroWebp" type="image/webp" />
          -->
          <img
              :src="heroJpeg"
              :srcset="heroSrcset"
              alt="Interno di Beauty Boutique con area trattamenti"
              class="hero-image"
              loading="eager"
              fetchpriority="high"
              width="1200"
              height="800"
          />
        </picture>
      </div>
    </section>

    <section class="intro">
      <h1 class="intro-title">Scopri il mondo di beauty boutique</h1>

      <div class="intro-video">
        <video src="/src/assets/home/Home2.mp4" class="home-video" aria-label="Video centro estetico" controls autoplay muted loop playsinline></video>
      </div>
    </section>

    <section
        v-for="(service, index) in services"
        :key="service.slug"
        class="body"
        :aria-label="`Servizio ${service.title}`"
    >
      <template v-if="index === 0">
        <h1 class="body-title">I nostri servizi</h1>
      </template>
      <div
          class="service-inner"
          :class="{ reverse: index % 2 === 1 }"
      >
        <div class="service-text">
          <h2 class="service-title">
            <span class="brand">{{ service.title }}</span>
          </h2>

          <p class="service-lead">
            {{ service.lead }}
          </p>

          <router-link
              :to="service.to"
              class="cta-link-service"
              :aria-label="`Scopri di più su ${service.title}`"
          >
            Scopri di più
          </router-link>
        </div>

        <figure class="service-media">
          <img
              :src="service.image"
              :alt="service.alt"
              class="service-image"
              loading="lazy"
          />
        </figure>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
// Section introduction
import heroJpeg from '../assets/home/Home1.jpeg';
// import heroWebp from '../assets/home/Home1.webp';
// import heroAvif from '../assets/home/Home1.avif';

const heroSrcset = `${heroJpeg} 1x, ${heroJpeg} 2x`;

// Section services
type Service = {
  title: string;
  slug: string;
  to: string;
  lead: string;
  image: string;
  alt: string;
};

import EsteticaSensorialeImg from '/src/assets/estetica_sensoriale/EsteticaSensorialeIntro1.jpg';
import EsteticaAvanzataImg from '/src/assets/estetica_avanzata/EsteticaAvanzataIntro.jpg';
import NailsImg from '/src/assets/nails/Lampada.png';
import EpilazioneImg from '/src/assets/epilazione/EpilazioneIntro.jpg';
import MassaggiImg from '/src/assets/massaggi/MassaggiIntro.jpeg';
import LaminazioneImg from '/src/assets/laminazione/LaminazioneIntro.jpeg';
import MakeUpImg from '/src/assets/make-up/Make-upIntro.jpg';

const services: Service[] = [
  {
    title: 'Estetica Sensoriale',
    slug: 'estetica-sensoriale',
    to: '/servizi/estetica-sensoriale',
    lead: 'Un viaggio che coinvolge corpo, mente e sensi.',
    image: EsteticaSensorialeImg,
    alt: 'Introduzione estetica sensoriale'
  },
  {
    title: 'Estetica Avanzata',
    slug: 'estetica-avanzata',
    to: '/servizi/estetica-avanzata',
    lead: 'Metodologie professionali a tecnologie all\'avanguardia.',
    image: EsteticaAvanzataImg,
    alt: 'Introduzione estetica avanzata'
  },
  {
    title: 'Nails',
    slug: 'nails',
    to: '/servizi/nails',
    lead: 'Scopri i nostri trattamenti e design personalizzati.',
    image: NailsImg,
    alt: 'Introduzione nails'
  },
  {
    title: 'Epilazione',
    slug: 'epilazione',
    to: '/servizi/epilazione',
    lead: 'Scopri un\'esperienza delicata e impeccabile.',
    image: EpilazioneImg,
    alt: 'Introduzione epilazione'
  },
  {
    title: 'Massaggi',
    slug: 'massaggi',
    to: '/servizi/massaggi',
    lead: 'Un’esperienza sensoriale unica e rilassante.',
    image: MassaggiImg,
    alt: 'Introduzione massaggi'
  },
  {
    title: 'Laminazione',
    slug: 'laminazione',
    to: '/servizi/laminazione',
    lead: 'Per chi desidera uno sguardo perfetto.',
    image: LaminazioneImg,
    alt: 'Introduzione laminazione'
  },
  {
    title: 'MakeUp',
    slug: 'makeup',
    to: '/servizi/makeup',
    lead: 'Valorizza la tua bellezza.',
    image: MakeUpImg,
    alt: 'Introduzione makeup'
  }
]
</script>

<style scoped>
.home-page {
  width: 100%;
  --max-width: 1100px;
  --brand: #b85a8a;
  --brand-dark: #8b3f63;
  --text: #111;
  --muted: #333;
  --bg-cta: #222;
  --bg-cta-hover: #000;
  --radius: 12px;
  --hero-padding: 24px;
  --shadow-sm: 0 6px 18px rgba(17,17,17,0.08);
  --shadow-md: 0 8px 24px rgba(184,90,138,0.12);
  --shadow-lg: 0 12px 32px rgba(184,90,138,0.12);
  --focus-ring: rgba(184,90,138,0.22);
  --transition: cubic-bezier(.25,.9,.25,1);
}

/* HERO */
.hero {
  margin-bottom: 48px;
  box-sizing: border-box;
  padding: 24px 16px;
  position: relative;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("../assets/home/Tema.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.08;
  pointer-events: none;
  z-index: 0;
}

.hero-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 0;
  box-sizing: border-box;
}

.hero-text,
.hero-media {
  box-sizing: border-box;
  width: 50%;
  min-width: 260px;
}

.hero-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--hero-padding);
  text-align: center;
}

.hero-title {
  margin: 0 0 12px;
  font-size: 28px;
  font-weight: 700;
  color: var(--text);
  line-height: 1.1;
}

.brand-title {
  text-transform: uppercase;
  color: var(--brand);
}

.hero-lead {
  margin: 0 0 18px;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.6;
  max-width: 48ch;
}

/* CTA hero */
.cta-link-hero {
  display: inline-block;
  padding: 10px 18px;
  background: var(--bg-cta);
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background .12s ease, transform .08s ease;
  outline: none;
}

.cta-link-hero:focus,
.cta-link-hero:hover {
  background: var(--bg-cta-hover);
  transform: translateY(-2px);
}

/* Hero media */
.hero-media {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  overflow: hidden;
  border-radius: var(--radius);
}

.hero-image {
  width: 100%;
  height: auto;
  max-height: clamp(300px, 35vw, 420px);
  object-fit: cover;
  object-position: center;
  display: block;
  box-shadow: var(--shadow-sm);
}

/* INTRO */
.intro {
  text-align: center;
}

.intro-title,
.body-title {
  margin-bottom: 40px;
  color: rgb(236, 213, 197);
  font-family: Poppins, Helvetica, Arial, Lucida, sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 10px;
  text-transform: uppercase;
}

.intro-video {
  width: 100%;
  max-width: 360px;
  margin: 2.5rem auto;
  display: block;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  background: #fdf9f8;
}

/* focus sul video reale */
.home-video:focus {
  outline: 3px solid #e8b7c8;
  outline-offset: 4px;
}

/* BODY / SERVICES */
.body {
  margin-bottom: 64px;
  position: relative;
  text-align: center;
  /*--accent: #f7e3ec;
  --text-body: #2b2b2b;*/
  --muted: #6b6b6b;
}

.service-inner {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 32px 24px;
  background: linear-gradient(180deg, rgba(247,230,238,0.9), rgba(255,250,252,0.95));
  border: 1px solid rgba(184,90,138,0.06);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  transition: transform .35s var(--transition), box-shadow .35s var(--transition);
}

.service-inner:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 40px rgba(184,90,138,0.18);
}

/* reverse layout */
.service-inner.reverse {
  flex-direction: row-reverse;
}

.service-text {
  flex: 1 1 50%;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0 12px;
  max-width: 520px;
}

/* override per reverse */
.service-inner.reverse .service-text {
  text-align: right;
  align-items: flex-end;
}

.service-text {
  text-align: left;
  align-items: flex-start;
}

.service-title {
  font-family: "Playfair Display", Arapey, Georgia, serif;
  font-size: 30px;
  font-weight: 600;
  color: var(--brand-dark);
  letter-spacing: 0.3px;
}

.brand {
  color: var(--brand);
  background: none;
  padding: 0;
  border-radius: 0;
}

.service-lead {
  color: var(--muted);
  font-size: 17px;
  line-height: 1.75;
}

/* CTA servizio: dimensione flessibile ma coerente */
.cta-link-service {
  display: inline-block;
  width: 160px;
  text-align: center;
  padding: 12px 0;
  background: linear-gradient(90deg, var(--brand), var(--brand-dark));
  color: #fff;
  text-decoration: none;
  border-radius: 999px;
  font-weight: 600;
  letter-spacing: 0.3px;
  transition: transform .25s var(--transition), box-shadow .25s var(--transition);
  /*box-shadow: 0 6px 18px rgba(184,90,138,0.18);*/
  box-shadow: 0 8px 24px rgba(184,90,138,0.12);
}

.cta-link-service:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 40px rgba(184,90,138,0.18);
}

.cta-link-service:focus {
  outline: none;
  box-shadow: 0 0 0 6px var(--focus-ring);
}

.service-media {
  flex: 1 1 50%;
  padding: 0 12px;
  display: flex;
  justify-content: center;
}

.service-image {
  width: 100%;
  max-width: 520px;
  border-radius: var(--radius);
  filter: saturate(0.98) contrast(1.02);
  transition: transform .35s var(--transition), box-shadow .35s var(--transition);
}

.service-image:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 16px 40px rgba(184,90,138,0.18);
}

/* Responsive: sotto 880px le colonne diventano verticali */
@media (max-width: 880px) {
  .hero-inner {
    flex-direction: column;
    gap: 18px;
  }

  .hero-text,
  .hero-media {
    width: 100%;
    min-width: 0;
  }

  .hero-text {
    padding: 16px;
    text-align: center;
  }

  .hero-image {
    max-height: 360px;
    width: 100%;
    height: auto;
  }

  .service-inner,
  .service-inner.reverse {
    flex-direction: column;
    padding: 24px 16px;
  }

  .service-text {
    text-align: center !important;
    align-items: center !important;
    max-width: 70ch;
  }

  .cta-link-service {
    align-self: center;
  }

  .service-media {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .hero-title,
  .service-title {
    font-size: 24px;
  }

  .cta-link-hero {
    padding: 8px 14px;
    font-size: 14px;
  }

  .hero-image,
  .service-image {
    max-height: 300px;
  }
}

/* Rispetto preferenze ridotte per le animazioni */
@media (prefers-reduced-motion: reduce) {
  .cta-link-hero,
  .service-inner,
  .service-image,
  .cta-link-service {
    transition: none !important;
    transform: none !important;
  }
}
</style>