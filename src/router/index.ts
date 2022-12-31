import { createRouter, createWebHistory } from 'vue-router'
//1. createRouter 创建路由实例
//2. history是路由模式，分别有hash模式，history模式; createWebHistory()是开启history模式[http://xxx/usr]，createWebHashHistory()是开启hash模式[http://xxx/#/usr]
//3. vite的配置 improt.meta.env.BASE_URL是路由的基准地址，默认是/

//4. 使用createRouter()创建实例
const router = createRouter({
  //5. 设置路由模式，import.meta.env.BASE_URL的值来自vite.config.ts的base属性的值
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue')
    },
    {
      path: '/',
      redirect: '/home',
      component: () => import('@/views/Layout/index.vue'),
      children: [
        {
          path: '/home',
          component: () => import('@/views/Layout/Home/index.vue')
        },
        {
          path: '/article',
          component: () => import('@/views/Layout/Article/index.vue')
        },
        {
          path: '/notify',
          component: () => import('@/views/Layout/Notify/index.vue')
        },
        {
          path: '/user',
          component: () => import('@/views/Layout/User/index.vue')
        }
      ]
    }
  ]
})

export default router
