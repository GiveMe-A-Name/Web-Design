<template>
  <tr>
    <td>
      <input
        type="text"
        v-model="id"
      >
    </td>
    <td>
      <input
        type="text"
        v-model="name"
      >
    </td>
    <td>
      <input
        type="text"
        v-model="author"
      >
    </td>
    <td>
      <input
        type="text"
        v-model="tag"
      >
    </td>
    <td><button @click="Add">add</button></td>
  </tr>
</template>

<script>
export default {
  name: 'rowInput',
  data() {
    return {
      id: '',
      name: '',
      author: '',
      tag: '',
    }
  },
  emits: {
    'row-infor:add': (book) => {
      if (book.id && book.name && book.author) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    Add() {
      if (this.id) {
        this.$emit('row-infor:add', {
          id: this.id,
          name: this.name,
          author: this.author,
          tag: this.tag,
        })
        this.id = ''
        this.name = ''
        this.author = ''
        this.tag = ''
      } else {
        throw new Error('err Input')
      }
    },
  },
}
</script>

<style lang="less" scoped>
td:nth-child(4) {
  input {
    width: 400px;
  }
}
</style>