<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>开发商</BreadcrumbItem>
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
            key: 'hou_id',
          },
          {
            title: '楼盘名称',
            key: 'hou_names'
          },
          {
            title: '楼盘地址',
            key: 'hou_address'
          },
          {
            title: '均价(元/m²)',
            align:'center',
            key: 'hou_pirce'
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
                h('span',{
                  style:{
                    color:'#37C57B',
                    marginRight:'10px',
                  }
                },'优惠'),
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
      //切换页码
      cut(i){
        this.housesList(i)
      },

      //楼盘列表
      housesList(i) {
        let v = this;
        v.spinShow=!v.spinShow
        v.Axios.post('/index.php/partner/hou/index', v.Qs.stringify({
          num: 10,
          page: i,
        })).then(res => {
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
    mounted() {
      this.housesList(1);
    }
  }
</script>

<style scoped lang="less">
</style>
