<script setup lang="ts">
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>

<template>
  <div class="title line">
    <el-container class="layout-container-demo" style="height: 600px">
    <el-aside width="200px">
      <el-scrollbar>
        <div>
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
            <div>jAJSJHH</div>
        </div>
        <el-menu :default-openeds="['1', '2']" text-color="#bfcbd9" active-text-color="#20a0ff">
          <el-sub-menu index="1" expand-open-icon="false" expand-close-icon="false">
            <template #title>
              <el-icon><message /></el-icon>订单中心
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">我的订单</el-menu-item>
              <el-menu-item index="1-2">Option 2</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2" expand-open-icon="false" expand-close-icon="false">
            <template #title>
              <el-icon><icon-menu /></el-icon>个人中心
            </template>
            <el-menu-item-group>
              <!-- <template #title>个人中心</template> -->
              <el-menu-item index="2-1">我的个人中心</el-menu-item>
              <el-menu-item index="2-2">收货地址</el-menu-item>
              <el-menu-item index="2-3">购物车</el-menu-item>
              <el-menu-item index="2-4">我的收藏</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
        <router-view v-slot="{ Component }">
            <transition>
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </transition>
        </router-view>
      <el-header>
        <div class="toolbar">
            <div>我的订单</div>
            <span class="cursor">全部订单</span>
            <el-divider direction="vertical" />
            <span class="cursor">待发货</span>
            <el-divider direction="vertical" />
            <span class="cursor">待收货</span>
            <el-divider direction="vertical" />
            <span class="cursor">已取消</span>
            <el-divider direction="vertical" />
            <span class="cursor">已完成</span>
        </div>
      </el-header>

      <el-main>
        <el-scrollbar>
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>