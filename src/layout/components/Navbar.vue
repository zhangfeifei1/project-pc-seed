<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <!--面包屑-->
    <breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <i class="el-icon-menu" />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <div v-for="(item,index) in menus" :key="index">
            <router-link :to="item.path">
              <el-dropdown-item>
                {{ item.title }}
              </el-dropdown-item>
            </router-link>
          </div>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
import {
  getNavbarMenus
} from '@/settings/MenuSettings'
import Breadcrumb from '@/components/BreadCrumb'
import Hamburger from '@/components/Hamburger'
import elDropdown from '@/components/Dropdown/src/dropdown'
import elDropdownMenu from '@/components/Dropdown/src/dropdown-menu'
import elDropdownItem from '@/components/Dropdown/src/dropdown-item'
export default {
  components: {
    Breadcrumb,
    Hamburger,
    elDropdown,
    elDropdownMenu,
    elDropdownItem
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ]),
    menus() {
      // 顶部菜单json数据
      return getNavbarMenus()
    }
  },
  methods: {
    toggleSideBar() {
      // 开启或关闭左侧菜单
      this.$store.dispatch('app/toggleSideBar')
    },
    // 登出交易 异步操作，需引用async函数
    async logout() {
      // async函数中使用await返回一个promise函数 等待返回后继续执行下面语句
      // await this.$store.dispatch('user/LogOut')
      this.$router.push('/login')
      // this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}

</script>

<style lang="scss" scoped>
  .navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

    .hamburger-container {
      line-height: 46px;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color: transparent;

      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }

    .breadcrumb-container {
      float: left;
    }

    .right-menu {
      float: right;
      height: 100%;
      line-height: 50px;

      &:focus {
        outline: none;
      }

      .right-menu-item {
        display: inline-block;
        padding: 0 8px;
        height: 100%;
        font-size: 18px;
        color: #5a5e66;
        vertical-align: text-bottom;

        &.hover-effect {
          cursor: pointer;
          transition: background .3s;

          &:hover {
            background: rgba(0, 0, 0, .025)
          }
        }
      }

      .avatar-container {
        margin-right: 30px;

        .avatar-wrapper {
          margin-top: 5px;
          position: relative;

          .user-avatar {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }

          .el-icon-caret-bottom {
            cursor: pointer;
            position: absolute;
            right: -20px;
            top: 25px;
            font-size: 12px;
          }
        }
      }
    }
  }

</style>
