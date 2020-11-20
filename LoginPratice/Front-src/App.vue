<template>
  <div id="app">
    <!-- login组件，register组件，和home组件之间切换 -->
    <transition mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #0e92b3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  .v-enter-active,
  .v-leave-active {
    transition: all 0.2s ease;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
