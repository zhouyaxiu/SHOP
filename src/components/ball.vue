<template>
   <div class="home relative">
    <!-- <div class="cart">cart</div> -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ball.show">
        <div class="innerBall">
          <el-icon><HelpFilled /></el-icon>
        </div>
      </div>
    </transition>
    <div class="menu" @click="addToCart($event)">cart</div>
  </div>
</template>

<script>
  import {ElNotification} from "element-plus";
  export default {
    data() {
      return {
        ball: {
          el: null,
          show: false,
        },
      }
    },
    methods: {
      beforeEnter(el) {
        console.log(el,'eoeo')
        let ele = this.ball.el //要添加购物车的商品
        let ract = ele.getBoundingClientRect() //商品的位置
        let elRight = this._getStyle(el, 'right') //购物车 right
        let elTop = this._getStyle(el, 'top') //购物车 top
        let x = window.innerWidth - ract.left - parseFloat(elRight) // 计算小球移动的X轴的距离
        let y = ract.top - parseFloat(elTop)// 计算小球移动的y轴的距离
        console.log(x,y,'xyyy')
        console.log(window,'window.innerWidth')
        console.log(ract,'ract')
        console.log(elRight,'elRight')
        console.log(elTop,'elTop')
        el.style.display = ''
        el.style.transform = `translateY(${y}px)` //重置小球的x轴位置

        let innerBall = el.querySelector('.innerBall')
        innerBall.style.transform = `translateX(-${x}px)`//重置小球的y轴位置
    },
    enter(el, done) {
      this._offset = document.body.offsetHeight //激发重绘
      el.style.transform = `translate(0, 0)` //小球沿着y轴移动到购物车
      let innerBall = el.querySelector('.innerBall')
      innerBall.style.transform = `translate(0, 0)`//小球沿着x轴移动到购物车
      el.addEventListener('transitionend', done)
    },
    afterEnter(el) {
      this.ball.show = false
      el.style.display = 'none'
    },
    addToCart(event) {
      this.ball.el = event.target
      this.ball.show = true
      ElNotification.success({title:'加入购物车成功'})
    },
    _getStyle(el, attr) {
      return el.currentStyle
        ? el.currentStyle[attr]
        : getComputedStyle(el, false)[attr]
    },
  },
}
</script>

<style scoped>
.cart,.ball {position: fixed;right: 700px;top: 100px;z-index: 100;}
.ball {width: 10px;height: 10px;transition: all 1s cubic-bezier(0.49, -0.29, 1, 1);}
.innerBall {width: 10px;height: 10px;transition: all 1s linear;}
.menu {visibility: hidden;}
</style>