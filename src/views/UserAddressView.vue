<template>
  <div class="pad16" style="box-sizing:border-box">
    <div class="f18 flex marginb20">
      <span class="flex1">我的地址</span>
      <el-button color="#ec7243" :dark="isDark" class="custom_btn" @click="address">新增地址</el-button>
    </div>
    <div v-for="item in addList" :key="item.id">
      <Item :addItem="item" @edit="editHandler" />
    </div>
  </div>
  <!-- 物流弹框 -->
  <sys-dialog :visible="dialog.visible" @onClose="onClose" @onConfirm="onConfirm">
    <template v-slot:content>
      <addAddress :ruleForm="ruleForm"></addAddress>
    </template>
  </sys-dialog>
</template>

<script setup lang="ts">
  import {ref,reactive} from "vue";
  import type {FormInstance,FormRules} from "element-plus";
  import Item from '../components/add_item.vue';
  import SysDialog from "@/components/SysDialog.vue";
  import addAddress from '../components/addAddress.vue';
  import useDialog from "@/hooks/useDialog";
  const { dialog, onClose, onConfirm } = useDialog();
  import type {AddItem} from "../type/BaseType";

  const addList=ref<AddItem[]>([
    {id:1,username:'作笑颜',mobile:181818181,address:'苏州市工地上干活法国',isdefault:1},
    {id:2,username:'方式告诉对方',mobile:181818181,address:'er也让也容易热议',isdefault:0},
    {id:3,username:'所发生的',mobile:181818181,address:'儿童热呀热呀',isdefault:0},
    {id:4,username:'阿斯弗萨芬',mobile:181818181,address:'威锋网regret',isdefault:0},
    {id:5,username:'热污染',mobile:181818181,address:'二月热呀热呀而已',isdefault:0},
  ])
  const address=()=>{
    dialog.visible = true;
  }
  const ruleForm=reactive({
    username: '',
    mobile:"",
    address:""
  })
  const editHandler=(items:any)=>{
    if(items){
      dialog.visible = true;
      ruleForm.username=items.username
      ruleForm.mobile=items.mobile
      ruleForm.address=items.address
    }
  }
</script>