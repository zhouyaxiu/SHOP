<script setup lang="ts">
import {ref} from "vue";
import {ElNotification} from "element-plus";
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

const cancelHandler=(id:string|number)=>{
  ElNotification.success({title:'取消收藏成功'})
}
</script>

<template>
  <div class="collect pad16">
    <el-row :gutter="10">
      <el-col :span="4" v-for="item in proList" :key="item.id">
        <div class="classify_item center cursor relative b99 relative">
          <el-image
            :src="item.pic"
            class="mid"
            width="100"
            :fit="fill"
          />
          <div class="pad10">
            <div class="f14 center">{{item.goodsname}}</div>
            <div class="f18 bold marginb6">¥{{item.price}}</div>
            <div class="f14 "><el-icon class="mid"><ShoppingCartFull /></el-icon> 加入购物车</div>
          </div>
          <div class="qx" @click="cancelHandler(item.id)">取消收藏</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
.collect .classify_item:hover{background: #ec7243;color:#fff;}
.qx{position: absolute;right:10px;color:#fff;top:10px;font-size:12px;background: #ec7243;padding:4px;display: none;}
.collect .classify_item:hover .qx{display: block;}
</style>