<template>
  <div class="box">
    <div class="img-box">
      <img
        :src="data.img_url"
        alt="网络请求失败"
      />
    </div>
    <div class="sentence-box">
      <p>{{data.name}}</p>
      <p>{{data.tag}}</p>
      <p>{{data.intro}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bookBox',
  props: {
    data: Object,
    imgSrc: String,
  },
}
</script>

<style lang="less" scoped>
.box {
  cursor: pointer;
  margin-left: 10px;
  margin-bottom: 15px;
  width: 440px;
  height: 142px;
  display: flex;
  > div {
    height: inherit;
  }
  > .img-box {
    background-color: blueviolet;
    width: 100px;
    > img {
      height: inherit;
      width: inherit;
    }
  }
  > .sentence-box {
    width: 100%;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    > p {
      font-size: 13px;
      text-align: left;
    }
  }
}
</style>