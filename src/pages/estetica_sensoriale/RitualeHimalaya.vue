<template>
  <ServicePage
      category="Estetica Sensoriale"
      title="Rituale Himalaya"
      subtitle="Scopri il nostro percorso personalizzato"
      :hero-image="heroImage"
      hero-alt="Rituale himalaya"
      :gallery="gallery"
  >
    <p>
      Quando si viaggia con il corpo e con la mente, il cuore si sintonizza sulla quiete che la natura ispira,
      regalando emozioni profonde e un senso di totale rigenerazione.
      Ispirato alla purezza e alla forza energetica delle montagne himalayane, questo rituale è studiato per
      detossinare, drenare e alleggerire il corpo, favorendo una profonda sensazione di benessere e rinnovamento.
      Un rituale che purifica, alleggerisce e riequilibra, trasformando il trattamento in un vero viaggio sensoriale
      tra energia, calore e profondo relax.
      Il percorso del trattamento comprende varie fasi.
    </p>

    <p>
      <span class="treatment">Salt Therapy</span><br>
      Un’esperienza purificante che sfrutta le proprietà del sale rosa dell’Himalaya, ricco di minerali preziosi,
      per riequilibrare e rivitalizzare la pelle.
    </p>

    <p>
      <span class="treatment">Scrub al Sale Rosa dell’Himalaya</span><br>
      Esfoliazione profonda che aiuta a detossinare, stimolare la microcircolazione e favorire il drenaggio dei
      liquidi in eccesso, lasciando la pelle liscia e luminosa.
    </p>

    <p>
      <span class="treatment">Posa con Oli Essenziali Decongestionanti</span><br>
      Un momento di pausa rigenerante, in cui gli oli essenziali lavorano in profondità per liberare, distendere
      e riequilibrare il corpo.
    </p>

    <p>
      <span class="treatment">Massaggio con Olio Wakame e Pietre Calde al Sale Rosa</span><br>
      Manualità avvolgenti unite al calore delle pietre di sale rosa favoriscono il rilassamento muscolare,
      la riattivazione energetica e un’intensa sensazione di benessere globale.
    </p>
  </ServicePage>
</template>

<script setup lang="ts">
import ServicePage, { type GalleryItem } from '../../components/ServicePage.vue';

import heroImage from '/src/assets/estetica_sensoriale/himalaya/HimalayaIntro.jpeg';
import RitualeHimalayaImg1 from '/src/assets/estetica_sensoriale/himalaya/Himalaya1.jpeg';
import RitualeHimalayaImg2 from '/src/assets/estetica_sensoriale/himalaya/Himalaya2.jpeg';
import RitualeHimalayaImg3 from '/src/assets/estetica_sensoriale/himalaya/Himalaya3.jpeg';

const gallery: GalleryItem[] = [
  { src: RitualeHimalayaImg1, alt: 'Percorso 1' },
  { src: RitualeHimalayaImg2, alt: 'Percorso 2' },
  { src: RitualeHimalayaImg3, alt: 'Percorso 3' }
];
</script>