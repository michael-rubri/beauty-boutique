<template>
  <main class="epilazione-page" role="main">
    <section class="epilazione-hero" aria-label="Hero epilazione">
      <img
          class="hero-bg"
          :src="heroImage"
          :alt="heroAlt"
          loading="lazy"
      />
      <div class="hero-overlay" role="region" aria-label="Titolo hero">
        <h1 class="hero-heading">Epilazione</h1>
        <p class="hero-sub">Scopri un'esperienza delicata e impeccabile</p>
      </div>
    </section>

    <section class="epilazione-intro" aria-label="Introduzione epilazione">
      <div class="inner">
        <h1 class="section-service">Estetica di base</h1>
        <h2 class="section-title">Epilazione</h2>
        <p class="section-text">
          Nel nostro centro estetico l’epilazione è molto più di un semplice trattamento: è un momento di cura, delicatezza e rispetto della pelle.
          Utilizziamo solo cere di alta qualità, selezionate per garantire risultati efficaci, comfort durante il trattamento e massima tollerabilità anche per le pelli più sensibili.
          Prima di ogni epilazione prepariamo accuratamente la pelle con prodotti specifici che la detergono, la proteggono e la rendono pronta al trattamento, migliorando l’aderenza della cera e riducendo al minimo le irritazioni.
          Al termine del servizio, applichiamo fiale professionali lenitive e disarrossanti, che aiutano la pelle a riequilibrarsi rapidamente, insieme a trattamenti specifici per rallentare la ricrescita del pelo, per prolungare la sensazione di pelle liscia e curata nel tempo.<br><br>
          <span class="treatment">Cera liposolubile</span><br>
          La nostra cera liposolubile professionale è formulata per aderire perfettamente al pelo, anche il più corto, rimuovendolo in modo preciso e uniforme.
          Grazie alla sua composizione delicata, è particolarmente indicata per le pelli sensibili, riducendo il rischio di arrossamenti e irritazioni e lasciando la pelle liscia e morbida più a lungo.
          È la soluzione ideale per chi desidera un’epilazione efficace, rapida e confortevole, con risultati duraturi e una ricrescita più regolare nel tempo.<br><br>
          <span class="treatment">Cera brasiliana Bon Bon</span><br>
          Per chi cerca un’epilazione ancora più delicata, proponiamo la nostra cera brasiliana Bon Bon, un trattamento innovativo pensato per offrire il massimo comfort anche alle pelli più reattive.
          Questa speciale cera è particolarmente indicata per chi soffre di psoriasi, dermatiti o sensibilità cutanee, grazie alla sua formula elastica e a bassa temperatura che aderisce al pelo senza stressare la pelle.
          È ideale soprattutto per le zone più delicate e sensibili del corpo, dove comfort e sicurezza sono fondamentali.<br><br>
          I suoi principali benefici:<br>
          •	rimozione efficace anche dei peli più corti e resistenti<br>
          •	minore dolore durante lo strappo<br>
          •	riduzione di arrossamenti e irritazioni<br>
          •	maggiore rispetto della barriera cutanea<br>
          •	pelle liscia, morbida e idratata<br><br>
          Professionalità e attenzione alla pelle.
          Ogni trattamento viene eseguito da operatrici qualificate che valutano sempre il tipo di pelle e le esigenze individuali, scegliendo la tecnica e la cera più adatta per garantire un risultato efficace, sicuro e personalizzato.
          Per noi, l’epilazione deve essere un’esperienza piacevole, delicata e impeccabile, in grado di unire performance e rispetto assoluto della pelle in ogni fase del trattamento.
        </p>
      </div>
    </section>

    <section class="epilazione-gallery" aria-label="Galleria">
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

import heroImage from '/src/assets/epilazione/EpilazioneIntro.jpg';
const heroAlt = 'Procedura epilazione';

import Epilazione1 from '/src/assets/epilazione/Epilazione1.jpeg'
import Epilazione2 from '/src/assets/epilazione/Epilazione2.jpeg'
import Epilazione3 from '/src/assets/epilazione/Epilazione3.jpeg'
import Epilazione4 from '/src/assets/epilazione/Epilazione4.jpeg'

const gallery: GalleryItem[] = [
  { src: Epilazione1, alt: 'Epilazione 1' },
  { src: Epilazione2, alt: 'Epilazione 2' },
  { src: Epilazione3, alt: 'Epilazione 3' },
  { src: Epilazione4, alt: 'Epilazione 4' }
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
.epilazione-page {
  width: 100%;
  box-sizing: border-box;
}

/* Hero */
.epilazione-hero {
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
.epilazione-intro {
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

.treatment {
  font-family: Arapey, Georgia, "Times New Roman", serif;
  font-weight: 650;
  font-size: 18px;
  font-style: italic;
}

/* Galleria */
.epilazione-gallery {
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
  .epilazione-hero {
    height: 360px;
  }
  .thumb-image {
    height: 180px;
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