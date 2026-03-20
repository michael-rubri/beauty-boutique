<template>
  <ServicePage
      category="Estetica Sensoriale"
      title="Rituale Polinesia"
      subtitle="Scopri il nostro percorso personalizzato"
      :hero-image="heroImage"
      hero-alt="Rituale polinesia"
      :gallery="gallery"
  >
    <p>
      Sentire sulla pelle la bellezza della natura è il primo passo per purificare la mente.
      Il Rituale Polinesia è un viaggio sensoriale ispirato alle isole tropicali, dove profumi
      avvolgenti, texture nutrienti e manualità rilassanti si fondono per donare al corpo
      leggerezza, idratazione profonda e armonia.
      Un trattamento che drena, nutre e rigenera, lasciando la pelle morbida, luminosa e
      delicatamente profumata.
      Un rituale che nutre, drena e riequilibra, trasformando il trattamento in un’esperienza
      immersiva tra profumi esotici, calore avvolgente e profondo relax.
      Il percorso del trattamento comprende varie fasi.
    </p>

    <p>
      <span class="treatment">Scrub con Acqua di Mare</span><br>
      Un’esfoliazione naturale che sfrutta la salinità dell’acqua marina per creare un effetto
      osmotico, favorendo il drenaggio dei liquidi in eccesso e stimolando il rinnovamento
      cutaneo. La pelle appare subito più liscia e vitale.
    </p>

    <p>
      <span class="treatment">Impacco al Cocco e Olio Polinesiano</span><br>
      Un momento intensamente nutriente e sensoriale. Le proprietà emollienti del cocco, unite
      agli oli polinesiani, avvolgono la pelle in un abbraccio tropicale, lasciandola setosa,
      elastica e delicatamente profumata.
    </p>

    <p>
      <span class="treatment">Massaggio Drenante con Conchiglie Calde</span><br>
      Il calore delle conchiglie, unito a manualità fluide e avvolgenti, favorisce il
      rilassamento profondo, stimola la circolazione e aiuta a riattivare il drenaggio,
      regalando una sensazione di leggerezza e benessere totale.
    </p>
  </ServicePage>
</template>

<script setup lang="ts">
import ServicePage, { type GalleryItem } from '../../components/ServicePage.vue';

import heroImage from '/src/assets/estetica_sensoriale/polinesia/PolinesiaIntro2.jpg';
import RitualePolinesiaImg1 from '/src/assets/estetica_sensoriale/polinesia/Polinesia1.jpeg';
import RitualePolinesiaImg2 from '/src/assets/estetica_sensoriale/polinesia/Polinesia2.jpeg';
import RitualePolinesiaImg3 from '/src/assets/estetica_sensoriale/polinesia/Polinesia3.jpeg';

const gallery: GalleryItem[] = [
  { src: RitualePolinesiaImg1, alt: 'Percorso 1' },
  { src: RitualePolinesiaImg2, alt: 'Percorso 2' },
  { src: RitualePolinesiaImg3, alt: 'Percorso 3' }
];
</script>