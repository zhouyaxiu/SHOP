<script setup lang="ts">
import {defineProps} from "vue";
defineProps({
  title:String
})
</script>

<template>
  <div class="title">
    <el-icon class="mid marginr10"><Edit /></el-icon><span class="relative line">{{title}}</span>
  </div>
</template>