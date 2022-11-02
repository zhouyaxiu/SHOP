import axios,{AxiosRequestConfig,AxiosResponse,AxiosError} from "axios";
import store from "@/store";
import router from "@/router";
import { ElMessage } from "element-plus";
const devUrl="http://localhost:3000";
const requestUrl="http://localhost:3001";

const service=axios.create({
  baseURL:process.env.NODE_ENV==='development'?devUrl:requestUrl,
  timeout:5000
})


service.interceptors.request.use(
  // 发送请求之前拦截
  (config:AxiosRequestConfig)=>{
    if(store.state.islogin){
        
    }
    return config;
  },
  (error:AxiosError)=>{
    return Promise.reject(error);
  }
)


service.interceptors.response.use(
  (response:AxiosResponse)=>{
    if(response.status==200){
      return Promise.resolve(response.data);
    }else{
      ElMessage.error(response.data.message);
      return Promise.reject(response.data);
    }
  },
  (error:AxiosError)=>{
      // 会话过期
    if((error.response as any).status==403){
      ElMessage.error("会话已过期");
      router.replace("/login");
    }else{
      ElMessage.error((error.response as any).data.message);
    }
    return Promise.reject(error);
  }
)

export default service;