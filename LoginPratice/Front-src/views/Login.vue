<template>
  <div class="login">
    <!-- 把errorMsg信息抛给tip组件 -->
    <transition name="tip">
      <Tips :msg="errorMsg" class="tips" v-if="showTip"></Tips>
    </transition>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 class="logo">LOGIN</h1>
    <form name="loginForm" @submit.prevent="submitForm">
      <div>
        <input type="text" id="username" v-model="username" placeholder="USERNAME" />
      </div>
      <div>
        <input type="password" id="password" v-model="password" placeholder="PASSWORD" />
      </div>
      <div>
        <input type="submit" value="submit" />
        <input type="button" value="register" @click="registe" />
      </div>
    </form>
  </div>
</template>
<script>
import Tips from '../components/Tips.vue'
import { hex_sha1 } from '@/assets/SHA-1.js'
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      errorMsg: '',
      showTip: false,
    }
  },
  methods: {
    // rigister按钮路由到rigister组件
    registe() {
      this.$router.push({ name: 'Register' })
    },
    submitForm() {
      // 该promise封装请求的ajax
      let login_promise = (() => {
        let xhr = new XMLHttpRequest()
        let formdata = new FormData()
        formdata.append('username', this.username)
        // 密码进行SHA加密
        formdata.append('password', hex_sha1(this.password))
        xhr.timeout = 700
        xhr.open('POST', 'http://localhost/login')
        xhr.send(formdata)
        return new Promise((resolve, reject) => {
          xhr.onload = () => {
            // 后端登录成功会传一个字符串'correct'
            if (xhr.responseText === 'correct') {
              resolve('correct')
            } else {
              reject(xhr.responseText)
            }
          }
          // 设置超时回调函数
          xhr.ontimeout = () => {
            reject('请求时间超时')
          }
        })
      })()

      login_promise
        .then(() => {
          // 若登录成功，给sessionStorage加入一个标记，表示成功
          window.sessionStorage.setItem('is_login', 'true')
          // 向vuex.store提交数据
          this.$store.commit('logined', {
            username: this.username,
          })
          //进行路由跳转
          this.$router.push({ name: 'HelloWorld' })
        })
        .catch((reason) => {
          // 若不成功，需要接受promise抛出的错误
          // 并使用Tips组件提示出来
          this.errorMsg = reason
          this.showTip = true
          setTimeout(() => {
            this.showTip = false
            this.errorMsg = ''
          }, 900)
        })
    },
  },
  components: {
    Tips,
  },
}
</script>
<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
form[name='loginForm'] {
  > div {
    margin-top: 10px;
    > input {
      border-radius: 50px;
      outline: none;
      color: #fff;
      font-weight: 600;
    }
    > input[id] {
      background-color: rgba(30, 32, 34, 0.849);
      width: 300px;
      height: 50px;
      margin: 0;
      text-align: center;
      border: 2px solid #03a9f4;
      filter: blur(1px);
    }
    > input[id]:hover,
    > input[id]:focus {
      filter: none;
    }
    > input[value] {
      background-image: linear-gradient(
        90deg,
        #03a9f4,
        #f441a5,
        #ffeb3b,
        #03a9f4
      );
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 2px;
      background-size: 400%;
      height: 45px;
      width: 125px;
      outline: none;
      border: none;
      margin: 0 20px;
      margin-top: 10px;
      cursor: pointer;
    }
    > input[value]:hover {
      animation: sum 5s linear infinite;
    }
  }
}
@keyframes sum {
  100% {
    background-position: -400%;
  }
}
div.login {
  color: #fff;
  background-color: rgb(41, 45, 62);
  padding: 30px;
  width: 450px;
  border-radius: 50px;
  position: relative;
  .tips {
    position: absolute;
    margin-left: 25px;
    opacity: 0.9;
  }
  .tip-enter-active,
  .tip-leave-active {
    transition: all 0.7s ease;
  }
  .tip-enter {
    transform: translateY(-15px);
    opacity: 0;
  }
  .tip-leave-to {
    transform: translateY(15px);
    opacity: 0;
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.2s ease;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
}
</style>