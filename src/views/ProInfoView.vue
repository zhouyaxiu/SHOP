<template>
  <div class="main_wrapper">
    <div class="f14 marginb20 padt10">
      <span class="marginr30 cursor" @click="goHome">首页</span><el-icon class="marginr30 mid f12 c999"><DArrowRight /></el-icon>
        <span class="marginr30 cursor" @click="goPro">产品</span><el-icon class="marginr30 mid f12 c999"><DArrowRight /></el-icon>
        <span>热销系列</span>
    </div>
    <div class="marginb20">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="">
            <image-magnifier :src="bgImg" :zoom-src="bgImg" width="360" height="300" zoom-width="360" zoom-height="300"></image-magnifier>
          </div>
          <el-row :gutter="3" align="middle">
            <el-col :span="4" v-for="item in goodsImages" :key="item" @click="switchBgImg(item)">
              <img :src="item" width="60" height="60" alt="">
            </el-col>
          </el-row>
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
              <el-tag v-for="tag in tags" @click="swicthTag(tag.name)" :key="tag.name" type="info" :class="['cursor marginr10',{bgselected:tagname==tag.name},{cff:tagname==tag.name}]" effect="plain">
                {{ tag.name }}
              </el-tag>
            </div>
            <div class="marginb20 f14">
              <span class="marginr30">净含量：10102g</span><span class="marginr30">储存方法：保持干燥、良好通风</span><span>颜色：黑色</span>
            </div>
            <div class="marginb36 f14">
              数量：<el-input-number v-model="num" :min="1" :max="10" @change="handleChange" class="marginr6" />件
            </div>
            <div>
              <el-button color="#ec7243" :dark="isDark" class="custom_btn" @click="goConfirm">立即购买</el-button>
              <el-button color="#ec7243" :dark="isDark" class="custom_plain_btn" plain @click="addCart">加入购物车</el-button>
              <!-- <ball ref="ball"></ball> -->
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
        <el-col :span="3">
          <div class="historylist">
            <div class="f14 b99 pad10 center">最近浏览记录</div>
            <div class="malr16">
              <div class="pad10 f14 center historyitem borb cursor" v-for="i in 4" :key="i" @click="goProInfo(i)">
                <img class="marginb6" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="">
                <div class="marginb6 f12">商品一号</div>
                <div>¥455</div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {reactive, ref} from "vue";
  // import Ball from "../components/ball.vue"
  import imageMagnifier from '../components/imageMagnifier.vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  import {ElNotification} from "element-plus";

  const tags = ref([
    { name: '阿道夫'},
    { name: '阿道夫1'},
    { name: '阿道夫2'},
    { name: '阿道夫3'},
    { name: '阿道夫4'},
  ])
  const goodsImages=reactive([
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F3%2F52e2494a33d20.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669943827&t=74b1f4b7a668a540d97a32dec80528e3",
    "https://img0.baidu.com/it/u=2503409062,3665795632&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
    "https://img1.baidu.com/it/u=918819583,3845093189&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F201506%2F14%2F20150614122829_jQ8FV.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669943827&t=9c601936f1678f1fea8a188c4a5d57cf",
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.bimg.126.net%2Fphoto%2FIT47Vbh_HhEmuNOzOX_FCA%3D%3D%2F2565081462765696500.jpg&refer=http%3A%2F%2Fimg.bimg.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669943827&t=e2a09775fdf68879e551d6ef94f9fe95",
  ])
  const bgImg=ref(goodsImages[0])
  const num = ref(1);
  const tagname=ref("阿道夫")

  // 数量变动
  const handleChange = (value: number) => {
    console.log(value)
  }
  // 切换详情图
  const switchBgImg=(item:string)=>{
    bgImg.value=item;
  }
  //立即购买
  const goConfirm=()=>{
    router.push("/confirm")
  }
  //加入购物车
  // const ball=ref()
  const addCart=()=>{
    ElNotification.success({title:'加入购物车成功'})
    // ball.value.addToCart(event)
  }

  // 浏览记录跳转
  const goProInfo=(id:string)=>{
    router.push('/product/'+id)
  }

  // 首页
  const goHome=(id:string)=>{
    router.push("/");
  }
  // 产品
  const goPro=(id:string)=>{
    router.push("/product");
  }

  // 切换分类
  const swicthTag=(tagnames:string)=>{
    tagname.value=tagnames
  }
</script>

<style scoped>
  .historylist{border:1px solid #dedede;}
  .historyitem:last-child{border-bottom: 0;}
  .historyitem img{width:100%;border-radius: 4px;}
  .oldprice{text-decoration: line-through;}
  .el-tag.bgselected{border-color: #ec7243;}
</style>