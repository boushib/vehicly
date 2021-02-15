<template>
  <div class="add-listing page">
    <div class="container">
      <h1>Add a new vehicle</h1>
      <form @submit.prevent="addListing">
        <div class="grid">
          <div class="col">
            <div class="select">
              <select
                v-model="vehicle.make"
                required
                @change="vehicle.model = ''"
              >
                <option disabled value="">Select Make</option>
                <option :value="make" v-for="make in makes" :key="make">
                  {{ make }}
                </option>
              </select>
            </div>
            <div class="select" :class="{ disabled: models.length === 0 }">
              <select
                v-model="vehicle.model"
                :disabled="models.length === 0"
                required
              >
                <option disabled value="">Select Model</option>
                <option :value="model" v-for="model in models" :key="model">
                  {{ model }}
                </option>
              </select>
            </div>
            <div class="select">
              <select v-model="vehicle.fuel" required>
                <option disabled value="">Select fuel</option>
                <option value="Diesel">Diesel</option>
                <option value="Gasoline">Gasoline</option>
              </select>
            </div>
            <input
              type="number"
              placeholder="Year"
              v-model="vehicle.year"
              required
            />
            <input
              type="number"
              placeholder="Price"
              v-model="vehicle.price"
              required
            />
          </div>
          <div class="col">
            <input
              type="file"
              @change="imageFile = $event.target.files[0]"
              required
            />
            <input
              type="text"
              placeholder="Location"
              v-model="vehicle.location"
              required
            />
            <input
              type="text"
              placeholder="Phone"
              v-model="vehicle.phone"
              required
            />
            <input
              type="number"
              placeholder="Horsepower"
              v-model="vehicle.horsepower"
              required
            />
            <div class="select">
              <select v-model="vehicle.gearBox" required>
                <option disabled value="">Select gear box</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
          </div>
        </div>
        <button v-if="isLoading" class="btn" type="button" disabled>
          Saving vehicle...
        </button>
        <button v-else class="btn">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { vehicleMakes, vehicleModels } from '@/data/vehicles'
export default {
  data() {
    return {
      vehicle: {
        make: '',
        model: '',
        fuel: '',
        year: null,
        price: null,
        imageURL: null,
        location: null,
        phone: null,
        horsepower: null,
        gearBox: '',
      },
      imageFile: null,
    }
  },
  computed: {
    ...mapState(['isLoading']),
    makes() {
      return vehicleMakes
    },
    models() {
      return vehicleModels[this.vehicle.make.toLowerCase()] || ['']
    },
  },
  methods: {
    async addListing() {
      const imageURL = await this.$store.dispatch('uploadFile', this.imageFile)
      this.vehicle.imageURL = imageURL
      this.$store.dispatch('addListing', this.vehicle)
    },
  },
}
</script>

<style lang="scss">
.add-listing {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>