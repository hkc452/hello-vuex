<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Hello msg="Welcome to Your Vue.js App"/>
    <World/>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import World from './components/World.vue'

export default {
  name: 'app',
  components: {
    Hello,
    World
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
