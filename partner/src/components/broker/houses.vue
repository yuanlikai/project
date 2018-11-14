<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>经纪人/中介</BreadcrumbItem>
      <BreadcrumbItem>楼盘管理</BreadcrumbItem>
    </Breadcrumb>
    <Card>
      <div style="height: 570px">
        <Row style="margin-bottom:16px">
          <Col span="12">
          <Button type="primary" icon="md-add">
            添加楼盘
          </Button>
          </Col>
          <Col span="12">
          <Input style="width: 300px;float: right;" search enter-button placeholder="Enter something..."/>
          </Col>
        </Row>
        <Table :columns="columns1" :data="data1"></Table>
        <Spin size="large" fix v-if="spinShow"></Spin>
      </div>
      <!--分页-->
      <PagIng :page="total" @cut="cut" />

      <!--删除弹窗-->
      <alertDel ref="del" :delContent="delContent" @List="housesList" @delA="del" />
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
          url:'/partner/agent/housesdel',
          id:''
        },
        spinShow:false,
        total:1,
        columns1: [
          {
            title: 'id',
            align:'center',
            key: 'agent_id'
          },
          {
            title: '楼盘名称',
            key: 'agent_names'
          },
          {
            title: '楼盘地址',
            key: 'agent_address'
          },
          {
            title: '均价(元/m²)',
            align:'center',
            key: 'agent_pirce'
          },
          {
            title: '操作',
            align:'center',
            key: 'address',
            render:(h,params)=>{
              return h('div',{
                style:{
                  cursor:'pointer'
                }
              },[
                // h('span',{
                //   style:{
                //     color:'#37C57B',
                //     marginRight:'10px',
                //   }
                // },'优惠'),
                h('span',{
                  style:{
                    color:'#3590F1',
                    marginRight:'10px',
                  }
                },'详情'),
                h('span',{
                  style:{
                    color:'#FFAD36',
                    marginRight:'10px',
                  }
                },'户型'),
                h('span',{
                  style:{
                    color:'#F16646',
                  },
                  on: {
                    click: (i) => {
                      this.delContent.id=params.row.agent_id;
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
        this.housesList(i)
      },

      //中介楼盘列表
      housesList(i){
        let v = this;
        v.spinShow=!v.spinShow
        v.Axios.post('/partner/agent/houses',v.Qs.stringify({
          num:10,
          page:i
        })).then(res=>{
          console.log(res.data)
          if (res.data.error === 0) {
            console.log(1)
            v.total=res.data.data.nodes;
            v.data1 = res.data.data.info
          } else {
            v.$Message.error(res.data.errMsg)
          }
          v.spinShow=!v.spinShow
        })
      }
    },
    mounted() {
      this.housesList(1)
    }
  }
</script>

<style lang="less">

</style>
