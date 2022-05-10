<script setup lang="ts">
import { defineCustomElement } from 'vue'
import TheHomeHeaderSection from '../components/TheHomeHeaderSection.vue'
import TheNavbar from '../components/TheNavbar.vue'
import CardGrid from '../components/CardGrid.vue'
import TheFooter from '../components/TheFooter.vue'
import TheFeatureSection from '../components/TheFeatureSection.vue'
import AboutSection from '../components/AboutSection.vue'
import TheCoursePrice from '../components/TheCoursePrice.vue'
import ThePopularStack from '../components/ThePopularStack.vue'
import TheFAQs from '../components/TheFAQs.vue'
import TheTeachersSection from '../components/TheTeachersSection.vue'
import TheContactSection from '../components/TheContactSection.vue'
import TheRightContentSection from '../components/TheRightContentSection.vue'
// import TheLeftContentSection from '../components/TheLeftContentSection.vue'
import SideBar from '../views/SideBar.vue'
import TextArea from '../components/TextArea.vue'


</script>
<template class="h-full">


<TheHomeHeaderSection/>
<TheFeatureSection/>
<AboutSection/>
<ThePopularStack/>
<TheTeachersSection/>
<TheRightContentSection/>
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

