import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Cart from '../views/Cart.vue'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component:Home,
},

    {
        path: '/cart', component: Cart,
        name: 'Cart',
        component: Cart,
    },

    {
        path: '/users', component: User,
        name: 'User',
        component: User,
    },

    {   
        path: '/about', component: About,
        name: 'About',
        component: About,
    },

    {
        path: '/contact', component: Contact,
        name: 'Contact',
        component: Contact,
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;