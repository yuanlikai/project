<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>开发商</BreadcrumbItem>
      <BreadcrumbItem>订单管理</BreadcrumbItem>
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
            key: 'order_id'
          },
          {
            title: '用户姓名',
            key: 'user_name'
          },
          {
            title: '用户手机',
            key: 'user_mobile'
          },
          {
            title: '楼盘名称',
            key: 'hou_ses_name'
          },
          {
            title: '订单号',
            key: 'order'
          },
          {
            title: '支付时间',
            key: 'addtime',
            render:(h,params)=>{
              return h('p',this.getLocalTime(params.row.addtime))
            }
          },
          {
            title: '支付方式',
            key: 'order_status',
            render:(h,params)=>{
              let sta;
              switch (params.row.order_status){
                case 0:
                  sta='待支付';
                  break;
                case 1:
                  sta='已支付';
                  break
              }
              return h('p',{
                style:{
                  color:params.row.order_status===0?'#F16646':'#3590F1'
                }
              },sta)
            }
          },
          {
            title: '支付状态',
            key: 'order_pay',
            render:(h,params)=>{
              let sta;
              switch (params.row.order_pay){
                case 0:
                  sta='支付宝';
                  break;
                case 1:
                  sta='微信';
                  break;
                case 2:
                  sta='银联';
                  break
              }
              return h('p',sta)
            }
          },
        ],
        data1: []
      }
    },
    methods: {
      //切换页码
      cut(i){
        this.orderList(i)
      },

      //订单列表
      orderList(i){
        let v = this;
        v.spinShow=!v.spinShow;
        v.Axios.post('/index.php/partner/hou/order',v.Qs.stringify({
          num:11,
          page:i
        })).then(res=>{
          if (res.data.error === 0) {
            v.total=res.data.data.nodes;
            v.data1 = res.data.data.info
          } else {
            v.$Message.error(res.data.errMsg)
          }
          v.spinShow=!v.spinShow
        });
      }
    },
    mounted(){
      this.orderList(1);
    }
  }
</script>

<style scoped lang="less">

</style>
