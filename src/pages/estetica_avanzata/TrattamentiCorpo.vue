<template>
  <ServicePage
      category="Estetica Avanzata"
      title="Trattamenti Corpo Rimodellanti e Tonificanti Avanzati"
      hero-title="Trattamenti Corpo Avanzati"
      subtitle="Migliora la qualità della tua pelle e la silhouette."
      :hero-image="heroImage"
      hero-alt="Procedura trattamenti corpo avanzati"
      :gallery="gallery"
  >
    <p>
      Il corpo cambia, si trasforma e ha bisogno di trattamenti mirati per mantenere armonia,
      compattezza e leggerezza. Oggi l’estetica corpo non si limita al semplice massaggio,
      ma si basa su tecnologie avanzate e protocolli personalizzati capaci di intervenire
      in profondità sui tessuti.
    </p>

    <p>
      Nel nostro istituto proponiamo trattamenti corpo professionali ad azione rimodellante,
      tonificante, riducente e drenante, studiati per migliorare visibilmente la qualità
      della pelle e la silhouette.
    </p>

    <p>
      Lavoriamo in sinergia con tecnologie specifiche che permettono di trattare gli
      inestetismi in modo mirato, progressivo e non invasivo.
    </p>

    <video
        :src="trattamentiCorpoVideo"
        class="service-inline-video"
        aria-label="Video trattamenti corpo"
        controls
        autoplay
        muted
        loop
        playsinline
    ></video>

    <p>
      <span class="treatment">Tecnologie corpo ad alta efficacia</span><br>
      Ogni percorso viene personalizzato in base alle caratteristiche del tessuto, agli
      obiettivi e alle esigenze individuali. L’integrazione delle diverse tecnologie consente
      di ottenere risultati più rapidi, completi e duraturi.
    </p>

    <div>
      <p>I nostri trattamenti includono:</p>
      <ul>
        <li>✔ Pressoterapia per stimolare la circolazione e favorire il drenaggio dei liquidi</li>
        <li>✔ Ultrasuoni per lavorare sugli accumuli adiposi e migliorare la qualità del tessuto</li>
        <li>✔ Radiofrequenza per tonificare, rassodare e stimolare la produzione di collagene</li>
        <li>✔ Re-Shape per il rimodellamento delle forme e la riduzione localizzata</li>
        <li>✔ Roller Shape per riattivare la microcircolazione e migliorare l’elasticità cutanea</li>
      </ul>
    </div>

    <p>
      L’azione combinata di queste tecnologie permette di intervenire contemporaneamente su
      più livelli del tessuto, potenziando l’efficacia del trattamento.
    </p>

    <p>
      <span class="treatment">Obiettivi dei trattamenti corpo</span><br>
      I nostri protocolli sono studiati per migliorare in modo visibile e progressivo gli
      inestetismi più comuni, aiutando il corpo a ritrovare equilibrio e armonia.
    </p>

    <div>
      <p>Interveniamo su:</p>
      <ul>
        <li>✔ Ritenzione idrica e gonfiore</li>
        <li>✔ Adiposità localizzate</li>
        <li>✔ Cellulite e tessuto irregolare</li>
        <li>✔ Perdita di tono e rilassamento cutaneo</li>
        <li>✔ Pelle poco elastica o compatta</li>
        <li>✔ Necessità di rimodellare e ridefinire le forme</li>
      </ul>
    </div>

    <p>
      <span class="treatment">Un approccio personalizzato e professionale</span><br>
      Ogni percorso corpo viene progettato su misura, combinando le tecnologie più adatte
      e modulando l’intensità del trattamento in base alla risposta del tessuto.
      Il nostro obiettivo è rimodellare, tonificare e drenare in modo efficace e progressivo,
      rispettando la fisiologia del corpo e favorendo risultati reali e duraturi nel tempo.
    </p>

    <p>
      <span class="treatment">Il risultato</span><br>
      Una silhouette più armoniosa e definita.
      Tessuti più compatti e tonici.
      Una piacevole sensazione di leggerezza e benessere.
      Un corpo visibilmente più modellato e riequilibrato.
    </p>
  </ServicePage>
</template>

<script setup lang="ts">
import ServicePage, { type GalleryItem } from '../../components/ServicePage.vue';

import heroImage from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpoIntro2.jpg';
import trattamentiCorpoVideo from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo13.mp4';

import TrattamentiCorpo1 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo1.jpeg';
import TrattamentiCorpo2 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo2.jpeg';
import TrattamentiCorpo3 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo3.jpeg';
import TrattamentiCorpo4 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo4.jpeg';
import TrattamentiCorpo5 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo5.jpeg';
import TrattamentiCorpo6 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo6.jpeg';
import TrattamentiCorpo7 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo7.jpeg';
import TrattamentiCorpo8 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo8.jpeg';
import TrattamentiCorpo9 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo9.jpeg';
import TrattamentiCorpo10 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo10.jpeg';
import TrattamentiCorpo11 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo11.jpeg';
import TrattamentiCorpo12 from '/src/assets/estetica_avanzata/trattamenti_corpo_avanzati/TrattamentiCorpo12.jpeg';

const gallery: GalleryItem[] = [
  { src: TrattamentiCorpo1, alt: 'Trattamento 1' },
  { src: TrattamentiCorpo2, alt: 'Trattamento 2' },
  { src: TrattamentiCorpo3, alt: 'Trattamento 3' },
  { src: TrattamentiCorpo4, alt: 'Trattamento 4' },
  { src: TrattamentiCorpo5, alt: 'Trattamento 5' },
  { src: TrattamentiCorpo6, alt: 'Trattamento 6' },
  { src: TrattamentiCorpo7, alt: 'Trattamento 7' },
  { src: TrattamentiCorpo8, alt: 'Trattamento 8' },
  { src: TrattamentiCorpo9, alt: 'Trattamento 9' },
  { src: TrattamentiCorpo10, alt: 'Trattamento 10' },
  { src: TrattamentiCorpo11, alt: 'Trattamento 11' },
  { src: TrattamentiCorpo12, alt: 'Trattamento 12' }
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