<template>
  <main class="contatti-page">
    <section class="info-top">
      <div class="orari">
        <h2 class="section-title">Orari di apertura</h2>
        <ul class="orari-list">
          <li><strong>Lunedì:</strong> Chiuso</li>
          <li><strong>Martedì:</strong> 09:00 – 19:00</li>
          <li><strong>Mercoledì:</strong> 09:00 – 19:00</li>
          <li><strong>Giovedì:</strong> 09:00 – 19:00</li>
          <li><strong>Venerdì:</strong> 09:00 – 19:00</li>
          <li><strong>Sabato:</strong> 09:00 – 17:00</li>
          <li><strong>Domenica:</strong> Chiuso</li>
        </ul>
      </div>

      <div class="contatti">
        <h2 class="section-title">Contatti</h2>
        <p><strong>Telefono:</strong> <a href="tel:+393292428461">+39 329 242 8461</a></p>
        <p><strong>Email:</strong> <a href="mailto:elisasartoni@hotmail.it">elisasartoni@hotmail.it</a></p>
      </div>
    </section>

    <section class="mappa">
      <div class="map-wrapper">
        <iframe
            title="Mappa Beauty Boutique"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2710.33660246475!2d11.636111276215624!3d44.38344567107689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDIzJzAwLjQiTiAxMcKwMzgnMTkuMyJF!5e1!3m2!1sit!2sit!4v1772143403608!5m2!1sit!2sit"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen>
        </iframe>
      </div>
    </section>

    <section class="indirizzo">
      <h2 class="section-title">Indirizzo</h2>
      <p>
        Piazza della Libertà 4<br>
        40060 Toscanella di Dozza (BO)<br>
        Bologna
      </p>
    </section>
  </main>
</template>

<style scoped>
:root {
  --max-width: 1100px;
  --brand: #b85a8a;
  --text: #111;
  --muted: #444;
  --radius: 12px;
}

.contatti-page {
  width: 100%;
  padding: 24px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.info-top {
  text-align: center;
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.orari,
.contatti {
  flex: 1;
  min-width: 260px;
}

.section-title {
  margin-bottom: 12px;
  font-size: 22px;
  font-weight: 700;
  color: var(--brand);
}

.orari-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.orari-list li {
  margin-bottom: 6px;
  color: var(--muted);
}

.mappa {
  max-width: var(--max-width);
  width: 600px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 16px;
}

.map-wrapper {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
  border-radius: var(--radius);
  box-shadow: 0 6px 18px rgba(17, 17, 17, 0.08);
  background: #fff;
}

.map-wrapper iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
  min-width: 0;
}

/*
.mappa iframe {
  width: 100%;
  height: 380px;
  border: 0;
  border-radius: var(--radius);
  box-shadow: 0 6px 18px rgba(17, 17, 17, 0.08);
  display: block;
  margin: 0 auto;
}
*/

.indirizzo {
  text-align: center;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.6;
}
</style>

<script setup lang="ts">
</script>