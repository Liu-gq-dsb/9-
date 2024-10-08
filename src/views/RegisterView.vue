<template>
  <div>
    <h1>注册账户</h1>
    <form @submit.prevent="register">
      <div>
        <label for="username">输入你的注册账户:</label>
        <input
          type="text"
          id="username"
          v-model="credentials.username"
          required
        />
      </div>
      <div>
        <label for="password">输入你的注册密码:</label>
        <input
          type="password"
          id="password"
          v-model="credentials.password"
          required
        />
      </div>
      <button type="submit">确认注册</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      credentials: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      // 添加注册逻辑
      console.log("Register", this.credentials);
      // 假设注册成功后跳转到登录页面
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
