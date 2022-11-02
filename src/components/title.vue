<template>
  <div class="title">
    <el-icon class="mid marginr10" size="20px">
      <template #default>
        <img src="../assets/icon2.png" width="30"  />
      </template>
    </el-icon><span class="relative line">{{title}}</span>
  </div>
</template>

<script setup lang="ts">
  import {defineProps} from "vue";
  defineProps({
    title:String
  })
</script>