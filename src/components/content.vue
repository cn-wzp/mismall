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
  </div>
</template>
<script>
export default {
  name: "content",
  data() {
    return {
      ad1: "img/alpha.webp",
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
    };
  },
};
</script>
<style>
.body-phone {
  height: 58px;
  width: 1226px;
  font-size: 20px;
  color: #333;
  margin: 0 auto;
  display: flow-root;
  vertical-align: top;
}
.body-phone .phone-left {
  float: left;
}
.body-phone .phone-nav {
  float: right;
  font-size: 16px;
  color: #424242;
}
.body-phones {
  width: 1226px;
  margin: 0 auto;
}
.body-phones .phones-left {
  height: 614px;
  width: 234px;
  /* margin-top: 164px; */
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
}
.phones-right {
  height: 614px;
  width: 992px;
  display: inline-block;
  vertical-align: top;
  cursor: pointer;
}
.phones-right li {
  float: left;
  text-align: center;
  font-size: 14px;
  width: 234px;
  height: 260px;
  padding: 20px 0;
  margin-left: 14px;
  margin-bottom: 14px;
  background-color: #fff;
  box-shadow: 0px 0px 20px -8px #b0b0b0;
}
.phones-right ul {
  float: left;
}
.phones-right li img {
  width: 200px;
  height: 120px;
  margin: 10px 0;
}
.phones-right li .text {
  margin-top: 20px;
  height: 21px;
  font-size: 14px;
}
.phones-right li .desc {
  color: #b0b0b0;
  margin-top: 10px;
  font-size: 12px;
  height: 21px;
}
.phones-right li .price {
  color: #ff6709;
  margin-top: 10px;
  font-size: 14px;
  height: 21px;
}
.body-img2 {
  width: 1226px;
  margin: 0 auto;
}
.body-img2 img {
  margin-top: 30px;
  margin-bottom: 30px;
  float: left;
  cursor: pointer;
}
.phones-left:hover {
  transform: scale(1.02);
  transition: all 0.3s;
  box-shadow: 0px 0px 20px 1px #b0b0b0;
}
.phones-right ul li:hover {
  transform: scale(1.02);
  transition: all 0.3s;
  box-shadow: 0px 0px 20px 1px #b0b0b0;
}
</style>