<template>
    <div class="login">
        <div class="back">
            <div class="cont">
                <div class="head-txt">注册</div>
                <div class="sele">
                    <input type="text" class="email" placeholder="昵称" id="username">
                    <div class="ht"></div>
                    <input type="text" class="email" placeholder="邮箱" id="email">
                    <div class="ht"></div>
                    <input type="text" class="email" placeholder="密码" id="pwd">
                    <div class="ht"> </div>
                    <input type="text" class="email" placeholder="确认密码" id="pwd1">
                </div>
                    <div class="sele-bot">
                        <input type="checkbox" style="cursor: pointer;">
                             <span class="login-t">我已认真阅读并同意小米商城的</span>
                             <span class="wan">《使用协议》</span>
                    </div>
                    <div class="lon" @click="getuser">注册</div>
                    <img :src="x" alt="" class="exit" @click="exit">
            </div>
        </div>
    </div>
</template>

<script>
import "..//assets/css/login.css"
export default {
    name:'Reg',
    data(){
        return{
            x:"img/eit.png",
        }
    },
    methods:{
        exit(){
            this.$store.state.show=0
        },
        getuser(){
            if(document.getElementById('email').value==""||document.getElementById('pwd').value==''||document.getElementById('use').value==" "){
              alert('请输入完整的值')  
            }else{
                this.axios
            .post("http://localhost:3000/api/user", {
          email:document.getElementById('email').value,
          password:document.getElementById('paw').value,
          username:document.getElementById('use').value,
          nikiname:document.getElementById('use').value
      })
      .then(res => {
        // console.log(res)
        if(res.data.res=="注册成功"){
          this.$store.state.lon=1
          this.$store.state.show=0
          alert("注册成功")
          this.$store.state.name=document.getElementById('use').value
          // console.log(res.config.data)
        }
      });
      }
      
    }
  }
}
</script>
<style scoped>

</style>