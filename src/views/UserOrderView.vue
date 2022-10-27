<script setup lang="ts">

</script>

<template>
  <div class="userorder">
    <el-header>
      <div class="toolbar f14">
          <div class="f18 marginb20">我的订单</div>
          <span class="cursor ec7">全部订单</span>
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
      <el-scrollbar class="">
        <el-card class="box-card marginb10">
          <template #header>
            <div class="f12 flex b99 acenter c999">
              <span class="flex1">订单号：9198383838  下单时间：2022-11-11 12:00:00</span>
              <span>已收货</span>
            </div>
          </template>
          <div v-for="o in 2" :key="o" class="borb padb10 padt10 f14">
            <el-row :gutter="10" align="middle">
              <el-col :span="4">
                <img width="100" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="">
              </el-col>
              <el-col :span="8">
                <div>
                  <div class="marginb6 bold f16">服装一号</div>
                  <div class="marginb6">黑色</div>
                  <div>X1</div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="center">
                  <div class="marginb6">已发货</div>
                  <div class="ec7"><el-icon size="18px" class="mid"><Van /></el-icon>查看物流</div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="center">
                  <div>¥344</div>
                  <div>(支付宝支付)</div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="center">
                  <div class="marginb6"><el-button color="#ec7243" :dark="isDark" class="custom_btn">确认收货</el-button></div>
                  <div class="marginb6"><el-button plain class="custom_plain_btn">订单详情</el-button></div>
                  <div><el-button color="#333" plain text>取消订单</el-button></div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
        <el-card class="box-card marginb10">
          <template #header>
            <div class="f12 flex b99 acenter c999">
              <span class="flex1">订单号：9198383838  下单时间：2022-11-11 12:00:00</span>
              <span>已收货</span>
            </div>
          </template>
          <div v-for="o in 1" :key="o" class="borb padb10 padt10 f14">
            <el-row :gutter="10" align="middle">
              <el-col :span="4">
                <img width="100" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="">
              </el-col>
              <el-col :span="8">
                <div>
                  <div class="marginb6 bold f16">服装一号</div>
                  <div class="marginb6">黑色</div>
                  <div>X1</div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="center">
                  <div class="marginb6">已发货</div>
                  <div class="ec7"><el-icon size="18px" class="mid"><Van /></el-icon>查看物流</div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="center">
                  <div>¥344</div>
                  <div>(支付宝支付)</div>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="center">
                  <div class="marginb6"><el-button color="#ec7243" :dark="isDark" class="custom_btn">确认收货</el-button></div>
                  <div class="marginb6"><el-button plain class="custom_plain_btn">订单详情</el-button></div>
                  <div><el-button color="#333" plain text>取消订单</el-button></div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-scrollbar>
    </el-main>
  </div>
</template>
<style scoped>
.user .el-card__header div{padding:6px 10px;}
</style>
<style>
.user .el-card__header{padding:0;}
</style>