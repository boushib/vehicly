<template>
  <nav>
    <div class="container">
      <div class="nav__inner">
        <router-link tag="div" class="nav__brand" to="/"
          ><span>v</span>Store</router-link
        >
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
  border: 1px solid rgba($darkGrey, 0.1);
  user-select: none;
  .nav__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav__brand {
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
    li {
      padding: 20px;
      font-size: 15px;
      position: relative;
      cursor: pointer;
      &.active {
        color: $green;
        &::after {
          content: "";
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