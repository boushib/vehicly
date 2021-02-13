<template>
  <nav>
    <div class="container">
      <div class="nav__inner">
        <router-link class="nav__brand" to="/"><span>v</span>Store</router-link>
        <ul class="main-menu">
          <li><router-link to="/">Listings</router-link></li>
          <!-- <li>
            <router-link v-if="isAuth" to="/my-listings"
              >My Listings</router-link
            >
          </li> -->
          <li><router-link to="/add-vehicle">Add Vehicle</router-link></li>
          <!-- <li><router-link to="/search">Search</router-link></li> -->
        </ul>
        <div class="user" v-if="isAuth">
          <div class="username">
            Logged in as <b>{{ username }}</b>
          </div>
          <div class="logout" @click="logout">Logout</div>
        </div>
        <router-link to="/login" v-else>
          <button class="btn">Login</button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['isAuth', 'username']),
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    },
  },
}
</script>

<style lang="scss">
nav {
  height: 60px;
  background-color: #fff;
  border: 1px solid rgba($grey, 0.1);
  user-select: none;
  .nav__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav__brand {
    display: block;
    text-decoration: none;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0.5px;
    cursor: pointer;
    span {
      color: $green;
      font-weight: 600;
    }
  }
  .main-menu {
    list-style-type: none;
    display: flex;
    a {
      padding: 19px;
      font-size: 16px;
      position: relative;
      text-decoration: none;
      display: inline-block;
      cursor: pointer;
      &.active {
        color: $green;
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 100%;
          background-color: $green;
        }
      }
    }
  }
  .user {
    display: flex;
    font-size: 16px;
  }
  .username {
    margin-right: 16px;
  }
  .logout {
    color: $red;
    cursor: pointer;
  }
}
</style>