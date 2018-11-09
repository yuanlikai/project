<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>开发商</BreadcrumbItem>
      <BreadcrumbItem>预约管理</BreadcrumbItem>
    </Breadcrumb>
    <Card>
      <div style="height: 570px">
        <Table :columns="columns1" :data="data1"></Table>
        <Spin size="large" fix v-if="spinShow"></Spin>
      </div>
      <!--分页-->
      <PagIng :page="total" @cut="cut" />
    </Card>
  </Content>
</template>

<script type="text/ecmascript-6">
  import PagIng from '../public/paging'
  export default {
    components:{
      PagIng
    },
    data() {
      return {
        spinShow:false,
        total:1,
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
      //切换页码
      cut(i){
        this.appoinList(i)
      },

      appoinList(i){
        let v = this;
        v.spinShow=!v.spinShow
        v.Axios.post('/index.php/partner/agent/appointment',v.Qs.stringify({
          num:11,
          page:i,
        })).then(res=>{
          if (res.data.error === 0) {
            v.total=res.data.data.nodes;
            v.data1 = res.data.data.info
          } else {
            v.$Message.error(res.data.errMsg)
          }
          v.spinShow=!v.spinShow
        })
      }
    },
    mounted(){
      this.appoinList(1);
    }
  }
</script>

<style lang="less">

</style>
