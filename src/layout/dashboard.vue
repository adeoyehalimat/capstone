<template>
    <div class="parent-div">
        <nav-bar/>
        <home/>
        <about/>
        <blogs/>
        <user/>
        <!-- <base/> -->
       
    
        <router-view/>  
    </div>
  
</template>
<script setup>
import NavBar from "@/components/navbar.vue"; 
import Home from "@/views/home.vue";
import About from "@/views/about.vue";
import Blogs from "@/views/blogs.vue";
import User from "@/views/user.vue";
// import Base from "@/views/base.vue";

</script>




<style scoped>

.parent-div{ 
    width: 1440px;
    height: 3619px;
    top: -644px;
    left: -5927px;
    position: sticky;
    /* background: rgba(255, 255, 255, 1); */
}




</style>