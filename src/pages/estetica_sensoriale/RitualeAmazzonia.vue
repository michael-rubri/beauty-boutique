<template>
  <ServicePage
      category="Estetica Sensoriale"
      title="Rituale Amazzonia"
      subtitle="Scopri il nostro percorso personalizzato"
      :hero-image="heroImage"
      hero-alt="Rituale amazzonia"
      :gallery="gallery"
  >
    <p>
      Rilassati, raccogliti, allontana da te ogni altro pensiero.
      Lascia che il mondo intorno a te sfumi dolcemente, mentre corpo e mente si immergono
      in un’esperienza intensa, avvolgente e rigenerante.
      Ispirato all’energia primordiale della foresta amazzonica, questo rituale stimola,
      tonifica e restituisce elasticità alla pelle, risvegliando vitalità e benessere profondo
      attraverso profumi caldi e manualità distensive.
      Un rituale energizzante e avvolgente, che tonifica il corpo, migliora l’elasticità
      della pelle e trasporta i sensi nel cuore pulsante della natura.
      Il percorso del trattamento prevede varie fasi.
    </p>

    <p>
      <span class="treatment">Esfoliazione agli Agrumi e Oli Essenziali</span><br>
      Una delicata esfoliazione che rinnova la pelle, stimola la microcircolazione e dona
      una piacevole sensazione di freschezza e vitalità, preparando il corpo ai trattamenti successivi.
    </p>

    <p>
      <span class="treatment">Impacco Caldo al Cacao Amaro e Peperoncino</span><br>
      Un avvolgimento intensamente stimolante ed elasticizzante. Il cacao nutre in profondità
      mentre il peperoncino favorisce l’attivazione cutanea, contribuendo a tonificare e
      rivitalizzare i tessuti.
    </p>

    <p>
      <span class="treatment">Massaggio Rilassante e Distensivo con Cera Amazzonica e Pietre Calde</span><br>
      Manualità lente e profonde, unite al calore delle pietre, sciolgono le tensioni muscolari
      e donano una sensazione di totale abbandono e armonia.
    </p>

    <p>
      <span class="treatment">Effusione di Acqua di Mare Pura</span><br>
      Un gesto finale rigenerante che completa il rituale, donando freschezza, vitalità
      e una profonda sensazione di riequilibrio.
    </p>
  </ServicePage>
</template>

<script setup lang="ts">
import ServicePage, { type GalleryItem } from '../../components/ServicePage.vue';

import heroImage from '/src/assets/estetica_sensoriale/amazzonia/AmazzoniaIntro.jpg';
import RitualeAmazzoniaImg1 from '/src/assets/estetica_sensoriale/amazzonia/Amazzonia1.jpeg';
import RitualeAmazzoniaImg2 from '/src/assets/estetica_sensoriale/amazzonia/Amazzonia2.jpeg';
import RitualeAmazzoniaImg3 from '/src/assets/estetica_sensoriale/amazzonia/Amazzonia3.jpeg';
import RitualeAmazzoniaImg4 from '/src/assets/estetica_sensoriale/amazzonia/Amazzonia4.jpeg';

const gallery: GalleryItem[] = [
  { src: RitualeAmazzoniaImg1, alt: 'Percorso 1' },
  { src: RitualeAmazzoniaImg2, alt: 'Percorso 2' },
  { src: RitualeAmazzoniaImg3, alt: 'Percorso 3' },
  { src: RitualeAmazzoniaImg4, alt: 'Percorso 4' }
];
</script>