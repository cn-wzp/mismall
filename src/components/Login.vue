<template>
    <div class="login">
        <div class="back">
            <div class="cont">
                <div class="head-txt">登录</div>
                <div class="sele">
                    <input type="text" class="email" placeholder="邮箱" id="email">
                    <div class="ht"></div>
                    <input type="text" class="email" placeholder="密码" id="pwd">
                </div>
                <div class="sele-bot">
                    <input type="checkbox">
                    <span class="login-t">下次自动登录</span>
                    <router-link to="#" class="wan">忘记密码</router-link>
                </div>
                <div class="lon" @click="login">
                登录</div>
                <img :src="x" alt="" class="exit" @click="exit">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Login",
    data(){
        return{
            x:"img/eit.png",
        }
    },
    methods:{
    exit(){
      this.$store.state.show=0
    },
    login(){
        if(document.getElementById("email").value==""||document.getElementById("pwd").value==""){
            alert("账号和密码不能为空！")
        }else{
            this.axios
            .post("http://localhost:3000/api/user/login", {
            email:document.getElementById('emaill').value,
            password:document.getElementById('pawl').value
      })
      .then(res=>{
          if(res.data.res_msg=="请求成功"){
              this.$store.state.lon=1
              this.$store.state.show=0
              this.$store.state.name=res.data.res.user.nikiname
              this.$store.state.token=res.data.res.token
          }else if(res.data.res_msg=="用户名不存在"){
              alert('用户名不存在')
          }
      });
    }
    }
    }
}
</script>
<style scoped>
.back{
    margin:0;
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(110,110,110,0.164);
    overflow: hidden;
}
.cont{
    background-color:#fff;
    width:400px;
    height:300px;
    margin:200px auto;
    padding :30px 50px ;
    border-radius: 10px;
    box-sizing: border-box;
    position: relative;
}
.head-txt{
    font-family: "Microsoft YaHei";
    font-size:25px;
    float: left;
    font-weight: 1000;
}
.sele{
    margin:20px 0px;
    padding: 10px;
    float: left;
    border-radius: 5px;
    border:1px solid #333;
    width: 90%;
}
.back .cont .sele input{
    background: none;
    outline: none;
    border: none;
    float: left;
    height: 25px;
    width: 90%;
}
.ht{
    background-color: #333;
    margin:10px 0;
    height:1px;
    width:100%;
    float: left;
}
.sele-bot{
    float: left;
    overflow: hidden;
    width:100%;
}
.sele-bot input{
    float: left;
    margin:3px 5px 0 0 ;
}
.login-t{
    font-size:14px;
    float: left;
}
.wan{
    float:right;
    color: red;
    font-size:14px;
}
.lon{
    color:#fff;
    background-color: #a52a2a;
    margin:20px 0 0 ;
    font-size:16px;
    font-family: "Microsoft YaHei";
    float: left;
    text-align: center;
    border-radius: 5px;
    float: left;
    line-height:40px;
    width: 100%;
    height:40px;
}
.lon:hover{
    background: #6f0000;
    cursor: pointer;
}
.exit{
    width: 40px;
    position: absolute;
    right:-17px;
    top:-16px;
    transition:.5s;
}
.exit:hover{
  -webkit-transform:rotate(90deg);
}

</style>