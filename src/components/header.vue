<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const toUrl = (routeUrl: string) => {
  router.push(routeUrl)
}
</script>

<template>
  <el-row align="middle" class="pad10">
    <el-col :span="4">
      <img alt="Vue logo" class="logo mid" src="@/assets/logo.svg" width="125" height="60" />
    </el-col>
    <el-col :span="20">
      <el-row align="middle" class="f14">
        <el-col :span="14">
          <el-row>
            <el-col :span="8" @click="toUrl('/home')" class="cursor">首页</el-col>
            <el-col :span="8" @click="toUrl('/product')" class="cursor">产品中心</el-col>
            <el-col :span="8" @click="toUrl('/contact')" class="cursor">联系我们</el-col>
          </el-row>
        </el-col>
        <el-col :span="10">
          <el-row align="middle">
            <el-col :span="12" @click="toUrl('/cart')" class="cursor center">
              <el-badge :value="12" class="item">
                <el-icon size="22px"><ShoppingTrolley /></el-icon>
                <div class="f12">购物车</div>
              </el-badge>
            </el-col>
            <el-col :span="12" @click="toUrl('/user/order')" class="cursor center">
            <el-icon size="22px"><User /></el-icon>
            <div class="f12">我的</div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
  </el-row>

</template>
