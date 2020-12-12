<template>
    <div class="handle">
      <button @click="$emit('rentbook')">借书</button>
      <button @click="$emit('returnbook')">还书</button>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.handle {
    margin: 20px 0;
    display: flex;
    justify-content: space-around;
  }
</style>