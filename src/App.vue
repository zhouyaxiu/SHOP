<script setup lang="ts">
import {ref} from "vue"
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import CustomInput from './components/inputm.vue'
// const searchText=ref(0)

</script>

<template>
  <header class="main_wrapper">
    <div class="wrapper">
      <Header />
    </div>
  </header>

  <div><RouterView /></div>
  <Footer class="b99">Footer</Footer>
</template>

<style scoped>

</style>
