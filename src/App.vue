<template>
  <header class="borb">
    <Header class="main_wrapper" />
  </header>

  <RouterView />
  <Footer class="b99">Footer</Footer>
</template>

<script setup lang="ts">
  import {onMounted} from "vue"
  import Header from './components/header.vue'
  import Footer from './components/footer.vue'
  onMounted(()=>{
    // window.onresize=()=>{
    //   // windowHeight.value=document.documentElement.clientHeight-231
    // }
  })
</script>