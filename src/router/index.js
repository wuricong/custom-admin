import Vue from 'vue'
import Router from 'vue-router'
import App from "@/App.vue";
Vue.use(Router)


const routes = [
  {path:'/',component:App},
  {path:'/l',component:App}
]
const router = new Router({routes})
console.log('router',router)

router.beforeEach((to,from,next)=>{
  console.log('to',to,from,next)
  next()
})


router.afterEach((to,from)=>{
  console.log('to',to,from)
})
export default router
