<template>
  <div class="body-main">
    <div class="shopping">
      <h2 class="title">小米闪购</h2>
      <div class="title-btn">
        <span class="shop-left">
          <i class="el-icon-arrow-left"></i>
        </span>
        <span class="shop-right">
          <i class="el-icon-arrow-right"></i>
        </span>
      </div>
    </div>
    <div class="main-shop">
      <div class="body-shopping">
        <div class="body-shopping-a">
          <p>10：00 场</p>
          <img src="img/shopping-a.png" alt="" />
          <p class="shopping-text">本场已结束</p>
          <div class="shopping-b">
            <p>00</p>
          </div>
          <div class="shopping-c">:</div>
          <div class="shopping-b">
            <p>00</p>
          </div>
          <div class="shopping-c">:</div>
          <div class="shopping-b">
            <p>00</p>
          </div>
        </div>
        <div class="shop-item" v-for="shop in shops" :key="shop.index">
          <div class="body-shopping-b">
            <img :src="shop.img" alt />
            <p class="text">{{ shop.text }}</p>
            <p class="desc">{{ shop.desc }}</p>
            <p class="price">
              {{ shop.price }}
              <del>{{ shop.del }}</del>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="body-img1">
      <img :src="ad" />
    </div>
  </div>
</template>

<script>
import "../assets/css/Bodynav.css"
export default {
  name: "Bodynav",
  data() {
    return {
      shops: [
        {
          img: "img/shangou1.png",
          text: "米家无线除螨仪 白色",
          desc: "每个家庭都需要一台除螨仪",
          price: "449元",
          del: "549元",
        },
        {
          img: "img/shangou2.jpg",
          text: "米家压力IH电饭锅",
          desc: "智能烹饪",
          price: "799元",
          del: "999元",
        },
        {
          img: "img/shangou3.png",
          text: "米家手持无线吸尘器 白色",
          desc: "除尘除螨黑科技",
          price: "999元",
          del: "1299元",
        },
        {
          img: "img/shangou4.jpg",
          text: "小米净水器500G 白色",
          desc: "直出纯净水 更畅快",
          price: "1499元",
          del: "2199元",
        },
      ],
      ad: "img/body-img1.webp",
    };
  },
};
</script>
