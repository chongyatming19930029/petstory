export default {
  path: '/user',
  name: 'User',
  component: () => import('@/views/User/Index.vue'),
  children: [
    {
      path: 'login',
      name: 'userLogin',
      component: () => import('@/views/User/Login.vue'),
    }
  ]
}