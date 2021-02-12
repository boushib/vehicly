<template>
  <nav>
    <div class="container">
      <div class="nav__inner">
        <router-link class="nav__brand" to="/"><span>v</span>Store</router-link>
        <ul class="main-menu">
          <li><router-link to="/">Listings</router-link></li>
          <li><router-link to="/add-vehicle">Add Vehicle</router-link></li>
          <li><router-link to="/search">Search</router-link></li>
        </ul>
        <router-link to="/login">
          <button class="btn">Login</button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  //
}
</script>

<style lang="scss">
nav {
  height: 60px;
  background-color: #fff;
  border: 1px solid rgba($darkGrey, 0.1);
  user-select: none;
  .nav__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav__brand {
    display: block;
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: $darkGrey;
    cursor: pointer;
    span {
      color: $green;
    }
  }
  .main-menu {
    list-style-type: none;
    display: flex;
    a {
      padding: 20px;
      font-size: 15px;
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
}
</style>