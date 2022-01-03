// 验证规则
export const rules = {
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { pattern: /^[a-z0-9]{5,15}/, message: '用户名为5-15位字母或数字', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { pattern: /^[a-z0-9]{5,10}/, message: '密码为5-10位字母或数字', trigger: 'blur' }
  ]
} 