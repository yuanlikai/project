<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }

  .layout-footer-center {
    text-align: center;
  }

</style>
<template>
  <div class="layout">

    <Layout style=";">
      <Header :style="{position: 'fixed', width: '100%',zIndex:'2'}">
        <Menu mode="horizontal" theme="dark" active-name="1" >
          <div class="layout-logo"></div>
          <div class="layout-nav" style="float: right;width: auto;">
            <MenuItem to="/dex" name="1">
              <Icon type="md-home"/>
              首页
            </MenuItem>
            <Submenu name="2">
              <template slot="title">
                <Icon type="md-analytics"></Icon>
                数据选址
              </template>
              <MenuItem to="city" name="2-1">城市热力图</MenuItem>
              <MenuItem to="order" name="2-2">订单热力图</MenuItem>
              <MenuItem to="merchant" name="2-3">商家热力图</MenuItem>
            </Submenu>

            <MenuItem to="oneKey" name="3">
              <Icon type="md-compass"/>
              一键选址
            </MenuItem>
            <!--<Submenu name="4">-->
            <!--<template slot="title">-->
            <!--<Icon type="logo-octocat"/>袁理开-->
            <!--</template>-->
            <!--<MenuItem name="4-1">退出登录</MenuItem>-->
            <!--</Submenu>-->
            <MenuItem name="4">
              <Icon type="logo-octocat"/>
              登录
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content class="content-c">
        <router-view></router-view>
      </Content>
    </Layout>


  </div>

</template>

<script type="text/ecmascript-6">

  export default {
    name: 'home',
    data() {
      return {
      }
    },
    methods: {

    },
    mounted() {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less">

  /*.top,.bottom{*/
  /*text-align: center;*/
  /*}*/
  /*.center-left{*/
  /*float: left;*/
  /*}*/
  /*.center-right{*/
  /*float: right;*/
  /*}*/
  /*.center-left{*/
  /*float: left;*/
  /*}*/
  .xuanf {
    position: fixed;
    right: 20px;
    bottom: 200px;
  }

  .ivu-dropdown-menu {
    min-width: 100px;
    max-height: 300px;
    overflow-y: auto;
  }

  .site-btn {
    float: left;
    margin: 0 8px 8px 0;
  }

  .tangram-suggestion-main {
    z-index: 4;

    .ivu-radio {
      display: inline-block;
      margin-right: 4px;
      white-space: nowrap;
      position: relative;
      line-height: normal;
      vertical-align: middle;
      cursor: pointer;
    }
  }

  .search-tj {
    background: #000000;
    opacity: .9;
    position: fixed;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    -ms-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;
    width: 417px;
    top: 180px;
    font-size: 14px;
    left: 20px;
    padding: 18px 17px;
    border-radius: 4px;
    border: 1px solid #5cadff;
  }


  .tangram-suggestion-grey {
    display: none;
  }

  .map-srarch {

    float: right;
    margin-left: -5px;
    height: 35.73px;
    width: 239px;
    overflow: hidden;
  }

  #r-result {
    float: left;
    height: 35.73px;
    width: 239px;

    input {
      float: left;
      font-size: 14px;
      width: 239px;
      padding-left: 10px;
      height: 35.73px;
    }
  }

  #container {
    float: left;
    width: 100%;
    min-width: 1200px;
    margin-top: 80px;
    height: calc(100% - 80px);
  }

  .content-c .ivu-btn-icon-only.ivu-btn-large {
    padding: 5px 15px 6px;
    font-size: 14px;
    border-radius: 4px;
  }

  .content-c .ivu-select-selection {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  .content-c .ivu-btn-icon-only.ivu-btn-large {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }

  .content-c .ivu-input {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
  }

  .content-search {
    position: fixed;
    opacity: .9;
    z-index: 3;
    background: #000000;
    padding: 18px 17px;
    top: 90px;
    left: 20px;
    height: 76px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    border: 1px solid rgba(92, 173, 255, 1);
  }

  .detailBtn {
    position: fixed;
    top: 90px;
    padding-left: 25px;
    padding-right: 25px;
    right: 30px;
  }

  #content-data {
    position: fixed;
    opacity: .9;
    width: 385px;
    /*min-width: 800px;*/
    padding: 15px;
    font-size: 14px;
    box-shadow: 0 0 10px #999;
    top: 130px;
    color: #ffffff;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    height: 325px;
    background: #000000;
    right: 30px;
    border: 1px solid rgba(92, 173, 255, 1);
  }

  .content-map {
    float: left;
    height: calc(100vh + 20px);
    margin-top: -84px;
    width: 100%;
    min-width: 1200px;
  }

  .content-c {
    background: #fff;
    height: calc(100vh - 2px);
    padding-top: 64px;
  }

  .build-item {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: space-around;
    -ms-flex-align: center;
    align-items: center;
    width: 168px;
    height: 58px;
    margin-bottom: 13px;
    border: 1px solid rgba(92, 173, 255, .4);
    cursor: pointer;
  }

  .data-list-text {
    color: rgba(92, 173, 255, 1);
    font-size: 14px;
  }

  .build-item-li {
    -webkit-transition: all .25s;
    -moz-transition: all .25s;
    -ms-transition: all .25s;
    -o-transition: all .25s;
    transition: all .25s;
  }

  .build-item-li:hover {
    -webkit-box-shadow: 0 0 8px rgba(92, 173, 255, .8);
    -moz-box-shadow: 0 0 8px rgba(92, 173, 255, .8);
    box-shadow: 0 0 8px rgba(92, 173, 255, .8);
  }

  .building-type {
    width: 132px;
    text-align: center;
    height: 30px;
    font-size: 14px;
    color: #a7a7a7;
    line-height: 30px;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAADCAYAAAB/L0o4AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAADJJREFUOI1jjFn7n2EAwIBYSgXASG0DFwcRsDBm7f+hGlgjArAw0CBVEAGGaqKgew4CAMCnCQFbTpakAAAAAElFTkSuQmCC") bottom no-repeat;
  }

  .building-count {
    font-size: 16px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    color: rgba(92, 173, 255, 1);
  }

  .build-item img {
    margin-left: 10px;
  }
</style>
