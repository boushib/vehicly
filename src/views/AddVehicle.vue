<template>
  <div class="add-vehicle page">
    <div class="container">
      <h1>Add a new vehicle</h1>
      <form @submit.prevent="addListing">
        <div class="grid">
          <div class="col">
            <input
              type="text"
              placeholder="Make"
              v-model="vehicle.make"
              required
            />
            <input
              type="text"
              placeholder="Model"
              v-model="vehicle.model"
              required
            />
            <input
              type="text"
              placeholder="Fuel"
              v-model="vehicle.fuel"
              required
            />
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
              type="text"
              placeholder="Image URL"
              v-model="vehicle.imageURL"
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
            <input
              type="text"
              placeholder="Gear Box"
              v-model="vehicle.gearBox"
              required
            />
          </div>
        </div>
        <button class="btn">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vehicle: {
        // make: 'Ford',
        // model: 'Fiesta',
        // fuel: 'Gasoline',
        // year: 2014,
        // price: 9000,
        // imageURL:
        //   'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2017-ford-fiesta-1557785069.jpg',
        // location: 'Settat',
        // phone: '+212634342610',
        // horsepower: 7,
        // gearBox: 'Automatic',
        make: null,
        model: null,
        fuel: null,
        year: null,
        price: null,
        imageURL: null,
        location: null,
        phone: null,
        horsepower: null,
        gearBox: null,
      },
    }
  },
  methods: {
    addListing() {
      this.$store.dispatch('addListing', this.vehicle)
    },
  },
}
</script>