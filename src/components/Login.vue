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
import "../assets/css/common.css"
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
