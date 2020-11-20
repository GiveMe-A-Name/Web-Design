<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/personal">Personal-Center</router-link>
    </div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      msg: this.$store.state.username,
    }
  },
  components: {},
}
</script>
<style lang="less" scoped>
div.home {
  width: 330px;
  padding: 40px;
  border-radius: 50px;
  background-color: rgb(41, 45, 62);
  color: #fff;
}
</style>

