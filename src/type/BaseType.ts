// home
export interface BannerItem {
  id:number,
  pic:string
}
export interface ProItem {
  id:number,
  goodsname:string,
  pic:string,
  sale:number,
  rule:string,
  price:number
}
// cart
export interface cartItem{
  id:number
  goodsname:string
  goodsprice:string
  goodsnum:number,
  count:number
}
// address
export interface AddItem {
  id:number;
  username:string,
  mobile:number,
  address:string,
  isdefault:number
}

//弹框属性类型
export interface DialogModel {
  title:string,
  visible:boolean,
  height:number,
  width:number
}
// export interface DialogProps {
//     title: string;
//     visible: boolean;
//     width: number;
//     height: number;
// }