<template>
  <div :style="{height:windowHeight+'px'}">
    <div class="">
      <img src="../assets/contact.jpg" class="w100" />
    </div>
    <div class="concat">
      <el-row :gutter="20" align="middle" >
        <el-col :span="6" :offset="6">
          <div class="f12">联系电话：</div>
          <div class="f18 marginb6">联系xxx客服服务中心，请致电 </div>
          <div class="f12 marginb20 c999">每周一到周五，9:00-18:00 </div>
          <div class="">818-3447-4747</div>
        </el-col>
        <el-col :span="6">
          <el-row :gutter="0" align="middle" class="pad16" style="border: 1px solid #333;box-sizing: border-box;">
            <el-col :span="12">
              <div class="f14 marginb6">扫码关注公众号<el-icon class="marginl10 mid"><Right /></el-icon></div>
              <div class="c999 f12">微信搜索“xxx”即可</div>
            </el-col>
            <el-col :span="12">
              <img alt="小程序" class="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAIAAAAP3aGbAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAH2UlEQVR4nO3dQW5jSRIFQWrQ979yzQUaU7kIxIRTZgcgv0jKkZuH/Pnz588HoOA//+8HAHglWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARn/TL3Qz8/P1EsVvVzv+PIRTb3OlOXn2Xy7zRs5/XdMvZQTFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARljW8IXm+utKQeHcsWP8TP32NfmloOK3+zyR+2EBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQMbqlvDFtUv3DoruDa/dJ/jLP8YXB/98JywgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyzm0Jv9jUeO3ldTbf69G1+wQPDuX4KycsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMmwJ90yN1zZHeQf3hlOu3ZPICycsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMs5tCS2z/mpqBLd5CeCgg1cubvrl/yBOWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWSsbgmj660pUyO4F1NjuuVR3uYjHdwb/vJ/kBdOWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpDx88vvZeR/GxxsX1v2bo6omeKEBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQMbqRaovoldgXhumHRzBFS9Avfa1PvriX5oTFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARnntoRTs6PlFdi1S/deLK/Arm3urg3uBt/uxbWv45ETFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARljW8Jry6yDK7CXl7p2od6yzW92cyg3uEi9tjdc5oQFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAxs/y5m7NwXsJD97y9le//OrGg/8d17aEy79qJywgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyxu4lfLG5zJqaQS0v4K4N7g7uH5dXopuuPdK15/k4YQEhggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpCxei/hL79SbVP0z7/22NemnZ/mnz/4zE5YQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZKzeSzjl4J2D1yaZxcXZoM2P8dr+8dHBb+2FExaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZggVknBs/X9tkPs5Wi2vbg9dkvtj8hVz7qB9dm8cPcsICMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwg49yWcGqZtbwC27xIdfN1Bhdn0QtH/+qLr+O99l4fJywgRLCADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyfq6tt6KLs+hj/9W1ayI/92abg679Qg4uUp2wgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBi7l/Bbr0IbXJxd2xsuP8/mTZHXRnnXnudzckr5wgkLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CAjNV7Ca9tAJeHctcszy2vrTs3d4uDH9EX/xO9cMICMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgY2xLeG3idNDg6Cz3XoOi3/410V+IExaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZ/0y90OagbHm8NmVzBLd8od6UaxfhXXuez8lH2uSEBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQMbYlvCX3xb3st66tvCa+sqiX/21aefn3kzyICcsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBgbP7+4tv59MbgRLV5uevCW0KmPcfOjPvjLv/ZLe+SEBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQMbqlvDFFw/lNh28krN41+yLg4O74tzykRMWkCFYQIZgARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGee2hF/s4L5vRHEAOOjg1Y2bj7T85zthARmCBWQIFpAhWECGYAEZggVkCBaQIVhAhmABGYIFZAgWkGFLuOfavm/5RrmpEdzm67y4Nu77zP1pm1/HIycsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMs5tCb/4kruDy6yR93pcrhWvZZx65sHZ5rW5pXsJAf6dYAEZggVkCBaQIVhAhmABGYIFZAgWkCFYQIZgARmCBWSsbgmXL8L7VpsLr8H3unYt44vlX2xx3+deQoB/J1hAhmABGYIFZAgWkCFYQIZgARmCBWQIFpAhWECGYAEZP198DyDwZZywgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIEOwgAzBAjIEC8gQLCBDsIAMwQIyBAvIECwgQ7CADMECMgQLyBAsIOO/RSc6R70DyPMAAAAASUVORK5CYII=" width="140" height="140" />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
  import  {useInfoStore} from '../store';
  const store = useInfoStore();

  const windowHeight=store.windowHeight
</script>

<style scoped>
  .concat{padding:100px;}
</style>