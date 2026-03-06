<template>
  <main class="trattamenti-viso-page" role="main">
    <section class="trattamenti-viso-hero" aria-label="Hero trattamenti viso">
      <img
          class="hero-bg"
          :src="heroImage"
          :alt="heroAlt"
          loading="lazy"
      />
      <div class="hero-overlay" role="region" aria-label="Titolo hero">
        <h1 class="hero-heading">Trattamenti Viso Avanzati</h1>
        <p class="hero-sub">Rispondiamo alle esigenze specifiche di ogni viso</p>
      </div>
    </section>

    <section class="trattamenti-viso-intro" aria-label="Introduzione trattamenti viso">
      <div class="inner">
        <h1 class="section-service">Estetica Avanzata</h1>
        <h2 class="section-title">Trattamenti Viso Avanzati</h2>
        <p class="section-text">
          Oggi prendersi cura della pelle del viso significa molto più di una semplice pulizia. Significa analizzare, comprendere e trattare in modo mirato ogni esigenza cutanea, con protocolli personalizzati e tecnologie avanzate.<br><br>
          Nel nostro istituto trasformiamo la classica pulizia del viso in un vero e proprio trattamento di estetica specifica e avanzata, progettato per migliorare visibilmente la qualità della pelle e riequilibrare le sue funzioni naturali.<br><br>
          Lavoriamo con cosmetica funzionale ad alta performance e con tecnologie professionali che agiscono in sinergia per risultati concreti, progressivi e duraturi.
          <video src="/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati13.mp4" class="trattamenti-viso-video" aria-label="Video trattamenti viso" controls autoplay muted loop playsinline></video>
          <span class="treatment">Tecnologie e metodologie avanzate</span><br>
          Ogni trattamento nasce da un’attenta analisi della pelle, che ci permette di creare protocolli completamente personalizzati. Utilizziamo strumenti professionali di ultima generazione per agire in profondità e in modo mirato su ogni inestetismo.<br><br>
          I nostri trattamenti integrano:<br>
          ✔ Analizzatore professionale della pelle per una diagnosi precisa<br>
          ✔ Cosmetica funzionale e attivi specifici ad alta concentrazione<br>
          ✔ Acidi mirati per il rinnovamento cutaneo controllato<br>
          ✔ Radiofrequenza bipolare per stimolare tono e compattezza<br>
          ✔ Elettroporazione per veicolare i principi attivi in profondità<br>
          ✔ Ultrasuoni per ossigenare, drenare e rigenerare i tessuti<br>
          ✔ Vacuum Idroclean per una pulizia profonda e delicata<br>
          ✔ Alta frequenza per riequilibrare e purificare la pelle<br><br>
          L’integrazione di queste tecnologie permette di lavorare in modo completo, efficace e non invasivo, rispettando la fisiologia cutanea e stimolando i naturali processi di rigenerazione.<br><br>
          <span class="treatment">Trattamenti realmente personalizzati</span><br>
          Ogni pelle è unica, per questo ogni protocollo viene studiato su misura per rispondere alle esigenze specifiche del viso e ottenere risultati visibili e progressivi.<br><br>
          Interveniamo in modo mirato su:<br>
          ✔ Pelle secca e disidratata<br>
          ✔ Pelle ispessita e asfittica<br>
          ✔ Rughe e segni del tempo<br>
          ✔ Macchie cutanee e discromie<br>
          ✔ Acne e impurità<br>
          ✔ Couperose e pelle sensibile<br>
          ✔ Perdita di tono e cedimenti<br>
          ✔ Pelle spenta e stressata<br><br>
          <span class="treatment">Un approccio professionale completo</span><br>
          La nostra filosofia di lavoro si basa sulla sinergia tra conoscenza, tecnologia e personalizzazione. Ogni trattamento è progettato per migliorare la qualità della pelle in modo reale, progressivo e misurabile nel tempo.
          Non eseguiamo semplici trattamenti standardizzati, ma percorsi viso mirati, costruiti con precisione e competenza per accompagnare la pelle verso il suo equilibrio ottimale.<br><br>
          <span class="treatment">Il risultato</span><br>
          Una pelle più sana, luminosa, uniforme e tonica.
          Un miglioramento visibile della qualità cutanea.
          Un trattamento che va oltre la superficie e lavora davvero sulla funzionalità della pelle.
        </p>
      </div>
    </section>

    <section class="trattamenti-viso-gallery" aria-label="Galleria">
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

import heroImage from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzatiIntro.jpg';
const heroAlt = 'Procedura trattamenti viso avanzati';

import TrattamentiVisoAvanzati1 from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati1.jpeg'
import TrattamentiVisoAvanzati2 from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati2.jpeg'
import TrattamentiVisoAvanzati3 from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati3.jpeg'
import TrattamentiVisoAvanzati4 from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati4.jpeg'
import TrattamentiVisoAvanzati5 from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati5.jpeg'
import TrattamentiVisoAvanzati6 from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati6.jpeg'
import TrattamentiVisoAvanzati7 from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati7.jpeg'
import TrattamentiVisoAvanzati8 from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati8.jpeg'
import TrattamentiVisoAvanzati9 from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati9.jpeg'
import TrattamentiVisoAvanzati10 from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati10.jpeg'
import TrattamentiVisoAvanzati11 from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati11.jpeg'

const gallery: GalleryItem[] = [
  { src: TrattamentiVisoAvanzati1, alt: 'Trattamento 1' },
  { src: TrattamentiVisoAvanzati2, alt: 'Trattamento 2' },
  { src: TrattamentiVisoAvanzati3, alt: 'Trattamento 3' },
  { src: TrattamentiVisoAvanzati4, alt: 'Trattamento 4' },
  { src: TrattamentiVisoAvanzati5, alt: 'Trattamento 5' },
  { src: TrattamentiVisoAvanzati6, alt: 'Trattamento 6' },
  { src: TrattamentiVisoAvanzati7, alt: 'Trattamento 7' },
  { src: TrattamentiVisoAvanzati8, alt: 'Trattamento 8' },
  { src: TrattamentiVisoAvanzati9, alt: 'Trattamento 9' },
  { src: TrattamentiVisoAvanzati10, alt: 'Trattamento 10' },
  { src: TrattamentiVisoAvanzati11, alt: 'Trattamento 11' }
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
.trattamenti-viso-page {
  width: 100%;
  box-sizing: border-box;
}

/* Hero */
.trattamenti-viso-hero {
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
.trattamenti-viso-intro {
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

.trattamenti-viso-video {
  width: 100%;
  max-width: 360px;
  margin: 2.5rem auto;
  display: block;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  background: #fdf9f8;
}

.trattamenti-viso-video:focus {
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
.trattamenti-viso-gallery {
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
  .trattamenti-viso-hero {
    height: 360px;
  }
  .thumb-image {
    height: 180px;
  }
}

@media (max-width: 768px) {
  .trattamenti-viso-video {
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