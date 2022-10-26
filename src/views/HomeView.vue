<script setup lang="ts">
import {ref} from "vue";
import vTitle from '../components/title.vue'
import Item from '../components/pro_item.vue'

interface BannerItem {
  id:number;
  pic:string
}
interface ProItem {
  id:number
  goodsname:string
  pic:string
  sale:number
  rule:string
  price:number
}
const bannerList=ref<BannerItem[]>([
  {pic:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',id:0},
  {pic:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',id:1},
  {pic:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',id:2},
  {pic:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',id:3},
])
const proList=ref<ProItem[]>([
  {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:0,sale:100,rule:'性感',price:100},
  {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:1,sale:100,rule:'性感',price:100},
  {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:2,sale:100,rule:'性感',price:100},
  {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:3,sale:100,rule:'性感',price:100},
  {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:4,sale:100,rule:'性感',price:100},
  {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:5,sale:100,rule:'性感',price:100},
])
const activeName = ref('first')
const handleClick = (tab, event: Event) => {
  console.log(tab, event)
}
</script>

<template>
  <el-carousel :interval="5000" arrow="always" class="marginb20" :height="400">
    <el-carousel-item v-for="item in bannerList" :key="item.id">
      <el-image alt="Vue logo" class="logo mid" :src="item.pic" width="100%" :fit="cover" style="width:100%;" />
    </el-carousel-item>
  </el-carousel>
  <!-- 分类导航 -->
  <main class="main_wrapper">
    <div>
      <!-- <v-title title="分类导航"></v-title> -->
      <el-row class="cff">
        <el-col :span="6">
          <div class="head_ban_nav_item relative head_ban_nav_item_active">
            <div class="head_ban_nav_item_head">
              <div class="head_ban_nav_item_icon f18">Sexy Series</div>
              <div class="head_ban_nav_item_line f12">wrjejrjehrhe</div>
            </div>
            <div class="head_ban_nav_item_text f14">
              <div class="f18 bold">自由不受限</div>
              <div class="f18 bold marginb20">快乐无限</div>
              <div class="cursor pad10 bff ec7"><span class="marginr10">立即抢购</span><el-icon class="mid"><Right /></el-icon></div>
            </div>
            <div class="head_ban_nav_item_img">
              <img class="mid" src="https://img1.baidu.com/it/u=1829027181,3693813016&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" width="100" height="100" />
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="head_ban_nav_item relative">
            <div class="head_ban_nav_item_head">
              <div class="head_ban_nav_item_icon f18">Sexy Series</div>
              <div class="head_ban_nav_item_line f12">wrjejrjehrhe</div>
            </div>
            <div class="head_ban_nav_item_text f14">
              <div class="f18 bold">自由不受限</div>
              <div class="f18 bold marginb20">快乐无限</div>
              <div class="cursor pad10 bff ec7"><span class="marginr10">立即抢购</span><el-icon class="mid"><Right /></el-icon></div>
            </div>
            <div class="head_ban_nav_item_img">
              <img class="mid" src="https://img1.baidu.com/it/u=1829027181,3693813016&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" width="100" height="100" />
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="head_ban_nav_item relative">
            <div class="head_ban_nav_item_head">
              <div class="head_ban_nav_item_icon f18">Sexy Series</div>
              <div class="head_ban_nav_item_line f12">wrjejrjehrhe</div>
            </div>
            <div class="head_ban_nav_item_text f14">
              <div class="f18 bold">自由不受限</div>
              <div class="f18 bold marginb20">快乐无限</div>
              <div class="cursor pad10 bff ec7"><span class="marginr10">立即抢购</span><el-icon class="mid"><Right /></el-icon></div>
            </div>
            <div class="head_ban_nav_item_img">
              <img class="mid" src="https://img1.baidu.com/it/u=1829027181,3693813016&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" width="100" height="100" />
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="head_ban_nav_item relative">
            <div class="head_ban_nav_item_head">
              <div class="head_ban_nav_item_icon f18">Sexy Series</div>
              <div class="head_ban_nav_item_line f12">wrjejrjehrhe</div>
            </div>
            <div class="head_ban_nav_item_text f14">
              <div class="f18 bold">自由不受限</div>
              <div class="f18 bold marginb20">快乐无限</div>
              <div class="cursor pad10 bff ec7"><span class="marginr10">立即抢购</span><el-icon class="mid"><Right /></el-icon></div>
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
      <el-row :gutter="20" justify="space-between" class="cff center">
        <el-col :span="6">
          <div class="ban_nav_item cursor">
            <div class="ban_nav_item_icon"><el-icon :size="36"><FullScreen /></el-icon></div>
            <div class="ban_nav_item_line"></div>
            <div class="ban_nav_item_text">纯棉类</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="ban_nav_item cursor">
            <div class="ban_nav_item_icon"><el-icon :size="36"><FullScreen /></el-icon></div>
            <div class="ban_nav_item_line"></div>
            <div class="ban_nav_item_text">纯棉类</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="ban_nav_item cursor">
            <div class="ban_nav_item_icon"><el-icon :size="36"><FullScreen /></el-icon></div>
            <div class="ban_nav_item_line"></div>
            <div class="ban_nav_item_text">纯棉类</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="ban_nav_item cursor">
            <div class="ban_nav_item_icon"><el-icon :size="36"><FullScreen /></el-icon></div>
            <div class="ban_nav_item_line"></div>
            <div class="ban_nav_item_text">纯棉类</div>
          </div>
        </el-col>
      </el-row>
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
                <el-image
                  :src="item.pic"
                  class="mid marginb20"
                  width="100%"
                  :fit="fill"
                />
                <div class="f14 cff goodstitle center">{{item.goodsname}}</div>
                <div class="f12 cff left">¥{{item.price}}</div>
                <div class="f14 cff"><el-icon class="mid"><ShoppingCartFull /></el-icon> 加入购物车</div>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="棉麻" name="second">Config</el-tab-pane>
        <el-tab-pane label="棉麻" name="third">Role</el-tab-pane>
        <el-tab-pane label="棉麻" name="fourth">Task</el-tab-pane>
      </el-tabs>
    </div>

    <!-- 热销推荐 -->
    <div>
      <v-title title="热销推荐"></v-title>
      <div class="hotsale pad16 cff">
        <el-row class="row-bg" justify="center">
          <el-col :span="6">
            <div class="f18">纯棉睡</div>
            <!-- <div class="f18">时尚睡衣</div> -->
            <div class="f12 marginb20">sleelelel</div>
            <div class="f18 marginb10"><span class="f12">￥</span>122</div>
            <div><el-button color="#e77547" :dark="isDark" class="custom_btn">立即购买</el-button></div>
          </el-col>
          <el-col :span="6" class="relative">
            <img width="100" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="">
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- 热销推荐其他 -->
    <div>
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
<style>
.ban_nav_item{background:#333;width:160px;height:160px;border-radius:50%;vertical-align:middle;display:table-cell;}
.ban_nav_item_line{width:80px;height:4px;background:rgba(255,255,255,0.8);margin:10px auto;}
.head_ban_nav_item{background:linear-gradient(to right, #4d5359,#4d4d4f, #4d4d4e,#4a4a4b);height:300px;}
.head_ban_nav_item_active{background:linear-gradient(to right, #dd7a46,#eb7d4a, #ee7b4d,#e78053);}
.head_ban_nav_item .head_ban_nav_item_text{position:absolute;bottom:20px;left:20px;}
.head_ban_nav_item_head{position:absolute;left:20px;top:20px;}
.head_ban_nav_item_img{position:absolute;right:0;bottom:0;}
.reason{background:linear-gradient(to right, #dd7a46,#eb7d4a, #ee7b4d,#e78053);margin-top: 60px;}
.reason .el-row:first-child{height: 160px;}
.reason .el-row:last-child{padding:4px;}
.reason .img{width: 90%;position: absolute;top: -40px;height: 200px;}
.hotsale{background:#ffcdac;border: 1px solid #606060;margin-bottom: 100px;}
.hotsale img{border:4px solid #f96b2e;width:100%;position: absolute;max-height:200px;object-fit: cover;}
.classify .el-col .classify_item{padding-top: 60px;background: linear-gradient(to right, #4d5359,#4d4d4f, #4d4d4e,#4a4a4b);}
.classify .el-col .classify_item:hover{background:linear-gradient(to right, #dd7a46,#eb7d4a, #ee7b4d,#e78053);}
.classify img{width:120px;height:120px;border-radius: 50%;}
.classify .goodstitle{position: absolute;top: 10px;left: 10px;writing-mode: tb;position: absolute;top: 10px;left: 10px;writing-mode: tb;max-height: 100px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
</style>