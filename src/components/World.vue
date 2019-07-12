<template>
  <div class="hello">
    <h2>Value from Vuex count : {{ count }}</h2>
  </div>
</template>

<script>
export default {
  name: 'World',
  computed: {
    count () {
      return this.$store.state.count
    }
  },
}
</script>

