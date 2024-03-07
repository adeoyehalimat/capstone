import * as VueRouter from 'vue-router';
import Registration from "@/views/registration.vue";
import Login from "@/views/login.vue";
import Home from '@/views/home.vue';
import Dashboard from '@/layout/dashboard.vue';
import About from '@/views/about.vue';
import Contact from '@/views/contact.vue';
import Blogs from '@/views/blogs.vue';
import Message from "../components/message.vue";
import Postscreen1 from "../components/postScreen1.vue";
import Postscreen2 from "../components/postScreen2.vue";



const routes =  [
    {path:'/', redirect:'/home', component: Dashboard,
    children : [{path:'/home',name: 'home' , component: Home}, 
    {path:'/about',  component: About},
    {path:'/contact',component: Contact}, 
    {path:'/blogs',name: "Blogs",  
    component: () => import('../components/feedScreen.vue')},  ]
    },
    {path:'/login', component: Login},
    {path:'/registration', component:Registration},
    {path:'/message', component: Message},
   
    {path:'/postscreen1', component: Postscreen1},
    {path:'/postScreen2', component: Postscreen2},
    
    ]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(), routes
 })


 export default router;
