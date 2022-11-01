<script setup lang="ts">
import { useRouter } from 'vue-router';
import  {useInfoStore} from '../store';
const router = useRouter();
const store = useInfoStore();

const windowHeight=store.windowHeight

const goHome=()=>{
  router.push("/home")
}
const goOrder=()=>{
  router.push("/user/order")
}

</script>

<template>
  <div class="main_wrapper product" :style="{height:windowHeight+'px'}">
    <el-result
      icon="success"
      title="支付成功"
      sub-title="支付单号:119299333"
    >
      <template #extra>
        <el-button color="#ec7243" :dark="isDark" class="custom_btn" @click="goHome">返回首页</el-button>
        <el-button :dark="isDark" class="custom_plain_btn" @click="goOrder">我的订单</el-button>
      </template>
    </el-result>
    <div class="marginb36">
      <el-descriptions
        title="订单信息"
        direction="vertical"
        :column="3"
        :size="size"
        border
      >
        <el-descriptions-item label="订单号">284732875478</el-descriptions-item>
        <el-descriptions-item label="支付时间">2022-11-11 11:00:00</el-descriptions-item>
        <el-descriptions-item label="支付金额">￥333</el-descriptions-item>
        <el-descriptions-item label="收件人">周小姐</el-descriptions-item>
        <el-descriptions-item label="收货号码">1382874837854</el-descriptions-item>
        <el-descriptions-item label="收货地址">苏州市工业园区健康卡简单快捷接口是否健康</el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>


<style scoped>

</style>