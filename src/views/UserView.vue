<script setup lang="ts">
import { ref,watch,onMounted, reactive } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))

const windowHeight=ref(document.documentElement.clientHeight-231);
// watch(windowHeight, (newX) => {
//   console.log(`x is ${newX}`)
// })

onMounted(()=>{
  window.onresize=()=>{
    windowHeight.value=document.documentElement.clientHeight-231
  }
})

const activeMenu=ref("/user")
const defaultOpen=reactive([1,2])

const closeHandler=(event:any)=>{
  defaultOpen.value=[1,2]
}
</script>

<template>
  <div class="user">
    <div class="flex main_wrapper" :style="{height:windowHeight+'px'}">
      <el-aside width="200px" class="b99">
        <el-scrollbar>
          <div class="center f12 pad16 borb">
            <img alt="用户头像" class="bor50 bgselected" src="@/assets/logo.svg" width="70" height="70" />
            <div>jAJSJHH</div>
          </div>
          <el-menu router @close="closeHandler" :default-active="activeMenu" :default-openeds="defaultOpen" text-color="#bfcbd9" active-text-color="#20a0ff">
            <el-sub-menu index="1" expand-open-icon="false" expand-close-icon="false">
              <template #title>
                <el-icon><message /></el-icon>订单中心
              </template>
              <el-menu-item-group>
                <el-menu-item index="/user/order">我的订单</el-menu-item>
                <!-- <el-menu-item index="1-2">Option 2</el-menu-item> -->
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2" expand-open-icon="false" expand-close-icon="false">
              <template #title>
                <el-icon><icon-menu /></el-icon>个人中心
              </template>
              <el-menu-item-group>
                <!-- <template #title>个人中心</template> -->
                <el-menu-item index="/user/index">我的个人中心</el-menu-item>
                <el-menu-item index="/user/address">收货地址</el-menu-item>
                <!-- <el-menu-item index="/user/cart">购物车</el-menu-item> -->
                <el-menu-item index="/user/collect">我的收藏</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>

      <div class="flex1">
        <router-view v-slot="{ Component }">
          <transition>
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </div>
  </div>
  </div>
</template>
<style scoped>
.user .el-menu{border-right: 0;background: #f9f9f9;}
</style>