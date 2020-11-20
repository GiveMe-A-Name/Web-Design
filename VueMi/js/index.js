//Main_Vue实例
var vm_header = new Vue({
  el: "#app_header",
  data: {
    left_box: "header_left_box",
    right_box: "header_right_box",
    left_box_item: [
      "小米商城",
      "MIUI",
      "米聊",
      "游戏",
      "多看阅读",
      "云服务",
      "金融",
      "小米商城移动版",
      "问题反馈",
      "Select Region",
    ],
    right_box_item: ["登录", "注册", "消息通知"],
    car_box: "header_main_car_box",
    car: "header_main_car",
    main: "head_main",
  },
  components: {
    header_link: {
      props: ["content"],
      template:
        '<div style="display:inline;"><a class="header_main_link" href="">{{content}}</a><div class="header_main_line"></div></div>',
    },
  },
});

//Nav_Vue对象
var vm_nav = new Vue({
  el: "#app_nav",
  data: {
    nav_input: "",
    main: "nav_mainer",
    logo: "nav_logo",
    middle_box: "nav_middle_box",
    right_box: "nav_right_box",
    input_box: "nav_input_box",
    search_button: "nav_search_button",
    middle_box_items: [
      { content: "小米手机", img: "img/3.10shang1.png", txt: "小米MIX2" },
      { content: "红米", img: "img/3.10shang2.png", txt: "红米手机" },
      { content: "电视", img: "img/3.10shang3.png", txt: "小米电视" },
      { content: "笔记本", img: "img/3.10shang4.jpg", txt: "小米笔记本" },
      { content: "盒子", img: "img/3.10shang5.png", txt: "小米盒子" },
      { content: "小米新品", img: "img/3.10shang6.png", txt: "小米新品" },
      { content: "路由器", img: "img/3.10shang7.jpg", txt: "小米路由器" },
      { content: "智能硬件", img: "img/3.10shang8.jpg", txt: "智能硬件" },
    ],
    middle_hidden_items: ["1", "2", "3"],
  },
  components: {
    middle_content: {
      props: ["data"],
      data: function () {
        return {
          active: false,
          point: "",
        };
      },
      template:
        '<li class="nav_middle_box_content">{{data.content}}\
            <div class="nav_middle_hidden">\
              <div class="nav_in_hidden_box">\
                <span class="nav_txt">热卖</span>\
                <img class="nav_in_box_img" :src="data.img">\
                <span class="nav_in_box_txt">{{data.txt}}</span>\
                <span class="nav_in_box_txt">3299元起</span>\
              </div>\
              <div class="nav_in_hidden_box">\
                <span class="nav_txt">热卖</span>\
                <img class="nav_in_box_img" :src="data.img">\
                <span class="nav_in_box_txt">{{data.txt}}</span>\
                <span class="nav_in_box_txt">3299元起</span>\
              </div>\
              <div class="nav_in_hidden_box">\
                <span class="nav_txt">热卖</span>\
                <img class="nav_in_box_img" :src="data.img">\
                <span class="nav_in_box_txt">{{data.txt}}</span>\
                <span class="nav_in_box_txt">3299元起</span>\
              </div>\
            </div>\
            </li>',

      methods: {
        mouseOver: function () {
          this.active = true;
          this.point = "cursor:pointer";
        },
        mouseLeave: function () {
          this.active = false;
          this.point = "";
        },
      },
    },
  },
  methods: {
    input_button: function () {},
  },
});

//banner_Vue对象
var vm_banner = new Vue({
  el: "#app_banner",
  data: {
    img_box: "banner_imgbox",
    img_right: "banner_img_button_right",
    img_left: "banner_img_button_left",
    img_button: "banner_img_button",
    li_button: "banner_li_button",
    button_on: "banner_img_button_on",
    button_off: "banner_img_button_off",
    key_Id: 0,
    li_imgs: [
      { num: 0, path: "img/banner1.jpg" },
      { num: 1, path: "img/banner2.jpg" },
      { num: 2, path: "img/banner3.jpg" },
      { num: 3, path: "img/banner4.jpg" },
      { num: 4, path: "img/banner5.jpg" },
    ],
    li_items: [
      { content: "手机 电话卡", img: "img/3.10tu1.png", txt: "小米note3" },
      {
        content: "电视 盒子",
        img: "img/3.10dianshi.jpg",
        txt: "小米电视4A",
      },
      { content: "笔记本", img: "img/3.10tu3.jpg", txt: "笔记本Air 13.3" },
      { content: "智能 家电", img: "img/3.10tu4.jpg", txt: "空气进化器2" },
      { content: "健康 家具", img: "img/3.10tu1.png", txt: "小米note3" },
      { content: "出行 儿童", img: "img/3.10tu1.png", txt: "小米note3" },
      {
        content: "路由器 手机配件",
        img: "img/3.10tu1.png",
        txt: "小米note3",
      },
      {
        content: "移动电源 插线板",
        img: "img/3.10tu1.png",
        txt: "小米note3",
      },
      { content: "耳机 音响", img: "img/3.10tu1.png", txt: "小米note3" },
      { content: "生活 米兔", img: "img/3.10tu1.png", txt: "小米note3" },
    ],
    numbers: [0, 1, 2, 3, 4],
  },
  methods: {
    left_button_func: function () {
      this.key_Id -= 1;
      if (this.key_Id == -1) {
        this.key_Id = 4;
      }
    },
    right_button_func: function () {
      this.key_Id = (this.key_Id + 1) % 5;
    },
  },
  components: {
    li_item: {
      props: ["data"],
      template:
        '<li class="banner_li_item">\
              <span class="banner_li_item_left">{{data.content}}</span>\
              <span class="banner_li_item_right">&gt;</span>\
              <div class="banner_li_item_hidden">\
                <div class="banner_li_hidden_box"> \
                <img :src="data.img" class="banner_li_hidden_img">\
                <span class="banner_li_hidden_txt">{{data.txt}}</span>\
                </div>\
                <div class="banner_li_hidden_box"> \
                <img :src="data.img" class="banner_li_hidden_img">\
                <span class="banner_li_hidden_txt">{{data.txt}}</span>\
                </div>\
                <div class="banner_li_hidden_box"> \
                <img :src="data.img" class="banner_li_hidden_img">\
                <span class="banner_li_hidden_txt">{{data.txt}}</span>\
                </div>\
                <div class="banner_li_hidden_box"> \
                <img :src="data.img" class="banner_li_hidden_img">\
                <span class="banner_li_hidden_txt">{{data.txt}}</span>\
                </div>\
              </div>\
            </li>',
    },
    li_button: {
      props: ["number"],
      template: '<li @click="change"></li>',
      methods: {
        change: function () {
          this.$emit("changenum", this.number);
        },
      },
    },
    li_img: {
      props: ["data"],
      template: '<li class="banner_imgli"><img :src="data.path"/></li>',
    },
  },
});

//aside_Vue对象
var vm_aside = new Vue({
  el: "#app_aside",
  data: {
    txt_part: "aside_txt",
    img_part: "aside_img",
    txts: [
      { img: "&#xe64a;", content: "选购手机" },
      { img: "&#xe611;", content: "企业团购" },
      { img: "&#xe635;", content: "F码通道" },
      { img: "&#xe60b;", content: "小米移动" },
      { img: "&#xe993;", content: "以旧换新" },
      { img: "&#xe674;", content: "花费充值" },
    ],
    img_paths: ["img/navbt1.jpg", "img/navbt2.jpg", "img/navbt3.jpg"],
  },
  methods: {},
  components: {
    img_box: {
      props: ["img_path"],
      template: '<img :src="img_path" class="aside_img">',
    },
  },
});

//article1对象
var vm_article1 = new Vue({
  el: "#app_article1",
  data: {
    hd: "article1_box-hd",
    box: "article1_box",
    img: "article1_img",
    box_hidden: "article1_box_hidden",
    box_id: 1,
    img_boxs: [
      {
        path: "img/shouhaun.png",
        txt: "小米手环2",
        title: "OLED 显示屏幕，升级计步算法",
        price: "149元",
        color: "article1_color1",
      },
      {
        path: "img/saodi.png",
        txt: "米家扫地机器人",
        title: "爱干净，高效完成清扫任务",
        price: "1499元",
        color: "article1_color2",
      },
      {
        path: "img/water.jpg",
        txt: "小米净水器 厨下式",
        title: "直出纯净水，隐藏式安装",
        price: "1999元",
        color: "article1_color3",
      },
      {
        path: "img/luyouqi.png",
        txt: "小米路由器3",
        title: "更快更强，不止四天线",
        price: "143元",
        color: "article1_color4",
      },
    ],
  },
  components: {
    img_box: {
      props: ["post"],
      template:
        '<div class="article1_img_box" :class="post.color">\
          <img :src="post.path" alt="" width="160" height="166">\
          <span style="font-size:14px;">{{post.txt}}</span>\
          <span style="font-size:12px;color:#b0b0b0;">{{post.title}}</span>\
          <span style="font-size:14px;color:#ff6700;">{{post.price}}</span>\
          </div>',
    },
  },
});

//article2对象
var vm_article2 = new Vue({
  el: "#app_article2",
  data: {
    box: "article2_box",
    box_left: "article2_box_left",
    box_right: "article2_box_right",
    boxs_right: [
      {
        path: "img/tv.jpg",
        title: "小米电视4A 32英寸",
        txt: "64位四核处理器/1GB+4GB",
        price: "999元",
        beprice: "1100元",
      },
      {
        path: "img/xm4A.png",
        title: "小米电视4A 49英寸 标准版",
        txt: "2GB+8GB大存储/全高清",
        price: "2199元",
        beprice: "2300元",
      },
      {
        path: "img/bjb1.jpg",
        title: '"13.3"小米笔记本Air',
        txt: "全面屏设计，人工智能语音",
        price: "5199元",
        beprice: "",
      },
      {
        path: "img/bjb2.jpg",
        title: '15.6"小米笔记本Air"',
        txt: "全面均衡的国民轻薄本",
        price: "5999元",
        beprice: "",
      },
      {
        path: "img/dp.jpg",
        title: "飞利浦智睿蜡烛灯泡 水晶版",
        txt: "亮度色可调，十年使用寿命",
        price: "59元",
        beprice: "",
      },
      {
        path: "img/jhq.png",
        title: "米家空气净化器Pro",
        txt: "限量赠59元插线板",
        price: "1199元",
        beprice: "",
      },
      {
        path: "img/sb0.jpg",
        title: "米家电水壶",
        txt: "一杯水，是一家人的安心",
        price: "99元",
        beprice: "",
      },
      {
        path: "img/tv.jpg",
        title: "小米电视4A 32英寸",
        txt: "64位四核处理器/1GB+4GB",
        price: "999元",
        beprice: "1100元",
      },
    ],
  },
  components: {
    img_box: {
      props: ["post"],
      template:
        '<div class="article2_img_box">\
                <img :src="post.path" class="article2_img" />\
                <span class="article2_img_box_title">{{post.title}}</span>\
                <span class="article2_img_box_txt">{{post.txt}}</span>\
                <div class="article2_img_price_box">\
                  <span class="article2_img_box_price">{{post.price}}</span>\
                  <del class="article2_img_box_beprice">{{post.beprice}}</del>\
                </div>\
              </div>',
    },
  },
});

Vue.component("article_img_box", {
  props: ["post"],
  template:
    '<div class="article_img_box">\
              <img :src="post.path" class="article_img" />\
              <span class="article_box_title">{{post.title}}</span>\
              <span class="article_box_price">{{post.price}}</span>\
              <span class="article_box_pj">{{post.pj}}</span>\
        </div>',
});
Vue.component("article_box", {
  template:
    '<div class="article_main" style="height: 700px;">\
          <div class="article1_box-hd">\
            <h2 class="title">搭配</h2>\
          </div>\
          <div class="article_box_left">\
            <img src="img/dp1.jpg" width="234" height="300" alt="" />\
            <img\
              src="img/twj.jpg"\
              width="234"\
              height="300"\
              alt=""\
              style="margin-top: 14px;"\
            />\
          </div>\
          <div class="article_box_right">\
            <slot></slot>\
          </div>\
        </div>',
});
//article对象
var vm_article = new Vue({
  el: "#app_article",
  data: {
    img_boxs: [
      {
        path: "img/dp1t.jpg",
        title: "新小米移动电源2 (10000mAh)",
        price: "79元",
        pj: "2757人评价",
      },
      {
        path: "img/dp2t.jpg",
        title: "小米移动电源2C 20000mAh",
        price: "192元",
        pj: "1.4万人评价",
      },
      {
        path: "img/dp3t.jpg",
        title: "小米移动电源10000mAh高配版",
        price: "129元",
        pj: "1.2万人评价",
      },
      {
        path: "img/dp4t.jpg",
        title: "小米移动电源2 (5000mAh版)",
        price: "49元",
        pj: "191人评价",
      },
      {
        path: "img/dp5t.jpg",
        title: "ZMI双模智能充电器+充电宝",
        price: "109元",
        pj: "100人评价",
      },
      {
        path: "img/dp6t.jpg",
        title: "小米移动电源5000mAh",
        price: "49元",
        pj: "10.9万人评价",
      },
      {
        path: "img/dp7t.jpg",
        title: "小米活塞耳机 清新版",
        price: "25元",
        pj: "9万人评价",
      },
      {
        path: "img/dp.jpg",
        title: "飞利浦智睿蜡烛灯泡 水晶版",
        price: "59元",
        pj: "亮度色可调，十年使用寿命",
      },
    ],
  },
});

//article3对象
var vm_article3 = new Vue({
  el: "#app_article3",
  data: {
    img_box: {
      path: "img/tj1.jpg",
      title: "红米手机4A 全网通版 16GB",
      price: "549元",
      pj: "2.9万人评价",
    },
    img_boxs: [
      {
        path: "img/tj2.jpg",
        title: "红米Note 4X 全网通版",
        price: "899元",
        pj: "10.5万人好评",
      },
      {
        path: "img/tj3.jpg",
        title: "小米V领短袖T恤 男款",
        price: "39元",
        pj: "7409人好评",
      },
      {
        path: "img/tj4.jpg",
        title: "米家门窗传感器",
        price: "49元",
        pj: "4023人好评",
      },
      {
        path: "img/tj5.jpg",
        title: "USB Type-C 转接头",
        price: "5元",
        pj: "8.7万人好评",
      },
    ],
  },
});

var vm_article4 = new Vue({
  el: "#app_article4",
  data: {
    path: "img/rp1.jpg",
    paths: ["img/rp2.jpg", "img/rp3.jpg", "img/rp4.jpg"],
  },
  components: {
    img_box: {
      props: ["path"],
      template:
        '<div class="article4_img_box">\
              <img :src="path" alt="" />\
              <a href="" class="article4_img_box_txt">\
                东西真心不错，用过最好用的插线板，做工外观没得挑剔，\
                3个USB接口很实用， 充电快，建议不包邮的应该在...\
              </a>\
              <div class="article4_img_box_pj">\
                <p>来自于龙岩的评价</p>\
                <span class="article4_img_box_pj_txt1">小米笔记本</span>\
                <div class="header_main_line"></div>\
                <span class="article4_img_box_pj_txt2">3499元</span>\
              </div>\
            </div>',
    },
  },
});

var vm_article5 = new Vue({
  el: "#app_article5",
  data: {
    box: "article5_box",
    img_box: "article5_img_box",
  },
  methods: {},
  components: {
    img_box1: {
      template:
        '<div class="article5_img_box">\
              <p class="article5_img_box_p1">图片</p>\
              <p class="article5_img_box_p2">哈利·波特与被诅咒的孩子</p>\
              <p class="article5_img_box_p3">\
                哈利·波特”第八个故事中文版震撼来袭！ 特别彩排版剧本！\
              </p>\
              <p class="article5_img_box_p4">29.37元</p>\
              <img src="img/nr1.png" />\
              <div class="article5_img_box_button" style="left:0;" >&lt;</div>\
              <div class="article5_img_box_button" style="right:0;" >&gt;</div>\
            </div>',
    },
  },
});

var vm_article6 = new Vue({
  el: "#app_article6",
  data: {
    box: "article6_box",
    img_box1: {
      path: "img/shipin1.jpg",
      title: "品质之魂 存于匠心",
      txt: "红米手机品质的工程师访谈",
    },
    img_boxs: [
      {
        path: "img/shipin2.jpg",
        title: "红米手机工艺视频",
        txt: "红米5 / 红米5 Plus 高颜值机身",
      },
      {
        path: "img/shipin3.jpg",
        title: "雷军与斯塔克打造全面屏2.0",
        txt: "一场关于小米MIX 2 极致工艺的巅峰对话",
      },
      {
        path: "img/shipin4.jpg",
        title: "MIUI 9 理念视频",
        txt: "快如闪电，前所未有的流畅",
      },
    ],
  },
  components: {
    img_box: {
      props: ["post"],
      template:
        '<div class="article6_img_box">\
              <img :src="post.path" />\
              <p class="article6_img_box_p1">{{post.title}}</p>\
              <p class="article6_img_box_p2">{{post.txt}}</p>\
              <span>&#xe78e;</span>\
            </div>',
    },
  },
});

var vm_footer2 = new Vue({
  el: "#app_footer2",
  data: {
    left_boxs: [
      { title: "帮助中心", p1: "账户管理", p2: "购物指南", p3: "订单操作" },
      { title: "服务支持", p1: "售后政策", p2: "自助服务", p3: "相关下载" },
      { title: "线下门店", p1: "小米之家", p2: "服务网点", p3: "零售网点" },
      { title: "关于小米", p1: "了解小米", p2: "加入小米", p3: "联系我们" },
      { title: "关注我们", p1: "新浪微博", p2: "小米部落", p3: "官方微信" },
      { title: "特色服务", p1: "F码通道", p2: "礼物码", p3: "防伪查询" },
    ],
  },
  components: {
    left_box: {
      props: ["data"],
      template:
        '<div class="footer2_box_left">\
              <p>{{data.title}}</p>\
              <ul>\
                <li><a href="">{{data.p1}}</a></li>\
                <li><a href="">{{data.p2}}</a></li>\
                <li><a href="">{{data.p3}}</a></li>\
              </ul>\
            </div>',
    },
  },
});

var vm_footer3 = new Vue({
  el: "#app_footer3",
  data: {
    a_links: [
      "小米商城",
      "MIUI",
      "米聊",
      "多看书城",
      "小米路由器",
      "视频电话",
      "小米天猫店",
      "小米网盟",
      "小米移动",
      "隐私政策",
    ],
    img_links: ["img/bq1.png", "img/bq2.png", "img/bq3.png", "img/bq4.png"],
  },
  components: {
    a_link: {
      props: ["content"],
      template:
        '<div><a href="">{{content}}</a>\
              <div class="footer3_left_box_head_line"></div>\
              </div>',
    },
    img_link: {
      props: ["path"],
      template:
        '<a href="">\
              <img :src="path" />\
            </a>',
    },
  },
});
