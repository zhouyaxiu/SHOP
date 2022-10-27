import {defineStore} from "pinia";
export const store=defineStore("store",{
    state:()=>{
        return {
            islogin:false,
            isCollapse:false
        }
    },
    getters:{
        
    },
    actions:{
        handleCollapse(state:any){
            state.isCollapse=!state.isCollapse;
        }
    }
})