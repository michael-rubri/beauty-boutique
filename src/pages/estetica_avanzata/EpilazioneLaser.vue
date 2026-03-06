<template>
  <main class="epilazione-page" role="main">
    <section class="epilazione-hero" aria-label="Hero epilazione laser">
      <img
          class="hero-bg"
          :src="heroImage"
          :alt="heroAlt"
          loading="lazy"
      />
      <div class="hero-overlay" role="region" aria-label="Titolo hero">
        <h1 class="hero-heading">Epilazione Laser</h1>
        <p class="hero-sub">Sentiti a proprio agio con la tua pelle</p>
      </div>
    </section>

    <section class="epilazione-intro" aria-label="Introduzione epilazione laser">
      <div class="inner">
        <h1 class="section-service">Estetica Avanzata</h1>
        <h2 class="section-title">Epilazione Laser Diodo 808 nm Progressiva Permanente</h2>
        <p class="section-text">
          La depilazione non è più solo una necessità stagionale, ma un vero rituale di bellezza e benessere quotidiano. Sentirsi sempre curati, sicuri di sé e a proprio agio con la propria pelle è oggi una scelta consapevole, sempre più condivisa da donne e uomini che desiderano risultati duraturi, sicuri ed efficaci.<br><br>
          Nel nostro istituto eseguiamo trattamenti di epilazione laser a diodo 808 nm progressiva permanente con tecnologie di ultima generazione, selezionate per garantire massima precisione, sicurezza e performance elevate.<br><br>
          Utilizziamo un’apparecchiatura professionale di tecnologia avanzata 2025, progettata per offrire trattamenti altamente performanti, controllati e confortevoli, nel pieno rispetto della pelle.
          <video src="/src/assets/estetica_avanzata/epilazione_laser/EpilazioneLaser3.mp4" class="epilazione-video" aria-label="Video epilazione laser" controls autoplay muted loop playsinline></video>
          <span class="treatment">Come funziona il laser a diodo 808 nm</span><br>
          Il laser a diodo agisce attraverso una combinazione mirata di luce e calore, che colpisce selettivamente il follicolo pilifero senza danneggiare i tessuti circostanti.<br><br>
          La lunghezza d’onda di 808 nm è particolarmente efficace sulla melanina del pelo: l’energia luminosa viene assorbita e trasformata in calore, indebolendo progressivamente il follicolo fino alla sua inattivazione. Questo processo consente una riduzione graduale, duratura e visibile dei peli superflui.<br><br>
          Il trattamento è eseguito esclusivamente da operatori qualificati, formati per garantire protocolli personalizzati, sicurezza assoluta e risultati ottimali.<br><br>
          <span class="treatment">Un percorso progressivo e controllato</span><br>
          L’epilazione laser è un trattamento progressivo che richiede costanza e programmazione per rispettare il ciclo naturale di crescita del pelo.
          Per ottenere risultati efficaci e duraturi sono necessarie almeno 8 sedute, con cadenza mensile.
          Già dalle prime sedute si osserva una riduzione significativa della ricrescita, con peli più sottili, radi e deboli.<br><br>
          <span class="treatment">Perché scegliere il nostro trattamento</span><br>
          ✔ Tecnologia professionale di ultima generazione (2025)<br>
          ✔ Lunghezza d’onda 808 nm altamente efficace<br>
          ✔ Trattamenti personalizzati e sicuri<br>
          ✔ Operatori qualificati e specializzati<br>
          ✔ Metodo progressivo, duraturo e controllato<br>
          ✔ Comfort elevato durante la seduta<br><br>
          <span class="treatment">I risultati</span><br>
          Una pelle più liscia, uniforme e curata nel tempo. Meno ricrescita, meno manutenzione, più libertà.
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

const heroImage = '/src/assets/estetica_avanzata/epilazione_laser/EpilazioneLaserIntro.jpg';
const heroAlt = 'Procedura epilazione laser';

const gallery: GalleryItem[] = [
  { src: '/src/assets/estetica_avanzata/epilazione_laser/EpilazioneLaser1.jpeg', alt: 'Epilazione 1' },
  { src: '/src/assets/estetica_avanzata/epilazione_laser/EpilazioneLaser2.jpeg', alt: 'Epilazione 2' }
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

.epilazione-video {
  width: 100%;
  max-width: 360px;
  margin: 2.5rem auto;
  display: block;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  background: #fdf9f8;
}

.epilazione-video:focus {
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

@media (max-width: 768px) {
  .epilazione-video {
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