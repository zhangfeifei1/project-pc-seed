/* 布局模板 */
import Layout from '@/layout'
export default [
  // 菜单页
  {
    path: '/home',
    component: Layout,
    name: 'Home',
    redirect: '/home/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: {
          title: '欢迎',
          icon: 'dashboard'
        }
      }
    ],
    meta: {
      title: '首页欢迎',
      icon: 'dashboard'
    }
  }
]
