<template>
  <main class="massaggi-page" role="main">
    <section class="massaggi-hero" aria-label="Hero massaggi">
      <img
          class="hero-bg"
          :src="heroImage"
          :alt="heroAlt"
          loading="lazy"
      />
      <div class="hero-overlay" role="region" aria-label="Titolo hero">
        <h1 class="hero-heading">Massaggi</h1>
        <p class="hero-sub">Riequilibra corpo e mente</p>
      </div>
    </section>

    <section class="massaggi-intro" aria-label="Introduzione massaggi">
      <div class="inner">
        <h1 class="section-service">Estetica di base</h1>
        <h2 class="section-title">Massaggi</h2>
        <p class="section-text">
          I nostri massaggi sono pensati per regalare benessere profondo, riequilibrio del corpo e relax mentale.
          Ogni trattamento viene personalizzato in base alle esigenze individuali, con manualità professionali e tecniche specifiche per ottenere il massimo beneficio, sia a livello muscolare che energetico.<br><br>
          <span class="treatment">Massaggio Relax</span><br>
          Un trattamento distensivo e avvolgente che aiuta a sciogliere le tensioni accumulate, ridurre lo stress e favorire il rilassamento psicofisico.
          Movimenti lenti e armoniosi migliorano la circolazione, donando una piacevole sensazione di leggerezza e benessere generale.<br><br>
          <span class="treatment">Massaggio Decontratturante</span><br>
          Ideale per chi soffre di tensioni muscolari, rigidità o dolori localizzati.
          Attraverso manualità profonde e mirate, aiuta a sciogliere le contratture, migliorare la mobilità e ridurre il dolore muscolare, soprattutto nelle zone più sollecitate come schiena, cervicale e spalle.<br><br>
          <span class="treatment">Massaggio Svedese</span><br>
          Tecnica classica che combina movimenti energici e rilassanti per stimolare la circolazione sanguigna e ossigenare i tessuti.
          Favorisce il rilassamento muscolare, migliora il tono generale del corpo e dona una sensazione di equilibrio e vitalità.<br><br>
          <span class="treatment">Massaggio Hawaiano Lomi Lomi</span><br>
          Un massaggio fluido, ritmico e profondamente avvolgente, ispirato alle antiche tradizioni hawaiane.
          Eseguito con movimenti ampi e continui, spesso con l’uso degli avambracci, aiuta a sciogliere blocchi fisici ed emotivi, favorendo un profondo stato di armonia e rigenerazione.<br><br>
          <span class="treatment">Massaggio Linfodrenante</span><br>
          Tecnica delicata e ritmica che stimola il sistema linfatico, favorendo il drenaggio dei liquidi in eccesso.
          Ideale per contrastare gonfiore, ritenzione idrica e pesantezza, migliorando la circolazione e donando una sensazione di leggerezza e benessere diffuso.<br><br>
          <span class="treatment">Massaggio Connettivale</span><br>
          Un trattamento profondo che agisce sui tessuti connettivi, migliorando elasticità e tonicità della pelle.
          Particolarmente indicato per stimolare la circolazione, riattivare i tessuti e favorire il rimodellamento corporeo.<br><br>
          <span class="treatment">Massaggio con Candela Calda</span><br>
          Un’esperienza sensoriale unica e profondamente rilassante.
          La candela si trasforma in un caldo olio nutriente che viene versato sulla pelle e massaggiato con movimenti lenti e avvolgenti, idratando in profondità e regalando una sensazione di comfort e relax totale.<br><br>
          <span class="treatment">Massaggio con Pietre Calde</span><br>
          Trattamento distensivo che utilizza pietre laviche riscaldate per trasmettere calore in profondità.
          Aiuta a rilassare la muscolatura, migliorare la circolazione e sciogliere tensioni profonde, favorendo un intenso stato di benessere.<br><br>
          <span class="treatment">Maderoterapia</span><br>
          Tecnica di massaggio che utilizza strumenti in legno di diverse forme per stimolare i tessuti in profondità.
          Favorisce la circolazione, aiuta a ridurre la ritenzione idrica e contribuisce al rimodellamento del corpo, migliorando la tonicità e l’aspetto della pelle.
        </p>
      </div>
    </section>

    <section class="massaggi-gallery" aria-label="Galleria">
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

const heroImage = '/src/assets/massaggi/MassaggiIntro.jpeg';
const heroAlt = 'Sala massaggi';

const gallery: GalleryItem[] = [
  { src: '/src/assets/massaggi/Massaggi1.jpeg', alt: 'Massaggio 1' },
  { src: '/src/assets/massaggi/Massaggi2.jpeg', alt: 'Massaggio 2' },
  { src: '/src/assets/massaggi/Massaggi3.jpeg', alt: 'Massaggio 3' },
  { src: '/src/assets/massaggi/Massaggi4.jpeg', alt: 'Massaggio 4' },
  { src: '/src/assets/massaggi/Massaggi5.jpeg', alt: 'Massaggio 5' },
  { src: '/src/assets/massaggi/Massaggi6.jpeg', alt: 'Massaggio 6' },
  { src: '/src/assets/massaggi/Massaggi7.jpeg', alt: 'Massaggio 7' },
  { src: '/src/assets/massaggi/Massaggi8.jpeg', alt: 'Massaggio 8' },
  { src: '/src/assets/massaggi/Massaggi9.jpeg', alt: 'Massaggio 9' },
  { src: '/src/assets/massaggi/Massaggi10.jpeg', alt: 'Massaggio 10' }
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
.massaggi-page {
  width: 100%;
  box-sizing: border-box;
}

/* Hero */
.massaggi-hero {
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
.massaggi-intro {
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
.massaggi-gallery {
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

/* Lightbox */
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
  .massaggi-hero {
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