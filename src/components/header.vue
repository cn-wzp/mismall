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
import "../assets/css/common.css"
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
