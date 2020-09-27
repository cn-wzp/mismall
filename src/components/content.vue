<template>
  <div>
    <div class="body-phone">
      <p class="phone-left">手机</p>
      <p class="phone-nav">查看全部</p>
    </div>
    <div class="body-phones">
      <div class="phones-left">
        <img :src="ad1" />
      </div>
      <div class="phones-right">
        <ul>
          <li v-for="phone in phones" :key="phone.index">
            <img :src="phone.img" />
            <p class="text">{{ phone.text }}</p>
            <p class="desc">{{ phone.desc }}</p>
            <p class="price">
              {{ phone.price }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="body-img2">
      <img :src="ad2" />
    </div>
    <div class="body-jd">
      <div class="jd-left">家电</div>
      <div class="jd-nav-left">电视影音</div>
      <div class="jd-nav-right">热门</div>
    </div>
    <div class="body-jds">
      <div class="jds-left">
        <div class="jds-left-top">
          <img :src="jd1" />
        </div>
        <div class="jds-left-bottom">
          <img :src="jd2" />
        </div>
      </div>
      <div class="jds-right">
        <ul>
          <li class="jds-content" v-for="jd in jds" :key="jd.index">
            <img :src="jd.img" />
            <p class="text">{{ jd.text }}</p>
            <p class="desc">{{ jd.desc }}</p>
            <p class="price">
              {{ jd.price }}
            </p>
          </li>
          <ul class="jds-items">
          <span class="jds-item">
            <ul>
              <li class="jds-item-top">
                <img :src="jd3" />
                <p class="top-text">Air 13.3" 2019 款</p>
                <p class="bottom-text">4999元起</p>
              </li>
              <li class="jds-item-bottom">
                <img :src="bottom" />
                <p class="top-text1">浏览更多</p>
                <p class="bottom-text1">热门</p>
              </li>
            </ul>
          </span>
        </ul>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import "..//assets/css/content.css"
export default {
  name: "content",
  data() {
    return {
      jd1: "img/body-tv1.webp",
      jd2: "img/body-tv2.webp",
      jd3: "img/tv-right1.webp",
      ad1: "img/alpha.webp",
      bottom: "img/bottom.png",
      phones: [
        {
          img: "img/phone1.webp",
          text: "小米cc9 Pro",
          desc: "一亿像素 五射四闪",
          price: "2799元起",
        },
        {
          img: "img/phone2.webp",
          text: "小米cc9 Pro",
          desc: "一亿像素 五射四闪",
          price: "2799元起",
        },
        {
          img: "img/phone3.png",
          text: "小米cc9 Pro",
          desc: "一亿像素 五射四闪",
          price: "2799元起",
        },
        {
          img: "img/phone4.png",
          text: "小米cc9 Pro",
          desc: "一亿像素 五射四闪",
          price: "2799元起",
        },
        {
          img: "img/phone5.png",
          text: "小米cc9 Pro",
          desc: "一亿像素 五射四闪",
          price: "2799元起",
        },
        {
          img: "img/redmi1.webp",
          text: "小米cc9 Pro",
          desc: "一亿像素 五射四闪",
          price: "2799元起",
        },
        {
          img: "img/redmi2.webp",
          text: "小米cc9 Pro",
          desc: "一亿像素 五射四闪",
          price: "2799元起",
        },
        {
          img: "img/redmi3.webp",
          text: "小米cc9 Pro",
          desc: "一亿像素 五射四闪",
          price: "2799元起",
        },
      ],
      ad2: "img/body-img2.webp",
      jds: [
        {
          img: "img/tv1.webp",
          text: "小米4A",
          desc: "人工智能系统， 高效液晶屏",
          price: "3799元起",
        },
        {
          img: "img/tv2.jpg",
          text: "小米4A",
          desc: "人工智能系统， 高效液晶屏",
          price: "3799元起",
        },
        {
          img: "img/tv3.jpg",
          text: "小米4A",
          desc: "人工智能系统， 高效液晶屏",
          price: "3799元起",
        },
        {
          img: "img/tv4.png",
          text: "小米4A",
          desc: "人工智能系统， 高效液晶屏",
          price: "3799元起",
        },
        {
          img: "img/tv5.jpg",
          text: "小米4A",
          desc: "人工智能系统， 高效液晶屏",
          price: "3799元起",
        },
        {
          img: "img/tv1.webp",
          text: "小米4A",
          desc: "人工智能系统， 高效液晶屏",
          price: "3799元起",
        },
        {
          img: "img/tv2.jpg",
          text: "小米4A",
          desc: "人工智能系统， 高效液晶屏",
          price: "3799元起",
        },
      ],
    };
  },
};
</script>