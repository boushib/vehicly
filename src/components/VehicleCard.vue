<template>
  <div class="vehicle__card">
    <div
      class="vehicle__image"
      :style="{
        backgroundImage: `url('${vehicle.image_url}')`,
      }"
    ></div>
    <div class="vehicle__info">
      <div class="content">
        <div class="price">${{ vehicle.price }}</div>
        <div class="title">{{ vehicle.make }} {{ vehicle.model }}</div>
        <div class="fuel">{{ vehicle.fuel }}</div>
        <div class="year">{{ vehicle.year }}</div>
      </div>
      <div class="footer">
        <div class="date">12:49</div>
        <div class="location">{{ vehicle.location }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['vehicle'],
}
</script>

<style lang="scss">
.vehicle__card {
  display: flex;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba($darkGrey, 0.1);
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  .vehicle__image {
    width: 280px;
    background-color: #ddd;
    background-size: cover;
    background-position: center;
  }
  .vehicle__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  }
  .content {
    padding: 28px;
  }
  .footer {
    display: flex;
    align-items: center;
    padding: 10px 28px;
    border-top: 1px solid #ebebeb;
  }
  .price {
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 0.5px;
    color: $green;
    margin-bottom: 12px;
  }
  .title,
  .fuel {
    margin-bottom: 10px;
  }
  .date {
    margin-right: 20px;
  }
}
</style>