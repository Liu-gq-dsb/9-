<template>
  <div>
    <img src="../../public/images/1.png" class="onepng" alt="" />
  </div>
  <div class="boxbox1">
    <h1>登录即 创造您的用户</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">用户名:</label>
        <input
          type="text"
          id="username"
          v-model="credentials.username"
          required
        />
      </div>
      <div>
        <label for="password">密码:</label>
        <input
          type="password"
          id="password"
          v-model="credentials.password"
          required
        />
      </div>
      <div v-if="loginError" class="error">
        Login failed: Incorrect username or password.
      </div>
      <button type="submit">登录</button>
    </form>
    <p>
      还未拥有账户?
      <router-link to="/register">点击这里注册账户</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      credentials: {
        username: "cy666",
        password: "12345",
      },
      loginError: false,
    };
  },
  methods: {
    login() {
      // 这里添加你的登录逻辑
      if (
        this.credentials.username === "cy666" &&
        this.credentials.password === "12345"
      ) {
        // 登录成功，清空表单数据
        this.credentials.username = "cy666";
        this.credentials.password = "12345";
        this.loginError = false;
        // 跳转到CodeRepository页面
        this.$router.push({ name: "CodeRepository" });
      } else {
        // 登录失败，显示错误信息
        this.loginError = true;
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  color: black;
}
.error {
  color: red;
}
.onepng {
  width: 50vw;
  height: 100vh;
  position: relative;
  top: -65px;
  left: -400px;
}
.boxbox1 {
  width: 50vw;
  position: relative;
  top: -70vh;
  left: 500px;
}
button {
  background-color: blue;
  width: 400px;
}
</style>
