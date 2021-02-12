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
        <div class="title">
          {{ vehicle.make }} {{ vehicle.model }} - {{ vehicle.year }}
        </div>
        <div class="fuel">
          <img src="@/assets/img/gas-station.svg" alt="fuel" />{{
            vehicle.fuel
          }}
        </div>
        <div class="gear-box">
          <img src="@/assets/img/gear.svg" alt="gear box" />
          {{ vehicle.gear_box }}
        </div>
        <div class="horse-power">
          <img src="@/assets/img/power.svg" alt="horse power" />
          {{ vehicle.hp }} hp
        </div>
      </div>
      <div class="footer">
        <div class="time">
          <img src="@/assets/img/time.svg" alt="time" />
          {{ new Date(vehicle.created_at).toLocaleDateString() }}
        </div>
        <div class="location">
          <img src="@/assets/img/location-pin.svg" alt="location" />{{
            vehicle.location
          }}
        </div>
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
  box-shadow: 0 0 10px rgba($darkGrey, 0.06);
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
    .time,
    .location {
      display: flex;
      align-items: center;
      color: #9e9e9e;
      font-size: 15px;
      img {
        margin-right: 4px;
      }
    }
    .time {
      margin-right: 20px;
      img {
        width: 18px;
      }
    }
  }
  .title {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 12px;
  }
  .fuel,
  .location,
  .gear-box,
  .horse-power {
    display: flex;
    align-items: center;
    color: #9e9e9e;
    font-size: 15px;
    img {
      margin-right: 4px;
      width: 18px;
    }
  }
  .fuel,
  .gear-box {
    margin-bottom: 12px;
  }
  .price {
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 0.5px;
    color: $green;
    margin-bottom: 12px;
  }
}
</style>