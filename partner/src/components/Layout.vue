<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-logo {
    display: block;
    margin: 12px auto 50px auto;
  }
</style>
<template>
  <div class="layout">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <Menu @on-select="sect" :active-name="ctive" theme="dark" width="auto" :open-names="[ctive.split('-')[0]]">
        <img class="layout-logo" src="https://gsfhuodong.oss-cn-hangzhou.aliyuncs.com/logo.png" alt="">
        <Submenu name="1">
          <template slot="title">
            开发商
          </template>
          <MenuItem name="1-1">楼盘管理</MenuItem>
          <MenuItem name="1-2">预约管理</MenuItem>
          <MenuItem name="1-3">订单管理</MenuItem>
          <MenuItem name="1-4">收藏管理</MenuItem>
        </Submenu>
        <!--<Submenu name="2">-->
        <!--<template slot="title">-->
        <!--合作伙伴-->
        <!--</template>-->
        <!--<MenuItem name="2-1">踩盘报备</MenuItem>-->
        <!--<MenuItem name="2-2">带看报备</MenuItem>-->
        <!--<MenuItem name="2-3">管理分销</MenuItem>-->
        <!--</Submenu>-->
        <Submenu name="3">
          <template slot="title">
            经纪人/中介
          </template>
          <MenuItem name="3-1">房源管理</MenuItem>
          <MenuItem name="3-2">预约管理</MenuItem>
          <MenuItem name="3-3">收藏管理</MenuItem>
        </Submenu>
        <!--<Submenu name="4">-->
        <!--<template slot="title">-->
        <!--报备-->
        <!--</template>-->
        <!--<MenuItem name="4-1">踩盘报备</MenuItem>-->
        <!--<MenuItem name="4-2">带看报备</MenuItem>-->
        <!--</Submenu>-->
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px'}">
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">


        <Row>
          <Col span="12">
          <p style="font-size: 14px">上海贵上房产营销策划有限公司</p>
          </Col>
          <Col span="12" style="text-align: right">
          <Dropdown @on-click="tate">
            <a href="javascript:void(0)">
              <Avatar :src="formValidate.user_headpic"/>
              <Icon type="md-arrow-dropdown" color="#515a6e" size="18"/>
            </a>
            <DropdownMenu slot="list" style="text-align: left">
              <DropdownItem name="1">个人资料</DropdownItem>
              <DropdownItem name="2">修改密码</DropdownItem>
              <DropdownItem name="3">退出登录</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          </Col>
        </Row>
      </Header>
      <router-view></router-view>
    </Layout>
    <Modal
      v-model="modal6"
      title="编辑个人资料"
      :loading="loading"
      @on-ok="asyncOK">

      <Row>
        <Col span="8" style="text-align: center;">

        <div class="demo-upload-list" v-for="item in uploadList">
          <template v-if="item.status === 'finished'">
            <img :src="item.url">
            <div class="demo-upload-list-cover">
              <Icon type="ios-eye-outline" @click.native="handleView(item.url)"></Icon>
              <!--<Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>-->
            </div>
          </template>
          <template v-else>
            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
          </template>
        </div>
        <p>
          <Upload
            ref="upload"
            :show-upload-list="false"
            :default-file-list="defaultList"
            :on-success="handleSuccess"
            :format="['jpg','jpeg','png']"
            :max-size="2048"
            :on-format-error="handleFormatError"
            :on-exceeded-size="handleMaxSize"
            :before-upload="handleBeforeUpload"
            type="drag"
            action="/apis/publics/picture/imgouter"
            style="display: inline-block;width:58px;">
            <div style="width: 58px;height:30px;line-height: 30px;color: #000;">
              更换头像
            </div>
          </Upload>
        </p>
        <Modal title="View Image" v-model="visible">
          <img :src="imgName" v-if="visible" style="width: 100%">
        </Modal>
        </Col>
        <Col span="16">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="昵称" prop="user_nick">
            <Input style="width:150px" v-model="formValidate.user_nick" :maxlength="12" placeholder="请填写您的昵称"></Input>
          </FormItem>
          <FormItem label="手机号" prop="user_mobile">
            <Input :disabled="true" style="width:150px" v-model="formValidate.user_mobile"
                   placeholder="您的用户名"></Input>
          </FormItem>
          <!--<FormItem label="密码" prop="name">-->
          <!--<Input style="width:150px" v-model="formValidate.name" placeholder="Enter your name"></Input>-->
          <!--<a>修改</a>-->
          <!--</FormItem>-->
        </Form>
        </Col>
      </Row>
    </Modal>
    <alterPas ref="pas" title1="修改密码" :phone="formValidate.user_mobile"></alterPas>
  </div>
</template>
<script type="text/ecmascript-6">
  import yl from 'ylcookie'
  import alterPas from './public/alterPas'

  export default {
    components:{
      alterPas
    },
    data() {
      return {
        user:{},
        formValidate: {},
        ruleValidate: {
          user_nick: [
            {required: true, message: 'The name cannot be empty', trigger: 'blur'}
          ],
          user_mobile: [
            {required: true, message: 'The name cannot be empty', trigger: 'blur'}
          ],
        },
        defaultList: [],
        imgName: '',
        visible: false,
        uploadList: [],
        ctive: sessionStorage.getItem('meu'),
        modal6: false,
        loading: true
      }
    },
    methods: {
      //获取用户信息
      getUser(){
        let _this = this;
        _this.Axios.post('/partner/login/user').then(res=>{
          _this.formValidate=res.data.data
          _this.defaultList.push({
            name:'bc7521e033abdd1e92222d733590f104',
            url: res.data.data.user_headpic
          });
          console.log(_this.formValidate)
          setTimeout(()=>{
            _this.uploadList = _this.$refs.upload.fileList;
          },0)
        })
      },

      //修改用户信息
      asyncOK() {
        let _this = this;
        if(_this.formValidate.user_nick.length<2){
          _this.$Message.error('请输入2~12位昵称')
          _this.loading=false
        }else {
          _this.Axios.post('/partner/login/userupdata', _this.Qs.stringify({
            key: 'nick',
            value: _this.formValidate.user_nick
          })).then(res => {
            if (res.data.error === 0) {
              _this.$Message.success('修改成功');
              _this.loading=false
            }
            _this.modal6 = false;
          });
        }
      },

      //头像上传
      handleSuccess(res, file) {
        let _this = this;
        _this.Axios.post('/partner/login/userupdata', _this.Qs.stringify({
          key: 'pic',
          value: 'http://img.gsfzd.com/' + res
        })).then(resa => {
          if (resa.data.error === 0) {
            _this.$Message.success('修改成功')
            _this.formValidate.user_headpic='http://img.gsfzd.com/' + res;
          } else {
            _this.$Message.error(res.data.errMsg)
          }
        });
        file.url = 'http://img.gsfzd.com/' + res;
        file.name = '7eb99afb9d5f317c912f08b5212fd69a';
      },
      handleView(name) {
        this.imgName = name;
        this.visible = true;
      },
      handleRemove(file) {
        const fileList = this.$refs.upload.fileList;
        this.$refs.upload.fileList.splice(0, 1);
      },
      handleFormatError(file) {
        this.$Notice.warning({
          title: 'The file format is incorrect',
          desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
        });
      },
      handleMaxSize(file) {
        this.$Notice.warning({
          title: 'Exceeding file size limit',
          desc: 'File  ' + file.name + ' is too large, no more than 2M.'
        });
      },
      handleBeforeUpload() {
        this.handleRemove();
        const check = this.uploadList.length < 1;
        if (!check) {
          this.$Notice.warning({
            title: 'Up to five pictures can be uploaded.'
          });
        }
        return check;
      },

      //个人中心
      tate(name) {
        let _this = this;
        switch (name) {
          case '1':
            _this.modal6 = true;
            break;
          case '2':
            _this.$refs.pas.modal1=true;
            break;
          case '3':
            let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
            if (keys) {
              for (let i = keys.length; i--;)
                document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
            }
            _this.$Message.success('退出登录成功')
            _this.$router.push('/')
            break
        }
      },

      //页面跳转
      sect(i) {
        let v = this;
        switch (i) {
          case '1-1':
            sessionStorage.setItem('meu', i);
            v.$router.push('/deve/houses');
            break;
          case '1-2':
            sessionStorage.setItem('meu', i);
            v.$router.push('/deve/appoin');
            break;
          case '1-3':
            sessionStorage.setItem('meu', i);
            v.$router.push('/deve/order');
            break;
          case '1-4':
            sessionStorage.setItem('meu', i);
            v.$router.push('/deve/collect');
            break;

          case '2-1':
            sessionStorage.setItem('meu', i);
            v.$router.push('/partner/disk');
            break;
          case '2-2':
            sessionStorage.setItem('meu', i);
            v.$router.push('/partner/look');
            break;
          case '2-3':
            sessionStorage.setItem('meu', i);
            v.$router.push('/partner/place');
            break;

          case '3-1':
            sessionStorage.setItem('meu', i);
            v.$router.push('/broker/houses');
            break;
          case '3-2':
            sessionStorage.setItem('meu', i);
            v.$router.push('/broker/appoin');
            break;
          case '3-3':
            sessionStorage.setItem('meu', i);
            v.$router.push('/broker/collect');
            break;

          case '4-1':
            sessionStorage.setItem('meu', i);
            v.$router.push('/report/disk');
            break;
          case '4-2':
            sessionStorage.setItem('meu', i);
            v.$router.push('/report/look');
            break;
        }
      },
    },
    mounted() {
      this.getUser();
      this.uploadList = this.$refs.upload.fileList;
    }
  }
</script>
<style>
  .ivu-avatar>img{
    height: auto ;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .demo-upload-list {
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    margin-right: 4px;
  }

  .demo-upload-list img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
  }

  .demo-upload-list-cover {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .6);
  }

  .demo-upload-list:hover .demo-upload-list-cover {
    display: block;
  }

  .demo-upload-list-cover i {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }

  .ivu-input[disabled], fieldset[disabled] .ivu-input {
    color: #777;
  }
</style>
