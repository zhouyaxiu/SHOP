<template>
  <div class="pad16">
    <div class="f18 flex">
      <span class="flex1">我的信息</span>
    </div>
  </div>
  <el-main>
    <el-row :gutter="20">
      <el-col :span="6" :offset="6">
        用户名：lanmeng<span class="f12 marginl10 cursor" @click="dialogVisible=true;">修改</span>
      </el-col>
    </el-row>
  </el-main>
  <!-- 新增地址弹框 -->
  <el-dialog v-model="dialogVisible" title="修改用户名" width="30%" :before-close="handleClose">
    <el-form ref="ruleFormRef" :model="ruleForm" label-width="100px" status-icon>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="username" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" color="#ec7243" @click="submitForm(ruleFormRef)">确认</el-button>
        <el-button @click="resetForm(ruleFormRef)">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
  import {ref} from "vue";
  import { ElMessageBox,ElNotification } from 'element-plus';
  import type {FormInstance,FormRules} from "element-plus";

  const username=ref("");
  const dialogVisible = ref(false);

  const handleClose = (done: () => void) => {
    ElMessageBox.confirm('确定要关闭该对话框嘛？')
      .then(() => {
        done()
      })
      .catch(() => {
        // catch error
      })
  }

  const submitForm = async (formEl: FormInstance | undefined) => {
    console.log(formEl,'formEl')
    if(!username.value){
      ElNotification.error({title:'用户名不能为空'});
    }
    dialogVisible.value=false;
  }

  const resetForm = (formEl: FormInstance | undefined) => {
    dialogVisible.value=false;
    username.value="";
  }

</script>