<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>开发商</BreadcrumbItem>
      <BreadcrumbItem>收藏管理</BreadcrumbItem>
    </Breadcrumb>
    <Card>
      <div style="height: 570px">
        <Table :columns="columns1" :data="data1"></Table>
      </div>
      <div class="page-list">
        <Page :total="100" />
      </div>
    </Card>
  </Content>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        columns1: [
          {
            title: 'id',
            key: 'collect_id'
          },
          {
            title: '用户姓名',
            key: 'user_nick'
          },
          {
            title: '用户手机',
            key: 'user_mobile'
          },
          {
            title: '楼盘名称',
            key: 'collect_names'
          },
          {
            title: '均价(元/m²)',
            key: 'collect_pirce'
          },
        ],
        data1: []
      }
    },
    methods: {

      //收藏列表
      collectList(){
        let v = this;
        v.Axios.post('/index.php/partner/agent/collect',v.Qs.stringify({
          num:10,
          page:1
        })).then(res=>{
          if (res.data.error === 0) {
            this.data1 = res.data.data.info
          } else {
            v.$Message.error(res.data.errMsg)
          }
        })
      }
    },
    mounted(){
      this.collectList();
    }
  }
</script>

<style lang="less">

</style>
