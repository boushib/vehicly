<template>
  <div class="vehicle__card">
    <div
      class="vehicle__image"
      :style="{
        backgroundImage: `url('${vehicle.image_url}')`,
      }"
    ></div>
    <div class="vehicle__info">
      <div class="time">{{ vehicle.created_at | timeAgo }}</div>
      <div class="item price">${{ vehicle.price }}</div>
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
      <div class="location">
        <location-icon />
        {{ vehicle.location }}
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
    width: 300px;
    background-color: #ddd;
    background-size: cover;
    background-position: center;
    transform: skew(-4deg);
    position: relative;
    left: -10px;
  }
  .vehicle__info {
    padding: 28px;
    flex-grow: 1;
    position: relative;
    & > div {
      display: flex;
      align-items: center;
      color: #9e9e9e;
      font-size: 16px;
      &:not(:last-child) {
        margin-bottom: 12px;
      }
      &.time {
        position: absolute;
        top: 28px;
        right: 28px;
      }
      &.title,
      &.price {
        font-size: 20px;
      }
      &.title {
        font-weight: 400;
      }
      &.price {
        font-weight: 600;
        color: $green;
      }
      &.time {
        color: #bebebe;
      }
      svg {
        margin-right: 4px;
        width: 16px;
        height: 16px;
        path {
          fill: #bbb;
        }
      }
    }
  }
}
</style>