<template>
  <div class="main" ref="main">
    <div
      class="box-img"
      ref="boxImg"
      :style="{ height: `${boxSize}px`, width: `${boxSize}px` }"
      @mouseover="handleOver"
      @mousemove="handleMove"
      @mouseleave="handleLeave"
    >
      <img :src="picURL" alt="img" />
      <div class="box-hover" :style="mousePositon" v-show="isMouseOver"></div>
    </div>
    <div
      class="box-img-mini"
      v-show="isMouseOver"
      :style="{ left: `${this.boxSize}px` }"
    >
      <img :src="picURL" alt="img" :style="hoverBoxStyle" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PicZoom",
  props: {
    // 图片框大小
    boxSize: {
      type: Number,
      default: 200,
    },
    // hover模糊框大小, 放大倍数根据此计算
    hoverBoxSize: {
      type: Number,
      default: 50,
    },
    // 图片地址
    picURL: {
      type: String,
      default: "https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526",
    },
  },
  computed: {
    // hover状态时阴影块的位置
    hoverBoxStyle() {
      return {
        top: `-${parseInt(this.mousePositon.top) - 8}px`,
        left: `-${parseInt(this.mousePositon.left) - 8}px`,
        zoom: this.boxSize / this.hoverBoxSize,
        width: `${this.boxSize}px`,
        height: `${this.boxSize}px`,
      };
    },
  },
  data() {
    return {
      hoverLimitPosition: {
        maxTop: 0,
        minTop: 0,
        maxLeft: 0,
        minLeft: 0,
      },
      isMouseOver: false,
      mousePositon: {
        width: this.hoverBoxSize + "px",
        height: this.hoverBoxSize + "px",
        top: "8px",
        left: "8px",
      },
    };
  },
  methods: {
    handleOver() {
      this.isMouseOver = true;
    },
    handleMove(e) {
      if (e.clientY < this.hoverLimitPosition.minTop + this.hoverBoxSize / 2) {
        this.mousePositon.top = this.hoverLimitPosition.minTop + "px";
      } else if (
        e.clientY >
        this.hoverLimitPosition.maxTop - this.hoverBoxSize / 2
      ) {
        this.mousePositon.top =
          this.hoverLimitPosition.maxTop - this.hoverBoxSize + "px";
      } else {
        this.mousePositon.top = e.clientY - this.hoverBoxSize / 2 + "px";
      }
      if (e.clientX < this.hoverLimitPosition.minLeft + this.hoverBoxSize / 2) {
        this.mousePositon.left = this.hoverLimitPosition.minLeft + "px";
      } else if (
        e.clientX >
        this.hoverLimitPosition.maxLeft - this.hoverBoxSize / 2
      ) {
        this.mousePositon.left =
          this.hoverLimitPosition.maxLeft - this.hoverBoxSize + "px";
      } else {
        this.mousePositon.left = e.clientX - this.hoverBoxSize / 2 + "px";
      }
    },
    handleLeave() {
      this.isMouseOver = false;
    },
  },
  mounted() {
    this.hoverLimitPosition = {
      maxTop: this.$refs.main.offsetTop + this.boxSize,
      minTop: this.$refs.main.offsetTop,
      maxLeft: this.$refs.main.offsetLeft + this.boxSize,
      minLeft: this.$refs.main.offsetLeft,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
    display: inline-block;
    position: relative;
}
.box-img {
    cursor: move;
    box-sizing: border-box;
    border: 1px solid #f2f2f2;
    z-index: 9;
}
.box-img img {
    max-width: 100%;
    max-height: 100%;
    width: fit-content;
    height: fit-content;
}
.box-hover {
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    bottom: 0;
}
.box-img-mini {
    margin-left: 10px;
    border: 1px solid #f2f2f2;
    position: absolute;
    bottom: 0;
    top: 0;
    width: 100%;
    overflow: hidden;

}
.box-img-mini img {
    position: absolute;
}
</style>