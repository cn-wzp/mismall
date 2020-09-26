<template>
  <div class="nav">
    <div class="warp">
      <div class="logo">
        <img src="/img/milogo.png" />
      </div>
      <div class="n-nav">
        <a>小米手机
          <div class="none-nav">
            <ul v-for="(item) in items" :key="item.index">
              <li>
                <img :src="item.image">
                <p class="p1">{{item.p1}}</p>
                <p class="p2">{{item.p2}}</p>
                <div class="nav-border"></div>
              </li>
            </ul>
          </div>
        </a>
        <a>Redmi红米
          <div class="none-nav">
            <ul  v-for="(Redmi) in Redmis" :key="Redmi.index">
              <li>
                <img :src="Redmi.image">
                <p class="p1">{{Redmi.p1}}</p>
                <p class="p2">{{Redmi.p2}}</p>
                <div class="nav-border"></div>
              </li>
            </ul>
          </div>
        </a>
        <a>电视
          <div class="none-nav" >
            <ul v-for="(tv) in tvs" :key="tv.index">
              <li>
                <img :src="tv.image">
                <p class="p1">{{tv.p1}}</p>
                <p class="p2">{{tv.p2}}</p>
                <div class="nav-border"></div>
              </li>
            </ul>
          </div>
        </a>
        <a>笔记本
          <div class="none-nav" >
            <ul v-for="(computer) in computers" :key="computer.index">
              <li>
                <img :src="computer.image">
                <p class="p1">{{computer.p1}}</p>
                <p class="p2">{{computer.p2}}</p>
                <div class="nav-border"></div>
              </li>
            </ul>
          </div>
        </a>
        <a>家电
          <div class="none-nav" >
            <ul v-for="(jd) in jds" :key="jd.index">
              <li>
                <img :src="jd.image">
                <p class="p1">{{jd.p1}}</p>
                <p class="p2">{{jd.p2}}</p>
                <div class="nav-border"></div>
              </li>
            </ul>
          </div>
        </a>
        <a>路由器
          <div class="none-nav">
            <ul  v-for="(lu) in lus" :key="lu.index">
              <li>
                <img :src="lu.image">
                <p class="p1">{{lu.p1}}</p>
                <p class="p2">{{lu.p2}}</p>
                <div class="nav-border"></div>
              </li>
            </ul>
          </div>
        </a>
        <a>智能硬件
          <div class="none-nav">
            <ul  v-for="(ai) in lus" :key="ai.index">
              <li>
                <img :src="ai.image">
                <p class="p1">{{ai.p1}}</p>
                <p class="p2">{{ai.p2}}</p>
                <div class="nav-border"></div>
              </li>
            </ul>
          </div>
        </a>
        <a>服务
        </a>
        <a>社区
        </a>
      </div>
      <div class="n-input">
        <input type="text" class="n-text" />
        <button class="btn">
          <img src="/img/sousuo.svg">
        </button>
        <ul>
          <li>小米10</li>
          <li>小米9 5g</li>
          <li>小米电视</li>
          <li>小米手表</li>
          <li>红米K30</li>
        </ul>
        <div>
          <span class="input-a">小米10 Pro 5G</span>
          <span class="input-a">Redmi k30 pro 5g</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {
      items:[
        {image:'/img/phone1.webp',p1:'小米10pro',p2:'5299元起'},
        {image:'/img/phone1.webp',p1:'小米10pro',p2:'5299元起'},
        {image:'/img/phone1.webp',p1:'小米10pro',p2:'5299元起'},
        {image:'/img/phone1.webp',p1:'小米10pro',p2:'5299元起'},
        {image:'/img/phone1.webp',p1:'小米10pro',p2:'5299元起'},
      ],
      Redmis:[
        {image:'/img/phone2.webp',p1:'Redmi K30',p2:'3999元起'},
        {image:'/img/phone2.webp',p1:'Redmi K30',p2:'3999元起'},
        {image:'/img/phone2.webp',p1:'Redmi K30',p2:'3999元起'},
        {image:'/img/phone2.webp',p1:'Redmi K30',p2:'3999元起'},
        {image:'/img/phone2.webp',p1:'Redmi K30',p2:'3999元起'},
      ],
      tvs:[
        {image:'/img/tv1.webp',p1:'小米电视',p2:'3999元起'},
        {image:'/img/tv1.webp',p1:'小米透明电视',p2:'3999元起'},
        {image:'/img/tv1.webp',p1:'小米透明电视',p2:'3999元起'},
        {image:'/img/tv1.webp',p1:'小米透明电视',p2:'3999元起'},
        {image:'/img/tv1.webp',p1:'小米透明电视',p2:'3999元起'},
      ],
      computers:[
        {image:'/img/book3.webp',p1:'Redmibook 16',p2:'3999元起'},
        {image:'/img/book3.webp',p1:'Redmibook 16',p2:'3999元起'},
        {image:'/img/book3.webp',p1:'Redmibook 16',p2:'3999元起'},
        {image:'/img/book3.webp',p1:'Redmibook 16',p2:'3999元起'},
        {image:'/img/book3.webp',p1:'Redmibook 16',p2:'3999元起'},
      ],
      jds:[
        {image:'/img/jiadian2.jpg',p1:'米家互联网空调',p2:'3999元起'},
        {image:'/img/jiadian2.jpg',p1:'米家互联网空调',p2:'3999元起'},
        {image:'/img/jiadian2.jpg',p1:'米家互联网空调',p2:'3999元起'},
        {image:'/img/jiadian2.jpg',p1:'米家互联网空调',p2:'3999元起'},
        {image:'/img/jiadian2.jpg',p1:'米家互联网空调',p2:'3999元起'},
      ],
      lus:[
        {image:'/img/ly3.jpg',p1:'小米路由器',p2:'3999元起'},
        {image:'/img/ly3.jpg',p1:'小米路由器',p2:'3999元起'},
        {image:'/img/ly3.jpg',p1:'小米路由器',p2:'3999元起'},
        {image:'/img/ly3.jpg',p1:'小米路由器',p2:'3999元起'},
        {image:'/img/ly3.jpg',p1:'小米路由器',p2:'3999元起'},
      ],
    };
  },
};
</script>
<style>
.nav {
  height: 100px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}
.warp {
  width: 1226px;
  margin: 0 auto;
}
.logo {
  float: left;
  margin-top: 22px;
}
.n-nav {
  float: left;
  margin-left: 180px;
  color: #333;
  font-size: 16px;
}
.n-nav li{
  float: left;
  padding: 12px;
  line-height: 100px;
}
.n-nav a {
  line-height: 100px;
  padding: 0 10px;
  float: left;
}

.n-input {
    float: right;
}
.n-text {
  width: 245px;
  height: 50px;
  margin: 24px 0 0;
  /* border: 1px solid #000; */
}
.btn {
  float: right;
  margin: 24px 0 0;
  width: 50px;
  height: 50px;
  border: 1px solid #b0b0b0;
  cursor: pointer;
}
input {
    border: 1px solid gray;
    box-sizing: border-box;
    font-size: 12px;
    vertical-align: middle;
    outline: none;
}
.btn img {
  width: 20px;
}
.n-input input:focus+ul{
    border: 1px solid #FF6700;
    display: block;
    border-top: 0;
}
.n-input div {
  font-size: 12px;
  color: #757575;
  position: absolute;
  top: 40px;
  right: 60px;
}

.n-input div .input-a {
  padding: 0.7px;
  background-color: #eee;
  cursor: pointer;
}
.n-input ul {
  width: 245px;
  height: 150px;
  font-size: 16px;
  position: absolute;
  top: 74px;
  right: 50px;
  z-index: 5;
  box-sizing: border-box;
  border: 1px solid #000;
  display: none;
}
ul li {
  line-height: 24px;
  height: 24px;
  padding-left: 12px;
  font-size: 12px;
}
.n-input ul li:hover {
  background-color: rgb(212, 212, 212);
}
.n-input{
    position: relative;
}
.n-input div span:hover{
  background-color:#FF6700;
}
a:hover{
  color:#FF6700;
  cursor: pointer;
}
.none-nav{
  width:100%;
  height:250px;
  position: absolute;
  top:100px;
  left:0;
  background-color: #fff;
  border-top:1px solid #b0b0b0;
  box-shadow:0 0 20px -6px #b0b0b0;
  z-index:99;
  display: none;
}
.n-nav a:hover .none-nav{
  display: block;
  transform: translate ;
}
.n-nav ul{
  width: 1226px;
  margin: 0 auto;
}
.n-nav  a .none-nav ul li{
  height:250px;
  left:50px;
  top:0;
  position: relative;
  width: 200px;
}
.n-nav ul li img{
  margin-top:40px;
  width:150px;
  height:100px;
}
.n-nav ul li .p1{
  color: #333;
  font-size:14px;
  width:150px;
  height:20px;
  position: absolute;
  top:120px;
  left:45px;
}
.n-nav ul li .p2{
  color: #FF6700;
  font-size:12px;
  width:150px;
  height:20px;
  position: absolute;
  top:140px;
  left:55px;
}
.n-nav ul li .nav-border{
  height:100px;
  width:1px;
  background-color: #b0b0b0;
  position: absolute;
  margin:0 190px;
  top: 50px;
}

</style>