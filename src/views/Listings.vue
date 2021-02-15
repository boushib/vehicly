<template>
  <div class="listings page">
    <div class="container">
      <div class="loading" v-if="isLoading">Loading...</div>
      <template v-else>
        <template v-if="vehicles.length">
          <vehicle-card
            v-for="vehicle in vehicles"
            :vehicle="vehicle"
            :isAuth="isAuth"
            :key="vehicle.id"
          />
        </template>
        <div class="empty">
          No vehicles yet!
          <router-link to="/listings/add">Add vehicle?</router-link>
        </div>
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
