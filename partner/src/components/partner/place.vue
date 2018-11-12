<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>合作伙伴</BreadcrumbItem>
      <BreadcrumbItem>管理分销</BreadcrumbItem>
    </Breadcrumb>
    <Card>
      <div style="height: 570px">
        <Row style="margin-bottom:16px">
          <Col span="12">
          <Button type="primary" icon="md-add">
            添加分销
          </Button>
          </Col>
        </Row>
        <Table :columns="columns1" :data="data1"></Table>
        <Spin size="large" fix v-if="spinShow"></Spin>
      </div>

      <!--分页-->
      <PagIng :page="total" @cut="cut" />

      <!--删除弹窗-->
      <alertDel ref="del" :delContent="delContent" @List="placeList" @delA="del" />
    </Card>
  </Content>
</template>

<script type="text/ecmascript-6">
  import PagIng from '../public/paging'
  import alertDel from '../public/aletDel'
  export default {
    components:{
      PagIng,
      alertDel
    },
    data() {
      return {
        delContent:{ //删除
          url:'/partner/par/del',
          id:''
        },
        spinShow:false,
        total:1,
        columns1: [
          {
            title: 'id',
            align:'center',
            width:80,
            key: 'user_id'
          },
          {
            title: '分销名',
            key: 'user_name'
          },
          {
            title: '联系人',
            key: 'user_nick'
          },
          {
            title: '手机号',
            key: 'user_mobile'
          },
          {
            title: '带看量（月）',
            key: 'look'
          },
          {
            title: '踩盘数（月）',
            key: 'disk'
          },
          {
            title: '操作',
            width:120,
            align:'center',
            key: 'address',
            render:(h,params)=>{
              return h('div',{
                style:{
                  cursor:'pointer'
                }
              },[
                h('span',{
                  style:{
                    color:'#3590F1',
                    marginRight:'10px',
                  }
                },'修改'),
                h('span',{
                  style:{
                    color:'#F16646',
                  },
                  on: {
                    click: (i) => {
                      this.delContent.id=params.row.user_id;
                      this.$refs.del.modal2 = true
                    }
                  }
                },'删除')
              ])
            }
          },
        ],
        data1: []
      }
    },
    methods: {
      //删除
      del(q){
        this.total=q
      },

      //切换页码
      cut(i){
        this.placeList(i)
      },

      //管理分销列表
      placeList(i){
        let v = this;
        v.spinShow=!v.spinShow
        v.Axios.post('/partner/par/index',v.Qs.stringify({
          num:10,
          page:i
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
      this.placeList(1)
    }
  }
</script>

<style lang="less">

</style>
