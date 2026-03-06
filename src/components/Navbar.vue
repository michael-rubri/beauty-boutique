<template>
  <nav class="navbar" role="navigation" aria-label="Main navigation">
    <div class="nav-container">
      <router-link to="/" class="logo-link" aria-label="Vai alla Home">
        <img :src="logo" alt="Logo centro estetico" class="logo" />
      </router-link>

      <ul class="nav-links" role="menubar">
        <li role="none">
          <router-link to="/beauty-center" class="nav-item" role="menuitem">Beauty Boutique</router-link>
        </li>

        <li class="nav-item-dropdown" role="none" @mouseleave="closeDropdown">
          <button
              class="nav-item nav-button"
              aria-haspopup="true"
              @click="toggleDropdown"
              @keydown.enter.prevent="toggleDropdown"
              @keydown.space.prevent="toggleDropdown"
              ref="toggleBtn"
          >
            Servizi
            <span class="chev" aria-hidden="true">▾</span>
          </button>

          <ul
              v-if="isOpen"
              class="dropdown"
              role="menu"
              aria-label="Menù Servizi"
              ref="dropdown"
          >
            <li role="none">
              <router-link to="/servizi/estetica-sensoriale" class="dropdown-item" role="menuitem" @click="closeDropdown">Estetica Sensoriale</router-link>
            </li>
            <li role="none">
              <router-link to="/servizi/estetica-avanzata" class="dropdown-item" role="menuitem" @click="closeDropdown">Estetica Avanzata</router-link>
            </li>
            <li role="none">
              <router-link to="/servizi/nails" class="dropdown-item" role="menuitem" @click="closeDropdown">Nails</router-link>
            </li>
            <li role="none">
              <router-link to="/servizi/epilazione" class="dropdown-item" role="menuitem" @click="closeDropdown">Epilazione</router-link>
            </li>
            <li role="none">
              <router-link to="/servizi/massaggi" class="dropdown-item" role="menuitem" @click="closeDropdown">Massaggi</router-link>
            </li>
            <li role="none">
              <router-link to="/servizi/laminazione" class="dropdown-item" role="menuitem" @click="closeDropdown">Laminazione</router-link>
            </li>
            <li role="none">
              <router-link to="/servizi/makeup" class="dropdown-item" role="menuitem" @click="closeDropdown">MakeUp</router-link>
            </li>
          </ul>
        </li>

        <li role="none">
          <router-link to="/tecnologie" class="nav-item" role="menuitem">Tecnologie</router-link>
        </li>
        <li role="none">
          <router-link to="/contatti" class="nav-item" role="menuitem">Contatti</router-link>
        </li>
      </ul>

      <button class="mobile-toggle" @click="mobileOpen = !mobileOpen" aria-label="Apri menu">
        <span v-if="!mobileOpen">☰</span>
        <span v-else>✕</span>
      </button>
    </div>

    <div v-if="mobileOpen" class="mobile-menu" role="menu" aria-label="Menu mobile">
      <router-link to="/beauty-boutique" class="mobile-link" @click="mobileOpen = false">Beauty Boutique</router-link>

      <details class="mobile-details">
        <summary>Servizi</summary>
        <router-link to="/servizi/estetica-sensoriale" class="mobile-sublink" @click="mobileOpen = false">Estetica Sensoriale</router-link>
        <router-link to="/servizi/estetica-avanzata" class="mobile-sublink" @click="mobileOpen = false">Estetica Avanzata</router-link>
        <router-link to="/servizi/nails" class="mobile-sublink" @click="mobileOpen = false">Nails</router-link>
        <router-link to="/servizi/epilazione" class="mobile-sublink" @click="mobileOpen = false">Epilazione</router-link>
        <router-link to="/servizi/massaggi" class="mobile-sublink" @click="mobileOpen = false">Massaggi</router-link>
        <router-link to="/servizi/laminazione" class="mobile-sublink" @click="mobileOpen = false">Laminazione</router-link>
        <router-link to="/servizi/makeup" class="mobile-sublink" @click="mobileOpen = false">MakeUp</router-link>
      </details>

      <router-link to="/tecnologie" class="mobile-link" @click="mobileOpen = false">Tecnologie</router-link>
      <router-link to="/contatti" class="mobile-link" @click="mobileOpen = false">Contatti</router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import logoSrc from '../assets/logo.jpeg';

const logo = logoSrc as string;
const isOpen = ref(false);
const mobileOpen = ref(false);
const dropdown = ref<HTMLElement | null>(null);
const toggleBtn = ref<HTMLElement | null>(null);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function closeDropdown() {
  isOpen.value = false;
}

function onClickOutside(e: MouseEvent) {
  const target = e.target as Node;
  if (!dropdown.value || !toggleBtn.value) return;
  if (!dropdown.value.contains(target) && !toggleBtn.value.contains(target)) {
    isOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside);
});
</script>

<style scoped>
.navbar {
  background:#fff;
  border-bottom:1px solid rgba(0,0,0,0.06);
}

.nav-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo {
  height: 120px;
  width: auto;
  max-width: 220px;
  display: block;
  object-fit: contain;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 0;
  padding: 0;
}

.nav-item {
  color:#222;
  text-decoration:none;
  padding:8px 10px;
  border-radius:6px;
  transition:background .12s ease;
  background:none;
  border:0;
}

.nav-item:hover,
.nav-item:focus {
  background:rgba(0,0,0,0.04);
  outline:none;
}

.nav-item-dropdown {
  position:relative;
}

.nav-button {
  background: none;
  border: none;
  cursor: pointer;
  color: #222;
  padding: 8px 10px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font: inherit;
}

.nav-button::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -20px;
  height: 20px;
  background: transparent;
  pointer-events: auto;
}

.chev {
  font-size: 12px;
  opacity: 0.8;
}

.dropdown {
  position:absolute;
  right: 0;
  top: calc(100% + 8px);
  background:#fff;
  border:1px solid rgba(0,0,0,0.08);
  box-shadow:0 6px 18px rgba(0,0,0,0.06);
  border-radius:8px;
  min-width:180px;
  padding:8px 6px;
  z-index:40;
}

.dropdown-item {
  display:block;
  padding:8px 12px;
  color:#222;
  text-decoration:none;
  border-radius:6px;
}

.dropdown-item:hover,
.dropdown-item:focus {
  background:rgba(0,0,0,0.04);
  outline:none;
}

.mobile-toggle {
  display:none;
  background:none;
  border:none;
  font-size:20px;
  cursor:pointer;
}

.mobile-menu {
  display:none;
  max-width:1100px;
  margin:0 auto;
  padding:8px 16px 16px;
  border-top:1px solid rgba(0,0,0,0.04);
}

.mobile-link,
.mobile-sublink {
  display:block;
  padding:10px 0;
  color:#222;
  text-decoration:none;
}

@media (max-width:880px) {
  .nav-links {
    display:none;
  }

  .logo {
    height: 56px;
    max-width: 160px;
  }

  .mobile-toggle {
    display:inline-flex;
    align-items:center;
    gap:6px;
  }

  .mobile-menu {
    display:block;
  }
}
</style>