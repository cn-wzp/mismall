<template>
  <div>
    <div class="wrap">
      <div class="clearfix">
        <div class="foot-service">
          <ul>
            <li v-for="service in services" :key="service.index">
              <i :class="service.css"></i>
              {{ service.text }}
              <span>{{ service.span }}</span>
            </li>
          </ul>
        </div>
        <div class="foot-table">
          <div class="foot-tablet">
            <dl class="table-link" v-for="table in tables" :key="table.index">
              <dt>
                {{ table.dt }}
              </dt>
              <dd>
                <a> {{ table.dd }}</a>
              </dd>
              <dd>
                <a> {{ table.dd1 }}</a>
              </dd>
              <dd>
                <a> {{ table.dd2 }}</a>
              </dd>
              <dd>
                <a> {{ table.dd3 }}</a>
              </dd>
              <dd>
                <a> {{ table.dd4 }}</a>
              </dd>
            </dl>
          </div>
          <div class="foot-tableb">
            <p class="foot-phone">400-100-5678</p>
            <p class="foot-text">8:00-18:00(仅收市话费)</p>
            <span class="foot-ai btn-small">
              <a class="iconfont icon-duihuakuang"></a>人工客服
            </span>
            <p class="foot-text1">
              关注小米:
              <a class="iconfont icon-weibo"></a>
              <a class="iconfont icon-weixin"></a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-css">
      <div class="footer">
        <div class="container">
          <div class="logo">
            <img src="img/milogo.png" />
          </div>
          <div class="info-text">
            <ul>
              <li v-for="span in spans" :key="span.index">
                <a> {{ span.text }}</a> <span>{{ span.css }}</span>
              </li>
            </ul>
            <p>
              © mi.com 京ICP证110507号 京ICP备10046444号
              京公网安备11010802020134号 京网文[2017]1530-131号<br />
              （京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京)
              -非经营性-2014-0090 营业执照 医疗器械质量公告<br />
              增值电信业务许可证 网络食品经营备案（京）【2018】WLSPJYBAHF-12
              食品经营许可证<br />
              违法和不良信息举报电话：185-0130-1238 知识产权侵权投诉
              本网站所列数据，除特殊说明，所有数据均出自我司实验室测试<br />
            </p>
          </div>
          <div class="info-link">
            <img class="footer-img" :src="footimg1" />
            <img class="footer-img" :src="footimg2" />
            <img class="footer-img" :src="footimg3" />
            <img class="footer-img" :src="footimg4" />
            <img class="footer-img" :src="footimg5" />
          </div>
          <div class="info-img">
              <img :src="footimg6">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../assets/css/foot.css"
import "../assets/icon/iconfont.css";
export default {
  name: "foot",
  data() {
    return {
      footimg1: "img/v1-logo.png",
      footimg2: "img/v2-logo.png",
      footimg3: "img/v3-logo.png",
      footimg4: "img/v4-logo.png",
      footimg5: "img/v5-logo.png",
      footimg6:"img/slogo.png",
      services: [
        { css: "iconfont icon-weixiu", text: "预约维修服务", span: "|" },
        {
          css: "iconfont icon-qitianwuliyoutuihuan",
          text: "七天无理由退货",
          span: "|",
        },
        {
          css: "iconfont icon-tianwuliyoutuihuo",
          text: "15天免费换货",
          span: "|",
        },
        { css: "iconfont icon-ArtboardCopy", text: "满150元包邮", span: "|" },
        { css: "iconfont icon-location", text: "520余家售后网点" },
      ],
      tables: [
        { dt: "帮助中心", dd: "账户管理", dd1: "购物指南", dd2: "订单操作" },
        {
          dt: "服务支持",
          dd: "售后政策",
          dd1: "自助服务",
          dd2: "相关下载",
          dd3: "",
          dd4: "",
        },
        {
          dt: "线下门店",
          dd: "小米之家",
          dd1: "服务网点",
          dd2: "授权体验店",
          dd3: "",
          dd4: "",
        },
        {
          dt: "关于小米",
          dd: "了解小米",
          dd1: "加入小米",
          dd2: "投资者关系",
          dd3: "企业社会责任",
          dd4: "廉洁举报",
        },
        {
          dt: "关注我们",
          dd: "新浪微博",
          dd1: "官方微信",
          dd2: "联系我们",
          dd3: "公益基金会",
          dd4: "",
        },
        {
          dt: "特色服务",
          dd: "F码查询",
          dd1: "礼物码",
          dd2: "防伪查询",
          dd3: "",
          dd4: "",
        },
      ],
      spans: [
        { text: "小米商城", css: "|" },
        { text: "MIUI", css: "|" },
        { text: "米家", css: "|" },
        { text: "米聊", css: "|" },
        { text: "多看", css: "|" },
        { text: "游戏", css: "|" },
        { text: "政企服务", css: "|" },
        { text: "小米天猫店", css: "|" },
        { text: "小米集团隐私政策", css: "|" },
        { text: "小米公司儿童信息保护政策", css: "|" },
        { text: "小米商城隐私政策", css: "|" },
        { text: "小米商城用户协议", css: "|" },
        { text: "问题反馈", css: "|" },
        { text: "Select Location", css: "" },
      ],
    };
  },
};
</script>