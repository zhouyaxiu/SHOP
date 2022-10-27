<script setup lang="ts">
import { reactive, ref } from 'vue'
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
</script>

<template>
  <div class="product">
    <div class="">
      <img src="https://img0.baidu.com/it/u=650116751,1388415960&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" width="100%" />
    </div>
    <div class="main_wrapper">
      <div class="product_series f14 marginb20">
        <span class="bgselected cff cursor">全部</span>
        <span class="cursor">热销系列</span>
        <span class="cursor">亲肤系列</span>
      </div>
      <div class="marginb20">
        <el-row :gutter="20" align="middle">
          <el-col :span="3"><span class="c999 f12 marginr10">全部</span><el-icon class="mid marginl10 c999 f12"><ArrowRight /></el-icon></el-col>
          <el-col :span="9">
            <el-tag
              v-for="tag in tags"
              :key="tag.name"
              closable
              type="info"
              class="cursor marginr10"
              @close="closeHandler(tag.name)"
            >
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
        <div class="active marginr30 cursor">
          <span>综合排序</span>
        </div>
        <div class="marginr30 cursor">
          <span>按价格排序<span>⬆⬇</span></span>
        </div>
        <div class="cursor">
          <span>按销量排序<span>⬆⬇</span></span>
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


<style scoped>
.product .product_series{border-bottom:1px solid #ec7243;}
.product .product_series span{padding:4px 20px;margin-right:30px;display: inline-block;}
.product_title_item .product_title_item_right span{padding:4px 20px;margin-right:10px;}
.pro_zonghe{border-bottom:1px solid #dedede;}
.pro_zonghe .active span{border-bottom:2px solid #333;color:#333;padding-bottom: 10px;display: inline-block;}
.page .el-pagination{justify-content: center;}
</style>