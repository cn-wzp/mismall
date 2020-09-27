<template>
    <div class="wrap">
        <div class="clearfix">
            <div class="foot-service">
            <ul>
                <li v-for="service in services" :key="service.index">
                    <i :class="service.css"></i>
                    {{service.text}}
                    <span>{{service.span}}</span>
                </li>
            </ul>
            </div>
            <div class="foot-table">
                <div class="foot-tablet">
                <dl class="table-link" v-for="table in tables" :key="table.index">
                    <dt>
                        {{table.dt}}
                    </dt>
                    <dd><a>
                        {{table.dd}}</a>
                    </dd>
                    <dd><a>
                        {{table.dd1}}</a>
                    </dd>
                    <dd><a>
                        {{table.dd2}}</a>
                    </dd>
                    <dd><a>
                        {{table.dd3}}</a>
                    </dd>
                    <dd><a>
                        {{table.dd4}}</a>
                    </dd>
                </dl>
                </div>
                <div class="foot-tableb">
111
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "../assets/icon/iconfont.css"
export default {
    name:"foot",
    data(){
        return{
            services:[
                {css:"iconfont icon-weixiu",text:"预约维修服务",span:"|"},
                {css:"iconfont icon-qitianwuliyoutuihuan",text:"七天无理由退货",span:"|"},
                {css:"iconfont icon-tianwuliyoutuihuo",text:"15天免费换货",span:"|"},
                {css:"iconfont icon-ArtboardCopy",text:"满150元包邮",span:"|"},
                {css:"iconfont icon-location",text:"520余家售后网点",},
            ],
            tables:[
                {dt:"帮助中心",dd:"账户管理",dd1:"购物指南",dd2:"订单操作"},
                {dt:"服务支持",dd:"售后政策",dd1:"自助服务",dd2:"相关下载",dd3:"",dd4:""},
                {dt:"线下门店",dd:"小米之家",dd1:"服务网点",dd2:"授权体验店",dd3:"",dd4:""},
                {dt:"关于小米",dd:"了解小米",dd1:"加入小米",dd2:"投资者关系",dd3:"企业社会责任",dd4:"廉洁举报"},
                {dt:"关注我们",dd:"新浪微博",dd1:"官方微信",dd2:"联系我们",dd3:"公益基金会",dd4:""},
                {dt:"特色服务",dd:"F码查询",dd1:"礼物码",dd2:"防伪查询",dd3:"",dd4:""},
            ],
        }
    }
}
</script>
<style>
.wrap{
    width: 1226px;
    margin:0 auto;
    position: relative;
}
.clearfix{
    margin: 0;
    padding: 0;
    list-style: none;
}
.foot-service{
    width: 1226px;
    height: 80px;
    border-bottom: 1px solid #e0e0e0;
}
.foot-service li {
    float: left;
    font-size: 16px;
    color: #616161;
    text-align: center;
    line-height: 88px;
}
.foot-service li span{
    margin: 10px 40px ;
}
.foot-service li .iconfont{
   color: #616161;
    font-size: 24px;
    margin-right: 10px;
}
.foot-table{
    padding:40px 0;
}

.table-link{
    float: left;
    width: 160px;
    margin: 0;
}
.table-link dt{
    margin: -1px 0 26px;
    font-size: 14px;
    line-height: 1.25;
    color: #424242;
}
.table-link dd{
    margin: 10px 0 0;
    font-size: 12px;
}
.table-link dd a{
    color: #757575;
}
.foot-tableb{
    float: right;
    width:251px;
    border-left: 1px solid #e0e0e0;
    text-align: center;
    color: #616161;
}
</style>