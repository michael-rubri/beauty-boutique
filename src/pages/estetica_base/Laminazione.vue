<template>
  <ServicePage
      category="Estetica di base"
      title="Laminazione"
      subtitle="Per chi desidera uno sguardo perfetto"
      :hero-image="heroImage"
      hero-alt="Strumenti laminazione"
      :gallery="gallery"
  >
    <h2 class="section-title">Laminazione Ciglia</h2>
    <p>
      La laminazione ciglia è un trattamento nutriente e curativo che solleva, incurva e rinforza le ciglia naturali, donando un effetto più aperto e luminoso allo sguardo.
      Grazie a specifici attivi ristrutturanti, le ciglia appaiono più sane, elastiche e visibilmente più lunghe. Il risultato è naturale ma d’impatto, perfetto per chi desidera uno sguardo definito ogni giorno senza mascara.
      La durata del risultato è generalmente di 6–8 settimane, variabile in base al ciclo naturale delle ciglia.
      <br><br>
      Benefici:<br>
      • Ciglia visibilmente più lunghe e incurvate<br>
      • Effetto naturale e duraturo<br>
      • Nutrimento e rinforzo della struttura del pelo<br>
      • Sguardo più aperto e luminoso<br>
    </p>

    <h2 class="section-title">Laminazione Sopracciglia</h2>
    <p>
      La laminazione sopracciglia disciplina, ridefinisce e valorizza la forma naturale delle sopracciglia, rendendole più ordinate, piene e armoniose.
      È il trattamento perfetto per sopracciglia ribelli, sottili o irregolari, perché permette di modellarle e fissarle nella posizione ideale, creando un effetto curato ma estremamente naturale.
      Il risultato dura mediamente 4–6 settimane.
      <br><br>
      Benefici:<br>
      • Sopracciglia più piene e definite<br>
      • Forma ordinata e armoniosa<br>
      • Effetto lifting naturale dello sguardo<br>
      • Risultato personalizzato in base al viso<br>
    </p>
  </ServicePage>
</template>

<script setup lang="ts">
import ServicePage, { type GalleryItem } from '../../components/ServicePage.vue';

import heroImage from '/src/assets/laminazione/LaminazioneIntro2.jpg';

import Laminazione1 from '/src/assets/laminazione/Laminazione1.jpeg';
import Laminazione2 from '/src/assets/laminazione/Laminazione2.jpeg';
import Laminazione3 from '/src/assets/laminazione/Laminazione3.jpeg';
import Laminazione4 from '/src/assets/laminazione/Laminazione4.jpeg';
import Laminazione5 from '/src/assets/laminazione/Laminazione5.jpeg';
import Laminazione6 from '/src/assets/laminazione/Laminazione6.jpeg';

const gallery: GalleryItem[] = [
  { src: Laminazione1, alt: 'Laminazione 1' },
  { src: Laminazione2, alt: 'Laminazione 2' },
  { src: Laminazione3, alt: 'Laminazione 3' },
  { src: Laminazione4, alt: 'Laminazione 4' },
  { src: Laminazione5, alt: 'Laminazione 5' },
  { src: Laminazione6, alt: 'Laminazione 6' }
];
</script>

<style scoped>
.section-title {
  margin: 20px auto 12px;
  font-size: 35px;
  font-weight: 500;
  font-family: Arapey, Georgia, "Times New Roman", serif;
  color: #111;
  display: block;
}

@media (max-width: 520px) {
  :deep(.mobile-carousel) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  :deep(.mobile-frame) {
    width: min(100%, 360px);
    aspect-ratio: 1 / 1;
    height: auto;
    overflow: hidden;
    border-radius: 10px;
    background: #f7f3f0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  :deep(.mobile-image) {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
    display: block;
  }
}
</style>