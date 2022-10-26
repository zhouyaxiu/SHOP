<script setup lang="ts">
import {ref,computed,watchEffect} from "vue"
// import {TabsPaneContext} from "element-plus"

interface cartItem{
  id:number
  goodsname:string
  goodsprice:string
  goodsnum:number,
  count:number
}
const multipleSelection = ref<cartItem[]>([])
const count=computed((val)=>{
  let sum=0;
  cartList.map((item)=>{return sum+(Number(item.goodsprice)*item.goodsnum)},0)
  console.log(sum,'sis')
  return sum;
})
// watchEffect(()=>{
//   let sum=0;
//   cartList.map((item)=>{return sum+(Number(item.goodsprice)*item.goodsnum)},0)
//   console.log(sum,'sis')
// })
const handleSelectionChange = (val: cartItem[]) => {
  multipleSelection.value = val
}
// 移入收藏夹
const handleEdit=(index:number,row:cartItem)=>{
  console.log(index,row,'roww')
}
// 删除
const handleDelete=(index:number,row:cartItem)=>{

}
// 移入收藏夹
const moveHandler=(index:number,row:cartItem)=>{

}
import { useRouter } from 'vue-router';

const router = useRouter();
// 结算
const settleHandler=(index:number,row:cartItem)=>{
  router.push("/confirm")
}
// 清空购物车
const clearHandler=(index:number,row:cartItem)=>{

}
// 数量变动
const handleChange = (value: number,index:number) => {
  cartList[index].count=Number(cartList[index].goodsprice)*cartList[index].goodsnum
  console.log(value,index,cartList,'skskks')
  return count
}
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

const activeName=ref('first')
const handleClick=(tab:any,event:any)=>{
  console.log(tab,event)
}


// 产品
import Item from '../components/pro_item.vue'
interface ProItem {
  id:number
  goodsname:string
  pic:string
  sale:number
  rule:string
  price:number
}
const proList=ref<ProItem[]>([
  {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:0,sale:100,rule:'性感',price:100},
  {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:1,sale:100,rule:'性感',price:100},
  {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:2,sale:100,rule:'性感',price:100},
  {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:3,sale:100,rule:'性感',price:100},
  {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:4,sale:100,rule:'性感',price:100},
  {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:5,sale:100,rule:'性感',price:100},
])
</script>

<template>
  <div class="main_wrapper">
    <el-table
      ref="multipleTableRef"
      :data="cartList"
      style="width: 100%"
      @selection-change="handleSelectionChange"
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
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">移入收藏夹</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="cartmsg pad10 f14">
      <el-row class="row-bg" justify="space-between" align="middle">
        <el-col :span="3"><el-checkbox class="mid">全选</el-checkbox><span class="marginl10 mid cursor">删除</span></el-col>
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
<style scoped>
.cartmsg{background:#ededed}
</style>