<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>开发商</BreadcrumbItem>
      <BreadcrumbItem>预约管理</BreadcrumbItem>
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
            key: 'book_id'
          },
          {
            title: '用户姓名',
            key: 'book_nick'
          },
          {
            title: '用户电话',
            key: 'book_mobile'
          },
          {
            title: '楼盘名称',
            key: 'book_name'
          },
          {
            title: '负责人电话',
            key: 'mobile'
          },
          {
            title: '添加时间',
            align:'center',
            key: 'addtime',
            render:(h,params)=>{
              return h('p',this.getLocalTime(params.row.addtime))
            }
          },
        ],
        data1: []
      }
    },
    methods: {
      appoinList(){
        let v = this;
        v.Axios.post('/index.php/partner/agent/appointment',v.Qs.stringify({
          num:11,
          page:1,
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
      this.appoinList();
    }
  }
</script>

<style lang="less">

</style>
