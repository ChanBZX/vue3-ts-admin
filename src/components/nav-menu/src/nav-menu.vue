<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="../../../../public/favicon.ico" />
      <span v-if="!isCollapse" class="title">Vue3+TS</span>
    </div>
    <div>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#152031"
        class="el-menu"
        text-color="#fff"
        :collapse="isCollapse"
      >
        <template v-for="item in userMenus" :key="item.id">
          <!-- 二级菜单 -->
          <template v-if="item.type === 1">
            <!-- 可以展开的标题 -->
            <el-sub-menu :index="item.id + ''">
              <template #title>
                <el-icon>
                  <calendar />
                </el-icon>
                <span>{{ item.name }}</span>
              </template>
              <template v-for="subitem in item.children" :key="subitem.id">
                <el-menu-item :index="subitem.id + ''">
                  <span>{{ subitem.name }}</span>
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '../../../store/index'
import { Calendar } from '@element-plus/icons-vue'

const props = defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})

const store = useStore()
const userMenus = computed(() => store.state.login.userMenus)
</script> 

<style lang="less" scoped>
.nav-menu {
  .logo {
    display: flex;
    align-items: center;
    margin: 10px 0 10px 13px;
    .title {
      margin-left: 10px;
      color: #fff;
      font-weight: bold;
    }
  }
  .el-menu {
    border-right: 1px solid #152031;
  }
}
</style>