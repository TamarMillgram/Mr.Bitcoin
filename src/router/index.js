import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactIndex from '../views/ContactIndex.vue'
import ContactDetails from '../views/ContactDetails.vue'
import ContactEdit from '../views/ContactEdit.vue'
import Statistics from '../views/Statistics.vue'

const routerOptions = {
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactIndex,
        },
        {
            path: '/contact/:id',
            name: 'details',
            component: ContactDetails,
        },
        {
            path: '/contact/edit/:id?',
            name: 'edit',
            component: ContactEdit,
        },
        {
          path: '/statistics',
          name: 'Statistics',
          component: Statistics,
      },
        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (About.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import('../pages/AboutView.vue'),
        // },
    ],
}
const router = createRouter(routerOptions)

export default router