<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const toUrl = (routeUrl: string) => {
  console.log(routeUrl)
  router.push(routeUrl)
}
</script>

<template>
  <el-row align="middle" class="pad10">
    <el-col :span="4">
      <img alt="Vue logo" class="logo mid" src="@/assets/logo.svg" width="125" height="60" />
    </el-col>
    <el-col :span="20">
      <el-row :align="middle">
        <el-col :span="14">
          <el-row>
            <el-col :span="8" @click="toUrl('/home')">首页</el-col>
            <el-col :span="8" @click="toUrl('/product')">产品中心</el-col>
            <el-col :span="8" @click="toUrl('/contact')">联系我们</el-col>
          </el-row>
        </el-col>
        <el-col :span="10">
          <el-row>
            <el-col :span="12" @click="toUrl('/cart')">购物车</el-col>
            <el-col :span="12" @click="toUrl('/user')">我的</el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
  </el-row>

</template>

<style>

</style>
