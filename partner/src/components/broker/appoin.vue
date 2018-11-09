<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>经纪人/中介</BreadcrumbItem>
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
            width:80,
            align:'center',
            key: 'book_id'
          },
          {
            title: '预约人',
            key: 'book_nick'
          },
          {
            title: '电话',
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
        this.appionList(i)
      },

      //中介预约列表
      appionList(){
        let v = this;
        v.spinShow=!v.spinShow
        v.Axios.post('/partner/agent/appointment',v.Qs.stringify({
          num:11,
          page:1
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
      this.appionList()

    }
  }
</script>

<style lang="less">

</style>
