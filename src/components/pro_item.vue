<template>
  <div class="cursor">
    <el-card :body-style="{ padding: '0px' }" @click="goDetail(proItem.id)">
      <el-image :src="proItem.pic" class="mid" width="100%" :fit="fill" />
      <div class="pad10" v-if="hasTitle">
        <div class="marginb6">{{proItem.goodsname}}</div>
        <div class="f12 c999 marginb6">{{proItem.rule}}</div>
        <div class="ec7 f18">￥{{proItem.price}}</div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
  import {defineProps} from "vue";
  import { useRouter } from 'vue-router';
  const router = useRouter();

  defineProps({
    proItem:Object,
    hasTitle:{
      default:true,
      type:Boolean
    }
  })
  
  const goDetail=(id:string) => {
    router.push('/product/'+id)
  }
</script>

<style scoped>
  .cursor .el-card:hover{background: #ec7243;}
  .cursor .el-card:hover .marginb6,.cursor .el-card:hover .ec7,.cursor .el-card:hover .c999{color:#fff;}
</style>