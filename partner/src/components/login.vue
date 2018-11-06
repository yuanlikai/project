<template>
  <div class="content">
    <div class="cont-fixed">
      <div class="fixed-center">

        <div class="fixed-center-cut">
          <p class="cut-login cut-logina">密码登录</p>
          <p class="cut-login cut-loginb">手机登录</p>
        </div>

        <span class="line"></span>

        <!--密码登陆-->
        <div class="fixed-center-inp">
          <div class="center-inp-con center-inp-cona">
            <img src="https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/voucher/user.png" alt="">
            <input v-model="user.username" class="inp-con-y" type="text" placeholder="请输入用户名">
          </div>
          <div class="center-inp-con">
            <img src="https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/voucher/pass.png" alt="">
            <input v-model="user.password" class="inp-con-y" type="password" placeholder="请输入密码">
          </div>
        </div>

        <!--手机登录-->
        <div class="fixed-center-inp" style="display: none;">
          <div class="center-inp-con center-inp-cona">
            <img src="https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/voucher/phone.png" alt="">
            <input class="inp-con-y" maxlength="11" type="text" placeholder="请输入手机号">
          </div>
          <div class="center-inp-con">
            <img src="https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/voucher/pass.png" alt="">
            <input class="inp-con-y" maxlength="4" type="password" placeholder="请输入验证码">
          </div>
        </div>

        <form action="" class="center-remember">
          <label>
            <input type="checkbox" class="center-remember-checkbox"> 记住密码
          </label>
          <a href="" class="forget-password">忘记密码？</a>
        </form>

        <button class="content-login" @click="login">登 录</button>
        <p class="content-footer">没有账号？立即<a href="" style="color:#B81314">注册</a>！</p>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        user:{
          username:'',
          password:''
        }
      }
    },
    methods: {
      login(){
        let v = this;
        v.Axios.post('/partner/login/login',v.Qs.stringify({
          name:v.user.username,
          pwd:v.user.password
        })).then((res,req)=>{
          if(res.data.error===0){
            v.$router.push({
              name:'deveHouses',
            })
          }else {
            alert(res.data.errMsg)
          }
        })
      }
    },
    mounted() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  .content {
    float: left;
    background: url("https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/voucher/%E4%B8%8A%E6%B5%B7%E8%B4%B5%E4%B8%8A%E6%88%BF%E4%BA%A7%E8%90%A5%E9%94%80%E7%AD%96%E5%88%92%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8.jpg") no-repeat center;
    background-size: 1920px 1000px;
    width: 100%;
    height: 1000px;
  }

  .cont-fixed {
    float: left;
    width: 100%;
    margin-top: 327px;
    height: 468px;
    background: rgba(0, 0, 0, .3);
  }

  .fixed-center {
    margin: 0 auto;
    width: 648px;
    height: 468px;
    background: #FFFFFF;
    padding: 0 116px;
  }

  .fixed-center-cut {
    float: left;
    padding: 0 43px;
    width: 100%;
    margin-top: 40px;
  }

  .cut-login {
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    color: #666;
  }

  .cut-logina {
    float: left;
    color: #B81314;

  }

  .cut-loginb {
    float: right;
  }

  .line {
    float: left;
    margin-top: 8px;
    width: 66px;
    height: 4px;
    background: rgba(184, 19, 20, 1);
    border-radius: 2px;
    margin-left: 45px;
  }

  .fixed-center-inp {
    float: left;
    width: 100%;
    margin-top: 46px;
  }

  .center-inp-con {
    float: left;
    width: 100%;
    height: 52px;
    border: 1px solid rgba(230, 230, 230, 1);
    img {
      float: left;
      width: 15px;
      height: 20px;
      margin: 16px 0 0 19px;
    }
  }

  .center-inp-cona {
    margin-bottom: 40px;
  }

  .inp-con-y {
    float: left;
    width: 375px;
    height: 100%;
    font-size: 16px;
    padding: 0 0 0 21px;
  }

  .center-remember {
    float: left;
    margin-top: 4px;
    width: 100%;
    color: #999;
  }

  .center-remember-checkbox {
    float: left;
    height: 22px;
  }

  .forget-password {
    float: right;
    color: #999;
  }

  .content-login{
    float: left;
    margin-top: 50px;
    cursor: pointer;
    width: 100%;
    height:52px;
    font-size: 18px;
    color: #FFFFFF;
    font-family: '微软雅黑';
    border:none;
    background:rgba(184,19,20,1);
  }
  .content-footer{
    float: left;
    width: 100%;
    text-align: center;
    color: #999;
    line-height: 65px
  }
</style>

















