<script setup lang="ts">
import {ref} from "vue"
import PicZoom from '../components/picZoom.vue'
const tags = ref([
  { name: '阿道夫'},
  { name: '阿道夫'},
  { name: '阿道夫'},
  { name: '阿道夫'},
  { name: '阿道夫'},
])
const num = ref(1)
const handleChange = (value: number) => {
  console.log(value)
}
</script>

<template>
  <div class="main_wrapper">
    <div class="f14 marginb20">
      <span class="marginr30">首页</span><el-icon class="marginr30 mid f12 c999"><ArrowRight /></el-icon><span class="marginr30">产品</span><el-icon class="marginr30 mid f12 c999"><ArrowRight /></el-icon><span>热销系列</span>
    </div>
    <div class="marginb20">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="relative">
            <PicZoom
              :boxSize="300"
              :hoverBoxSize="100"
              picURL="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201901%2F03%2F20190103195747_jfzul.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622903075&t=5f678cb085b0860820d8f9fa7be67c15"
            />
          </div>
        </el-col>
        <el-col :span="16">
          <div>
            <div class="f18 marginb10">我是商品一号</div>
            <div class="f12 c999 marginb20">舒适纯棉有弹性</div>
            <div class="f12 c999 oldprice">原价：¥444</div>
            <div class="f18 marginb20">¥444</div>
            <div class="f14 marginb20">
              <span class="marginr30">月销量：2222</span><el-divider direction="vertical" class="marginr30" /><span>库存：292</span>
            </div>
            <div class="marginb20">
              <el-tag
                v-for="tag in tags"
                :key="tag.name"
                type="info"
                class="cursor marginr10"
                @close="closeHandler(tag.name)"
                effect="plain"
                size="large"
              >
                {{ tag.name }}
              </el-tag>
            </div>
            <div class="marginb20 f14">
              <span class="marginr30">净含量：10102g</span><span class="marginr30">储存方法：保持干燥、良好通风</span><span>颜色：黑色</span>
            </div>
            <div class="marginb20 f14">
              数量：<el-input-number v-model="num" :min="1" :max="10" @change="handleChange" class="marginr6" />件
            </div>
            <div>
              <el-button color="#ec7243" :dark="isDark" class="custom_btn">立即购买</el-button>
              <el-button color="#ec7243" :dark="isDark" class="custom_plain_btn" plain>加入购物车</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="product_detail marginb20">
      <el-row :gutter="20">
        <el-col :span="20">
          <div class="marginb20">产品介绍</div>
          <div class="marginb20">
            <img src="https://img0.baidu.com/it/u=650116751,1388415960&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" />
          </div>
        </el-col>
        <el-col :span="4">
          <div class="historylist">
            <div class="f14 b99 pad10 center">最近浏览记录</div>
            <div class="malr16">
              <div class="pad10 f14 center historyitem borb">
                <img class="marginb6" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="">
                <div class="marginb6">商品一号</div>
                <div>¥455</div>
              </div>
              <div class="pad10 f14 center historyitem borb">
                <img class="marginb6" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="">
                <div class="marginb6">商品一号</div>
                <div>¥455</div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style scoped>
.historylist{border:1px solid #dedede;}
.historyitem:last-child{border-bottom: 0;}
.historyitem img{width:60%;border-radius: 4px;}
.oldprice{text-decoration: line-through;}
</style>