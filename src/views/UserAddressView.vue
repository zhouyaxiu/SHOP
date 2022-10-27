<script setup lang="ts">
import {ref,reactive} from "vue";
import type {FormInstance,FormRules} from "element-plus";
import Item from '../components/add_item.vue'
interface AddItem {
  id:number;
  username:string,
  mobile:number,
  address:string,
  isdefault:number
}
const addList=ref<AddItem[]>([
  {id:1,username:'作笑颜',mobile:181818181,address:'苏州市工地上干活法国',isdefault:1},
  {id:2,username:'方式告诉对方',mobile:181818181,address:'er也让也容易热议',isdefault:0},
  {id:3,username:'所发生的',mobile:181818181,address:'儿童热呀热呀',isdefault:0},
  {id:4,username:'阿斯弗萨芬',mobile:181818181,address:'威锋网regret',isdefault:0},
  {id:5,username:'热污染',mobile:181818181,address:'二月热呀热呀而已',isdefault:0},
])
const addAddress=()=>{
  dialogVisible.value=true
}
import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
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
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  dialogVisible.value=false;
  formEl.resetFields();
}

const editHandler=(items:any)=>{
  if(items){
    dialogVisible.value=true;
    ruleForm.username=items.username
    ruleForm.mobile=items.mobile
    ruleForm.address=items.address
  }
}
</script>

<template>
  <div class="pad16" style="box-sizing:border-box">
    <div class="f18 flex">
      <span class="flex1">我的地址</span>
      <el-button color="#ec7243" :dark="isDark" class="custom_btn" @click="addAddress">新增地址</el-button>
    </div>
    <div v-for="item in addList" :key="item.id">
      <Item :addItem="item" @edit="editHandler" />
    </div>
  </div>
  <!-- 新增地址弹框 -->
  <el-dialog
    v-model="dialogVisible"
    title="新增地址"
    width="30%"
    :before-close="handleClose"
  >
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item label="收货人" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="联系电话" prop="mobile">
        <el-input type="number" v-model="ruleForm.mobile" />
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="ruleForm.address" type="textarea" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary"  @click="submitForm(ruleFormRef)">确认</el-button>
        <el-button @click="resetForm(ruleFormRef)">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>