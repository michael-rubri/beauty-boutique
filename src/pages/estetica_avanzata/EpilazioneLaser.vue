<template>
  <ServicePage
      category="Estetica Avanzata"
      title="Epilazione Laser Diodo 808 nm Progressiva Permanente"
      subtitle="Sentiti a proprio agio con la tua pelle"
      :hero-image="heroImage"
      hero-alt="Procedura epilazione laser"
      :gallery="gallery"
  >
    <p>
      La depilazione non è più solo una necessità stagionale, ma un vero rituale di bellezza
      e benessere quotidiano. Sentirsi sempre curati, sicuri di sé e a proprio agio con la
      propria pelle è oggi una scelta consapevole, sempre più condivisa da donne e uomini che
      desiderano risultati duraturi, sicuri ed efficaci.
    </p>

    <p>
      Nel nostro istituto eseguiamo trattamenti di epilazione laser a diodo 808 nm progressiva
      permanente con tecnologie di ultima generazione, selezionate per garantire massima
      precisione, sicurezza e performance elevate.
    </p>

    <p>
      Utilizziamo un’apparecchiatura professionale di tecnologia avanzata 2025, progettata per
      offrire trattamenti altamente performanti, controllati e confortevoli, nel pieno rispetto
      della pelle.
    </p>

    <video
        :src="epilazioneVideo"
        class="service-inline-video"
        aria-label="Video epilazione laser"
        controls
        autoplay
        muted
        loop
        playsinline
    ></video>

    <p>
      <span class="treatment">Come funziona il laser a diodo 808 nm</span><br>
      Il laser a diodo agisce attraverso una combinazione mirata di luce e calore, che colpisce
      selettivamente il follicolo pilifero senza danneggiare i tessuti circostanti.
    </p>

    <p>
      La lunghezza d’onda di 808 nm è particolarmente efficace sulla melanina del pelo:
      l’energia luminosa viene assorbita e trasformata in calore, indebolendo progressivamente
      il follicolo fino alla sua inattivazione. Questo processo consente una riduzione graduale,
      duratura e visibile dei peli superflui.
    </p>

    <p>
      Il trattamento è eseguito esclusivamente da operatori qualificati, formati per garantire
      protocolli personalizzati, sicurezza assoluta e risultati ottimali.
    </p>

    <p>
      <span class="treatment">Un percorso progressivo e controllato</span><br>
      L’epilazione laser è un trattamento progressivo che richiede costanza e programmazione per
      rispettare il ciclo naturale di crescita del pelo. Per ottenere risultati efficaci e
      duraturi sono necessarie almeno 8 sedute, con cadenza mensile. Già dalle prime sedute si
      osserva una riduzione significativa della ricrescita, con peli più sottili, radi e deboli.
    </p>

    <div>
      <span class="treatment">Perché scegliere il nostro trattamento</span>
      <ul>
        <li>✔ Tecnologia professionale di ultima generazione (2025)</li>
        <li>✔ Lunghezza d’onda 808 nm altamente efficace</li>
        <li>✔ Trattamenti personalizzati e sicuri</li>
        <li>✔ Operatori qualificati e specializzati</li>
        <li>✔ Metodo progressivo, duraturo e controllato</li>
        <li>✔ Comfort elevato durante la seduta</li>
      </ul>
    </div>

    <p>
      <span class="treatment">I risultati</span><br>
      Una pelle più liscia, uniforme e curata nel tempo. Meno ricrescita, meno manutenzione,
      più libertà.
    </p>
  </ServicePage>
</template>

<script setup lang="ts">
import ServicePage, { type GalleryItem } from '../../components/ServicePage.vue';

import heroImage from '/src/assets/estetica_avanzata/epilazione_laser/EpilazioneLaserIntro.jpg';
import epilazioneVideo from '/src/assets/estetica_avanzata/epilazione_laser/EpilazioneLaser3.mp4';
import EpilazioneLaser1 from '/src/assets/estetica_avanzata/epilazione_laser/EpilazioneLaser1.jpeg';
import EpilazioneLaser2 from '/src/assets/estetica_avanzata/epilazione_laser/EpilazioneLaser2.jpeg';

const gallery: GalleryItem[] = [
  { src: EpilazioneLaser1, alt: 'Epilazione 1' },
  { src: EpilazioneLaser2, alt: 'Epilazione 2' }
];
</script>