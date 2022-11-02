<template>
  <!-- 新增地址弹框 -->
  <el-form ref="ruleFormRef" :model="ruleForms" :rules="rules" label-width="120px" class="demo-ruleForm" :size="formSize" status-icon>
    <el-form-item label="收货人" prop="username">
      <el-input v-model="ruleForms.username" />
    </el-form-item>
    <el-form-item label="联系电话" prop="mobile">
      <el-input type="number" v-model="ruleForms.mobile" />
    </el-form-item>
    <el-form-item label="地址" prop="address">
      <el-input v-model="ruleForms.address" type="textarea" />
    </el-form-item>
  </el-form>
  <!-- <template #footer>
    <span class="dialog-footer">
      <el-button type="primary"  @click="submitForm(ruleFormRef)">确认</el-button>
      <el-button @click="resetForm(ruleFormRef)">取消</el-button>
    </span>
  </template> -->
</template>

<script setup lang="ts">
  import {ref,reactive,toRefs} from "vue";
  import type {FormInstance,FormRules} from "element-plus";
  import { ElMessageBox,ElNotification } from 'element-plus';
  import {defineProps} from "vue";
  const props=defineProps({
    ruleForm:Object
  })
  const {ruleForm}=toRefs(props)
  const handleClose = (done: () => void) => {
    ElMessageBox.confirm('确定要放弃新增地址嘛?',{
      confirmButtonText: '确定',
      cancelButtonText: '取消',
    })
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
  }
  const ruleFormRef = ref<FormInstance>();
  console.log(ruleForm,'propsprops');
  const ruleForms = ruleForm || reactive({
    username: '',
    mobile:"",
    address:""
  })
  const rules = reactive<FormRules>({
    username: [
      { required: true, message: '收货人必填', trigger: 'blur' },
      // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    mobile: [
      { required: true, message: '手机号必填', trigger: 'blur' },
      { min: 11, max: 11, message: '手机号位数必须为11位', trigger: 'blur' },
    ],
    address: [
      { required: true, message: '地址必填', trigger: 'blur' },
    ],
  })
  // 确定
  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      if (valid) {
        console.log('submit!')
        ElNotification.success({title:'新增地址成功'})
      } else {
        console.log('error submit!', fields)
      }
    })
  }
  // 取消
  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    // visible.value=false;
    formEl.resetFields();
  }
</script>