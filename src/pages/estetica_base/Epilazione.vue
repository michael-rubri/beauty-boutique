<template>
  <ServicePage
      category="Estetica di base"
      title="Epilazione"
      subtitle="Scopri un'esperienza delicata e impeccabile"
      :hero-image="heroImage"
      hero-alt="Procedura epilazione"
      :gallery="gallery"
  >
    <p>
      Nel nostro centro estetico l’epilazione è molto più di un semplice trattamento: è un momento di cura, delicatezza e rispetto della pelle.
      Utilizziamo solo cere di alta qualità, selezionate per garantire risultati efficaci, comfort durante il trattamento e massima tollerabilità anche per le pelli più sensibili.
      Prima di ogni epilazione prepariamo accuratamente la pelle con prodotti specifici che la detergono, la proteggono e la rendono pronta al trattamento, migliorando l’aderenza della cera e riducendo al minimo le irritazioni.
      Al termine del servizio, applichiamo fiale professionali lenitive e disarrossanti, che aiutano la pelle a riequilibrarsi rapidamente, insieme a trattamenti specifici per rallentare la ricrescita del pelo, per prolungare la sensazione di pelle liscia e curata nel tempo.
      <br><br>

      <span class="treatment">Cera liposolubile</span><br>
      La nostra cera liposolubile professionale è formulata per aderire perfettamente al pelo, anche il più corto, rimuovendolo in modo preciso e uniforme.
      Grazie alla sua composizione delicata, è particolarmente indicata per le pelli sensibili, riducendo il rischio di arrossamenti e irritazioni e lasciando la pelle liscia e morbida più a lungo.
      È la soluzione ideale per chi desidera un’epilazione efficace, rapida e confortevole, con risultati duraturi e una ricrescita più regolare nel tempo.
      <br><br>

      <span class="treatment">Cera brasiliana Bon Bon</span><br>
      Per chi cerca un’epilazione ancora più delicata, proponiamo la nostra cera brasiliana Bon Bon, un trattamento innovativo pensato per offrire il massimo comfort anche alle pelli più reattive.
      Questa speciale cera è particolarmente indicata per chi soffre di psoriasi, dermatiti o sensibilità cutanee, grazie alla sua formula elastica e a bassa temperatura che aderisce al pelo senza stressare la pelle.
      È ideale soprattutto per le zone più delicate e sensibili del corpo, dove comfort e sicurezza sono fondamentali.
      <br><br>

      I suoi principali benefici:<br>
      • rimozione efficace anche dei peli più corti e resistenti<br>
      • minore dolore durante lo strappo<br>
      • riduzione di arrossamenti e irritazioni<br>
      • maggiore rispetto della barriera cutanea<br>
      • pelle liscia, morbida e idratata
      <br><br>

      Professionalità e attenzione alla pelle.
      Ogni trattamento viene eseguito da operatrici qualificate che valutano sempre il tipo di pelle e le esigenze individuali, scegliendo la tecnica e la cera più adatta per garantire un risultato efficace, sicuro e personalizzato.
      Per noi, l’epilazione deve essere un’esperienza piacevole, delicata e impeccabile, in grado di unire performance e rispetto assoluto della pelle in ogni fase del trattamento.
    </p>
  </ServicePage>
</template>

<script setup lang="ts">
import ServicePage, { type GalleryItem } from '../../components/ServicePage.vue';

import heroImage from '/src/assets/epilazione/EpilazioneIntro.jpg';
import Epilazione1 from '/src/assets/epilazione/Epilazione1.jpeg';
import Epilazione2 from '/src/assets/epilazione/Epilazione2.jpeg';
import Epilazione3 from '/src/assets/epilazione/Epilazione3.jpeg';
import Epilazione4 from '/src/assets/epilazione/Epilazione4.jpeg';

const gallery: GalleryItem[] = [
  { src: Epilazione1, alt: 'Epilazione 1' },
  { src: Epilazione2, alt: 'Epilazione 2' },
  { src: Epilazione3, alt: 'Epilazione 3' },
  { src: Epilazione4, alt: 'Epilazione 4' }
];
</script>