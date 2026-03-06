<template>
  <header class="top-header" role="banner">
    <div class="container">
      <div class="left-contacts" aria-label="Contatti">
        <a :href="telLink" class="contact-item" aria-label="Telefono">
          <Phone class="icon"/>
          <span class="contact-text">{{ phoneDisplay }}</span>
        </a>

        <a :href="mailtoLink" class="contact-item" aria-label="Email">
          <Mail class="icon"/>
          <span class="contact-text">{{ email }}</span>
        </a>

        <a :href="whatsappLink" class="contact-item" target="_blank" rel="noopener" aria-label="WhatsApp">
          <MessageCircle class="icon"/>
          <span class="contact-text">WhatsApp</span>
        </a>
      </div>

      <div class="right-social" aria-label="Social">
        <a :href="instagramUrl" class="social-link" target="_blank" rel="noopener" aria-label="Instagram">
          <Instagram class="social-icon"/>
        </a>

        <a :href="facebookUrl" class="social-link" target="_blank" rel="noopener" aria-label="Facebook">
          <Facebook class="social-icon"/>
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { Phone, Mail, MessageCircle, Instagram, Facebook } from 'lucide-vue-next'

const phone = '+393292428461';
const email = 'elisasartoni@hotmail.it';
const whatsappNumber = '+393292428461';
const instagramUrl = 'https://www.instagram.com/beauty_boutique_by_elisa?igsh=NXd1d2p5NXRzdndo&utm_source=qr';
const facebookUrl = 'https://www.facebook.com/share/1AyArxbJn5/?mibextid=wwXIfr';
const telLink = computed(() => `tel:${phone.replace(/\s+/g, '')}`);
const mailtoLink = computed(() => `mailto:${email}`);
const whatsappLink = computed(() => {
  const text = encodeURIComponent('Ciao, vorrei informazioni sui servizi.');
  const clean = whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${clean}?text=${text}`;
});
const phoneDisplay = phone;
</script>

<style scoped>
.top-header {
  border-bottom: 1px solid rgba(0,0,0,0.06);
  /*background-color: #BD7599;*/
  /*background-color: #C388A6;*/
  /*background-color: #C99CB3;*/
  background-color: #D1ADBF;
  /*background-color: #E1D0D9;*/
  font-size: 16px;
  font-weight: 600;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left-contacts {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  color: white;
}

.contact-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 6px;
  transition: background .15s ease, color .15s ease;
}

.contact-item:hover,
.contact-item:focus {
  background: rgba(0,0,0,0.08);
  transform: translateY(-1px);
  outline: none;
}

.icon {
  width: 18px;
  height: 18px;
  color: white;
  flex-shrink: 0;
}

.contact-text {
  line-height: 1;
  white-space: nowrap;
}

/* Social */
.right-social {
  display: flex;
  align-items: center;
  gap: 10px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  color: #222;
  text-decoration: none;
  transition: background .15s ease, color .15s ease, transform .08s ease;
}

.social-link:hover,
.social-link:focus {
  background: rgba(0,0,0,0.08);
  transform: translateY(-1px);
  outline: none;
}

.social-icon {
  width: 18px;
  height: 18px;
  color: white;
}

/* Responsive: nascondi testo contatti su schermi piccoli */
@media (max-width: 640px) {
  .contact-text {
    display: none;
  }
  .container {
    padding: 8px 12px;
  }
}
</style>