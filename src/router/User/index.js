import { $_QueryToObj, $_ObjToQuery } from "../../assets/js/my"
export default {
  path: '/user',
  name: 'User',
  component: () => import('@/views/User/Index.vue'),
  redirect: to => {
    const User = $_QueryToObj( localStorage.getItem("user") );
    return User.isLogin == "1" ? { name: "User-Center" } : { name: "Login" };
  },
  children: [
    {
      path: 'login',
      name: 'Login',
      component: () => import('@/views/User/Login.vue'),
    },
    {
      path: 'register',
      name: 'Register',
      component: () => import('@/views/User/Login.vue'),
    },
    {
      path: 'user-center',
      name: 'User-Center',
      component: () => import('@/views/User/UserCenter.vue'),
    },
  ]
}