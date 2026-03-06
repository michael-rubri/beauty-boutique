import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import BeautyCenter from '../pages/BeautyCenter.vue'

import Nails from '../pages/Nails.vue'
import Epilazione from "../pages/Epilazione.vue"
import Massaggi from "../pages/Massaggi.vue"
import Laminazione from "../pages/Laminazione.vue"
import MakeUp from "../pages/MakeUp.vue"

import EsteticaSensoriale from "../pages/estetica_sensoriale/EsteticaSensoriale.vue"
import RitualeHimalaya from "../pages/estetica_sensoriale/RitualeHimalaya.vue"
import RitualePolinesia from "../pages/estetica_sensoriale/RitualePolinesia.vue"
import RitualeAmazzonia from "../pages/estetica_sensoriale/RitualeAmazzonia.vue"
import RitualeMarocco from "../pages/estetica_sensoriale/RitualeMarocco.vue"
import RitualeIndia from "../pages/estetica_sensoriale/RitualeIndia.vue"

import EsteticaAvanzata from "../pages/estetica_avanzata/EsteticaAvanzata.vue"
import EpilazioneLaser from "../pages/estetica_avanzata/EpilazioneLaser.vue"
import TrattamentiVisoAvanzati from "../pages/estetica_avanzata/TrattamentiVisoAvanzati.vue"
import TrattamentiCorpoAvanzati from "../pages/estetica_avanzata/TrattamentiCorpo.vue"

import Tecnologie from "../pages/tecnologie/Tecnologie.vue"
import BeautyQueen from "../pages/tecnologie/BeautyQueen.vue"
import PressoBeauty from "../pages/tecnologie/PressoBeauty.vue"
import BeautySensorialShower from "../pages/tecnologie/BeautySensorialShower.vue";

import Contatti from '../pages/Contatti.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/beauty-center', name: 'Beauty Center', component: BeautyCenter },

    { path: '/servizi/nails', name: 'Nails', component: Nails },
    { path: '/servizi/epilazione', name: 'Epilazione', component: Epilazione },
    { path: '/servizi/massaggi', name: 'Massaggi', component: Massaggi },
    { path: '/servizi/laminazione', name: 'Laminazione', component: Laminazione },
    { path: '/servizi/makeup', name: 'MakeUp', component: MakeUp },

    { path: '/servizi/estetica-sensoriale', name: 'Estetica Sensoriale', component: EsteticaSensoriale },
    { path: '/servizi/estetica-sensoriale/rituale-himalaya', name: 'Rituale Himalaya', component: RitualeHimalaya },
    { path: '/servizi/estetica-sensoriale/rituale-polinesia', name: 'Rituale Polinesia', component: RitualePolinesia },
    { path: '/servizi/estetica-sensoriale/rituale-amazzonia', name: 'Rituale Amazzonia', component: RitualeAmazzonia },
    { path: '/servizi/estetica-sensoriale/rituale-marocco', name: 'Rituale Marocco', component: RitualeMarocco },
    { path: '/servizi/estetica-sensoriale/rituale-india', name: 'Rituale India', component: RitualeIndia },

    { path: '/servizi/estetica-avanzata', name: 'Estetica Avanzata', component: EsteticaAvanzata },
    { path: '/servizi/estetica-avanzata/epilazione-laser', name: 'Epilazione Laser', component: EpilazioneLaser },
    { path: '/servizi/estetica-avanzata/trattamenti-viso-avanzati', name: 'Trattamenti Viso Avanzati', component: TrattamentiVisoAvanzati },
    { path: '/servizi/estetica-avanzata/trattamenti-corpo-avanzati', name: 'Trattamenti Corpo Avanzati', component: TrattamentiCorpoAvanzati },

    { path: '/tecnologie', name: 'Tecnologie', component: Tecnologie },
    { path: '/tecnologie/beauty-queen', name: 'Beauty Queen', component: BeautyQueen },
    { path: '/tecnologie/presso-beauty', name: 'Presso Beauty', component: PressoBeauty },
    { path: '/tecnologie/beauty-sensorial-shower', name: 'Beauty Sensorial Shower', component: BeautySensorialShower },

    { path: '/contatti', component: Contatti }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})