<template>
  <ServicePage
      category="Estetica di base"
      title="Massaggi"
      subtitle="Riequilibra corpo e mente"
      :hero-image="heroImage"
      hero-alt="Sala massaggi"
      :gallery="gallery"
  >
    <p>
      I nostri massaggi sono pensati per regalare benessere profondo, riequilibrio del corpo e relax mentale.
      Ogni trattamento viene personalizzato in base alle esigenze individuali, con manualità professionali e tecniche specifiche per ottenere il massimo beneficio, sia a livello muscolare che energetico.
      <br><br>

      <span class="treatment">Massaggio Relax</span><br>
      Un trattamento distensivo e avvolgente che aiuta a sciogliere le tensioni accumulate, ridurre lo stress e favorire il rilassamento psicofisico.
      Movimenti lenti e armoniosi migliorano la circolazione, donando una piacevole sensazione di leggerezza e benessere generale.
      <br><br>

      <span class="treatment">Massaggio Decontratturante</span><br>
      Ideale per chi soffre di tensioni muscolari, rigidità o dolori localizzati.
      Attraverso manualità profonde e mirate, aiuta a sciogliere le contratture, migliorare la mobilità e ridurre il dolore muscolare, soprattutto nelle zone più sollecitate come schiena, cervicale e spalle.
      <br><br>

      <span class="treatment">Massaggio Svedese</span><br>
      Tecnica classica che combina movimenti energici e rilassanti per stimolare la circolazione sanguigna e ossigenare i tessuti.
      Favorisce il rilassamento muscolare, migliora il tono generale del corpo e dona una sensazione di equilibrio e vitalità.
      <br><br>

      <span class="treatment">Massaggio Hawaiano Lomi Lomi</span><br>
      Un massaggio fluido, ritmico e profondamente avvolgente, ispirato alle antiche tradizioni hawaiane.
      Eseguito con movimenti ampi e continui, spesso con l’uso degli avambracci, aiuta a sciogliere blocchi fisici ed emotivi, favorendo un profondo stato di armonia e rigenerazione.
      <br><br>

      <span class="treatment">Massaggio Linfodrenante</span><br>
      Tecnica delicata e ritmica che stimola il sistema linfatico, favorendo il drenaggio dei liquidi in eccesso.
      Ideale per contrastare gonfiore, ritenzione idrica e pesantezza, migliorando la circolazione e donando una sensazione di leggerezza e benessere diffuso.
      <br><br>

      <span class="treatment">Massaggio Connettivale</span><br>
      Un trattamento profondo che agisce sui tessuti connettivi, migliorando elasticità e tonicità della pelle.
      Particolarmente indicato per stimolare la circolazione, riattivare i tessuti e favorire il rimodellamento corporeo.
      <br><br>

      <span class="treatment">Massaggio con Candela Calda</span><br>
      Un’esperienza sensoriale unica e profondamente rilassante.
      La candela si trasforma in un caldo olio nutriente che viene versato sulla pelle e massaggiato con movimenti lenti e avvolgenti, idratando in profondità e regalando una sensazione di comfort e relax totale.
      <br><br>

      <span class="treatment">Massaggio con Pietre Calde</span><br>
      Trattamento distensivo che utilizza pietre laviche riscaldate per trasmettere calore in profondità.
      Aiuta a rilassare la muscolatura, migliorare la circolazione e sciogliere tensioni profonde, favorendo un intenso stato di benessere.
      <br><br>

      <span class="treatment">Maderoterapia</span><br>
      Tecnica di massaggio che utilizza strumenti in legno di diverse forme per stimolare i tessuti in profondità.
      Favorisce la circolazione, aiuta a ridurre la ritenzione idrica e contribuisce al rimodellamento del corpo, migliorando la tonicità e l’aspetto della pelle.
    </p>
  </ServicePage>
</template>

<script setup lang="ts">
import ServicePage, { type GalleryItem } from '../../components/ServicePage.vue';

import heroImage from '/src/assets/massaggi/MassaggiIntro.jpeg';

import Massaggio1 from '/src/assets/massaggi/Massaggi1.jpeg';
import Massaggio2 from '/src/assets/massaggi/Massaggi2.jpeg';
import Massaggio3 from '/src/assets/massaggi/Massaggi3.jpeg';
import Massaggio4 from '/src/assets/massaggi/Massaggi4.jpeg';
import Massaggio5 from '/src/assets/massaggi/Massaggi5.jpeg';
import Massaggio6 from '/src/assets/massaggi/Massaggi6.jpeg';
import Massaggio7 from '/src/assets/massaggi/Massaggi7.jpeg';
import Massaggio8 from '/src/assets/massaggi/Massaggi8.jpeg';
import Massaggio9 from '/src/assets/massaggi/Massaggi9.jpeg';
import Massaggio10 from '/src/assets/massaggi/Massaggi10.jpeg';

const gallery: GalleryItem[] = [
  { src: Massaggio1, alt: 'Massaggio 1' },
  { src: Massaggio2, alt: 'Massaggio 2' },
  { src: Massaggio3, alt: 'Massaggio 3' },
  { src: Massaggio4, alt: 'Massaggio 4' },
  { src: Massaggio5, alt: 'Massaggio 5' },
  { src: Massaggio6, alt: 'Massaggio 6' },
  { src: Massaggio7, alt: 'Massaggio 7' },
  { src: Massaggio8, alt: 'Massaggio 8' },
  { src: Massaggio9, alt: 'Massaggio 9' },
  { src: Massaggio10, alt: 'Massaggio 10' }
];
</script>