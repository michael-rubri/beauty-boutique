<!--
<template>
  <main class="beauty-center-page">
    <section class="beauty-center-hero" aria-label="Hero beauty center">
      <img
          class="hero-bg"
          :src="heroImage"
          :alt="heroAlt"
          loading="lazy"
      />
      <div class="hero-overlay" role="region" aria-label="Titolo hero">
        <h1 class="hero-heading">Il centro</h1>
        <p class="hero-sub">Beauty Boutique by Elisa</p>
      </div>
    </section>

    <section class="beauty-center-gallery" aria-label="Galleria">
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

import heroImage from '/src/assets/beauty_center/BeautyBoutiqueIntro.jpeg';
const heroAlt = 'Introduzione centro estetico';

type GalleryItem = { src: string; alt: string; }

import BeautyBoutique1 from '/src/assets/beauty_center/BeautyBoutique1.jpeg'
import BeautyBoutique2 from '/src/assets/beauty_center/BeautyBoutique2.jpeg'
import BeautyBoutique3 from '/src/assets/beauty_center/BeautyBoutique3.jpeg'
import BeautyBoutique4 from '/src/assets/beauty_center/BeautyBoutique4.jpeg'
import BeautyBoutique5 from '/src/assets/beauty_center/BeautyBoutique5.jpeg'
import BeautyBoutique6 from '/src/assets/beauty_center/BeautyBoutique6.jpeg'
import BeautyBoutique7 from '/src/assets/beauty_center/BeautyBoutique7.jpeg'
import BeautyBoutique8 from '/src/assets/beauty_center/BeautyBoutique8.jpeg'
import BeautyBoutique9 from '/src/assets/beauty_center/BeautyBoutique9.jpeg'
import BeautyBoutique10 from '/src/assets/beauty_center/BeautyBoutique10.jpeg'

const gallery: GalleryItem[] = [
  { src: BeautyBoutique1, alt: 'Beauty center 1' },
  { src: BeautyBoutique2, alt: 'Beauty center 2' },
  { src: BeautyBoutique3, alt: 'Beauty center 3' },
  { src: BeautyBoutique4, alt: 'Beauty center 4' },
  { src: BeautyBoutique5, alt: 'Beauty center 5' },
  { src: BeautyBoutique6, alt: 'Beauty center 6' },
  { src: BeautyBoutique7, alt: 'Beauty center 7' },
  { src: BeautyBoutique8, alt: 'Beauty center 8' },
  { src: BeautyBoutique9, alt: 'Beauty center 9' },
  { src: BeautyBoutique10, alt: 'Beauty center 10' }
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
.beauty-center-page {
  width: 100%;
  box-sizing: border-box;
}

/* Hero */
.beauty-center-hero {
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
  font-weight: 750;
  font-family: Poppins, Helvetica, Arial, Lucida, sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Galleria */
.beauty-center-gallery {
  margin: 60px 14px 20px;
}

.gallery-title {
  margin: 0 0 35px;
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
  .beauty-center-hero {
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
-->

<template>
  <main class="beauty-center-page">
    <section class="beauty-center-hero" aria-label="Hero beauty center">
      <img
          class="hero-bg"
          :src="heroImage"
          :alt="heroAlt"
      />
      <div class="hero-overlay" role="region" aria-label="Titolo hero">
        <h1 class="hero-heading">Il centro</h1>
        <p class="hero-sub">Beauty Boutique by Elisa</p>
      </div>
    </section>

    <section class="beauty-center-gallery" aria-label="Galleria">
      <div class="inner">
        <h3 class="gallery-title">Galleria</h3>

        <!-- Desktop / Tablet -->
        <div
            v-if="!isMobile"
            class="gallery-grid"
            role="list"
        >
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

        <!-- Mobile -->
        <div
            v-else
            class="mobile-carousel"
            aria-label="Galleria mobile"
        >
          <div
              class="mobile-frame"
              @touchstart="onTouchStart"
              @touchmove="onTouchMove"
              @touchend="onTouchEnd"
          >
            <img
                v-if="currentMobile"
                :src="currentMobile.src"
                :alt="currentMobile.alt"
                class="mobile-image"
                loading="lazy"
            />
          </div>

          <div class="mobile-dots" aria-label="Indicatori immagini">
            <button
                v-for="(img, idx) in gallery"
                :key="img.src"
                class="dot"
                :class="{ active: idx === mobileIndex }"
                :aria-label="`Vai all'immagine ${idx + 1}`"
                :aria-current="idx === mobileIndex ? 'true' : 'false'"
                @click="goToMobileImage(idx)"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox solo desktop/tablet -->
    <div
        v-if="lightboxOpen && !isMobile"
        class="lightbox"
        role="dialog"
        aria-modal="true"
        :aria-label="`Immagine ${currentIndex + 1} di ${gallery.length}`"
        @click.self="closeLightbox"
    >
      <button
          ref="closeButtonRef"
          class="lightbox-close"
          @click="closeLightbox"
          aria-label="Chiudi"
      >
        ×
      </button>

      <div class="lightbox-inner">
        <button
            class="nav prev"
            @click.stop="prevImage"
            aria-label="Immagine precedente"
        >
          ‹
        </button>

        <img
            v-if="current"
            :src="current.src"
            :alt="current.alt"
            class="lightbox-image"
        />

        <button
            class="nav next"
            @click.stop="nextImage"
            aria-label="Immagine successiva"
        >
          ›
        </button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue';

import heroImage from '/src/assets/beauty_center/BeautyBoutiqueIntro.jpeg';
const heroAlt = 'Introduzione centro estetico';

type GalleryItem = { src: string; alt: string };

import BeautyBoutique1 from '/src/assets/beauty_center/BeautyBoutique1.jpeg';
import BeautyBoutique2 from '/src/assets/beauty_center/BeautyBoutique2.jpeg';
import BeautyBoutique3 from '/src/assets/beauty_center/BeautyBoutique3.jpeg';
import BeautyBoutique4 from '/src/assets/beauty_center/BeautyBoutique4.jpeg';
import BeautyBoutique5 from '/src/assets/beauty_center/BeautyBoutique5.jpeg';
import BeautyBoutique6 from '/src/assets/beauty_center/BeautyBoutique6.jpeg';
import BeautyBoutique7 from '/src/assets/beauty_center/BeautyBoutique7.jpeg';
import BeautyBoutique8 from '/src/assets/beauty_center/BeautyBoutique8.jpeg';
import BeautyBoutique9 from '/src/assets/beauty_center/BeautyBoutique9.jpeg';
import BeautyBoutique10 from '/src/assets/beauty_center/BeautyBoutique10.jpeg';

const gallery: GalleryItem[] = [
  { src: BeautyBoutique1, alt: 'Beauty center 1' },
  { src: BeautyBoutique2, alt: 'Beauty center 2' },
  { src: BeautyBoutique3, alt: 'Beauty center 3' },
  { src: BeautyBoutique4, alt: 'Beauty center 4' },
  { src: BeautyBoutique5, alt: 'Beauty center 5' },
  { src: BeautyBoutique6, alt: 'Beauty center 6' },
  { src: BeautyBoutique7, alt: 'Beauty center 7' },
  { src: BeautyBoutique8, alt: 'Beauty center 8' },
  { src: BeautyBoutique9, alt: 'Beauty center 9' },
  { src: BeautyBoutique10, alt: 'Beauty center 10' }
];

/* Desktop lightbox */
const lightboxOpen = ref(false);
const currentIndex = ref(0);
const closeButtonRef = ref<HTMLButtonElement | null>(null);

const current = computed(() => {
  const idx = Math.max(0, Math.min(currentIndex.value, gallery.length - 1));
  return gallery[idx] ?? null;
});

function openLightbox(index: number) {
  if (isMobile.value) return;
  currentIndex.value = index;
  lightboxOpen.value = true;
  lockScroll();

  nextTick(() => {
    closeButtonRef.value?.focus();
  });
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
  if (!lightboxOpen.value || isMobile.value) return;

  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'ArrowRight') nextImage();
}

/* Mobile carousel */
const isMobile = ref(false);
const mobileIndex = ref(0);
let autoplay: number | null = null;

const currentMobile = computed(() => {
  const idx = Math.max(0, Math.min(mobileIndex.value, gallery.length - 1));
  return gallery[idx] ?? null;
});

const touchStartX = ref<number | null>(null);
const touchCurrentX = ref<number | null>(null);
const swipeThreshold = 50;

function updateIsMobile() {
  isMobile.value = window.innerWidth <= 520;

  if (isMobile.value) {
    closeLightbox();
    startAutoplay();
  } else {
    stopAutoplay();
  }
}

function goToMobileImage(index: number) {
  mobileIndex.value = index;
  restartAutoplay();
}

function prevMobileImage() {
  mobileIndex.value = (mobileIndex.value - 1 + gallery.length) % gallery.length;
}

function nextMobileImage() {
  mobileIndex.value = (mobileIndex.value + 1) % gallery.length;
}

function startAutoplay() {
  if (!isMobile.value) return;
  stopAutoplay();

  autoplay = window.setInterval(() => {
    nextMobileImage();
  }, 3000);
}

function stopAutoplay() {
  if (autoplay !== null) {
    clearInterval(autoplay);
    autoplay = null;
  }
}

function restartAutoplay() {
  stopAutoplay();
  startAutoplay();
}

function handleVisibilityChange() {
  if (!isMobile.value) return;

  if (document.hidden) {
    stopAutoplay();
  } else {
    startAutoplay();
  }
}

function onTouchStart(e: TouchEvent) {
  if (!isMobile.value) return;
  touchStartX.value = e.touches[0]?.clientX ?? null;
  touchCurrentX.value = null;
}

function onTouchMove(e: TouchEvent) {
  if (!isMobile.value || touchStartX.value === null) return;
  touchCurrentX.value = e.touches[0]?.clientX ?? null;
}

function onTouchEnd() {
  if (!isMobile.value || touchStartX.value === null || touchCurrentX.value === null) {
    touchStartX.value = null;
    touchCurrentX.value = null;
    return;
  }

  const deltaX = touchStartX.value - touchCurrentX.value;

  if (Math.abs(deltaX) >= swipeThreshold) {
    if (deltaX > 0) {
      nextMobileImage();
    } else {
      prevMobileImage();
    }
    restartAutoplay();
  }

  touchStartX.value = null;
  touchCurrentX.value = null;
}

/* Scroll lock */
function lockScroll() {
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
}

function unlockScroll() {
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
}

onMounted(() => {
  window.addEventListener('keydown', onKey);
  window.addEventListener('resize', updateIsMobile);
  document.addEventListener('visibilitychange', handleVisibilityChange);
  updateIsMobile();
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey);
  window.removeEventListener('resize', updateIsMobile);
  document.removeEventListener('visibilitychange', handleVisibilityChange);
  stopAutoplay();
  unlockScroll();
});
</script>

<style scoped>
.beauty-center-page {
  width: 100%;
  box-sizing: border-box;
}

/* Hero */
.beauty-center-hero {
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-shadow: 0 6px 18px rgba(0, 0, 0, 0.45);
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
  font-weight: 750;
  font-family: Poppins, Helvetica, Arial, Lucida, sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Galleria */
.beauty-center-gallery {
  margin: 60px 14px 20px;
}

.gallery-title {
  margin: 0 0 35px;
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
  transition: transform 0.18s ease, filter 0.18s ease;
}

.thumb-btn:focus .thumb-image,
.thumb-btn:hover .thumb-image {
  transform: scale(1.03);
  filter: brightness(0.95);
  outline: none;
}

/* Mobile carousel */
.mobile-carousel {
  width: 100%;
}

.mobile-frame {
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  touch-action: pan-y;
}

.mobile-image {
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;
}

.mobile-dots {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}

.dot {
  width: 9px;
  height: 9px;
  border: none;
  border-radius: 50%;
  background: #d7c3b7;
  cursor: pointer;
  padding: 0;
  transition: transform 0.18s ease, opacity 0.18s ease;
}

.dot.active {
  background: #b8937f;
  transform: scale(1.15);
}

.dot:focus {
  outline: 2px solid #b8937f;
  outline-offset: 3px;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
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
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
}

.lightbox-close {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  background: transparent;
  color: #fff;
  border: none;
  font-size: 28px;
  cursor: pointer;
}

.nav {
  background: rgba(255, 255, 255, 0.06);
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

  .beauty-center-hero {
    height: 360px;
  }

  .thumb-image {
    height: 180px;
  }
}

@media (max-width: 520px) {
  .hero-overlay {
    width: calc(100% - 32px);
    padding: 10px 12px;
  }

  .hero-heading {
    font-size: 24px;
  }

  .mobile-image {
    height: 220px;
  }
}
</style>