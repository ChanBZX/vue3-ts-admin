<template>
  <div class="container">
    <el-container>
      <el-aside class="aside">Aside</el-aside>
      <el-container>
        <el-header class="header">Header</el-header>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">

</script>

<style lang="less" scoped>
.container {
  height: 100vh;
}
.aside {
  background-color: #152031;
  width: 230px;
  height: 100vh;
}
.header {
  background-color: #eee;
}
.main {
  background-color: #ccc;
}
</style>