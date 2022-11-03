<template>
  <el-carousel :interval="5000" arrow="always" class="marginb20" :height="400">
    <el-carousel-item v-for="item in bannerList" :key="item.id">
      <el-image alt="Vue logo" class="logo mid" :src="item.pic" width="100%" :fit="cover" style="width:100%;" />
    </el-carousel-item>
  </el-carousel>
  <!-- 分类导航 -->
  <main class="main_wrapper home">
    <div>
      <!-- <v-title title="分类导航"></v-title> -->
      <el-row class="cff">
        <el-col :span="6" v-for="i in 4" :key="i" @click="goPro(i)">
          <div :class="['head_ban_nav_item relative',{head_ban_nav_item_active:i==1}]">
            <div class="head_ban_nav_item_head">
              <div class="head_ban_nav_item_icon f18">Sexy Series</div>
              <div class="head_ban_nav_item_line f12">wrjejrjehrhe</div>
            </div>
            <div class="head_ban_nav_item_text f14">
              <div class="f18 bold">自由不受限</div>
              <div class="f18 bold marginb20">快乐无限</div>
              <div :class="['cursor pad10 bff c999',{ec7:i==1}]"><span class="marginr10">立即抢购</span><el-icon class="mid"><Right /></el-icon></div>
            </div>
            <div class="head_ban_nav_item_img">
              <img class="mid" src="https://img1.baidu.com/it/u=1829027181,3693813016&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" width="100" height="100" />
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 分类导航 -->
    <div class="marginb20">
      <v-title title="分类导航"></v-title>
      <div class="cff center flex acenter">
        <div v-for="i in 4" :key="i" class="flex1" style="padding-left:70px;">
          <div class="ban_nav_item cursor" @click="goPro(i)">
            <div class="ban_nav_item_icon"><el-icon :size="36"><img src="../assets/icon1.png" width="60"  /></el-icon></div>
            <div class="ban_nav_item_line"></div>
            <div class="ban_nav_item_text">纯棉类</div>
          </div>
        </div>
      </div>
    </div>
<!-- 滚动 -->
    <div class="flex gundong">
      <div class="flex1">
        <el-row :gutter="16">
          <el-col :span="8" v-for="item in gunList" :key="item.id" @click="goDetail(item.id)">
            <div class="box">
              <div class="glass"></div>
              <div class="classify_item center cursor relative content">
                <el-image :src="item.pic" class="mid" width="100%" />
                <div class="pad10 cff f14">
                  {{item.goodsname}}
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="center padt10 marginl10">
        <div class="marginb20 right cff">{{page}}/{{proList.length/3}}</div>
        <div>
          <el-icon class="b99 bor50 pad10 marginr10 cursor" @click="pageMinus"><ArrowLeft /></el-icon>
          <el-icon class="b99 bor50 pad10 cursor" @click="pageAdd"><ArrowRight /></el-icon>
        </div>
      </div>
    </div>
    <!-- 选择理由 -->
    <div class="">
      <v-title title="选择理由"></v-title>
      <div class="reason cff pad16">
        <el-row :gutter="20" :align="middle" class="marginb20">
          <el-col :span="8" class="relative">
            <img width="100" class="img" src="https://img2.baidu.com/it/u=3513324833,2795540287&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666544400&t=33bdad9a6eb92568637f86d465e208fc" />
          </el-col>
          <el-col :span="4">
            <div>
              <el-divider style="width:80px;" border-style="double" />
              <div class="f18 marginb10">选择我们的理由？</div>
              <div class="f12 ">质量好<el-divider direction="vertical" />退货快<el-divider direction="vertical" />售后好</div>
            </div>
          </el-col>
        </el-row>
        <el-row class="bff" gutter="4">
          <el-col :span="4" v-for="item in proList" :key="item.id">
            <Item :proItem="item" :hasTitle="false" />
          </el-col>
        </el-row>
      </div>
    </div>
    
    <!-- 分类 -->
    <div class="classify">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="纯棉" name="first">
          <el-row :gutter="10">
            <el-col :span="4" v-for="item in proList" :key="item.id">
              <div class="classify_item center pad16 cursor relative">
                <el-image :src="item.pic" class="mid marginb20" width="100%" :fit="fill" />
                <div class="f14 cff goodstitle center">{{item.goodsname}}</div>
                <div class="f12 cff left">¥{{item.price}}</div>
                <div class="f14 cff" @click="addCart($event)"><el-icon class="mid"><ShoppingCartFull /></el-icon> 加入购物车</div>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="棉麻" name="second">Config</el-tab-pane>
        <el-tab-pane label="棉麻" name="third">Role</el-tab-pane>
        <el-tab-pane label="棉麻" name="fourth">Task</el-tab-pane>
      </el-tabs>
      <!-- <ball ref="ball"></ball> -->
    </div>

    <!-- 热销推荐 -->
    <div>
      <v-title title="热销推荐"></v-title>
      <div class="hotsale pad16 ">
        <el-row class="row-bg" justify="center">
          <el-col :span="6">
            <div class="f18">纯棉睡</div>
            <!-- <div class="f18">时尚睡衣</div> -->
            <div class="f12 marginb20">sleelelel</div>
            <div class="f18 marginb10"><span class="f12">￥</span>122</div>
            <div @click="goConfirm"><el-button color="#e77547" :dark="isDark" class="custom_btn">立即购买</el-button></div>
          </el-col>
          <el-col :span="6" class="relative">
            <img width="100" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="">
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- 热销推荐其他 -->
    <div class="marginb20">
      <el-tabs v-model="activeName" class="marginb20" @tab-click="handleClick" activecolor="red" color="black">
        <el-tab-pane label="纯棉" name="first">
          <el-row justify="space-between" gutter="10">
            <el-col :span="4" v-for="item in proList" :key="item.id">
              <Item :proItem="item" class="cursor" />
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="麻衣" name="second">Config</el-tab-pane>
        <el-tab-pane label="布艺" name="third">Role</el-tab-pane>
        <el-tab-pane label="其他" name="fourth">Task</el-tab-pane>
      </el-tabs>
      <div class="center">
        <el-button color="#ec7243" :dark="isDark" class="custom_btn">更多推荐》</el-button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import {computed, ref} from "vue";
  import vTitle from '../components/title.vue';
  import Item from '../components/pro_item.vue';
  // import Ball from "../components/ball.vue";
  import type {BannerItem,ProItem} from "../type/BaseType";
  import {ElNotification} from "element-plus";
  import { useRouter } from 'vue-router';
  const router = useRouter();

  const bannerList=ref<BannerItem[]>([
    {pic:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',id:0},
    {pic:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',id:1},
    {pic:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',id:2},
    {pic:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',id:3},
  ])
  const proList=ref<ProItem[]>([
    {pic:'https://img2.baidu.com/it/u=4224973024,3399225311&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',goodsname:'安居客库萨克积分',id:0,sale:100,rule:'性感',price:100},
    {pic:'https://img2.baidu.com/it/u=4224973024,3399225311&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',goodsname:'安居客库萨克积分',id:1,sale:100,rule:'性感',price:100},
    {pic:'https://img2.baidu.com/it/u=4224973024,3399225311&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',goodsname:'安居客库萨克积分',id:2,sale:100,rule:'性感',price:100},
    {pic:'https://img2.baidu.com/it/u=4224973024,3399225311&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',goodsname:'安居客库萨克积分',id:3,sale:100,rule:'性感',price:100},
    {pic:'https://img2.baidu.com/it/u=4224973024,3399225311&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',goodsname:'安居客库萨克积分',id:4,sale:100,rule:'性感',price:100},
    {pic:'https://img2.baidu.com/it/u=4224973024,3399225311&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',goodsname:'安居客库萨克积分',id:5,sale:100,rule:'性感',price:100},
  ])
  const activeName = ref('first');
  const handleClick = (tab:any, event: Event) => {
    console.log(tab, event);
  }
  //加入购物车
  // const ball=ref()
  const addCart=(event:any)=>{
    console.log(event,'event');
    // ball.value.addToCart(event)
    ElNotification.success({title:'加入购物车成功'});
  }

  // 分类
  const goPro=(id:string)=>{
    router.push("/product");
  }

  const goDetail=(id:string) => {
    router.push('/product/'+id)
  }

  // 立即购买
  const goConfirm=()=>{
    router.push("/confirm");
  }
  const page=ref(1)
  const gunList=computed(()=>{
    return proList.value.slice((page.value-1)*3,page.value*3)
  })

  // 前一页
  const pageMinus=()=>{
    if(page.value<=1){
      page.value=proList.value.length/3
      return
    }
    page.value--
  }
  // 下一页
  const pageAdd=()=>{
    if(page.value>=proList.value.length/3){
      page.value=1
      return
    }
    page.value++
  }
</script>

<style scoped>
  .home .ban_nav_item{background:#333;width:160px;height:160px;border-radius:50%;vertical-align:middle;display:table-cell;}
  .home .ban_nav_item:hover{background:#ec7243;}
  .home .ban_nav_item_line{width:80px;height:4px;background:rgba(255,255,255,0.8);margin:10px auto;}
  .home .head_ban_nav_item{background:linear-gradient(to right, #4d5359,#4d4d4f, #4d4d4e,#4a4a4b);height:300px;}
  .home .head_ban_nav_item_active{background:linear-gradient(to right, #dd7a46,#eb7d4a, #ee7b4d,#e78053);}
  .home .head_ban_nav_item .head_ban_nav_item_text{position:absolute;bottom:20px;left:20px;}
  .home .head_ban_nav_item_head{position:absolute;left:20px;top:20px;}
  .home .head_ban_nav_item_img{position:absolute;right:0;bottom:0;}
  .home .reason{background:linear-gradient(to right, #dd7a46,#eb7d4a, #ee7b4d,#e78053);margin-top: 60px;}
  .home .reason .el-row:first-child{height: 160px;}
  .home .reason .el-row:last-child{padding:4px;}
  .home .reason .img{width: 90%;position: absolute;top: -40px;height: 200px;}
  .home .hotsale{background:#ffcdac;border: 1px solid #606060;margin-bottom: 100px;}
  .home .hotsale img{border:4px solid #f96b2e;width:100%;position: absolute;max-height:200px;object-fit: cover;}
  .home .classify .el-col .classify_item{padding-top: 60px;background: linear-gradient(to right, #4d5359,#4d4d4f, #4d4d4e,#4a4a4b);}
  .home .classify .el-col .classify_item:hover{background:linear-gradient(to right, #dd7a46,#eb7d4a, #ee7b4d,#e78053);}
  .home .classify .el-image{width:120px;height:120px;border-radius: 50%;}
  .home .classify .goodstitle{position: absolute;top: 10px;left: 10px;writing-mode: tb;position: absolute;top: 10px;left: 10px;writing-mode: tb;max-height: 100px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
  /* .box .el-col .ban_nav_item::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: #fff;
            z-index: -1;
        }

        .box .el-col .ban_nav_item::after {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: #fff;
            filter: blur(40px);
            z-index: -2;
        }
.box .el-col:first-child .ban_nav_item::before{background: red;}
        .box .el-col:first-child .ban_nav_item::before,
        .box .el-col:first-child .ban_nav_item::after {
          content:"";
            background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
        } */
        .box {
            position: relative;
            /* width: 300px;
            height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #060c21;
            margin: 60px 40px; */
        }

        .box::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: #fff;
            z-index: -1;
        }

        .box::after {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: #fff;
            filter: blur(40px);
            z-index: -2;
        }
        .gundong::after{
          content:"";
          position: absolute;
          left:0;
          top:0;
          right:0;
          bottom: 0;
          background: #010615;
          z-index:-20
        }
        .gundong{
    position: relative;
    padding: 20px;
    margin-top: 20px;}
        .gundong .el-col:nth-child(1) .box::before,
        .gundong .el-col:nth-child(1) .box::after {
            background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
        }

        .gundong .el-col:nth-child(2) .box::before,
        .gundong .el-col:nth-child(2) .box::after {
            background: linear-gradient(235deg, #ff005e, #010615, #fbff00);
        }

        .gundong .el-col:nth-child(3) .box::before,
        .gundong .el-col:nth-child(3) .box::after {
            background: linear-gradient(235deg, #772aff, #010615, #2196f3);
        }


        .box .glass {
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            display: block;
            background: rgba(255, 255, 255, .1);
        }
</style>

<style>
  .home .el-tabs__item.is-active,.cart .el-tabs__item:hover{color:#ec7243;}
  .home .el-tabs__active-bar{background: #ec7243;}
</style>