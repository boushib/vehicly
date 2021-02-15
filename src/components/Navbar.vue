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
          <li><router-link to="/listings/add">Add Vehicle</router-link></li>
        </ul>
        <div class="user" v-if="isAuth">
          <div class="avatar"></div>
          <div class="dropdown">
            <div class="username">
              Logged in as <b>{{ username }}</b>
            </div>
            <div>Profile</div>
            <div class="logout" @click="logout">Logout</div>
          </div>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 9999;
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
    li {
      cursor: pointer;
    }
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
    position: relative;
    cursor: pointer;
    &:hover {
      .dropdown {
        display: block;
      }
    }
    .dropdown {
      position: absolute;
      top: 38px;
      left: -10px;
      background-color: #fff;
      width: 200px;
      padding: 16px;
      border-radius: 4px;
      box-shadow: 0 2px 6px rgba(#000, 0.1);
      display: none;
      & > div {
        line-height: 1.8;
        cursor: pointer;
      }
      &::after {
        content: '';
        position: absolute;
        top: -16px;
        left: 23px;
        border: 8px solid transparent;
        border-bottom-color: #fff;
        z-index: 2;
      }
    }
  }
  .avatar {
    width: 40px;
    height: 40px;
    background-color: $green;
    border-radius: 50%;
    background-image: url('https://www.gravatar.com/avatar/b8e3a666521702b25fc6a4b784d20856?default=https%3A%2F%2Fcloud.digitalocean.com%2Favatars%2Fdefault5.png&secure=true');
    background-size: cover;
    background-position: center;
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