<script setup lang="ts">
import {watchEffect,ref} from "vue"
import { useRouter } from 'vue-router';

const router = useRouter();

const toUrl = (routeUrl: string) => {
  router.push(routeUrl)
}
const activeUrl=ref("/home")
watchEffect(() => {
  router.getRoutes().map((item, index) => {
    if(item.path === router.currentRoute.value.path){
      activeUrl.value = router.currentRoute.value.path
    }
  })
})
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
            <el-col :span="8" @click="toUrl('/home')" :class="[{ ec7: activeUrl == '/home' }, 'cursor']">首页</el-col>
            <el-col :span="8" @click="toUrl('/product')" :class="[{ ec7: activeUrl == '/product' }, 'cursor']">产品中心</el-col>
            <el-col :span="8" @click="toUrl('/contact')" :class="[{ ec7: activeUrl == '/contact' }, 'cursor']">联系我们</el-col>
          </el-row>
        </el-col>
        <el-col :span="10">
          <el-row align="middle">
            <el-col :span="12" @click="toUrl('/cart')" :class="[{ ec7: activeUrl == '/cart' }, 'cursor center']">
              <el-badge :value="12" class="item">
                <el-icon size="22px"><ShoppingTrolley /></el-icon>
                <div class="f12">购物车</div>
              </el-badge>
            </el-col>
            <el-col :span="12" @click="toUrl('/user/order')" :class="[{ ec7: activeUrl == '/user/order' }, 'cursor center']">
            <el-icon size="22px"><User /></el-icon>
            <div class="f12">我的</div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
  </el-row>

</template>
