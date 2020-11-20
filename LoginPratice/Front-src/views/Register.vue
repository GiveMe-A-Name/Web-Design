<template>
  <div class="register">
    <transition name="tip">
      <Tips :msg="msg" class="tips" v-if="showTip"></Tips>
    </transition>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 class="logo">Register</h1>
    <form @submit.prevent="registerConfirm" method="post" name="register">
      <div>
        <input type="text" id="username" v-model="username" placeholder="USERNAME" />
      </div>
      <div>
        <input type="text" id="nickname" v-model="nickname" placeholder="NICKNAME" />
      </div>
      <div>
        <input type="password" id="password" v-model="password" placeholder="PASSWORD" />
      </div>
      <div>
        <input type="submit" value="CONFIRM" />
        <input type="button" value="CANCEL" @click="registerCancel" />
      </div>
    </form>
  </div>
</template>

<script>
import Tips from '../components/Tips.vue'
import { hex_sha1 } from '@/assets/SHA-1.js'
export default {
  name: 'register',
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      msg: '',
      showTip: false,
    }
  },
  methods: {
    registerConfirm() {
      //封装请求
      let confirmPromise = () => {
        let xhr = new XMLHttpRequest()
        let formdata = new FormData()
        xhr.timeout = 700
        formdata.append('username', this.username)
        // 密码进行SHA加密
        formdata.append('password', hex_sha1(this.password))
        if (this.nickname !== '') {
          formdata.append('nickname', this.nickname)
        }
        xhr.open('POST', 'http://localhost/register')
        xhr.send(formdata)
        return new Promise((resolve, reject) => {
          xhr.onload = () => {
            if (xhr.responseText === 'submited') {
              resolve('注册成功')
            } else {
              reject(xhr.responseText)
            }
          }
          xhr.ontimeout = () => {
            reject('请求时间超时')
          }
        })
      }
      //异步调用封装得请求
      confirmPromise()
        .then((value) => {
          // 若注册成功Tip，并且2秒后进行页面跳转
          this.msg = value + '2秒后，自动跳转到登录界面'
          this.showTip = true
          setTimeout(() => {
            this.msg = ''
            this.$router.push({ name: 'Login' })
          }, 2000)
        })
        .catch((reason) => {
          // 若失败提示信息
          this.msg = reason
          this.showTip = true
          setTimeout(() => {
            this.msg = ''
            this.showTip = false
          }, 900)
        })
    },
    registerCancel() {
      this.$router.push({ name: 'Login' })
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

form[name='register'] {
  padding: 10px;
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
      // filter: blur(2px);
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

div.register {
  color: #fff;
  background-color: rgb(41, 45, 62);
  padding: 30px;
  width: 450px;
  border-radius: 50px;
  position: relative;
  > .logo {
    text-transform: uppercase;
  }
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
}
</style>