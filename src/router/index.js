import * as VueRouter from 'vue-router';
import SignUp from "../views/signUp.vue";
import Login from "@/views/login.vue";
import Home from '@/views/home.vue';
import Dashboard from '@/layout/dashboard.vue';
import About from '@/views/about.vue';
import Contact from '@/views/contact.vue';
import Blogs from '@/views/blogs.vue';



const routes =  [
    {path:'/', component: Dashboard},
    {path:'/home', component: Home},
    {path:'/about', component: About}, 
    {path:'/contact', component: Contact}, 
    {path:'/blogs', component: Blogs},  
    {path:'/login', component: Login},
    {path:'/SignUp', component: SignUp},
    
    
    ]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(), routes
 })


 export default router;
