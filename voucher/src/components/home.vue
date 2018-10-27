<template>
  <div class="hello">

    <div class="content">
      <div class="con-big">
        <img src="https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/11.11/1.png" alt="">
        <img src="https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/11.11/2.png" alt="">
        <img src="https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/11.11/3.png" alt="">
        <img src="https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/11.11/4.png" alt="">
      </div>
    </div>

    <div class="con-img1 con-img"></div>
    <div class="con-img2 con-img"></div>
    <div class="con-img3 con-img"></div>
    <div class="con-img4 con-img"></div>
    <div class="con-img5 con-img"></div>

    <div :class="{
          alert:true,
          'alert-a':alertStatus,
    }" @click="quanHide">

      <div class="alert-content" @click.stop>
        <p class="alert-content-head">填写信息</p>

        <div class="alert-content-list">
          <p :class="{
            'alert-content-list-head':true,
            'alert-statue':Status.card
          }">身份证</p>
          <input v-model="card" maxlength="18" class="alert-content-list-inp" @focus="inpfocus('card')"
                 @blur="inpblur('card')" type="text">
        </div>

        <div class="alert-content-list">
          <p :class="{
            'alert-content-list-head':true,
            'alert-statue':Status.phone
          }">手机号</p>
          <input v-model="phone" maxlength="11" class="alert-content-list-inp list-inpb" @focus="inpfocus('phone')"
                 @blur="inpblur('phone')" @input="inpInput('phone')" type="text"
                 onkeyup="this.value=this.value.replace(/\D/g,'')"
                 onafterpaste="this.value=this.value.replace(/\D/g,'')"/>
          <button :style="{
            background:color.phone
        }" class="getCode" @click="getCode" :disabled="disStatus" ref="getcodes">获取验证码
          </button>
        </div>

        <div class="alert-content-list">
          <p :class="{
            'alert-content-list-head':true,
            'alert-statue':Status.code
          }">验证码</p>
          <input v-model="code" maxlength="4" class="alert-content-list-inp" @focus="inpfocus('code')"
                 @blur="inpblur('code')" type="text" onkeyup="this.value=this.value.replace(/\D/g,'')"
                 onafterpaste="this.value=this.value.replace(/\D/g,'')"/>
        </div>
        <button class="submit" @click="submit">立即购买</button>
        <p class="alert-footer">领取成功后可查看“我的-优惠券”</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        id: '',
        card: '',
        code: '',
        time: 60,
        phone: '',
        Status: {
          card: false,
          phone: false,
          code: false
        },
        color: {
          phone: '#fc9797',
          code: '#fc9797'
        },
        list: [],
        ruleStatus:false,
        disStatus: false,
        alertStatus: true,
      }
    },
    methods: {
      //提交购买
      submit() {
        let v = this;
        if (!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(v.card))) { // 验证身份证号
          alert('请填写正确身份证！')
        } else if (!(/^1[34578]\d{9}$/.test(v.phone))) { // 验证手机号
          alert('请填写正确手机号！')
        } else if (v.code.length !== 4) { // 验证验证码
          alert('请填写4位验证码！')
        } else {
          v.Axios.post('https://app.gsfzd.com/huodo/huo/huopay', v.Qs.stringify({
            hou_id: v.id,
            idcard: v.card,
            mobile: v.phone,
            smscode: v.code
          })).then((res, req) => {
            if (res.data.error === true) {
              window.location.href = res.data.data
            } else {
              alert(res.data.errMsg)
            }
          })

        }
      },

      //鼠标移入事件
      inpfocus(inp) {
        let v = this;
        switch (inp) {
          case 'card':
            v.Status.card = true;
            break;
          case 'phone':
            v.Status.phone = true;
            break;
          case 'code':
            v.Status.code = true;
            break;
        }
      },

      //鼠标移除事件
      inpblur(inp) {
        let v = this;
        switch (inp) {
          case 'card':
            v.card.length < 1 ? v.Status.card = false : '';
            break;
          case 'phone':
            v.phone.length < 1 ? v.Status.phone = false : '';
            break;
          case 'code':
            v.code.length < 1 ? v.Status.code = false : '';
            break;
        }
      },

      //获取手机验证码
      getCode() {
        let v = this;
        if (!(/^1[34578]\d{9}$/.test(v.phone))) {
          alert('请输入正确手机号！')
        } else {

          //发送验证
          v.Axios.post('https://app.gsfzd.com/huodo/huo/code', v.Qs.stringify({
            mobile: v.phone
          })).then((res, req) => {
            if (res.data.error === true) {
              console.log(res.data)
            } else {
              alert(res.data.errMsg)
            }
          });

          //验证码倒计时
          v.color.phone = '#fc9797';
          v.disStatus = true;
          let setTime = setInterval(function () {
            v.time--;
            if (v.time === 0) {
              clearInterval(setTime);
              v.time = 60;
              v.disStatus = false;
              v.color.phone = '#CC3333';
              v.$refs.getcodes.innerHTML = '获取验证码'
            } else {
              v.$refs.getcodes.innerHTML = v.time + 'S'
            }
          }, 1000);

        }
      },

      inpInput() {
        let v = this;
        v.phone.length === 11 ? v.color.phone = '#CC3333' : v.color.phone = '#fc9797'
      },

      quanCli(id) {
        this.id = id;
        this.alertStatus = false
      },

      quanHide() {
        this.alertStatus = true
      },
    },
    mounted() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @rem: 41.6666rem;
  .hello{
    float: left;
    position: absolute;
    width: 100%;
  }
  .hell-back {
    float: left;
    width: 100%;
  }

  .content {
    position: relative;
    margin: 0 auto;
    z-index: 1;
    height: 0;
    width: 472px;
  }
  .con-big{
    position: absolute;
    width: 100%;
    top: 1076px;
  }
  .content img{
    cursor: pointer;
    float: left;
    margin-top: 0;
    width:472px;
    height: 285px;
  }

  .con-li {
    float: left;
    width: 100%;
    height: 384/@rem;
    background: url("https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/voucher/back1.png") no-repeat center;
    background-size: 100% 100%;
    margin-bottom: 29/@rem;
  }

  .con-head {
    float: left;
    width: 100%;
    text-align: right;
    color: #fff;
    font-size: 24/@rem;
    margin-bottom: 16/@rem;
  }

  .con-li-head {
    float: left;
    width: 100%;
    text-align: center;
    font-size: 30/@rem;
    color: #CC0000;
    margin-top: 32/@rem;
  }

  .con-li-quan {
    float: left;
    line-height: 173/@rem;
    width: 471/@rem;
    height: 173/@rem;
    margin: 20/@rem 0 0 119/@rem;
    background: url("https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/voucher/back2.png");
    background-size: 100% 100%;
  }

  .con-li-annotation {
    float: left;
    width: 598/@rem;
    font-size: 24/@rem;
    margin: 20/@rem 0 0 56/@rem;
    color: #666666;
  }

  .con-li-quan-lef {
    float: left;
    font-size: 59/@rem;
    color: #fff;
    margin-left: 51/@rem;
  }

  .con-li-quan-rig {
    float: right;
    font-size: 30/@rem;
    width: 40/@rem;
    margin: 28/@rem 30/@rem 0 0;
    line-height: 40/@rem;
    color: #fff;
  }

  .alert {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: rgba(0, 0, 0, .3);
  }

  .alert-a {
    display: none;
  }

  .alert-content {
    position: absolute;
    top: 0;
    padding: 0 28/@rem;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 619/@rem;
    height: 593/@rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 10/@rem;
  }

  .alert-content-head {
    float: left;
    width: 225/@rem;
    height: 82/@rem;
    border-bottom: 1px solid #cc3333;
    line-height: 82/@rem;
    color: #cc3333;
    text-align: center;
    margin-left: 197/@rem;
    font-size: 30/@rem;
    margin-bottom: 20/@rem;
  }

  .alert-content-list {
    position: relative;
    float: left;
    width: 100%;
    height: 100/@rem;
    color: #666666;
    font-size: 30/@rem;
    border-bottom: 1px solid #E6E6E6;
  }

  .alert-content-list-head {
    position: absolute;
    z-index: 2;
    color: #333;
    top: 30/@rem;
    -webkit-transition: all .25s;
    -moz-transition: all .25s;
    -ms-transition: all .25s;
    -o-transition: all .25s;
    transition: all .25s;
  }

  .alert-statue {
    top: 7/@rem;
    color: #CC0000;
    font-size: 24/@rem;
  }

  .alert-content-list-inp {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 65/@rem;
    line-height: 60/@rem;
    font-size: 28/@rem;
    color: #666;
  }

  .list-inpb {
    width: 410/@rem;
  }

  .getCode {
    float: right;
    margin: 26/@rem 2/@rem 0 0;
    width: 148/@rem;
    height: 55/@rem;
    background: #CC0000;
    color: #fff;
    -webkit-border-radius: 8/@rem;
    -moz-border-radius: 8/@rem;
    border-radius: 8/@rem;
    border: none;
    font-size: 24/@rem;
  }

  .submit {
    float: left;
    width: 240/@rem;
    height: 64/@rem;
    background: #CC3333;
    font-size: 30/@rem;
    color: #fff;
    -webkit-border-radius: 8/@rem;
    -moz-border-radius: 8/@rem;
    border-radius: 8/@rem;
    border: none;
    margin: 40/@rem 0 0 161/@rem;
  }

  .alert-footer {
    float: left;
    width: 100%;
    font-size: 24/@rem;
    color: #999999;
    text-align: center;
    line-height: 90/@rem;
  }
  .rule-big{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
  }
  .rule {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 650/@rem;
    height: 800/@rem;
    color: #666;
    font-size: 28/@rem;
    overflow-y: auto;
    padding: 20/@rem;
    z-index: 3;
    -webkit-border-radius: 8/@rem;
    -moz-border-radius: 8/@rem;
    border-radius: 8/@rem;
    background: #ffffff;
  }
  .rule-head{
    float: left;
    width: 100%;
    text-align: center;
    font-size: 32/@rem;
    color: #333;
    margin-bottom: 20/@rem;
  }
  .rule-con{
    margin-bottom: 16/@rem;
  }
  .con-img5{
    background: url("https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/11.11/5.png") no-repeat center;
  }
  .con-img4{
    background: url("https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/11.11/6.png") no-repeat center;
  }
  .con-img3{
    background: url("https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/11.11/7.png") no-repeat center;
  }
  .con-img2{
    background: url("https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/11.11/8.png") no-repeat center;
  }
  .con-img1{
    background: url("https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/11.11/9.png") no-repeat center;
  }
  .con-img{
    float: left;
    width: 100%;
    height: 606px;
    background-size: 1920px 100%;
  }
  @media screen and(max-width:750px) {
    .con-img{
      min-width: 750/@rem;
      height: 606/@rem;
      background-size: 1920/@rem 100%;
    }

    .content {
      position: relative;
      margin: 0 auto;
      z-index: 1;
      height: 0;
      width: 472/@rem;
    }
    .con-big{
      position: absolute;
      width: 100%;
      top: 1076/@rem;
    }
    .content img{
      cursor: pointer;
      float: left;
      margin-top: 0;
      width:472/@rem;
      height: 285/@rem;
    }
  }



</style>

















