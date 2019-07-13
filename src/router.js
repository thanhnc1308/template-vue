import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/test',
            component: () => import('./components/TestRouter.vue'),
            meta: {
                rule: 'admin'
            }
        }, 
    ]
})