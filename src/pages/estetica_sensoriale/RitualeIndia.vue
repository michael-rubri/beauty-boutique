<template>
  <ServicePage
      category="Estetica Sensoriale"
      title="Rituale India"
      subtitle="Scopri il nostro percorso personalizzato"
      :hero-image="heroImage"
      hero-alt="Rituale india"
      :gallery="gallery"
  >
    <p>
      Fermati, respira e lasciati avvolgere da un senso di meraviglia.
      Un rituale ispirato all’antica tradizione indiana del benessere, dove manualità armoniose,
      profumi speziati e texture avvolgenti trasformano il trattamento in un’esperienza
      profondamente rilassante e riequilibrante.
      Un percorso che leviga la pelle, nutre in profondità e dona una straordinaria sensazione
      di dolcezza e comfort.
      Un rituale armonizzante che leviga, nutre e avvolge i sensi, trasformando il trattamento
      in un viaggio di dolcezza, calore e profonda serenità.
      Il percorso del trattamento comprende varie fasi.
    </p>

    <p>
      <span class="treatment">Esfoliazione al Ginseng e Olio di Nocciolo</span><br>
      Un delicato lissage che leviga e ammorbidisce la pelle, lasciandola setosa e luminosa
      come un soffice sari.
    </p>

    <p>
      <span class="treatment">Avvolgimento con Mousse Calda al Thè Verde, Nero e Bianco</span><br>
      Una coccola avvolgente arricchita da preziosi infusi di spezie, che nutre, rilassa e dona
      una profonda sensazione di benessere.
    </p>

    <p>
      <span class="treatment">Massaggio con Olio di Argan, Fagottini Caldi di Riso e Spezie</span><br>
      Il calore diffuso e le manualità avvolgenti distendono le tensioni, favoriscono il
      rilassamento e riequilibrano corpo e mente.
    </p>
  </ServicePage>
</template>

<script setup lang="ts">
import ServicePage, { type GalleryItem } from '../../components/ServicePage.vue';

import heroImage from '/src/assets/estetica_sensoriale/india/IndiaIntro.jpg';
import RitualeIndiaImg1 from '/src/assets/estetica_sensoriale/india/India1.jpeg';
import RitualeIndiaImg2 from '/src/assets/estetica_sensoriale/india/India2.jpeg';
import RitualeIndiaImg3 from '/src/assets/estetica_sensoriale/india/India3.jpeg';

const gallery: GalleryItem[] = [
  { src: RitualeIndiaImg1, alt: 'Percorso 1' },
  { src: RitualeIndiaImg2, alt: 'Percorso 2' },
  { src: RitualeIndiaImg3, alt: 'Percorso 3' }
];
</script>