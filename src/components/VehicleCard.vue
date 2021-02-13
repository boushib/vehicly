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
          <gas-station-icon />
          {{ vehicle.fuel }}
        </div>
        <div class="gear-box">
          <gear-icon />
          {{ vehicle.gear_box }}
        </div>
        <div class="horse-power">
          <power-icon />
          {{ vehicle.hp }} hp
        </div>
      </div>
      <div class="footer">
        <div class="time">
          <time-icon />
          {{ vehicle.created_at | timeAgo }}
        </div>
        <div class="location">
          <location-icon />
          {{ vehicle.location }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GasStationIcon from '@/components/icons/GasStation.vue'
import GearIcon from '@/components/icons/Gear.vue'
import LocationIcon from '@/components/icons/Location.vue'
import PowerIcon from '@/components/icons/Power.vue'
import TimeIcon from '@/components/icons/Time.vue'
export default {
  props: ['vehicle'],
  components: {
    GasStationIcon,
    GearIcon,
    LocationIcon,
    PowerIcon,
    TimeIcon,
  },
}
</script>

<style lang="scss">
.vehicle__card {
  display: flex;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba($grey, 0.06);
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  .vehicle__image {
    width: 260px;
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
      font-size: 16px;
    }
    .time {
      margin-right: 20px;
    }
  }
  .fuel,
  .location,
  .gear-box,
  .horse-power,
  .time {
    display: flex;
    align-items: center;
    color: #9e9e9e;
    font-size: 16px;
    svg {
      margin-right: 4px;
      width: 16px;
      height: 16px;
      path {
        fill: #bbb;
      }
    }
  }
  .title {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 12px;
  }
  .price {
    font-size: 20px;
    font-weight: 600;
    color: $green;
    margin-bottom: 12px;
  }
  .fuel,
  .gear-box {
    margin-bottom: 12px;
  }
}
</style>