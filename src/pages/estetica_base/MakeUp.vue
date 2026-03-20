<template>
  <ServicePage
      category="Estetica di base"
      title="Make-Up"
      subtitle="Valorizza la tua bellezza"
      :hero-image="heroImage"
      hero-alt="Strumenti make-up"
      :gallery="gallery"
  >
    <p>
      Valorizziamo la tua bellezza con servizi make-up professionali pensati per ogni occasione, stile ed esigenza.
      Ogni trucco viene realizzato su misura, nel rispetto delle tue caratteristiche e del risultato che desideri ottenere.
      <br><br>

      Offriamo make-up per:<br>
      • Cerimonie e occasioni speciali<br>
      • Sposa, con studio personalizzato e prove dedicate<br>
      • Eventi serali e serate importanti<br>
      • Trucco correttivo, per riequilibrare e valorizzare i lineamenti del viso
      <br><br>

      Inoltre proponiamo lezioni di self make-up personalizzate, durante le quali imparerai tecniche professionali e consigli pratici per valorizzarti al meglio nella vita di tutti i giorni.
      Scoprirai i prodotti più adatti a te, come applicarli correttamente e come esaltare la tua bellezza in modo semplice ed efficace.
      Affidati a mani esperte per sentirti sicura, luminosa e perfettamente in armonia con te stessa, in ogni occasione.
    </p>
  </ServicePage>
</template>

<script setup lang="ts">
import ServicePage, { type GalleryItem } from '../../components/ServicePage.vue';

import heroImage from '/src/assets/make-up/Make-upIntro.jpg';

import Makeup1 from '/src/assets/make-up/Make-up1.jpeg';
import Makeup2 from '/src/assets/make-up/Make-up2.jpeg';
import Makeup3 from '/src/assets/make-up/Make-up3.jpeg';
import Makeup4 from '/src/assets/make-up/Make-up4.jpeg';
import Makeup5 from '/src/assets/make-up/Make-up5.jpeg';

const gallery: GalleryItem[] = [
  { src: Makeup1, alt: 'Make-up 1' },
  { src: Makeup2, alt: 'Make-up 2' },
  { src: Makeup3, alt: 'Make-up 3' },
  { src: Makeup4, alt: 'Make-up 4' },
  { src: Makeup5, alt: 'Make-up 5' }
];
</script>