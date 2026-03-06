<template>
  <main class="rituali-page">
    <section class="intro" aria-label="Introduzione rituali">
      <div class="intro-text">
        <h1 class="intro-title">Rituali Sensoriali</h1>
        <p class="intro-para">
          Un viaggio che coinvolge corpo, mente e sensi. I nostri rituali sensoriali sono ispirati alle tradizioni di benessere di diverse culture, per regalarti un’esperienza profonda di riequilibrio, relax e rigenerazione.
          Ogni trattamento è pensato come un vero percorso emozionale, dove manualità, profumi e texture ti accompagnano in un viaggio unico, capace di ristabilire armonia e vitalità.
        </p>
      </div>
    </section>

    <section
        v-for="(rituale, index) in rituali"
        :key="rituale.slug"
        class="hero"
        :aria-label="`Rituale ${rituale.title}`"
    >
      <div
          class="hero-inner"
          :class="{ reverse: index % 2 === 1 }"
      >
        <div class="hero-text">
          <h2 class="hero-title">
            <span class="brand">{{ rituale.title }}</span>
          </h2>

          <p class="hero-lead">
            {{ rituale.lead }}
          </p>

          <router-link
              :to="rituale.to"
              class="cta-link"
              :aria-label="`Scopri di più su ${rituale.title}`"
          >
            Scopri di più
          </router-link>
        </div>

        <figure class="hero-media">
          <img
              :src="rituale.image"
              :alt="rituale.alt"
              class="hero-image"
              loading="lazy"
          />
        </figure>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
type Rituale = {
  title: string;
  slug: string;
  to: string;
  lead: string;
  image: string;
  alt: string;
};

import HimalayaImg from '../../assets/estetica_sensoriale/himalaya/HimalayaIntro.jpeg';
import PolinesiaImg from '../../assets/estetica_sensoriale/polinesia/PolinesiaIntro.jpg';
import AmazzoniaImg from '../../assets/estetica_sensoriale/amazzonia/AmazzoniaIntro.jpg';
import MaroccoImg from '../../assets/estetica_sensoriale/marocco/MaroccoIntro2.jpg';
import IndiaImg from '../../assets/estetica_sensoriale/india/IndiaIntro.jpg';

const rituali: Rituale[] = [
  {
    title: 'Rituale Himalaya',
    slug: 'rituale-himalaya',
    to: '/servizi/estetica-sensoriale/rituale-himalaya',
    lead: 'Ispirato alla purezza e alla forza energetica delle montagne himalayane, questo rituale è studiato per detossinare, drenare e alleggerire il corpo.',
    image: HimalayaImg,
    alt: 'Introduzione rituale Himalaya',
  },
  {
    title: 'Rituale Polinesia',
    slug: 'rituale-polinesia',
    to: '/servizi/estetica-sensoriale/rituale-polinesia',
    lead: 'Un trattamento che drena, nutre e rigenera, lasciando la pelle morbida, luminosa e delicatamente profumata.',
    image: PolinesiaImg,
    alt: 'Introduzione rituale Polinesia',
  },
  {
    title: 'Rituale Amazzonia',
    slug: 'rituale-amazzonia',
    to: '/servizi/estetica-sensoriale/rituale-amazzonia',
    lead: 'Ispirato all’energia primordiale della foresta amazzonica, questo rituale stimola, tonifica e restituisce elasticità alla pelle, risvegliando vitalità e benessere profondo attraverso profumi caldi e manualità distensive.',
    image: AmazzoniaImg,
    alt: 'Introduzione rituale Amazzonia',
  },
  {
    title: 'Rituale Marocco',
    slug: 'rituale-marocco',
    to: '/servizi/estetica-sensoriale/rituale-marocco',
    lead: 'Ispirato all’antico rituale dell’hammam, questo trattamento purifica, detossina e rinnova la pelle, lasciandola incredibilmente morbida, luminosa e rigenerata.',
    image: MaroccoImg,
    alt: 'Introduzione rituale Marocco',
  },
  {
    title: 'Rituale India',
    slug: 'rituale-india',
    to: '/servizi/estetica-sensoriale/rituale-india',
    lead: 'Un percorso che leviga la pelle, nutre in profondità e dona una straordinaria sensazione di dolcezza e comfort.',
    image: IndiaImg,
    alt: 'Introduzione rituale India',
  },
];
</script>

<style scoped>
.rituali-page {
  --brand: #b85a8a;
  --brand-dark: #8b3f63;
  --accent: #f7e3ec;
  --text: #2b2b2b;
  --muted: #6b6b6b;
  --radius: 14px;
  --shadow-soft: 0 6px 18px rgba(17,17,17,0.08);
  --focus-ring: rgba(184,90,138,0.22);
  --transition: cubic-bezier(.25,.9,.25,1);
}

.intro-text {
  margin: 12px auto 24px;
  text-align: center;
  max-width: 70ch;
  color: var(--muted);
}

.intro-title {
  margin: 0 auto 12px;
  font-size: 48px;
  font-weight: 500;
  font-family: "Playfair Display", Arapey, Georgia, serif;
  color: #000;
  text-align: center;
  max-width: 70ch;
}

.intro-para {
  color: var(--muted);
  line-height: 1.75;
  font-size: 17px;
}

.hero {
  margin-bottom: 64px;
  position: relative;
}

.hero-inner {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 32px 24px;
  background: linear-gradient(180deg, rgba(247,230,238,0.9), rgba(255,250,252,0.95));
  border: 1px solid rgba(184,90,138,0.06);
  border-radius: var(--radius);
  box-shadow: var(--shadow-soft);
  transition: transform .35s var(--transition), box-shadow .35s var(--transition);
}

.hero-inner:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 40px rgba(184,90,138,0.18);
}

.hero-inner.reverse {
  flex-direction: row-reverse;
}

.hero-text {
  flex: 1 1 50%;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0 12px;
  max-width: 520px;
}

.hero-inner.reverse .hero-text {
  text-align: right;
  align-items: flex-end;
}

.hero-text {
  text-align: left;
  align-items: flex-start;
}

.hero-title {
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

.hero-lead {
  color: var(--muted);
  font-size: 17px;
  line-height: 1.75;
}

.cta-link {
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

.cta-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 40px rgba(184,90,138,0.18);
}

.cta-link:focus {
  outline: none;
  box-shadow: 0 0 0 6px var(--focus-ring);
}

.hero-media {
  flex: 1 1 50%;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

/*
.hero-media {
  flex: 1 1 50%;
  width: 100%;
  max-width: 420px;
  aspect-ratio: 16 / 10;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 12px;
  box-sizing: border-box;
}
*/

/*
.hero-image {
  width: 100%;
  max-width: 520px;
  border-radius: var(--radius);
  box-shadow: 0 12px 32px rgba(184,90,138,0.12);
  filter: saturate(0.98) contrast(1.02);
  transition: transform .35s var(--transition), box-shadow .35s var(--transition);
}
*/

.hero-image {
  width: 100%;
  max-width: 420px;
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: var(--radius);
  filter: saturate(0.98) contrast(1.02);
  transition: transform .35s var(--transition), box-shadow .35s var(--transition);
}

.hero-image:hover {
  transform: scale(1.1);
  /*box-shadow: 0 16px 40px rgba(184,90,138,0.18);*/
}

@media (max-width: 880px) {
  .hero-inner,
  .hero-inner.reverse {
    flex-direction: column !important;
    padding: 24px 16px;
  }

  .hero-text {
    text-align: center !important;
    align-items: center !important;
    max-width: 70ch;
  }

  .cta-link {
    align-self: center !important;
  }
}

@media (max-width: 480px) {
  .intro-title {
    font-size: 38px;
  }

  .hero-title {
    font-size: 24px;
  }

  .hero-image {
    max-height: 300px;
    aspect-ratio: 4 / 3;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-inner,
  .hero-image,
  .cta-link {
    transition: none !important;
    transform: none !important;
  }
}
</style>