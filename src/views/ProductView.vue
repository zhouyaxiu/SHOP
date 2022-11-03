<template>
  <div class="product">
    <div class="marginb20">
      <img src="../assets/product.jpg" class="w100" />
    </div>
    <div class="main_wrapper">
      <div class="product_series f14 marginb20">
        <span :class="['cursor',{bgselected:activeIndex==0},{cff:activeIndex==0}]" @click="activeIndex=0">全部</span>
        <span :class="['cursor',{bgselected:activeIndex==1},{cff:activeIndex==1}]" @click="activeIndex=1">热销系列</span>
        <span :class="['cursor',{bgselected:activeIndex==2},{cff:activeIndex==2}]" @click="activeIndex=2">亲肤系列</span>
      </div>
      <div class="marginb20">
        <el-row :gutter="20" align="middle">
          <el-col :span="3">
            <span class="c999 f12 marginr10">全部</span>
            <el-icon class="mid marginl10 c999 f12"><ArrowRight /></el-icon>
          </el-col>
          <el-col :span="9">
            <el-tag v-for="tag in tags" :key="tag.name" closable type="info" class="cursor marginr10" @close="closeHandler(tag.name)">
              {{ tag.name }}
            </el-tag>
          </el-col>
        </el-row>
      </div>
      <el-divider color="#ec7243" />
      <div class="f14">
        <div class="marginb20 product_title_item">
          <el-row :gutter="20" align="middle">
            <el-col :span="3"><span class="c999">品牌</span></el-col>
            <el-col :span="9">
              <div class="product_title_item_right">
                <span class="cursor bgselected cff">不限</span>
                <span class="cursor">阿道夫</span>
                <span class="cursor">阿道夫</span>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="marginb20 product_title_item">
          <el-row :gutter="20" align="middle">
            <el-col :span="3"><span class="c999">分类</span></el-col>
            <el-col :span="9">
              <div class="product_title_item_right">
                <span class="cursor">不限</span>
                <span class="cursor">阿道夫</span>
                <span class="cursor">阿道夫</span>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="marginb20 product_title_item">
          <el-row :gutter="20" align="middle">
            <el-col :span="3"><span class="c999">价格</span></el-col>
            <el-col :span="9">
              <div class="product_title_item_right">
                <span class="cursor">不限</span>
                <span class="cursor">0-99</span>
                <span class="cursor">100-299</span>
                <span class="cursor">其他</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="pro_zonghe f14 c999 marginb20 flex">
        <div :class="['marginr30 cursor userno',{active:sortIndex==0}]" @click="sortIndex=0">
          <span>综合排序</span>
        </div>
        <div :class="['cursor userno marginr30',{active:sortIndex==1},{active:sortIndex==2}]" @click="priceHandler('price')">
          <span>按价格排序<i :class="[{ec7:sortIndex==1}]">⬆</i><i :class="[{ec7:sortIndex==2}]">⬇</i></span>
        </div>
        <div :class="['cursor userno',{active:sortIndex==3},{active:sortIndex==4}]" @click="priceHandler('sale')">
          <span>按销量排序<i :class="[{ec7:sortIndex==3}]">⬆</i><i :class="[{ec7:sortIndex==4}]">⬇</i></span>
        </div>
      </div>
      <el-row :gutter="20" class="marginb20">
        <el-col :span="4" v-for="item in proList" :key="item.id">
          <Item :proItem="item" />
        </el-col>
      </el-row>
      <div class="page pad16">
        <el-pagination background layout="prev, pager, next" :total="1000" hide-on-single-page />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import type {ProItem} from "../type/BaseType";
  import Item from '../components/pro_item.vue';

  const proList=ref<ProItem[]>([
    {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:0,sale:100,rule:'性感',price:100},
    {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:1,sale:100,rule:'性感',price:100},
    {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:2,sale:100,rule:'性感',price:100},
    {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:3,sale:100,rule:'性感',price:100},
    {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:4,sale:100,rule:'性感',price:100},
    {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:5,sale:100,rule:'性感',price:100},
  ])
  
  const tags = ref([
    { name: '阿道夫'},
    { name: '阿道夫'},
    { name: '阿道夫'},
    { name: '阿道夫'},
    { name: '阿道夫'},
  ])

  const closeHandler = (names:String) => {
    console.log(names,'names')
  }

  const activeIndex=ref(0)
  const sortIndex=ref(0)
  const flag=ref(true)
  const priceHandler=(name:string)=>{
    if(name=='price'){
      if(flag.value){
          flag.value=false;
          sortIndex.value=1;
          return
        }else{
          sortIndex.value=2;
          flag.value=true;
          return
        }
      }else{
        if(flag.value){
        flag.value=false;
        sortIndex.value=3;
        return
      }else{
        sortIndex.value=4;
        flag.value=true;
        return
      }
    }
  }
</script>

<style scoped>
  .product .product_series{border-bottom:1px solid #ec7243;}
  .product .product_series span{padding:4px 20px;margin-right:30px;display: inline-block;}
  .product_title_item .product_title_item_right span{padding:4px 20px;margin-right:10px;}
  .pro_zonghe{border-bottom:1px solid #dedede;}
  .pro_zonghe .active span:first-of-type{border-bottom:2px solid #ec7243;color:#ec7243;padding-bottom: 10px;display: inline-block;}
  .page .el-pagination{justify-content: center;}
  .pro_zonghe span i{font-style: normal;color:#999;}
</style>

<style>
  .product .el-pagination.is-background .el-pager li:not(.is-disabled).is-active{background: #ec7243;}
</style>