<template>
  <ServicePage
      category="Estetica Sensoriale"
      title="Rituale Marocco"
      subtitle="Scopri il nostro percorso personalizzato"
      :hero-image="heroImage"
      hero-alt="Rituale marocco"
      :gallery="gallery"
  >
    <p>
      Un viaggio straordinario dei sensi, una celebrazione dei rituali millenari della tradizione marocchina,
      dove il benessere nasce dalla purificazione profonda del corpo e della mente.
      Ispirato all’antico rituale dell’hammam, questo trattamento purifica, detossina e rinnova la pelle,
      lasciandola incredibilmente morbida, luminosa e rigenerata.
      Un rituale di purificazione intensa che rinnova la pelle e ristabilisce l’armonia del corpo,
      avvolgendo i sensi in un’atmosfera calda e rigenerante.
      Il percorso del trattamento prevede varie fasi.
    </p>

    <p>
      <span class="treatment">Brushing con Spazzole e Acqua di Mare Osmotica</span><br>
      Stimola la circolazione, riattiva il metabolismo cutaneo e prepara la pelle ai trattamenti successivi.
    </p>

    <p>
      <span class="treatment">Esfoliazione con Sapone Nero all’Eucalipto e Guanto Kessa</span><br>
      Un gesto tradizionale purificante che elimina le cellule morte, libera la pelle dalle impurità
      e favorisce il rinnovamento cutaneo.
    </p>

    <p>
      <span class="treatment">Avvolgimento con Argilla Millenaria Detossinante</span><br>
      Ricca di minerali, l’argilla purifica in profondità, assorbe le tossine e riequilibra la pelle.
    </p>

    <p>
      <span class="treatment">Massaggio con Olio Caldo di Argan</span><br>
      Un tocco finale nutriente e avvolgente che dona elasticità, morbidezza e profondo relax.
    </p>
  </ServicePage>
</template>

<script setup lang="ts">
import ServicePage, { type GalleryItem } from '../../components/ServicePage.vue';

import heroImage from '/src/assets/estetica_sensoriale/marocco/MaroccoIntro.jpg';
import RitualeMaroccoImg1 from '/src/assets/estetica_sensoriale/marocco/Marocco1.jpeg';
import RitualeMaroccoImg2 from '/src/assets/estetica_sensoriale/marocco/Marocco2.jpeg';
import RitualeMaroccoImg3 from '/src/assets/estetica_sensoriale/marocco/Marocco3.jpeg';

const gallery: GalleryItem[] = [
  { src: RitualeMaroccoImg1, alt: 'Percorso 1' },
  { src: RitualeMaroccoImg2, alt: 'Percorso 2' },
  { src: RitualeMaroccoImg3, alt: 'Percorso 3' }
];
</script>