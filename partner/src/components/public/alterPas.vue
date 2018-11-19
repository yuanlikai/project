<template>
  <div class="content">
    <Modal
      v-model="modal1"
      :title="title1"
      @on-ok="handleSubmit('formValidate')"
      @on-cancel="cancel"
      :loading="loading"
      :styles="{
        width:'400px'}">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" style="padding: 0 10px;">
        <FormItem label="手机号" prop="mobile">
          <Input v-model="formValidate.mobile" :disabled="disabled" :maxlength="11" placeholder="请输入您的手机号"></Input>
        </FormItem>
        <FormItem label="验证码" prop="code">
          <Input v-model="formValidate.code" search :enter-button="codeText" @on-search="getCode()" :maxlength="4"
                 placeholder="请输入您的验证码"/>
        </FormItem>
        <FormItem label="新密码" prop="pwd">
          <Input v-model="formValidate.pwd" :maxlength="16" placeholder="请输入您的新密码" type="password"></Input>
        </FormItem>
      </Form>
    </Modal>
    {{formValidate.mobile=phone}}
  </div>
</template>

<script type="text/ecmascript-6">
  import yl from 'ylcookie'
  export default {
    props:['title1','phone'],
    data() {
      return {
        time:60,
        loading:true,
        disabled:true,
        codeText: '获取验证码',
        modal1: false,
        formValidate: {
          mobile: '',
          code: '',
          pwd: '',

        },
        ruleValidate: {
          mobile: [
            {required: true, message: '请输入您的手机号', trigger: 'blur'}
          ],
          code: [
            {required: true, message: '请输入您的手机验证', trigger: 'blur'}
          ],
          pwd: [
            {required: true, message: '请输入您的新密码', trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      //获取验证码
      getCode() {
        let _this = this;

        if(_this.time === 60){
          let code = setInterval(() => {
            if (_this.time === 0) {
              _this.codeText = '获取验证码';
              _this.time=60;
              window.clearInterval(code)
            } else {
              _this.time--;
              _this.codeText = _this.time + 's'
            }
          }, 1000);
          _this.Axios.post('/partner/login/mobile',_this.Qs.stringify({
            mobile:_this.formValidate.mobile,
          })).then(res=>{
            _this.$Message.success('验证码已发送')
          })
        }else {
            _this.$Message.warning('客官稍后再获取')
        }
      },

      handleSubmit(name) {
        let _this = this;
        _this.$refs[name].validate((valid) => {
          if (valid) {
            _this.Axios.post('/partner/login/updatapwd', _this.Qs.stringify({
              mobile: _this.formValidate.mobile,
              code: _this.formValidate.code,
              pwd: _this.formValidate.pwd
            })).then(res => {
              if (res.data.error === 0) {
                _this.modal1=false;
                _this.handleReset('formValidate');
                _this.$router.push('/');
                _this.$Message.success('密码已修改，请登录');

                let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
                if (keys) {
                  for (let i = keys.length; i--;)
                    document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
                }
              } else {
                _this.loading=false;
                _this.$Message.error(res.data.errMsg)
              }
            })
          } else {
            _this.loading=false;
            _this.$Message.error('Fail!');
          }
        })
      },
      handleReset(name) {
        this.$refs[name].resetFields();
      },

      //修改/找回密码
      ok() {
      },
      cancel() {
        this.handleReset('formValidate')
      },

      phooos(){
        return this.phone
      },

    },
    mounted() {
      yl.cookie('token')?this.disabled=true:this.disabled=false
    }
  }
</script>

<style lang="less">
</style>
