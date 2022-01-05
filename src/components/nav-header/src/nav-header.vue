<template>
  <div class="nav-header">
    <div class="header-left">
      <div class="open-close" @click="openClose">
        <el-icon v-if="!isFold" size="26">
          <fold />
        </el-icon>
        <el-icon v-else size="26">
          <expand />
        </el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'

const emit = defineEmits(['foldChange'])

const isFold = ref(false)

const openClose = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<style lang="less" scoped>
.nav-header {
  height: 100%;
  display: flex;
  align-items: center;
}
.open-close {
  cursor: pointer;
}
</style>