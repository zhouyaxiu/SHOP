import {defineStore} from "pinia";
export const useUserStore=defineStore("useUserStore",{
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
            windowHeight:document.documentElement.clientHeight-231
        }
    },
    getters:{
        
    },
    actions:{
        // handleCollapse(state:any){
        //     state.isCollapse=!state.isCollapse;
        // }
    }
})