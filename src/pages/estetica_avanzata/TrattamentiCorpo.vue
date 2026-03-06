<template>
  <main class="trattamenti-corpo-page">
    <section class="trattamenti-corpo-hero" aria-label="Hero trattamenti corpo">
      <img
          class="hero-bg"
          :src="heroImage"
          :alt="heroAlt"
          loading="lazy"
      />
      <div class="hero-overlay" role="region" aria-label="Titolo hero">
        <h1 class="hero-heading">Trattamenti Corpo Avanzati</h1>
        <p class="hero-sub">Migliora la qualità della tua pelle e la silhouette.</p>
      </div>
    </section>

    <section class="trattamenti-corpo-intro" aria-label="Introduzione trattamenti corpo">
      <div class="inner">
        <h1 class="section-service">Estetica Avanzata</h1>
        <h2 class="section-title">Trattamenti Corpo Rimodellanti e Tonificanti Avanzati</h2>
        <p class="section-text">
          Il corpo cambia, si trasforma e ha bisogno di trattamenti mirati per mantenere armonia, compattezza e leggerezza. Oggi l’estetica corpo non si limita al semplice massaggio, ma si basa su tecnologie avanzate e protocolli personalizzati capaci di intervenire in profondità sui tessuti.<br><br>
          Nel nostro istituto proponiamo trattamenti corpo professionali ad azione rimodellante, tonificante, riducente e drenante, studiati per migliorare visibilmente la qualità della pelle e la silhouette.<br><br>
          Lavoriamo in sinergia con tecnologie specifiche che permettono di trattare gli inestetismi in modo mirato, progressivo e non invasivo.
          <video src="/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo13.mp4" class="trattamenti-corpo-video" aria-label="Video trattamenti corpo" controls autoplay muted loop playsinline></video>
          <span class="treatment">Tecnologie corpo ad alta efficacia</span><br>
          Ogni percorso viene personalizzato in base alle caratteristiche del tessuto, agli obiettivi e alle esigenze individuali. L’integrazione delle diverse tecnologie consente di ottenere risultati più rapidi, completi e duraturi.<br><br>
          I nostri trattamenti includono:<br>
          ✔ Pressoterapia per stimolare la circolazione e favorire il drenaggio dei liquidi<br>
          ✔ Ultrasuoni per lavorare sugli accumuli adiposi e migliorare la qualità del tessuto<br>
          ✔ Radiofrequenza per tonificare, rassodare e stimolare la produzione di collagene<br>
          ✔ Re-Shape per il rimodellamento delle forme e la riduzione localizzata<br>
          ✔ Roller Shape per riattivare la microcircolazione e migliorare l’elasticità cutanea<br><br>
          L’azione combinata di queste tecnologie permette di intervenire contemporaneamente su più livelli del tessuto, potenziando l’efficacia del trattamento.<br><br>
          <span class="treatment">Obiettivi dei trattamenti corpo</span><br>
          I nostri protocolli sono studiati per migliorare in modo visibile e progressivo gli inestetismi più comuni, aiutando il corpo a ritrovare equilibrio e armonia.<br><br>
          Interveniamo su:<br>
          ✔ Ritenzione idrica e gonfiore<br>
          ✔ Adiposità localizzate<br>
          ✔ Cellulite e tessuto irregolare<br>
          ✔ Perdita di tono e rilassamento cutaneo<br>
          ✔ Pelle poco elastica o compatta<br>
          ✔ Necessità di rimodellare e ridefinire le forme<br><br>
          <span class="treatment">Un approccio personalizzato e professionale</span><br>
          Ogni percorso corpo viene progettato su misura, combinando le tecnologie più adatte e modulando l’intensità del trattamento in base alla risposta del tessuto.<br>
          Il nostro obiettivo è rimodellare, tonificare e drenare in modo efficace e progressivo, rispettando la fisiologia del corpo e favorendo risultati reali e duraturi nel tempo.<br><br>
          <span class="treatment">Il risultato</span><br>
          Una silhouette più armoniosa e definita.
          Tessuti più compatti e tonici.
          Una piacevole sensazione di leggerezza e benessere.
          Un corpo visibilmente più modellato e riequilibrato.
        </p>
      </div>
    </section>

    <section class="trattamenti-corpo-gallery" aria-label="Galleria">
      <div class="inner">
        <h3 class="gallery-title">Galleria</h3>

        <div class="gallery-grid" role="list">
          <figure
              v-for="(img, idx) in gallery"
              :key="img.src"
              class="gallery-item"
              role="listitem"
          >
            <button
                class="thumb-btn"
                @click="openLightbox(idx)"
                :aria-label="`Apri immagine ${idx + 1}`"
            >
              <img
                  :src="img.src"
                  :alt="img.alt"
                  loading="lazy"
                  class="thumb-image"
              />
            </button>
          </figure>
        </div>
      </div>
    </section>

    <div
        v-if="lightboxOpen"
        class="lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="`Immagine ${currentIndex + 1} di ${gallery.length}`"
        @click.self="closeLightbox"
    >
      <button class="lightbox-close" @click="closeLightbox" aria-label="Chiudi">
        ×
      </button>

      <div class="lightbox-inner">
        <button class="nav prev" @click.stop="prevImage" aria-label="Immagine precedente">‹</button>

        <img
            v-if="current"
            :src="current.src"
            :alt="current.alt"
            class="lightbox-image"
        />

        <button class="nav next" @click.stop="nextImage" aria-label="Immagine successiva">›</button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

type GalleryItem = { src: string; alt: string; }

import heroImage from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpoIntro2.jpg';
const heroAlt = 'Procedura trattamenti corpo avanzati';

import TrattamentiCorpo1 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo1.jpeg'
import TrattamentiCorpo2 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo2.jpeg'
import TrattamentiCorpo3 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo3.jpeg'
import TrattamentiCorpo4 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo4.jpeg'
import TrattamentiCorpo5 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo5.jpeg'
import TrattamentiCorpo6 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo6.jpeg'
import TrattamentiCorpo7 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo7.jpeg'
import TrattamentiCorpo8 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo8.jpeg'
import TrattamentiCorpo9 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo9.jpeg'
import TrattamentiCorpo10 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo10.jpeg'
import TrattamentiCorpo11 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo11.jpeg'
import TrattamentiCorpo12 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo12.jpeg'

const gallery: GalleryItem[] = [
  { src: TrattamentiCorpo1, alt: 'Trattamento 1' },
  { src: TrattamentiCorpo2, alt: 'Trattamento 2' },
  { src: TrattamentiCorpo3, alt: 'Trattamento 3' },
  { src: TrattamentiCorpo4, alt: 'Trattamento 4' },
  { src: TrattamentiCorpo5, alt: 'Trattamento 5' },
  { src: TrattamentiCorpo6, alt: 'Trattamento 6' },
  { src: TrattamentiCorpo7, alt: 'Trattamento 7' },
  { src: TrattamentiCorpo8, alt: 'Trattamento 8' },
  { src: TrattamentiCorpo9, alt: 'Trattamento 9' },
  { src: TrattamentiCorpo10, alt: 'Trattamento 10' },
  { src: TrattamentiCorpo11, alt: 'Trattamento 11' },
  { src: TrattamentiCorpo12, alt: 'Trattamento 12' }
];


const lightboxOpen = ref(false);
const currentIndex = ref<number>(0);

const current = computed(() => {
  const idx = Math.max(0, Math.min(currentIndex.value, gallery.length - 1));
  return gallery[idx];
});

function openLightbox(index: number) {
  currentIndex.value = index;
  lightboxOpen.value = true;
  lockScroll();
}

function closeLightbox() {
  lightboxOpen.value = false;
  unlockScroll();
}

function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + gallery.length) % gallery.length;
}

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % gallery.length;
}

function onKey(e: KeyboardEvent) {
  if (!lightboxOpen.value) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'ArrowRight') nextImage();
}

onMounted(() => window.addEventListener('keydown', onKey));
onBeforeUnmount(() => window.removeEventListener('keydown', onKey));

function lockScroll() {
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
}

function unlockScroll() {
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
}
</script>

<style scoped>
.trattamenti-corpo-page {
  width: 100%;
  box-sizing: border-box;
}

/* Hero */
.trattamenti-corpo-hero {
  position: relative;
  width: 100%;
  height: 420px;
  display: block;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 28px;
}

.hero-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: brightness(0.85);
}

.hero-overlay {
  position: relative;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-shadow: 0 6px 18px rgba(0,0,0,0.45);
  text-align: center;
  padding: 12px 20px;
  width: calc(100% - 48px);
  max-width: 900px;
  box-sizing: border-box;
  pointer-events: none;
}

.hero-heading {
  margin: 0 0 6px;
  font-size: 36px;
  font-weight: 700;
  font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
  line-height: 1;
  letter-spacing: 2px;
  text-size-adjust: 100%;
}

.hero-sub {
  margin: 0;
  font-size: 16px;
  font-family: Poppins, Helvetica, Arial, Lucida, sans-serif;
}

/* Intro */
.trattamenti-corpo-intro {
  text-align: center;
}

.inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
}

.section-service {
  margin-bottom: 10px;
  color: rgb(236, 213, 197);
  font-family: Poppins, Helvetica, Arial, Lucida, sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 10px;
  text-transform: uppercase;
}

.section-title {
  margin: 0 auto 12px;
  font-size: 45px;
  font-weight: 500;
  font-family: Arapey, Georgia, "Times New Roman", serif;
  color: #111;
  display: block;
}

.section-text {
  display: block;
  margin: 0 auto 24px;
  color: #333;
  line-height: 1.6;
  max-width: 70ch;
  white-space: normal;
  box-sizing: border-box;
}

.trattamenti-corpo-video {
  width: 100%;
  max-width: 360px;
  margin: 2.5rem auto;
  display: block;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  background: #fdf9f8;
}

.trattamenti-corpo-video:focus {
  outline: 3px solid #e8b7c8;
  outline-offset: 4px;
}

.treatment {
  font-family: Arapey, Georgia, "Times New Roman", serif;
  font-weight: 650;
  font-size: 18px;
  font-style: italic;
}

/* Galleria */
.trattamenti-corpo-gallery {
  margin-bottom: 20px;
}

.gallery-title {
  margin: 0 0 16px;
  color: rgb(236, 213, 197);
  font-family: Poppins, Helvetica, Arial, Lucida, sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 10px;
  text-align: center;
  text-transform: uppercase;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.gallery-item {
  margin: 0;
}

.thumb-btn {
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
}

.thumb-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  transition: transform .18s ease, filter .18s ease;
}

.thumb-btn:focus .thumb-image,
.thumb-btn:hover .thumb-image {
  transform: scale(1.03);
  filter: brightness(0.95);
  outline: none;
}

.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 24px;
}

.lightbox-inner {
  position: relative;
  max-width: 1100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-image {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.6);
}

.lightbox-close {
  position: absolute;
  top: 18px;
  right: 18px;
  background: transparent;
  color: #fff;
  border: none;
  font-size: 28px;
  cursor: pointer;
}

.nav {
  background: rgba(255,255,255,0.06);
  color: #fff;
  border: none;
  font-size: 36px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 12px;
}

.nav:focus,
.lightbox-close:focus {
  outline: 2px solid #fff;
  outline-offset: 4px;
}

/* Responsive */
@media (max-width: 980px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .hero-heading {
    font-size: 30px;
  }
  .trattamenti-corpo-hero {
    height: 360px;
  }
  .thumb-image {
    height: 180px;
  }
}

@media (max-width: 768px) {
  .trattamenti-corpo-video {
    border-radius: 12px;
    margin: 1.8rem auto;
  }
}

@media (max-width: 520px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  .hero-overlay {
    width: calc(100% - 32px);
    padding: 10px 12px;
  }
  .hero-heading {
    font-size: 24px;
  }
  .thumb-image {
    height: 160px;
  }
}
</style>