<script setup lang="ts">
import { ref,onMounted,} from 'vue'
const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))

const windowHeight=ref(document.documentElement.clientHeight-231);

onMounted(()=>{
  window.onresize=()=>{
    windowHeight.value=document.documentElement.clientHeight-231
  }
})

const activeMenu=ref("/user/order")

</script>

<template>
  <div class="user">
    <div class="flex main_wrapper" :style="{height:windowHeight+'px'}">
      <el-aside width="200px" style="background:#f4f4f4">
        <el-scrollbar>
          <div class="center f12 pad16 borb">
            <img alt="用户头像" class="bor50 bgselected" src="@/assets/logo.svg" width="70" height="70" />
            <div>jAJSJHH</div>
          </div>
          <el-menu router :default-active="activeMenu" text-color="#333" active-text-color="#e77547">
            <el-sub-menu :index="1" expand-open-icon="false" expand-close-icon="false">
              <template #title>
                <el-icon><Checked /></el-icon>个人中心
              </template>
            </el-sub-menu>
            <el-menu-item index="/user/order" class="bff center">我的订单</el-menu-item>
            <el-sub-menu :index="1" expand-open-icon="false" expand-close-icon="false">
              <template #title>
                <el-icon><UserFilled /></el-icon>订单中心
              </template>
            </el-sub-menu>
            <el-menu-item index="/user/index" class="bff center">我的个人中心</el-menu-item>
            <el-menu-item index="/user/address" class="bff center">收货地址</el-menu-item>
            <!-- <el-menu-item index="/user/cart">购物车</el-menu-item> -->
            <el-menu-item index="/user/collect" class="bff center">我的收藏</el-menu-item>
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