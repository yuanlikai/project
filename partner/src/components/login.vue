<template>
  <div class="content1">
    <div class="cont-fixed">
      <div class="fixed-center">

        <div class="fixed-center-cut">
          <p @click="states=true" :class="{
             'cut-login':true,
             'cut-logina':true,
             'cut-states':states
          }">密码登录</p>
          <p @click="states=false" :class="{
             'cut-login':true,
             'cut-loginb':true,
             'cut-states':!states
          }">手机登录</p>
        </div>

        <span :style="{
            marginLeft:states===true?'45px':'303px'
        }" class="line"></span>

        <!--密码登陆-->
        <div v-show="states" class="fixed-center-inp">
          <div class="center-inp-con center-inp-cona">
            <img src="https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/voucher/user.png" alt="">
            <input v-model="user.username" maxlength="11" class="inp-con-y" type="text" placeholder="请输入用户名">
          </div>
          <div class="center-inp-con">
            <img src="https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/voucher/pass.png" alt="">
            <input v-model="user.password" class="inp-con-y" type="password" placeholder="请输入密码">
          </div>
          {{a}}
        </div>

        <!--手机登录-->
        <div v-show="!states" class="fixed-center-inp" style="display: none;">
          <div class="center-inp-con center-inp-cona">
            <img src="https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/voucher/phone.png" alt="">
            <input v-model="user.mobile" class="inp-con-y" maxlength="11" type="text" placeholder="请输入手机号">
          </div>
          <div class="center-inp-con">
            <img src="https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/voucher/pass.png" alt="">
            <input v-model="user.code" class="inp-con-y inp-con-tree" maxlength="4" type="password"
                   placeholder="请输入验证码">
            <span class="inp-getCode" @click="getCode" v-show="codeStater">获取验证码</span>
            <span class="inp-getCode" style="margin-right: 40px" v-show="!codeStater">{{authCode}}</span>
          </div>
        </div>

        <form v-show="states" action="" class="center-remember">
          <label>
            <input type="checkbox" checked="checked" class="center-remember-checkbox"> 记住密码
          </label>
          <a class="forget-password" @click="$refs.pas.modal1=true">忘记密码？</a>
        </form>

        <button class="content-login" @click="login">登 录</button>
        <!--<p class="content-footer">没有账号？立即<a href="" style="color:#B81314">注册</a>！</p>-->
      </div>
      <button @click="routeClick">123</button>
      <alterPas ref="pas" title1="找回密码"></alterPas>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import yl from 'ylcookie'
  import alterPas from './public/alterPas'

  export default {
    name: 'home',
    components: {
      alterPas
    },
    watch:{
      $route(to){
        // console.log(to.query.a)
        // this.asdasd();

      }
    },
    data() {
      return {
        a: 1,
        res_c: [],
        authCode: '60s',
        codeStater: true,
        states: true,
        user: {
          username: '',
          password: '',
          mobile: '',
          code: ''
        }
      }
    },
    methods: {
      routeClick() {
        this.$router.push({
          path: '/',
          query: {
            a: 123,
            b: 456
          }
        })
        this.asdasd();
      },
      asdasd() {
        console.log(this.$route.query.a)
      },

      //登录
      login() {
        let v = this;
        if (v.states === true) {//账号密码登录
          v.Axios.post('/partner/login/login', v.Qs.stringify({
            name: v.user.username,
            pwd: v.user.password
          })).then(res => {
            if (res.data.error === 0) {
              yl.cookie('class_id', res.data.data.class_id);
              v.$router.push({
                name: 'welcome',
              });
              sessionStorage.setItem('meu', '1')
            } else {
              v.$Message.error(res.data.errMsg)
            }
          })
        } else {//手机验证码登录
          v.Axios.post('/partner/login/quick', v.Qs.stringify({
            mobile: v.user.mobile,
            code: v.user.code
          })).then(res => {
            if (res.data.error === 0) {
              v.$router.push({
                name: 'deveHouses',
              });
              v.$Message.success('登录成功');
              sessionStorage.setItem('meu', '1-1')
            } else {
              v.$Message.error(res.data.errMsg)
            }
          })
        }
      },

      //获取验证码
      getCode() {
        let v = this;
        let time = 60;
        v.codeStater = false;
        let djs = setInterval(() => {
          time--;
          if (time !== 0) {
            v.authCode = `${time}s`
          } else {
            clearInterval(djs);
            v.authCode = '60s';
            v.codeStater = true;
          }
        }, 1000)

        v.Axios.post('/partner/login/mobile', v.Qs.stringify({
          mobile: v.user.mobile
        })).then((res, req) => {
        })
      }

    },
    mounted() {
      this.asdasd()
      let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
      if (keys) {
        for (let i = keys.length; i--;)
          document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

  .content1 {
    float: left;
    background: url("https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/voucher/adminBack.jpg") no-repeat center;
    background-size: 1920px 1000px;
    width: 100%;
    height: 1000px;
  }

  .cont-fixed {
    float: left;
    width: 100%;
    margin-top: 327px;
    height: 450px;
    background: rgba(0, 0, 0, .3);
  }

  .fixed-center {
    margin: 0 auto;
    width: 648px;
    height: 450px;
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
    /*color: #B81314;*/
  }

  .cut-states {
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
    -webkit-transition: all .25s;
    -moz-transition: all .25s;
    -ms-transition: all .25s;
    -o-transition: all .25s;
    transition: all .25s;
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

  .inp-con-tree {
    width: 260px;
  }

  .inp-getCode {
    float: right;
    font-size: 16px;
    color: rgba(184, 19, 20, 1);
    line-height: 52px;
    cursor: pointer;
    margin-right: 14px;
  }

  .forget-password {
    float: right;
    color: #999;
  }

  .content-login {
    float: left;
    margin-top: 50px;
    cursor: pointer;
    width: 100%;
    height: 52px;
    font-size: 18px;
    color: #FFFFFF;
    font-family: '微软雅黑';
    border: none;
    background: rgba(184, 19, 20, 1);
  }

  .content-footer {
    float: left;
    width: 100%;
    text-align: center;
    color: #999;
    line-height: 65px
  }
</style>

















