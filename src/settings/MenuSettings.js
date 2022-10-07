const silderMenus = [
  {
    path: '/',
    meta: {
      title: '系统管理',
      icon: 'example'
    },
    children: [

      {
        path: 'app/index',
        meta: {
          title: '测试1',
          icon: 'table'
        }
      }, {
        path: 'user/index',
        meta: {
          title: '测试2',
          icon: 'table'
        }
      }

    ]
  },
  {
    path: '/sys',
    meta: {
      title: '工具组件',
      icon: 'example'
    },
    children: [
      {
        path: 'empty',
        meta: {
          title: '测试用具',
          icon: 'table'
        }
      }

    ]
  }

]

const navbarMenus = [{
  path: '/',
  title: '回到首页'
}]
// 左侧菜单数据
export function getSilderMenus() {
  return silderMenus
}
// 顶部右侧菜单数据
export function getNavbarMenus() {
  return navbarMenus
}
