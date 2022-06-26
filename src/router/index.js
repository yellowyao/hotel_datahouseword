// import Vue from 'vue'
// import VueRouter from 'vue-router'

// 组件通过export暴露接口，路由中导入组件

// // 导入 vue-router 依赖
// Vue.use(VueRouter);

// export default new VueRouter({
//     routes: [{
//             path: '/', // 跳转路径
//             name: 'index', // 名称
//             component: index // 组件
//         }

//     ]
// });

// vue-Router@4.0+的写法
import index from '../components/index'
import detail from "@/components/detail";
import login from "@/components/login";
import register from "@/components/register";
import userInfo from "@/components/userInfo";
import {
    ElMessage
} from 'element-plus'
import {
    createRouter,
    createWebHistory
} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', // 跳转路径
            name: 'index', // 名称
            component: index // 组件
        }, {
            path: '/detail',
            name: 'detail',
            component: detail
        }, {
            path: '/login',
            name: 'login',
            component: login
        }, {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/userInfo',
            name: 'userInfo',
            component: userInfo
        }
    ]
})
router.beforeEach((to, from) => {

})
export default router