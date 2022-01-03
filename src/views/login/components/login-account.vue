<template>
  <div>
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name" required>
        <el-input v-model="account.name"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password" required>
        <el-input v-model="account.password" type="password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import localCache from '../../../utils/cache'

import { rules } from '../config/account-config'

const store = useStore()

const account = reactive({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})
const formRef = ref<InstanceType<typeof ElForm>>()

const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    console.log(valid);
    // 1.判断是否要记住密码
    if (isKeepPassword) {
      // 本地缓存
      localCache.setCache('name', account.name)
      localCache.setCache('password', account.password)
    } else {
      localCache.deleteCache('name')
      localCache.deleteCache('password')
    }
    // 2.开始进行登录验证
    store.dispatch('login/accountLoginAction', { ...account })
  })
}

defineExpose({
  loginAction
})
</script>