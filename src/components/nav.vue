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
import "../assets/css/common.css"
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

</style>