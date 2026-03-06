<template>
  <footer class="site-footer" aria-label="Footer sito">
    <div class="footer-top" role="region" aria-label="Richiedi un appuntamento">
      <div class="inner">
        <h2 class="title">Richiedi un appuntamento</h2>
        <router-link to="/contatti" class="contact-link" aria-label="Vai alla pagina contatti">
          Contattaci
        </router-link>
      </div>
    </div>

    <div class="footer-bottom" role="contentinfo" aria-label="Informazioni legali">
      <div class="inner">
        <slot name="legal">
          <p class="legal-text">{{ legalText }}</p>
        </slot>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { legalText } = defineProps({
  legalText: {
    type: String,
    default: 'Piazza della Libertà 4, 40060 Toscanella di Dozza (BO) — P.IVA 04155291208'
  }
});
</script>

<style scoped>
.site-footer {
  margin-top: auto;
}

.footer-top {
  background: rgb(255, 244, 242);
  border-top: 1px solid rgba(0,0,0,0.04);
  padding: 28px 16px;
  text-align: center;
}

.footer-top .inner {
  max-width: 1100px; margin: 0 auto;
}

.title {
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: 600;
  color: #111;
}

.contact-link {
  display: inline-block;
  padding: 10px 16px;
  background: #222;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: background .12s ease, transform .08s ease;
}

.contact-link:hover,
.contact-link:focus {
  background: #000;
  transform: translateY(-2px);
  outline: none;
}

.footer-bottom {
  border-top: 1px solid rgba(0,0,0,0.06);
  background-color: #f3d7e2;
  color: rgb(63, 63, 63);
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 450;
  text-size-adjust: 100%;
}

.footer-bottom .inner {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.legal-text {
  margin: 0;
  line-height: 1.4;
  opacity: 0.95;
}

@media (max-width: 480px) {
  .title { font-size: 18px; }
  .contact-link { padding: 8px 12px; font-size: 14px; }
  .footer-bottom { font-size: 13px; padding: 10px 12px; }
}
</style>