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
          <div class="password-input">
            <div class="icon" @click="togglePassword">
              <visibility-off v-if="showPassword" />
              <visibility v-else />
            </div>
            <input
              type="password"
              placeholder="Enter password"
              v-model="password"
              required
            />
          </div>
          <button class="btn">Login</button>
          <form-error :message="error" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import FormError from '@/components/FormError.vue'
import Visibility from '@/components/icons/Visibility.vue'
import VisibilityOff from '@/components/icons/VisibilityOff.vue'
export default {
  data() {
    return {
      username: null,
      password: null,
      error: null,
      showPassword: false,
    }
  },
  components: {
    FormError,
    Visibility,
    VisibilityOff,
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
    togglePassword(e) {
      const input = e.currentTarget.nextElementSibling
      this.showPassword = !this.showPassword
      input.type = this.showPassword ? 'text' : 'password'
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