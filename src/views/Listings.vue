<template>
  <div class="listings page">
    <div class="container">
      <vehicle-card v-for="(v, i) in 3" :key="i" />
    </div>
  </div>
</template>

<script>
import VehicleCard from '@/components/VehicleCard.vue'
export default {
  name: 'home',
  components: {
    VehicleCard,
  },
  created() {
    this.$store.dispatch('getVehicles')
  },
}
</script>

<style lang="scss">
.listings {
  max-width: 720px;
  margin: 0 auto;
}
</style>
