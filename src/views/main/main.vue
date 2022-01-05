<template>
  <div class="container">
    <el-container>
      <el-aside class="aside" :width="isCollapse ? '60px' : '210px'">
        <NavMenu :isCollapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header class="header">
          <NavHeader @foldChange="handleFoldChange" />
        </el-header>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import NavMenu from '../../components/nav-menu/index'
import NavHeader from '../../components/nav-header/index'

const isCollapse = ref(false)

const handleFoldChange = (isFold: boolean) => {
  isCollapse.value = isFold

}

</script>

<style lang="less" scoped>
.container {
  height: 100vh;
}
.aside {
  background-color: #152031;
  height: 100vh;
}
.header {
  background-color: #eee;
}
.main {
  background-color: #ccc;
}
</style>