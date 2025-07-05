import ToDoView from '@/views/ToDoView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ToDoView,
    },
  ],
})

export default router
