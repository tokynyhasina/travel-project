import { createRouter, createWebHistory } from "vue-router";
const Home = () =>
    import ('../pages/index.vue');
const About = () =>
    import ('../pages/about.vue');
// import Home from '../pages/index.vue'
// import About from '../pages/about.vue'

const routes = [{
        name: "Home",
        path: "/",
        component: Home,
    },
    {
        name: "About",
        path: "/About",
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;