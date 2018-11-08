<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>开发商</BreadcrumbItem>
      <BreadcrumbItem>订单管理</BreadcrumbItem>
    </Breadcrumb>
    <Card>
      <div style="height: 600px">
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

      //订单列表
      orderList(){
        let v = this;
        v.Axios.post('/index.php/partner/hou/order',v.Qs.stringify({
          num:11,
          page:1
        })).then(res=>{
          if (res.data.error === 0) {
            console.log(res.data)
            this.data1 = res.data.data.info
          } else {
            v.$Message.error(res.data.errMsg)
          }
        })

      }
    },
    mounted(){
      this.orderList();
    }
  }
</script>

<style lang="less">

</style>
