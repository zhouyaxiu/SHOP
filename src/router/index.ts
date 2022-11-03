import { createRouter, createWebHistory } from 'vue-router';
import { userRoutes } from './userRoutes';
import defaultRoutes from './defaultRoutes';
const routes:any=userRoutes.concat(defaultRoutes);
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach((to,from,next)=>{
  let userInfo=localStorage.getItem("user");
  if(to.path=='/login'){
    next();
  }else{
    if(!userInfo){
      next();
    }else{
      next({
        path:"/login"
      });
    }
  }
})
router.afterEach((to,from,next)=>{
  window.scrollTo(0,0);
})
export default router;
