<template>
  <nav>
    <div class="container">
      <div class="nav__inner">
        <router-link tag="div" class="nav__brand" to="/">vStore</router-link>
        <ul class="main-menu">
          <router-link tag="li" to="/">Listings</router-link>
          <router-link tag="li" to="/add-vehicle">Add Vehicle</router-link>
        </ul>
        <router-link tag="button" class="btn" to="/login">Login</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  //
};
</script>

<style lang="scss">
nav {
  background-color: #fff;
  .nav__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav__brand {
    font-size: 17px;
    font-weight: bold;
  }
  .main-menu {
    list-style-type: none;
    display: flex;
    li {
      padding: 20px;
    }
  }
}
</style>