<template>
  <div class="listings page">
    <div class="container">
      <div class="loading" v-if="isLoading">Loading...</div>
      <template v-else>
        <template v-if="myVehicles.length">
          <vehicle-card
            v-for="vehicle in myVehicles"
            :vehicle="vehicle"
            :key="vehicle.id"
          />
        </template>
        <template v-else>
          <h3>You have no listings yet!</h3>
          <router-link to="/listings/add">Add a new vehicle?</router-link>
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VehicleCard from '@/components/VehicleCard.vue'
export default {
  name: 'home',
  components: {
    VehicleCard,
  },
  computed: {
    ...mapState(['isLoading', 'myVehicles']),
  },
  created() {
    this.$store.dispatch('getMyListings')
  },
}
</script>

<style lang="scss">
.listings {
  max-width: 800px;
  margin: 0 auto;
}
</style>
