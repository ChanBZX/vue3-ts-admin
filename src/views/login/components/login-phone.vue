<template>
  <div>
    <el-form>
      <el-form-item label="手机号" prop="phone" required>
        <el-input v-model="phone.number"></el-input>
      </el-form-item>

      <el-form-item label="验证码" prop="verify-code" required>
        <div class="get-code">
          <el-input v-model="phone.code"></el-input>
          <el-button class="submit" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const phone = reactive({
  number: '',
  code: ''
})
</script>

<style lang="less" scoped>
.get-code {
  display: flex;

  .submit {
    margin-left: 10px;
  }
}
</style>