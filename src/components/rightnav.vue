<template>
    <div class="right-nav">
        <div class="right-navp" v-for="navp in navps" :key="navp.index">
            <span :class="navp.css"></span>
            <p>{{navp.text}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:"right",
    data(){
        return{
            navps:[
                {css:"iconfont icon-shoujiAPP",text:"手机APP"},
                {css:"iconfont icon-profile",text:"个人中心"},
                {css:"iconfont icon-shouhoufuwu",text:"售后服务"},
                {css:"iconfont icon-shouhoufuwu1",text:"人工客服"},
                {css:"iconfont icon-xiaomigouwuche",text:"购物车"},
            ],
        }
    },
}
</script>
<style>
.right-nav{
    position: fixed;
    right:0;
    top: 150px;
    text-align: center;
    z-index: 99;
}
.right-navp{
    width:84px;
    height:92px;
    background-color: #fff;
    font-size:14px;
    color: #757575;
    overflow: hidden;
    margin-bottom: -1px;
    border: 1px solid #f5f5f5;
    cursor: pointer;
}
.right-nav .right-navp .iconfont{
    font-size: 30px;
    color: #757575;
    display: block;
    margin-top: 15px;
    margin-bottom: 10px;
}
.right-nav .right-navp:hover .iconfont{
    color: #ff6700;
}
.right-nav .right-navp:hover{
    color: #ff6700;
}
</style>