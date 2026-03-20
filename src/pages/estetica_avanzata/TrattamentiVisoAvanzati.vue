<template>
  <ServicePage
      category="Estetica Avanzata"
      title="Trattamenti Viso Avanzati"
      subtitle="Rispondiamo alle esigenze specifiche di ogni viso"
      :hero-image="heroImage"
      hero-alt="Procedura trattamenti viso avanzati"
      :gallery="gallery"
  >
    <p>
      Oggi prendersi cura della pelle del viso significa molto più di una semplice pulizia.
      Significa analizzare, comprendere e trattare in modo mirato ogni esigenza cutanea,
      con protocolli personalizzati e tecnologie avanzate.
    </p>

    <p>
      Nel nostro istituto trasformiamo la classica pulizia del viso in un vero e proprio
      trattamento di estetica specifica e avanzata, progettato per migliorare visibilmente
      la qualità della pelle e riequilibrare le sue funzioni naturali.
    </p>

    <p>
      Lavoriamo con cosmetica funzionale ad alta performance e con tecnologie professionali
      che agiscono in sinergia per risultati concreti, progressivi e duraturi.
    </p>

    <video
        :src="trattamentiVisoVideo"
        class="service-inline-video"
        aria-label="Video trattamenti viso"
        controls
        autoplay
        muted
        loop
        playsinline
    ></video>

    <p>
      <span class="treatment">Tecnologie e metodologie avanzate</span><br>
      Ogni trattamento nasce da un’attenta analisi della pelle, che ci permette di creare
      protocolli completamente personalizzati. Utilizziamo strumenti professionali di ultima
      generazione per agire in profondità e in modo mirato su ogni inestetismo.
    </p>

    <div>
      <p>I nostri trattamenti integrano:</p>
      <ul>
        <li>✔ Analizzatore professionale della pelle per una diagnosi precisa</li>
        <li>✔ Cosmetica funzionale e attivi specifici ad alta concentrazione</li>
        <li>✔ Acidi mirati per il rinnovamento cutaneo controllato</li>
        <li>✔ Radiofrequenza bipolare per stimolare tono e compattezza</li>
        <li>✔ Elettroporazione per veicolare i principi attivi in profondità</li>
        <li>✔ Ultrasuoni per ossigenare, drenare e rigenerare i tessuti</li>
        <li>✔ Vacuum Idroclean per una pulizia profonda e delicata</li>
        <li>✔ Alta frequenza per riequilibrare e purificare la pelle</li>
      </ul>
    </div>

    <p>
      L’integrazione di queste tecnologie permette di lavorare in modo completo, efficace e
      non invasivo, rispettando la fisiologia cutanea e stimolando i naturali processi di
      rigenerazione.
    </p>

    <p>
      <span class="treatment">Trattamenti realmente personalizzati</span><br>
      Ogni pelle è unica, per questo ogni protocollo viene studiato su misura per rispondere
      alle esigenze specifiche del viso e ottenere risultati visibili e progressivi.
    </p>

    <div>
      <p>Interveniamo in modo mirato su:</p>
      <ul>
        <li>✔ Pelle secca e disidratata</li>
        <li>✔ Pelle ispessita e asfittica</li>
        <li>✔ Rughe e segni del tempo</li>
        <li>✔ Macchie cutanee e discromie</li>
        <li>✔ Acne e impurità</li>
        <li>✔ Couperose e pelle sensibile</li>
        <li>✔ Perdita di tono e cedimenti</li>
        <li>✔ Pelle spenta e stressata</li>
      </ul>
    </div>

    <p>
      <span class="treatment">Un approccio professionale completo</span><br>
      La nostra filosofia di lavoro si basa sulla sinergia tra conoscenza, tecnologia e
      personalizzazione. Ogni trattamento è progettato per migliorare la qualità della pelle
      in modo reale, progressivo e misurabile nel tempo.
      Non eseguiamo semplici trattamenti standardizzati, ma percorsi viso mirati, costruiti
      con precisione e competenza per accompagnare la pelle verso il suo equilibrio ottimale.
    </p>

    <p>
      <span class="treatment">Il risultato</span><br>
      Una pelle più sana, luminosa, uniforme e tonica.
      Un miglioramento visibile della qualità cutanea.
      Un trattamento che va oltre la superficie e lavora davvero sulla funzionalità della pelle.
    </p>
  </ServicePage>
</template>

<script setup lang="ts">
import ServicePage, { type GalleryItem } from '../../components/ServicePage.vue';

import heroImage from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzatiIntro.jpg';
import trattamentiVisoVideo from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati13.mp4';

import TrattamentiVisoAvanzati1 from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati1.jpeg';
import TrattamentiVisoAvanzati2 from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati2.jpeg';
/*import TrattamentiVisoAvanzati3 from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati3.jpeg';
import TrattamentiVisoAvanzati4 from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati4.jpeg';
import TrattamentiVisoAvanzati5 from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati5.jpeg';*/
import TrattamentiVisoAvanzati6 from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati6.jpeg';
import TrattamentiVisoAvanzati7 from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati7.jpeg';
import TrattamentiVisoAvanzati8 from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati8.jpeg';
import TrattamentiVisoAvanzati9 from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati9.jpeg';
import TrattamentiVisoAvanzati10 from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati10.jpeg';
import TrattamentiVisoAvanzati11 from '/src/assets/estetica_avanzata/trattamenti_viso_avanzati/TrattamentiVisoAvanzati11.jpeg';

const gallery: GalleryItem[] = [
  { src: TrattamentiVisoAvanzati1, alt: 'Trattamento 1' },
  { src: TrattamentiVisoAvanzati2, alt: 'Trattamento 2' },
  /*{ src: TrattamentiVisoAvanzati3, alt: 'Trattamento 3' },
  { src: TrattamentiVisoAvanzati4, alt: 'Trattamento 4' },
  { src: TrattamentiVisoAvanzati5, alt: 'Trattamento 5' },*/
  { src: TrattamentiVisoAvanzati6, alt: 'Trattamento 6' },
  { src: TrattamentiVisoAvanzati7, alt: 'Trattamento 7' },
  { src: TrattamentiVisoAvanzati8, alt: 'Trattamento 8' },
  { src: TrattamentiVisoAvanzati9, alt: 'Trattamento 9' },
  { src: TrattamentiVisoAvanzati10, alt: 'Trattamento 10' },
  { src: TrattamentiVisoAvanzati11, alt: 'Trattamento 11' }
];
</script>

<style scoped>
@media (max-width: 520px) {
  :deep(.mobile-frame) {
    width: min(100%, 360px);
    aspect-ratio: 1 / 1;
    height: auto;
    overflow: hidden;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  :deep(.mobile-image) {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
    display: block;
  }
}
</style>