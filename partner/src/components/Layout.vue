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
        <Submenu name="2">
          <template slot="title">
            合作伙伴
          </template>
          <MenuItem name="2-1">踩盘报备</MenuItem>
          <MenuItem name="2-2">带看报备</MenuItem>
          <MenuItem name="2-3">管理分销</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            经纪人/中介
          </template>
          <MenuItem name="3-1">楼盘管理</MenuItem>
          <MenuItem name="3-2">预约管理</MenuItem>
          <MenuItem name="3-3">收藏管理</MenuItem>
        </Submenu>
        <Submenu name="4">
          <template slot="title">
            报备
          </template>
          <MenuItem name="4-1">踩盘报备</MenuItem>
          <MenuItem name="4-2">带看报备</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px'}">
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">

      </Header>
      <router-view></router-view>
    </Layout>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ctive: sessionStorage.getItem('meu')?sessionStorage.getItem('meu'):'2-1'
      }
    },
    methods: {
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
      }
    },
    mounted() {

    }
  }
</script>
