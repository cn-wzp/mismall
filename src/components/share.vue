<template>
  <div calss="bodyer">
    <div class="bodyer-box">
      <el-carousel :height="bodyerHeight + 'px'" float="right">
        <el-carousel-item v-for="img in imgs" :key="img.index">
          <img :src="img" alt />
        </el-carousel-item>
      </el-carousel>
      <div
        class="bodyer-nav"
        @mouseenter="isNavEnter = true"
        @mouseleave="isNavEnter = false"
      >
        <ul>
          <li
            v-for="(nav, index) in navs"
            :key="index"
            :class="{ active: nav.type === selected }"
            @mouseenter="selected = nav.type"
          >
            {{ nav.name }}
            <i class="el-icon-arrow-right"></i>
          </li>
        </ul>
      </div>
      <div
        class="body-form"
        v-show="isNavEnter || isMenuEnter"
        @mouseenter="isMenuEnter = true"
        @mouseleave="isMenuEnter = false"
      >
        <ul
          class="body-form-nav"
          v-for="(nav, index) in navs"
          v-show="nav.type === selected"
          :key="index"
        >
          <li v-for="(key, index) in navSec[nav.type]" :key="index">
            <a
              ><img :src="key.img" width="40px" height="40px" />
              <span>{{ key.title }}</span></a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="box-a">
      <div class="box-left">
        <ul>
          <li class="box-left-a" v-for="mi in mis" :key="mi.index">
            <a class="a-herf">
              <span class="a-left"></span>
              <span class="a-top"></span>
              <div class="a-none"></div>
              <img class="a-img" :src="mi.img" />
              <p>{{ mi.id }}</p>
              <span class="a-right"></span>
            </a>
          </li>
        </ul>
      </div>
      <div class="box-right">
      <ul>
        <li class="box-right-a" v-for="box in boxs" :key="box.index">
          <a><img :src="box.img"></a>
        </li>
      </ul>
      </div>
    </div>
  </div>
</template>
<script>
import '../assets/css/share.css'
export default {
  name: "share",
  data() {
    return {
      selected: "",
      isNavEnter: false,
      isMenuEnter: false,
      imgs: [
        "/img/banner.jpg",
        "/img/shouhuan.webp",
        "/img/Redmi.webp",
        "/img/bg.webp",
      ],
      bodyerHeight: 460,
      screenWidth: 0,
      navs: [
        { name: "手机 电话卡", type: "phone" },
        { name: "电视 盒子", type: "tv" },
        { name: "笔记本 显示器", type: "pad" },
        { name: "家电 插线板", type: "router" },
        { name: "出行 穿戴", type: "charger" },
        { name: "智能 路由器", type: "earphone" },
        { name: "电源 配件", type: "protect" },
        { name: "健康 儿童", type: "card" },
        { name: "耳机 音箱", type: "bag" },
        { name: "生活 箱包", type: "live" },
      ],
      navSec: {
        phone: [
          { img: "img/phone1.webp", title: "小米10 pro" },
          { img: "img/phone2.webp", title: "小米10" },
          { img: "img/phone3.png", title: "小米9 pro" },
          { img: "img/phone4.png", title: "小米9" },
          { img: "img/phone5.png", title: "小米8 pro" },
          { img: "img/phone1.webp", title: "小米8" },
          { img: "img/phone1.webp", title: "小米10 pro" },
          { img: "img/phone1.webp", title: "小米10 pro" },
          { img: "img/phone4.png", title: "小米9" },
          { img: "img/phone5.png", title: "小米8 pro" },
        ],
        tv: [
          { img: "img/tv1.webp", title: "小米电视1" },
          { img: "img/tv2.jpg", title: "小米电视2" },
          { img: "img/tv3.jpg", title: "小米电视3" },
          { img: "img/tv4.png", title: "小米电视4" },
          { img: "img/tv5.jpg", title: "小米电视5" },
          { img: "img/tv1.webp", title: "小米电视1" },
          { img: "img/tv2.jpg", title: "小米电视2" },
          { img: "img/tv3.jpg", title: "小米电视3" },
          { img: "img/tv4.png", title: "小米电视4" },
          { img: "img/tv5.jpg", title: "小米电视5" },
        ],
        pad: [
          { img: "img/book2.png", title: "小米电脑1" },
          { img: "img/book3.webp", title: "小米电脑2" },
          { img: "img/book4.webp", title: "小米电脑3" },
          { img: "img/book5.png", title: "小米电脑4" },
          { img: "img/book2.png", title: "小米电脑1" },
          { img: "img/book3.webp", title: "小米电脑2" },
          { img: "img/book4.webp", title: "小米电脑3" },
          { img: "img/book5.png", title: "小米电脑4" },
          { img: "img/book4.webp", title: "小米电脑3" },
          { img: "img/book5.png", title: "小米电脑4" },
        ],
        router: [
          { img: "img/jiadian1.png", title: "家电1" },
          { img: "img/jiadian2.jpg", title: "家电2" },
          { img: "img/jiadian3.png", title: "家电3" },
          { img: "img/jiadian4.jpg", title: "家电4" },
          { img: "img/jiadian1.png", title: "家电1" },
          { img: "img/jiadian2.jpg", title: "家电2" },
          { img: "img/jiadian3.png", title: "家电3" },
          { img: "img/jiadian4.jpg", title: "家电4" },
          { img: "img/jiadian3.png", title: "家电3" },
          { img: "img/jiadian4.jpg", title: "家电4" },
        ],
        charger: [
          { img: "img/phone1.webp", title: "小米10 pro" },
          { img: "img/phone2.webp", title: "小米10" },
          { img: "img/phone3.png", title: "小米9 pro" },
          { img: "img/phone4.png", title: "小米9" },
          { img: "img/phone5.png", title: "小米8 pro" },
          { img: "img/phone1.webp", title: "小米8" },
          { img: "img/phone1.webp", title: "小米10 pro" },
          { img: "img/phone1.webp", title: "小米10 pro" },
          { img: "img/phone4.png", title: "小米9" },
          { img: "img/phone5.png", title: "小米8 pro" },
        ],
        earphone: [
          { img: "img/phone1.webp", title: "小米10 pro" },
          { img: "img/phone2.webp", title: "小米10" },
          { img: "img/phone3.png", title: "小米9 pro" },
          { img: "img/phone4.png", title: "小米9" },
          { img: "img/phone5.png", title: "小米8 pro" },
          { img: "img/phone1.webp", title: "小米8" },
          { img: "img/phone1.webp", title: "小米10 pro" },
          { img: "img/phone1.webp", title: "小米10 pro" },
          { img: "img/phone4.png", title: "小米9" },
          { img: "img/phone5.png", title: "小米8 pro" },
        ],
        protect: [
          { img: "img/phone1.webp", title: "小米10 pro" },
          { img: "img/phone2.webp", title: "小米10" },
          { img: "img/phone3.png", title: "小米9 pro" },
          { img: "img/phone4.png", title: "小米9" },
          { img: "img/phone5.png", title: "小米8 pro" },
          { img: "img/phone1.webp", title: "小米8" },
          { img: "img/phone1.webp", title: "小米10 pro" },
          { img: "img/phone1.webp", title: "小米10 pro" },
          { img: "img/phone4.png", title: "小米9" },
          { img: "img/phone5.png", title: "小米8 pro" },
        ],
        card: [
          { img: "img/phone1.webp", title: "小米10 pro" },
          { img: "img/phone2.webp", title: "小米10" },
          { img: "img/phone3.png", title: "小米9 pro" },
          { img: "img/phone4.png", title: "小米9" },
          { img: "img/phone5.png", title: "小米8 pro" },
          { img: "img/phone1.webp", title: "小米8" },
          { img: "img/phone1.webp", title: "小米10 pro" },
          { img: "img/phone1.webp", title: "小米10 pro" },
          { img: "img/phone4.png", title: "小米9" },
          { img: "img/phone5.png", title: "小米8 pro" },
        ],
        bag: [
          { img: "img/phone1.webp", title: "小米10 pro" },
          { img: "img/phone2.webp", title: "小米10" },
          { img: "img/phone3.png", title: "小米9 pro" },
          { img: "img/phone4.png", title: "小米9" },
          { img: "img/phone5.png", title: "小米8 pro" },
          { img: "img/phone1.webp", title: "小米8" },
          { img: "img/phone1.webp", title: "小米10 pro" },
          { img: "img/phone1.webp", title: "小米10 pro" },
          { img: "img/phone4.png", title: "小米9" },
          { img: "img/phone5.png", title: "小米8 pro" },
        ],
        live: [
          { img: "img/phone1.webp", title: "小米10 pro" },
          { img: "img/phone2.webp", title: "小米10" },
          { img: "img/phone3.png", title: "小米9 pro" },
          { img: "img/phone4.png", title: "小米9" },
          { img: "img/phone5.png", title: "小米8 pro" },
          { img: "img/phone1.webp", title: "小米8" },
          { img: "img/phone1.webp", title: "小米10 pro" },
          { img: "img/phone1.webp", title: "小米10 pro" },
          { img: "img/phone4.png", title: "小米9" },
          { img: "img/phone5.png", title: "小米8 pro" },
        ],
      },
      mis: [
        { img: "img/i.png", id: "小米秒杀" },
        { img: "img/i2.png", id: "企业团购" },
        { img: "img/i3.png", id: "F码通道" },
        { img: "img/i4.png", id: "米粉卡" },
        { img: "img/i5.png", id: "以旧换新" },
        { img: "img/i6.png", id: "话费充值" },
      ],
      boxs:[
        {img:"img/bodya-mi1.jpg"},
        {img:"img/bodya-mi2.jpg"},
        {img:"img/bodya-mi3.jpg"},
      ],
    };
  },
  methods: {
    setSize: function () {
      this.bodyHeight = (400 / 1920) * this.screenWidth;
    },
  },
  mounted() {
    this.screecWidth = window.innnerWidth;
    this.setSize();
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
      this.setSize;
    };
  },
};
</script>
