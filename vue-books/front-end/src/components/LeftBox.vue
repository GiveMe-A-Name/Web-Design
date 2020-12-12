<template>
  <div class="left">
    <table border="1">
      <thead>
        <tr>
          <th>编号</th>
          <th>图书名称</th>
          <th>作者</th>
          <th>图书标签</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <transition-group name="Blist">
          <row-infor
            v-for="(book,index) in table_books"
            :key="book.id"
            :book-data="book"
            @row-infor:delete="handleDelete(index)"
          ></row-infor>
          <row-input
            @row-infor:add="handleAdd"
            key="input"
          />
        </transition-group>
      </tbody>
    </table>
    <table-button
      @rentbook="rentBook"
      @returnbook="returnBook"
    />
  </div>
</template>

<script>
import RowInfor from './LeftChild/RowInfor.vue'
import RowInput from './LeftChild/RowInput.vue'
import TableButton from './LeftChild/TableButton.vue'
export default {
  name: 'leftBox',
  components: {
    RowInfor,
    RowInput,
    TableButton,
  },
  methods: {
    handleDelete(index) {
      this.$store.commit('handleTableDelete', {
        index: index,
      })
    },
    handleAdd(book) {
      this.$store.commit('handleSelectAdd', {
        book: book,
      })
    },
    rentBook() {
      this.$store.dispatch('asyncRentBook')
    },
    returnBook() {
      this.$store.dispatch('asyncReturnBook')
    },
  },
  computed: {
    table_books() {
      return this.$store.state.table_books
    },
  },
}
</script>

<style lang="less" scoped>
.left {
  border: 1px solid gray;
  height: 500px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > table {
    border: 1px solid burlywood;
  }
}
.Blist-enter-from,
.Blist-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
.Blist-enter-active,
.Blist-leave-active {
  transition: all 0.5s ease;
}
.Blist-move {
  transition: all 0.5s ease;
}
</style>