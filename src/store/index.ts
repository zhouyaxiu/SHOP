import {defineStore} from "pinia";
export const store=defineStore("store",{
    state:()=>{
        return {
            islogin:false
        }
    },
    getters:{
        
    },
    actions:{
        // handleCollapse(){
        //     this.collapse=!this.collapse;
        // }
    }
})