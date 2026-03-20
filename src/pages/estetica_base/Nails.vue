<template>
  <ServicePage
      category="Estetica di base"
      title="Nails"
      subtitle="Scopri i nostri trattamenti e design personalizzati"
      :hero-image="heroImage"
      hero-alt="Mani curate con smalto elegante"
      :gallery="gallery"
  >
    <p>
      Nel nostro reparto nails ci prendiamo cura della bellezza e della salute delle tue unghie con professionalità, precisione e i più alti standard igienici.
      Eseguiamo manicure semplici, con applicazione facoltativa di smalto tradizionale o semipermanente, per mani curate, eleganti e sempre in ordine.
      <br><br>
      Offriamo inoltre pedicure estetici e pedicure spa, ideali per il benessere e la cura profonda del piede, oltre a servizi di ricostruzione unghie realizzati con tecniche aggiornate e materiali di alta qualità.
      <br><br>
      Tutti i trattamenti sono eseguiti esclusivamente da onicotecniche specializzate, in costante formazione attraverso corsi di aggiornamento professionale, per garantire risultati impeccabili e sempre al passo con le migliori tecniche del settore.
      <br><br>
      Il nostro valore più importante: l’igiene. Ciò che ci distingue davvero è l’attenzione assoluta alla sicurezza e alla sterilizzazione degli strumenti.
      Seguiamo rigorosamente tutti i protocolli di sanificazione, inclusi i passaggi completi prima e dopo l’autoclave, per offrirti il massimo livello di igiene e protezione in ogni trattamento.
      Per noi, la bellezza passa sempre dalla sicurezza.
    </p>
  </ServicePage>
</template>

<script setup lang="ts">
import ServicePage, { type GalleryItem } from '../../components/ServicePage.vue';

import heroImage from '/src/assets/nails/Lampada.png';
import NailsImg1 from '/src/assets/nails/Nails1.jpeg';
import NailsImg2 from '/src/assets/nails/Nails2.jpeg';
import NailsImg3 from '/src/assets/nails/Nails3.jpeg';

const gallery: GalleryItem[] = [
  { src: NailsImg1, alt: 'Creazione unghie 1' },
  { src: NailsImg2, alt: 'Creazione unghie 2' },
  { src: NailsImg3, alt: 'Creazione unghie 3' }
];
</script>