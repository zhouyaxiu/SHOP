<script setup lang="ts">
import {defineProps} from "vue";
defineProps({
    addItem:Object
})
// 设为默认
function defaultHandler(){

}
// 编辑
function editHandler(){

}
// 删除
function delHandler(){

}
</script>

<template>
 <!-- :class="{addressactive:addItem.isdefault==1}" -->
  <div class="address pad16 marginb10 f14 cursor">
    <el-row align="middle">
      <el-col :span="18">
        <div class="marginb6">收货人：{{addItem.username}}<span class="marginl10">{{addItem.mobile}}</span></div>
        <div>收货地址：{{addItem.address}}</div>
      </el-col>
      <el-col :span="6" class="address_right">
        <div v-if="addItem.isdefault==0"><span @click="defaultHandler(addItem.id)" class="marginr10">设为默认</span><span @click="editHandler" class="marginr10">编辑</span><span @click="delHandler">删除</span></div>
        <div v-else><el-tag class="ml-2" type="danger">默认</el-tag></div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
.address{border:1px solid #dedede;}
.addressactive{border:1px solid #ec7243;}
.address:hover{border:1px solid #ec7243;}
.address:hover .address_right{color:#ec7243}
</style>