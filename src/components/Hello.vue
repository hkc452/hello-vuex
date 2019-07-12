<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <button @click="update">点击同步更新Count</button>
    </p>
    <p>
      <button @click="asyncUpdate">点击异步1s后更新Count</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    msg: String
  },
  computed: {
    count () {
      return this.$store.state.count.index
    }
  },
  methods: {
    update() {
      this.$store.dispatch('increment')
    },
    asyncUpdate() {
       this.$store.dispatch('asyncInre')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
