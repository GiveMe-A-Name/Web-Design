# Web-Design

**about WebDesign**     

**author: ONE**

> 目前仅关于前端的页面设计和一些个人CSS的练习。

- **CSSPratice**: *CSS样式练习*

-  **VueMi**: *单纯使用Vue写的仿小米网站*

- **LoginPratice**: *前后端分离的登录界面*

## CSSPratice

*注：其中一些参考一位老哥的css样式，在其基础上做一些修改。老哥的github网址: https://github.com/zhangyingwei/*

- `SUBBOTTOM`  《流体按钮样式》
- `Calendar` 《2020\9月份日历》
- `Heart`  《心跳》
- `Input` 《输入框美化？》
- `Split-font`  《字体滑动》

## VueMi

*参考小米商城官方网站，使用`Vue`开发的Mi网站。*



## LoginPratice

> 登录界面。
>
> **注：本次练手，重点是前端。后端只是一个辅助部分，并没有做出精细的设计**

*前端源码目录结构*

```powershell
Front-src.
│  App.vue
│  main.js
│
├─assets
│      logo.png
│      SHA-1.js
│
├─components
│      Tips.vue
│
├─router
│      index.js
│
├─store
│      index.js
│
└─views
        HelloWorld.vue
        Home.vue
        Login.vue
        PersonalCenter.vue
        Register.vue
```

*后端源码目录结构*

```powershell
Back-src.
	main.go
```



做这个练习的主要目的是 通过该项目解决以下问题

1. 前后端分离如何通过Ajax进行数据沟通？
2. Ajax如何进行跨域请求？ 了解W3C标准中的**CORS**（"跨域资源共享")
3. Vue路由设计，组件设计思想，组件树思想
4. 前端如何存储已经请求到的网络数据。

****

#### 关于第一点：Ajax通信

Ajax通信其实很简单，就是使用一个XMLHttpRequest对象，当“中间件”，将请求方式，请求路由，请求成功的回调函数。

*代码示例*

```js
let login_promise = (() => {
    // 创建一个XMLHttpRequest对象
    let xhr = new XMLHttpRequest()
    let formdata = new FormData()
    formdata.append('username', this.username)
    formdata.append('password', hex_sha1(this.password))
    xhr.timeout = 700
    // open一个请求方式和路由，
    xhr.open('POST', 'http://localhost/login')
    // 发生数据
    xhr.send(formdata)
    return new Promise((resolve, reject) => {
        // 请求完成回调函数
        xhr.onload = () => {
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

// 为了代码清晰，防止回调地狱，
// 使用promise将异步请求进行封装
login_promise
    .then(() => {
        window.sessionStorage.setItem('is_login', 'true')
        this.$store.commit('logined', {
            username: this.username,
        })
        //进行路由跳转
        this.$router.push({ name: 'HelloWorld' })
    })
    .catch((reason) => {
        this.errorMsg = reason
        this.showTip = true
        setTimeout(() => {
            this.showTip = false
            this.errorMsg = ''
        }, 900)
    })
```

****

#### 关于第二点：CORS（"跨域资源共享")

> 浏览器发现这次跨源AJAX请求是简单请求，就自动在头信息之中，添加一个`Origin`字段。
>
> ```http
> GET /cors HTTP/1.1
> Origin: http://api.bob.com
> Host: api.alice.com
> Accept-Language: en-US
> Connection: keep-alive
> User-Agent: Mozilla/5.0...
> ```
>
> 上面的头信息中，`Origin`字段用来说明，本次请求来自哪个源（协议 + 域名 + 端口）。服务器根据这个值，决定是否同意这次请求。 
>
> 参看[阮一峰的：跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)

由于浏览器自动会会在ajax的头请求中添加一个`Origin`字段，我们只需要在服务器端的响应体设置相应的头信息即可；

*代码示例*

```go
// CORS 设置跨域响应头
func CORS(w *http.ResponseWriter) {
    // 表示服务器端接受所有源的ajax请求
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}
```

****

#### 关于第三点：Vue路由设计，组件设计思想，组件树思想

**路由设计**

由于使用前端路由，每一个单向页面都设计成了路由部分。

之所以把`HelloWorld.vue`和`PersonalCenter.vue`设置成`Home.vue`下的子路由而不是子组件，是因为考虑到`HelloWorld` 和`PersonalCenter`可以是完整的页面；

**组件设计**

*在组件设计方面有很多瑕疵*

实际上`Login.vue`和 `Register.vue`有很多中的输入框 整体布局，以及Button的样式基本相同，完全可以设置组件将其中相同的部分，抽象出来；

> **既然谈到了组件树思想，实际上看到面向对象的设计模式，两者之间有异曲同工之妙。把相同的部分，再进一步的进行抽象。但又有不同的地方，组件就是一个实例，只不过它可以进行复用（可以通过props修改数据）。而类仅仅是模板，没办法直接使用，需要先进行实例化。**

****

#### 关于第四点：前端如何存储已经请求到的网络数据。

这实际上笔者并不知道前端主流是用什么方案解决，这里使用了**sessionStorage**进行本地存储。~~暂时做过多的解说~~

~~直接看~~代码示例：

```js
// 若登录成功，给sessionStorage加入一个标记，表示成功
window.sessionStorage.setItem('is_login', 'true')
```





## 先定一个小目标，挣它一个亿

- [ ] 首先重构Mi页面代码，之后加入后端，加入购物车功能，以及每个商品会有一个详细的页面，
- [ ] CSS-pratice同步进行，熟练使用CSS技巧



