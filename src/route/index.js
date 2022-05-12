import * as VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import SpeciaLite from '../components/Specailte.vue'
import ReservaTion from '../components/Reservation.vue'
import ConTact from '../components/Contact.vue'
import EveNement from '../components/Evenement.vue'
import SpeciAl from '../components/Spec.vue'
import EvReussi from '../components/Reservreussie.vue'

const routes = [
    {path: '/', redirect: '/home'},
    {path: '/home', component: HelloWorld},
    {path: '/spec', component: SpeciaLite},
    {path: '/res', component: ReservaTion},
    {path: '/cont', component: ConTact},
    {path: '/event', component: EveNement},
    {path: '/special', component: SpeciAl},
    {path: '/evreussi', component: EvReussi, name: 'EvReussi'},


]

const router = new VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
  })

export default router