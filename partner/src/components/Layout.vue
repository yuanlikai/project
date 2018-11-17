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
        <!--<Submenu name="2">-->6387
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
              <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
              <Icon type="md-arrow-dropdown" color="#515a6e" size="18" />
            </a>
            <DropdownMenu slot="list" style="text-align: left">
              <DropdownItem name="1">个人资料</DropdownItem>
              <DropdownItem name="2">退出登录</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          </Col>
        </Row>
      </Header>
      <router-view></router-view>
    </Layout>
  </div>
</template>
<script type="text/ecmascript-6">
  import yl from 'ylcookie'
  export default {
    data() {
      return {
        ctive: sessionStorage.getItem('meu')
      }
    },
    methods: {
      tate(name){
        console.log(name)
        let _this=this;
        switch (name){
          case '1':
            break;
          case '2':
            let keys=document.cookie.match(/[^ =;]+(?=\=)/g);
            if (keys) {
              for (let i =  keys.length; i--;)
                document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString()
            }
            _this.$Message.success('退出登录成功')
            _this.$router.push('/')
            break
        }
      },
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
    }
  }
</script>
