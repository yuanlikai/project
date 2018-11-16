<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>经纪人/中介</BreadcrumbItem>
      <BreadcrumbItem>房源管理</BreadcrumbItem>
    </Breadcrumb>
    <Card>
      <div style="height: 570px">
        <Row style="margin-bottom:16px">
          <Col span="12">
          <Button to="addHouses" type="primary" icon="md-add">
            添加房源
          </Button>
          </Col>
          <Col span="12">
          <!--<Input style="width: 300px;float: right;" search enter-button placeholder="Enter something..."/>-->
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
          url:'/partner/agent/del',
          id:''
        },
        spinShow:false,
        total:1,
        columns1: [
          {
            title: 'id',
            width:80,
            align:'center',
            key: 'user_post_id'
          },
          {
            title: '楼盘名称',
            key: 'user_post_title'
          },
          {
            title: '楼盘地址',//areaName
            key: 'user_address',
            render:(h,params)=>{
              return h('p',`${params.row.areaName}${params.row.user_address}`)
            }
          },
          {
            title: '总价（万）',
            align:'center',
            key: 'user_post_pirce'
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
                  },
                  on:{
                    click:()=>{
                      this.$router.push({
                        name:'addHouses',
                        query:{
                          id:params.row.user_post_id
                        }
                      })
                    }
                  }
                },'详情'),
                // h('span',{
                //   style:{
                //     color:'#FFAD36',
                //     marginRight:'10px',
                //   }
                // },'户型'),
                h('span',{
                  style:{
                    color:'#F16646',
                  },
                  on: {
                    click: (i) => {
                      this.delContent.id=params.row.user_post_id;
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
        v.spinShow=!v.spinShow;
        v.Axios.post('/index.php/partner/agent/zhong',v.Qs.stringify({
          num:10,
          page:i
        })).then(res=>{
          if (res.data.error === 0) {
            console.log(res)
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
