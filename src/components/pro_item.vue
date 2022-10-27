<script setup lang="ts">
import {defineProps} from "vue";
import { useRouter } from 'vue-router';

defineProps({
    proItem:Object,
    hasTitle:{
        default:true,
        type:Boolean
    }
})


const router = useRouter();
const goDetail=(id:string) => {
    router.push('/product/'+id)
}
</script>

<template>
  <div class="">
    <el-card :body-style="{ padding: '0px' }" @click="goDetail(proItem.id)">
      <el-image
        :src="proItem.pic"
        class="mid"
        width="100%"
        :fit="fill"
      />
      <div class="pad10" v-if="hasTitle">
        <div class="marginb6">{{proItem.goodsname}}</div>
        <div class="f12 c999 marginb6">{{proItem.rule}}</div>
        <div class="ec7 f18">￥{{proItem.price}}</div>
      </div>
    </el-card>
  </div>
</template>