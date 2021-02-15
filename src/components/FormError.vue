<template>
  <div class="error" v-if="message">
    <error-icon />
    {{ message }}
  </div>
</template>

<script>
import ErrorIcon from '@/components/icons/Error.vue'
export default {
  props: ['message'],
  components: {
    ErrorIcon,
  },
}
</script>

<style lang="scss">
.error {
  background: rgba(#f44336, 0.1);
  color: #f44336;
  margin: 20px 0;
  padding: 10px 12px;
  font-size: 15px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  svg {
    width: 22px;
    margin-right: 10px;
    ellipse {
      fill: #f44336 !important;
    }
  }
}
</style>