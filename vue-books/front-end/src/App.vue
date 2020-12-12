<template>
  <div id="app">
    <div class="container">
      <left-box />
      <right-box
        ref="rightbox"
        @scroll="asyncLoad"
      />
    </div>

  </div>
</template>


<script>
import LeftBox from './components/LeftBox.vue'
import RightBox from './components/RightBox.vue'
export default {
  name: 'App',
  components: {
    LeftBox,
    RightBox,
  },
  methods: {
    asyncLoad(event) {
      const target = event.target
      if (
        this.$store.state.book_cur <= 40 &&
        target.clientHeight + target.scrollTop + 2 >= target.scrollHeight
      ) {
        console.log(`asyncLoad`)
        this.$store.dispatch('ajaxGet')
      }
    },
  },

  beforeMount() {
    this.$store.dispatch('ajaxGet')
  },
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
.container {
  display: flex;
}
</style>
