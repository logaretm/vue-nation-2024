import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import SelectDemo from '@/pages/SelectDemo.vue';
import InputTypeDemo from '@/pages/InputTypeDemo.vue';

const app = createApp(App);

const routes = [
  {
    component: SelectDemo,
    path: '/',
  },
  {
    component: InputTypeDemo,
    path: '/input-type',
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

app.use(router);

app.mount('#app');
