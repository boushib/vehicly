<template>
  <div class="listings page">
    <div class="container">
      <div class="loading" v-if="isLoading">Loading...</div>
      <template v-else>
        <vehicle-card
          v-for="vehicle in vehicles"
          :vehicle="vehicle"
          :isAuth="isAuth"
          :key="vehicle.id"
        />
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import VehicleCard from '@/components/VehicleCard.vue'
export default {
  name: 'home',
  components: {
    VehicleCard,
  },
  computed: {
    ...mapState(['isLoading', 'vehicles']),
    ...mapGetters(['isAuth']),
  },
  created() {
    this.$store.dispatch('getListings')
  },
}
</script>

<style lang="scss">
.listings {
  max-width: 800px;
  margin: 0 auto;
}
</style>
