<template>
  <div class="address pad16 marginb10 f14 cursor">
    <el-row align="middle">
      <el-col :span="18">
        <div class="marginb6">收货人：{{addItem.username}}<span class="marginl10">{{addItem.mobile}}</span></div>
        <div>收货地址：{{addItem.address}}</div>
      </el-col>
      <el-col :span="6" class="address_right right">
        <div v-if="addItem.isdefault==0">
          <span @click="defaultHandler(addItem.id)" class="marginr10">设为默认</span>
          <span @click="$emit('edit',addItem)" class="marginr10">编辑</span>
          <el-popconfirm confirm-button-text="确定" cancel-button-text="取消" :icon="InfoFilled" icon-color="#626AEF" title="确定要删除该地址嘛？" @confirm="delHandler(addItem.id)">
            <template #reference>
              <span>删除</span>
            </template>
          </el-popconfirm>
        </div>
        <div v-else><el-tag class="ml-2" type="danger">默认</el-tag></div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  import {defineProps} from "vue";
  import {ElNotification} from "element-plus";
  defineProps({
    addItem:Object
  })
  // 设为默认
  function defaultHandler(id:string|number){
    console.log(id,'dd');
    ElNotification.success({title:'设为默认地址成功'});
  }

  // 删除
  function delHandler(id:string|number){
    console.log(id,'dd');
    ElNotification.success({title:'删除成功'});
  }
</script>

<style scoped>
  .address{border:1px solid #dedede;}
  .addressactive{border:1px solid #ec7243;}
  .address:hover{border:1px solid #ec7243;}
  .address:hover .address_right{color:#ec7243}
</style>