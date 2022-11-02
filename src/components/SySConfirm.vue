<template>
  <el-popconfirm :title="title" confirm-button-text="确定" cancel-button-text="取消" @confirm="onConfirm">
    <template #reference>
      <slot name="content"></slot>
    </template>
  </el-popconfirm>
</template>

<script setup lang="ts">
  import {defineProps} from "vue";
  //定义弹框参数类型
  interface DialogProps {
    title: string;
    visible: boolean;
    width: number;
    height: number;
  }
  //接收父组件传递数据
  //withDefaults：设置参数的默认值
  const props = withDefaults(defineProps<DialogProps>(), {
    title: "确定要删除该条数据嘛?",
    visible: false,
    width: 630,
    height: 280,
  });
  //注册事件
  const emit = defineEmits(["onClose", "onConfirm"]);
  const onClose = () => {
    emit("onClose");
  };
  const onConfirm = () => {
    emit("onConfirm");
  };
</script>