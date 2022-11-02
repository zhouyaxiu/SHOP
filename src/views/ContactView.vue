<template>
  <div :style="{height:windowHeight+'px'}">
    <div class="">
      <img src="../assets/contact.jpg" width="100%" />
    </div>
    <div class="concat">
      <div class="f12">联系电话：</div>
      <div class="f18 marginb6">联系xxx客服服务中心，请致电 </div>
      <div class="f12 marginb20 c999">每周一到周五，9:00-18:00 </div>
      <div>818-3447-4747</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import  {useInfoStore} from '../store';
  const store = useInfoStore();

  const windowHeight=store.windowHeight
</script>

<style scoped>
  .concat{padding:100px;}
</style>