<template>
  <div class="location-form-field">
    <input type="text" placeholder="Location.." v-model="location" />
    <ul v-if="searchResults.length > 1">
      <li v-for="(result, i) in searchResults" :key="`r-${i}`" @click="pickLocation(result)">{{ result }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['initialLocation'],
  data() {
    return {
      location: null,
      searchResults: [],
      service: null,
    }
  },
  // download the external JS file on the go
  // only when the component is rendered
  metaInfo() {
    return {
      script: [
        {
          src: `https://maps.googleapis.com/maps/api/js?key=${process.env.VUE_APP_GOOGLE_MAPS_API_KEY}&language=en&libraries=places`,
          async: true,
          defer: true,
          callback: () => this.mapsInit(),
        },
      ],
    }
  },
  methods: {
    mapsInit() {
      this.service = new window.google.maps.places.AutocompleteService()
    },
    displaySuggestions(predictions, status) {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        this.searchResults = predictions.map(prediction => prediction.description)
      } else {
        this.searchResults = []
      }
    },
    pickLocation(location) {
      this.location = location
      this.searchResults = []
      this.$emit('pickLocation', this.location)
    },
  },
  watch: {
    location(location) {
      if (location) {
        this.service.getPlacePredictions(
          {
            input: this.location,
            types: ['(cities)'],
          },
          this.displaySuggestions
        )
      }
    },
  },
  mounted() {
    this.location = this.initialLocation
  },
}
</script>

<style lang="scss">
.location-form-field {
  position: relative;
  ul {
    position: absolute;
    background-color: #fff;
    top: 46px;
    width: 100%;
    padding: 20px;
    border-radius: 0 0 4px 4px;
    box-shadow: 0 6px 6px rgba(#000, 0.08);
    z-index: 3;
    li {
      list-style-type: none;
      line-height: 1.8;
      opacity: 0.7;
      transition: opacity 0.4s ease-in-out;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>