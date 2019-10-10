import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

// console.log(process.env)
const _import = require('./_import_' + process.env.NODE_ENV)

// 404页
const NotFound = _import('notFound/index')
// 登录页
const Login = _import('login/index')
// 主页
const Home = _import('home/index')
// 菜品详情页
const dishDetail = _import('dishDetail/index')
// 购物车
const ShoppingCart = _import('shoppingCart/index')
// 导航按钮组
const TabButtons = _import('tabButtons/index')

Vue.use(Router)

export default new Router({
  // 对于所有路由导航，让页面滚动到顶部
  // scrollBehavior: () => ({
  //   y: 0
  // }),
  routes: [{
      path: '/',
      redirect: '/dish'
    },
    {
      path: '*',
      component: NotFound,
      name: 'notFound'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dish',
      name: 'dish',
      component: TabButtons,
      children: [
        {
          path: '',
          component: Home,
          name: 'home',
          meta: {
            keepAlive: true
          }
        },
        {
          path: 'shoppingCart',
          component: ShoppingCart,
          name: 'shoppingCart'
        }
      ]
    },
    // {
    //   path: '/home',
    //   component: Home,
    //   name: 'home',
    //   meta: {
    //     keepAlive: true
    //   }
    // },
    // {
    //   path: '/shoppingCart',
    //   component: ShoppingCart,
    //   name: 'shoppingCart'
    // }
    // {
    //   path: '/dishDetail/:id',
    //   component: dishDetail,
    //   name: 'dishDetail'
    // }
  ]
})