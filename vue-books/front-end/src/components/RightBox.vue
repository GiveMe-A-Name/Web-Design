<template>
  <div class="right">
    <book-box
      v-for="(book,index) in select_books"
      :key="index"
      :data="book"
      @click="handleAdd(index)"
    />

  </div>
</template>

<script>
import BookBox from './RightChild/BookBox.vue'
export default {
  name: 'rightBox',
  components: {
    BookBox,
  },
  methods: {
    handleAdd(index) {
      this.$store.commit('handleTableAdd', {
        index: index,
      })
    },
  },
  data() {
    return {
      select_books: this.$store.state.select_books,
    }
  },
}
</script>
<style lang="less" scoped>
.right {
  height: 500px;
  width: 460px;
  overflow: auto;
}
</style>