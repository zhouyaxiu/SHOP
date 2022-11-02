<template>
  <div class="main_wrapper cart pad16">
    <el-table
      ref="multipleTableRef"
      :data="cartList"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-if="cartList.length!=0"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column label="商品信息" width="120">
        <template #default="scope">{{ scope.row.goodsname }}</template>
      </el-table-column>
      <el-table-column property="goodsprice" label="单价" width="120">
        <template #default="scope">
          <span class="f12">¥ </span>{{scope.row.goodsprice}}
        </template>
      </el-table-column>
      <el-table-column label="数量">
        <template #default="scope">
          <el-input-number v-model="scope.row.goodsnum" :min="1" @change="handleChange($event,scope.$index)" />
        </template>
      </el-table-column>
      <el-table-column property="count" label="金额">
        <template #default="scope">
          <span class="f12">¥ </span>{{scope.row.count}}
        </template>
      </el-table-column>

      <el-table-column label="操作" minWidth="120">
        <template #default="scope">
          <el-button size="small" @click="moveHandler(scope.$index, scope.row)">移入收藏夹</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="cartmsg pad10 f14" v-if="cartList.length!=0">
      <el-row class="row-bg" justify="space-between" align="middle">
        <el-col :span="3"><el-checkbox class="mid" @change="allCheckHandler">全选</el-checkbox><span class="marginl10 mid cursor">删除</span></el-col>
        <el-col :span="9">
          <span @click="clearHandler" class="marginr10 cursor">清空购物车</span>
          <span @click="moveHandler" class="cursor">移入收藏夹</span>
        </el-col>
        <el-col :span="10" class="right">
          <span>已选商品 {{count}} 件</span>
          <span>合计（不含运费）：￥1200</span>
        </el-col>
        <el-col :span="2" class="right">
          <el-button @click="settleHandler" color="#e25a3a">结算</el-button>
        </el-col>
      </el-row>
    </div>
    <el-empty description="您的购物车空空如也。。。" v-if="cartList.length==0" />
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="热卖推荐" name="first">
        <el-row :gutter="10">
          <el-col :span="4" v-for="item in proList" :key="item.id">
            <Item :proItem="item" />
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="最近浏览过的" name="second">Config</el-tab-pane>
      <el-tab-pane label="猜你喜欢" name="third">Role</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
  import {ref,computed} from "vue";
  import Item from '../components/pro_item.vue';
  import type {cartItem,ProItem} from "../type/BaseType";
  import  {useInfoStore} from '../store';
  import {ElNotification} from "element-plus";
  const store = useInfoStore();
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const multipleTableRef = ref();

  const multipleSelection = ref<cartItem[]>([]);
  const cartList:cartItem[]=store.cartList;
  // 产品
  const proList:ProItem[]=store.proList;

  const count=computed((val)=>{
    let sum=0;
    cartList.map((item)=>{return sum+(Number(item.goodsprice)*item.goodsnum)},0)
    return sum;
  })

  const handleSelectionChange = (val: cartItem[]) => {
    multipleSelection.value = val
  }

  // 删除
  const handleDelete=(index:number,row:cartItem)=>{

  }

  // 移入收藏夹
  const moveHandler=(index:number,row:cartItem)=>{
    if(multipleTableRef.value.getSelectionRows().length==0 || !index){
      ElNotification.error({title:'没有选中商品'});
      return;
    }
    // 移入全部选中
    console.log(multipleTableRef.value.getSelectionRows())
    // 单个选中
    // console.log(index,row,'roww')
  }

  // 结算
  const settleHandler=(index:number,row:cartItem)=>{
    router.push("/confirm")
  }

  // 清空购物车
  const clearHandler=()=>{
    store.cartList=[]
  }

  // 数量变动
  const handleChange = (value: number,index:number) => {
    cartList[index].count=Number(cartList[index].goodsprice)*cartList[index].goodsnum
    return count
  }

  const activeName=ref('first')
  const handleClick=(tab:any,event:any)=>{
    console.log(tab,event)
  }

  // 全选
  const allCheckHandler=()=>{
    multipleTableRef.value.toggleAllSelection();
  }
</script>

<style scoped>
  .cartmsg{background:#ededed}
</style>

<style>
  .cart .el-tabs__item.is-active,.cart .el-tabs__item:hover{color:#ec7243;}
  .cart .el-tabs__active-bar{background: #ec7243;}
  .cart .el-checkbox__input.is-checked .el-checkbox__inner{background: #ec7243!important;border-color:#ec7243!important}
  .cart .el-checkbox__input.is-checked+.el-checkbox__label{color:#ec7243;}
</style>