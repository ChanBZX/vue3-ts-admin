<template>
  <div class="login-panel">
    <h1>后台管理系统</h1>
    <el-tabs class="main" stretch type="border-card" v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="icon-title">
            <el-icon size="15">
              <user />
            </el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="icon-title">
            <el-icon size="15">
              <iphone />
            </el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <div class="button">
      <el-button class="login" type="primary" @click="handleLoginClick">立即登录</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { User, Iphone } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

// 定义属性
const isKeepPassword = ref(false)
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof LoginAccount>>()
const currentTab = ref<string>('account')

// 定义方法
const handleLoginClick = () => {
  if (currentTab.value === 'account') {
    accountRef.value?.loginAction(isKeepPassword.value)
  } else {
    phoneRef.value?.loginAction(isKeepPassword.value)
  }

}

</script>


<style lang="less" scoped>
.login-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 110vh;
  margin-top: -10vh;
  background-color: #eee;
}

.main {
  width: 320px;
}

.icon-title {
  display: flex;
  align-items: center;
  justify-content: stretch;
  text-align: center;
}

.button {
  width: 320px;
  .login {
    width: 100%;
  }
}

.account-control {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  font-size: 14px;
  color: #101010;
}
</style>