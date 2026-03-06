<template>
  <main class="estetica-avanzata-page" role="main">
    <section class="intro" aria-label="Introduzione estetica avanzata">
      <div class="intro-text">
        <h1 class="intro-title">Estetica Avanzata</h1>
        <p class="intro-para">
          L'estetica avanzata rappresenta l'evoluzione dei trattamenti di bellezza tradizionali, unendo metodologie professionali a tecnologie all'avanguardia per migliorare la qualità della pelle e rimodellare il corpo in modo profondo, mirato e duraturo.
          A differenza dell'estetica classica, si concentra su risultati visibili, progressivi e spesso non invasivi, agendo su inestetismi complessi come rughe, macchie, lassità cutanea, cellulite e adiposità localizzate.
        </p>
      </div>
    </section>

    <section
        v-for="(service, index) in services"
        :key="service.slug"
        class="hero"
        :aria-label="`Service ${service.title}`"
    >
      <div
          class="hero-inner"
          :class="{ reverse: index % 2 === 1 }"
      >
        <div class="hero-text">
          <h2 class="hero-title">
            <span class="brand">{{ service.title }}</span>
          </h2>

          <p class="hero-lead">
            {{ service.lead }}
          </p>

          <router-link
              :to="service.to"
              class="cta-link"
              :aria-label="`Scopri di più su ${service.title}`"
          >
            Scopri di più
          </router-link>
        </div>

        <figure class="hero-media">
          <img
              :src="service.image"
              :alt="service.alt"
              class="hero-image"
              loading="lazy"
          />
        </figure>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
type Service = {
  title: string;
  slug: string;
  to: string;
  lead: string;
  image: string;
  alt: string;
};

import EpilazioneLaserImg from '/src/assets/estetica_avanzata/epilazione_laser/EpilazioneLaserIntro.jpg';
import TrattamentiVisoAvanzatiImg from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzatiIntro.jpg';
import TrattamentiCorpoAvanzatiImg from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpoIntro1.jpg';

const services: Service[] = [
  {
    title: 'Epilazione Laser',
    slug: 'epilazione-laser',
    to: '/servizi/estetica-avanzata/epilazione-laser',
    lead: 'La depilazione non è più solo una necessità stagionale, ma un vero rituale di bellezza e benessere quotidiano.',
    image: EpilazioneLaserImg,
    alt: 'Introduzione epilazione laser',
  },
  {
    title: 'Trattamenti Viso',
    slug: 'trattamenti-viso-avanzati',
    to: '/servizi/estetica-avanzata/trattamenti-viso-avanzati',
    lead: 'Nel nostro istituto trasformiamo la classica pulizia del viso in un vero e proprio trattamento di estetica specifica e avanzata',
    image: TrattamentiVisoAvanzatiImg,
    alt: 'Introduzione trattamenti viso avanzati',
  },
  {
    title: 'Trattamenti Corpo',
    slug: 'trattamenti-corpo-avanzati',
    to: '/servizi/estetica-avanzata/trattamenti-corpo-avanzati',
    lead: 'Oggi l’estetica corpo non si limita al semplice massaggio, ma si basa su tecnologie avanzate e protocolli personalizzati capaci di intervenire in profondità sui tessuti.',
    image: TrattamentiCorpoAvanzatiImg,
    alt: 'Introduzione trattamenti corpo avanzati',
  }
];
</script>

<style scoped>
.estetica-avanzata-page {
  --brand: #b85a8a;
  --brand-dark: #8b3f63;
  --accent: #f7e3ec;
  --text: #2b2b2b;
  --muted: #6b6b6b;
  --radius: 14px;
  --shadow-soft: 0 10px 28px rgba(0,0,0,0.08);
  --shadow-hover: 0 16px 40px rgba(184,90,138,0.18);
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
  /*background: linear-gradient(180deg, #ffffff, #fff7fb);*/
  background: linear-gradient(180deg, rgba(247,230,238,0.9), rgba(255,250,252,0.95));
  border: 1px solid rgba(184,90,138,0.06);
  border-radius: var(--radius);
  box-shadow: var(--shadow-soft);
  transition: transform .35s var(--transition), box-shadow .35s var(--transition);
}

.hero-inner:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
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
  box-shadow: var(--shadow-hover);
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

  .hero-media {
    width: 100%;
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