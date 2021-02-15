<template>
  <div class="login page">
    <div class="container">
      <div class="form-card">
        <h1>Login</h1>
        <form action="" @submit.prevent="login">
          <input
            type="text"
            placeholder="Enter username"
            v-model="username"
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            v-model="password"
            required
          />
          <button class="btn">Login</button>
          <div class="error" v-if="error">{{ error }}</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
      error: null,
    }
  },
  methods: {
    async login() {
      this.error = null
      const { username, password } = this
      const error = await this.$store.dispatch('auth/login', {
        username,
        password,
      })
      if (error) {
        this.error = error
      }
    },
  },
}
</script>

<style lang="scss">
.login {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>