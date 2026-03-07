<template>
  <main class="tecnologie-page">
    <section class="intro" aria-label="Introduzione tecnologie">
      <div class="intro-text">
        <h1 class="intro-title">Tecnologie</h1>
        <p class="intro-para">
          Le moderne tecnologie estetiche offrono soluzioni efficaci e sicure per chi desidera migliorare il proprio aspetto senza ricorrere a interventi invasivi.
          La scelta del trattamento più adatto dovrebbe sempre essere guidata da professionisti qualificati, in grado di valutare le esigenze individuali e proporre un percorso personalizzato verso il benessere e la bellezza.
        </p>
      </div>
    </section>

    <section
        v-for="(tecnologia, index) in tecnologie"
        :key="tecnologia.slug"
        class="hero"
        :aria-label="`Tecnologia ${tecnologia.title}`"
    >
      <div
          class="hero-inner"
          :class="{ reverse: index % 2 === 1 }"
      >
        <div class="hero-text">
          <h2 class="hero-title">
            <span class="brand">{{ tecnologia.title }}</span>
          </h2>

          <p class="hero-lead">
            <component :is="tecnologia.lead"/>
          </p>
        </div>

        <figure class="hero-media">
          <img
              :src="tecnologia.image"
              :alt="tecnologia.alt"
              class="hero-image"
              loading="lazy"
          />
        </figure>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import type { Component } from 'vue';

import BeautyQueenImg from '/src/assets/tecnologie/beauty_queen/BeautyQueenIntro.jpeg';
import BeautyQueen from "./BeautyQueen.vue";
import PressoBeautyImg from '/src/assets/tecnologie/presso_beauty/PressoBeautyIntro.jpeg';
import PressoBeauty from "./PressoBeauty.vue";
import BeautySensorialShowerImg from '/src/assets/tecnologie/beauty_shower/BeautyShowerIntro.jpeg';
import BeautySensorialShower from "./BeautySensorialShower.vue";
import ReshapeRollershapeImg from '/src/assets/tecnologie/reshape_rollershape/ReshapeRollershapeIntro.jpeg';
import ReshapeRollershape from "./ReshapeRollershape.vue";

type Tecnologia = {
  title: string
  slug: string
  lead: Component
  image: string
  alt: string
};

const tecnologie: Tecnologia[] = [
  {
    title: 'Beauty Queen',
    slug: 'beauty-queen',
    lead: BeautyQueen,
    image: BeautyQueenImg,
    alt: 'Introduzione Beauty Queen',
  },
  {
    title: 'Presso Beauty',
    slug: 'presso-beauty',
    lead: PressoBeauty,
    image: PressoBeautyImg,
    alt: 'Introduzione Presso Beauty',
  },
  {
    title: 'Beauty Sensorial Shower',
    slug: 'beauty-sensorial-shower',
    lead: BeautySensorialShower,
    image: BeautySensorialShowerImg,
    alt: 'Introduzione Beauty Sensorial Shower',
  },
  {
    title: 'Re Shape & Roller Shape',
    slug: 'reshape-rollershape',
    lead: ReshapeRollershape,
    image: ReshapeRollershapeImg,
    alt: 'Introduzione Reshape Rollershape',
  }
];
</script>

<style scoped>
.tecnologie-page {
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
  aspect-ratio: 16 / 14;
  object-fit: cover;
  border-radius: var(--radius);
  filter: saturate(0.98) contrast(1.02);
  transition: transform .35s var(--transition), box-shadow .35s var(--transition);
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
  .hero-image {
    transition: none !important;
    transform: none !important;
  }
}
</style>