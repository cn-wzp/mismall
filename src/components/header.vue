<template>
  <header>
    <nav>
      <div class="left">
        <a>小米商城</a>
        <span>|</span>
        <a>MIUI</a>
        <span>|</span>
        <a>loT</a>
        <span>|</span>
        <a>云服务</a>
        <span>|</span>
        <a>金融</a>
        <span>|</span>
        <a>有品</a>
        <span>|</span>
        <a>小米开放平台</a>
        <span>|</span>
        <a>企业团购</a>
        <span>|</span>
        <a>资质证照</a>
        <span>|</span>
        <a>协议规则</a>
        <span>|</span>
        <a>下载app</a>
        <span>|</span>
        <a>智能生活</a>
        <span>|</span>
        <a>Select Location</a>
      </div>
      <div class="right">
        <div class="shop">
          <i class="iconfont icon-xiaomigouwuche"></i>
          购物车({{num}})
          <div class="shp">购物车里还没有商品，快来选购吧！</div>
        </div>
        <div class="sign">
          <a @click="userl" v-if="this.$store.state.lon==0">登录</a>
          <span>|</span>
          <a @click="userr" v-if="this.$store.state.lon==0">注册</a>
          <span>|</span>
          <a>消息通知</a>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
// import Login from '../components/Login.vue'
// import Reg from '../components/Reg.vue'
export default {
  name: "Header",
  data() {
    return {
      num: 0,
    };
  },
  components: {},
  methods:{
      userl(){
        this.$store.state.show=1
      },
      userr(){
        this.$store.state.show=2
      },
      eic(){
        this.$store.state.lon=0
        this.$store.state.token=null
      }
    }
};
</script>
<style>
header {
  width: 100%;
  height: 40px;
  background-color: #333;
  line-height: 40px;
  color: #b0b0b0;
  display: inline-table;
  font-size: 12px;
}
nav {
  width: 1226px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
}
.left {
  float: left;
}
.right {
  float: right;
}
.shop {
  position: relative;
  float: right;
  width: 120px;
  height: 40px;
  margin-left: 15px;
  font-size: 12px;
  cursor: pointer;
  text-align: center;
  background-color: #424242;
}
.shop img {
  width: 13px;
}
.shop:hover {
  color: #ff6700;
  background-color: #fff;
}
.sign {
  position: relative;
  float: right;
  height: 40px;
  line-height: 40px;
}
nav a {
  margin: 0.3em;
  cursor: pointer;
}
nav a:hover {
  color: #fff;
}
.right div:hover .shp {
  display: block;
}
.shp {
  position: absolute;
  right: 0;
  top: 40px;
  z-index: 99;
  width: 316px;
  color: #424242;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  text-align: center;
  transition: height 0.3s;
  height: 100px;
  background-color: #fff;
  line-height: 100px;
  display: none;
  float: right;
}
</style>