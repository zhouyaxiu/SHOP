import {defineStore} from "pinia";
export const useInfoStore =defineStore({
  id:"GlobalStore1",
  state:()=>{
    return {
      islogin:false,
      isCollapse:false,
      cartList:[{
          id:1,
          goodsname: '阿达说法萨芬',
          goodsprice: '192',
          goodsnum: 1,
          count:192
        },{
          id:2,
          goodsname: '而恒天然恒天然和',
          goodsprice: '345',
          goodsnum: 2,
          count:192
        },{
          id:3,
          goodsname: '阿发是否',
          goodsprice: '13',
          goodsnum: 3,
          count:192
        },
      ],
      collectList:[{
          id:1,
          goodsname: '阿达说法萨芬',
          goodsprice: '192',
          goodsnum: 1,
          count:192
        },{
          id:2,
          goodsname: '而恒天然恒天然和',
          goodsprice: '345',
          goodsnum: 2,
          count:192
        }
      ],
      proList:[{pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:0,sale:100,rule:'性感',price:100},
          {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:1,sale:100,rule:'性感',price:100},
          {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:2,sale:100,rule:'性感',price:100},
          {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:3,sale:100,rule:'性感',price:100},
          {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:4,sale:100,rule:'性感',price:100},
          {pic:'https://img0.baidu.com/it/u=1088754973,1390499664&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666890000&t=20ffd12ef81a25e3465a45fef9a5a526',goodsname:'安居客库萨克积分',id:5,sale:100,rule:'性感',price:100},],
      windowHeight:document.documentElement.clientHeight-230
    }
  },
  getters:{
      
  },
  actions:{
    // handleCollapse(state:any){
    //     state.isCollapse=!state.isCollapse;
    // }
    resizeWidowHeight(state:any){
      window.onresize=()=>{
        state.windowHeight=document.documentElement.clientHeight-230
      }
    }
  }
})
