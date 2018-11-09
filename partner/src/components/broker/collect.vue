<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>经纪人/中介</BreadcrumbItem>
      <BreadcrumbItem>收藏管理</BreadcrumbItem>
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
            align:'center',
            width: 80,
            key: 'collect_id'
          },
          {
            title: '用户姓名',
            align:'center',
            key: 'user_nick'
          },
          {
            title: '用户手机号',
            align:'center',
            key: 'user_mobile'
          },
          {
            title: '楼盘名称',
            key: 'collect_names'
          },
          {
            title: '均价(元/m²)',
            align:'center',
            key: 'collect_pirce'
          },
        ],
        data1: []
      }
    },
    methods: {
      //切换页码
      cut(i){
        this.collectList(i)
      },

      //中介收藏管理
      collectList(i){
        let v = this;
        v.spinShow=!v.spinShow
        v.Axios.post('/partner/agent/collect',v.Qs.stringify({
          num: 11,
          page: i
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
      this.collectList(1)
    }
  }
</script>

<style lang="less">

</style>
