<template>
  <tr>
    <td>{{bookData.id}}</td>
    <td>{{bookData.name}}</td>
    <td>{{bookData.author}}</td>
    <td>{{bookData.tag}}</td>
    <td>
      <button @click="handleDelete">删除</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'rowInfor',
  props: ['bookData'],
  methods: {
    handleDelete() {
      this.$emit('row-infor:delete')
    },
  },
}
</script>

<style>
</style>