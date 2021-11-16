import Vue from "vue";
import VueRouter from "vue-router";

// 懒加载
const Home = () => import('../Views/home/Home');
const Cart = () => import('../Views/cart/Cart')
const Category = () => import('../Views/category/Category')
const Profile = () => import('../Views/profile/Profile')


//1.安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/profile',
        component: Profile
    },

]

const router = new VueRouter({
    routes,
    mode: 'history'
})

//3.导出路由
export default router