<script setup lang="ts">
import { defineCustomElement } from 'vue'
import TheNavbar from './components/TheNavbar.vue'
import CardGrid from './components/CardGrid.vue'
import TheFooter from './components/TheFooter.vue'
import TheFeatureSection from './components/TheFeatureSection.vue'
import TheHeaderSection from './components/TheHeaderSection.vue'
import TheCoursePrice from './components/TheCoursePrice.vue'
import ThePopularStack from './components/ThePopularStack.vue'
import TheFAQs from './components/TheFAQs.vue'
import TheTeachersSection from './components/TheTeachersSection.vue'
import TheContactSection from './components/TheContactSection.vue'
import TheRightContentSection from './components/TheRightContentSection.vue'
import TheLeftContentSection from './components/TheLeftContentSection.vue'
import SideBar from './layouts/SideBar.vue'
import Section from './layouts/Section.vue'



</script>
<template class="h-full">

<router-view/>


<Section/>
<!-- <ThePopularStack/> -->

<TheFeatureSection/>

<TheHeaderSection/>
<TheRightContentSection/>
<TheTeachersSection/>
<TheFAQs/>
<TheCoursePrice/>


<TheContactSection/>
<TheFooter/>

    <!-- <div class="flex-1">
<TheNavbar />
 <SideBar />
     <CardGrid />
    </div> -->
</template>


<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  overflow: hidden;
}

input {
  border: none;
  font-size: 15px;
  outline: none;
} */
</style>