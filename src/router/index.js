import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>import('../views/home/Home.vue')
const Category = () =>import('../views/category/Category.vue')
const Cart = () =>import('../views/cart/Cart.vue')
const Profile = () =>import('../views/profile/Profile.vue')
const Detail = () =>import('../views/detail/Detail.vue')
const LoginPage =() =>import('../components/common/loginPage/LoginPage.vue')
<<<<<<< HEAD
=======
const AppHome = () => import('../views/AppHome.vue')
const ForgetPWD = () => import('../components/common/loginPage/childComps/ForgetPWD.vue')
>>>>>>> 完成登录注册开发与测试

//1.安装插件
Vue.use(VueRouter)


// 2.创建路由对象
const routes=[
<<<<<<< HEAD
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  },
  {
    path:'/loginPage',
    component:LoginPage
=======
  { path:'',redirect:'/LoginPage'},
  {path: '/',component: LoginPage,redirect:'/LoginPage'},
  {path:'/loginPage',component:LoginPage,},
  {path:'/ForgetPWD',component:ForgetPWD},
  { path: '/AppHome',component: AppHome,
    children:[ 
      {path:'/home',component:Home},
      {path:'/category',component:Category},
      {path:'/cart',component:Cart},
      {path:'/profile',component:Profile},
      {path:'/detail/:iid',component:Detail},
      // {path:'/loginPage',component:LoginPage}
    ]
>>>>>>> 完成登录注册开发与测试
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//导出
export default router
