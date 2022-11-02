<template>
  <div class="main_wrapper confirm">
    <div class="marginb36 padt10">
      <div class="bold f18 borb padb10 marginb10">选择收货地址</div>
      <div class="flex acenter f14 marginb10">
        <div><el-icon><LocationInformation /></el-icon></div>
        <div class="flex1 marginl10">
          <div class="marginb6">收货人：蓝梦 818838383</div>
          <div>实质上是经济恢复计划分解时间房间号多少发实质上是经济恢复计划分解时间房间号多少发</div>
        </div>
        <div>
          <el-button color="#ec7243" :dark="isDark" class="custom_btn">新增地址</el-button>
          <el-button color="#ec7243" :dark="isDark" class="custom_plain_btn" plain>管理地址</el-button>
        </div>
      </div>
    </div>
    <div class="marginb36">
      <div class="bold f18 borb padb10 marginb10">配送方式</div>
      <div>顺丰快递</div>
    </div>
    <div class="marginb36">
      <div class="bold f18 borb padb10 marginb10">支付方式</div>
      <div>
        <el-radio-group v-model="radio1" class="ml-4" text-color="#ffffff" fill="#333333">
          <el-radio-button label="1" size="large">支付宝支付</el-radio-button>
          <el-radio-button label="2" size="large">微信支付</el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div>
      <div class="bold f18 borb padb10 marginb10">确认订单信息</div>
      <div class="marginb20">
        <el-table
          ref="multipleTableRef"
          :data="cartList"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column label="商品信息" minWidth="220">
            <template #default="scope">{{ scope.row.goodsname }}</template>
          </el-table-column>
          <el-table-column property="goodsprice" label="单价" width="120">
            <template #default="scope">
              <span class="f12">¥ </span>{{scope.row.goodsprice}}
            </template>
          </el-table-column>
          <el-table-column label="数量">
            <template #default="scope">
              <el-input-number style="width:120px" v-model="scope.row.goodsnum" :min="1" @change="handleChange($event,scope.$index)" />
            </template>
          </el-table-column>
          <el-table-column property="count" label="金额">
            <template #default="scope">
              <span class="f12">¥ </span>{{scope.row.count}}
            </template>
          </el-table-column>
          <el-table-column label="操作" minWidth="100">
            <template #default="scope">
              <el-button size="small" @click="moveFav(scope.$index, scope.row)">移入收藏夹</el-button>
              <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-row>
        <el-col :span="2" class="right"><span>给我留言：</span></el-col>
        <el-col :span="22">
          <el-input v-model="textarea2" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" placeholder="留言已和商家确认" />
        </el-col>
      </el-row>
    </div>
    <el-divider />
    <div class="right marginb20 f14">
      <span>已选商品 1 件</span>
      <span class="marginr30">合计（不含运费）：<span class="ec7">￥1200</span></span>
      <el-button color="#ec7243" size="large" :dark="isDark" class="custom_btn" @click="settleHandler">结算</el-button>
    </div>
  </div>
  <!-- 物流弹框 -->
  <sys-dialog :visible="dialog.visible" @onClose="onClose" @onConfirm="onConfirm">
    <template v-slot:content>
      <addAddress @onClose="onClose" @onConfirm="onConfirm"></addAddress>
    </template>
  </sys-dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import type {cartItem} from "../type/BaseType"
  import SysDialog from "@/components/SysDialog.vue";
  import useDialog from "@/hooks/useDialog";
  const { dialog, onClose, onConfirm } = useDialog();
  import {ElNotification} from "element-plus";
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const radio1 = ref('1');

  const cartList:cartItem[]=[
    {
      id:1,
      goodsname: '阿达说法萨芬',
      goodsprice: '192',
      goodsnum: 1,
      count:192
    },{
      id:2,
      goodsname: '而恒天然恒天然和',
      goodsprice: '345',
      goodsnum: 2,
      count:192
    },{
      id:3,
      goodsname: '阿发是否',
      goodsprice: '13',
      goodsnum: 3,
      count:192
    },
    
  ]
 
  // 结算
  const settleHandler=()=>{
    router.push("/pay");
  }

  //移入收藏夹
  const moveFav=(index:number,item:object)=>{
    ElNotification.success({title:'移入收藏夹成功'})
  }

  // 删除
  const handleDelete=(index:number,item:object)=>{
    ElNotification.success({title:'删除成功'})
  }
</script>