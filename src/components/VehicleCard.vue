<template>
  <div class="vehicle__card">
    <!-- TODO: make it possible onlt to delete their own listings -->
    <div class="controls" v-if="isAuth">
      <div class="control edit" @click="editListing">
        <edit-icon />
      </div>
      <div class="control delete" @click="deleteListing">
        <delete-icon />
      </div>
    </div>
    <div
      class="vehicle__image"
      :style="{
        backgroundImage: `url('${vehicle.imageURL}')`,
      }"
    ></div>
    <div class="vehicle__info">
      <div class="time">
        {{ (vehicle.updatedAt || vehicle.createdAt) | timeAgo }}
      </div>
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
        {{ vehicle.gearBox }}
      </div>
      <div class="horse-power">
        <power-icon />
        {{ vehicle.horsepower }} hp
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
import EditIcon from '@/components/icons/Edit.vue'
import DeleteIcon from '@/components/icons/Delete.vue'
export default {
  props: ['vehicle', 'isAuth'],
  components: {
    GasStationIcon,
    GearIcon,
    LocationIcon,
    PowerIcon,
    TimeIcon,
    EditIcon,
    DeleteIcon,
  },
  methods: {
    editListing() {
      this.$router.push(`/listings/${this.vehicle.id}/edit`)
    },
    deleteListing() {
      this.$store.dispatch('deleteListing', this.vehicle.id)
    },
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
  position: relative;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  &:hover {
    .controls {
      opacity: 1;
    }
  }
  .controls {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 2;
    opacity: 0;
    display: flex;
    transition: opacity 0.5s ease-in-out;
    .control {
      height: 32px;
      width: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 12px;
        height: 12px;
      }
      &:not(:last-child) {
        margin-right: 6px;
      }
    }
    .edit {
      background-color: $teal;
    }
    .delete {
      background-color: $red;
    }
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
    padding: 24px;
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
        top: 24px;
        right: 24px;
        line-height: 1;
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