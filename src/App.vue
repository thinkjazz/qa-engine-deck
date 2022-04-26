<script setup lang="ts">
import { defineCustomElement } from 'vue'
import TheNavbar from './components/TheNavbar.vue'
import SideBar from './layouts/SideBar.vue'
import CardGrid from './components/CardGrid.vue'

</script>
<template class="h-full">

<TheNavbar />
  <CardGrid />
    <!-- <div class="flex-1">
 <SideBar />

    </div> -->
</template>

