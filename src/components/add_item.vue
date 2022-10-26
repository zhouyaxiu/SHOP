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
    <div class="title line">
        <el-row>
            <el-col :span="18">
                <div>收货人：{{addItem.username}}{{addItem.mobile}}}</div>
                <div>收货地址：{{addItem.address}}</div>
            </el-col>
            <el-col :span="6">
                <div v-if="addItem.isdefault==0"><span @click="defaultHandler(addItem.id)">设为默认</span><span @click="editHandler" @click="defaultHandler(addItem.id)">编辑</span><span @click="delHandler" @click="defaultHandler(addItem.id)">删除</span></div>
                <div v-else><el-tag class="ml-2" type="danger">默认</el-tag></div>
            </el-col>
        </el-row>
    </div>
</template>