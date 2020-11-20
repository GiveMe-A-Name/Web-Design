<template>
  <aside>
    <h3>{{msg}}</h3>
  </aside>
</template>

<script>
export default {
  name: 'Tips',
  props: {
    msg: String,
  },
}
</script>

<style scoped lang="less">
aside {
  border-radius: 50px;
  width: 80%;
  text-align: center;
  background-color: #fff;
  z-index: 10;
  color: black;
}
</style>