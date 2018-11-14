<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>报备</BreadcrumbItem>
      <BreadcrumbItem>带看报备</BreadcrumbItem>
    </Breadcrumb>
    <Card>
      <div style="height: 570px">
        <Row style="margin-bottom:16px">
          <Col span="12">
          <Button to="addReport" type="primary" icon="md-add">
            添加带看报备
          </Button>
          </Col>
        </Row>
        <Table :columns="columns1" :data="data1"></Table>
        <Spin size="large" fix v-if="spinShow"></Spin>
      </div>

      <!--分页-->
      <PagIng :page="total" @cut="cut"/>

      <!--删除弹窗-->
      <alertDel ref="del" :delContent="delContent" @List="lookList" @delA="del" />

    </Card>
  </Content>
</template>

<script type="text/ecmascript-6">
  import PagIng from '../public/paging'
  import alertDel from '../public/aletDel'

  export default {
    components: {
      PagIng,
      alertDel
    },
    data() {
      return {
        delContent:{ //删除
          url:'/partner/agent/putDel',
          id:''
        },
        spinShow: false,
        total: 1,
        columns1: [
          {
            title: 'id',
            align: 'center',
            width: 80,
            key: 'put_id'
          },
          {
            title: '楼盘名称',
            align: 'center',
            key: 'hou_name'
          },
          {
            title: '报备时间',
            align: 'center',
            key: 'addtime'
          },
          {
            title: '报备手机号',
            align: 'center',
            key: 'user_mobile'
          },
          {
            title: '公司/分行',
            align: 'center',
            render: (h, params) => {
              return h('p', `${params.row.put_firm} / ${params.row.put_branch}`)
            }
          },
          {
            title: '对接人/手机',
            align: 'center',
            key: 'put_mobile/put_butt',
            render: (h, params) => {
              return h('p', `${params.row.put_mobile} / ${params.row.put_butt}`)
            }
          },
          {
            title: '客户/手机号',
            align: 'center',
            key: 'username/usermobile',
            render: (h, params) => {
              return h('p', `${params.row.username} / ${params.row.usermobile}`)
            }
          },
          {
            title: '看房人数/时间',
            align: 'center',
            key: 'put_num/put_seetime',
            render: (h, params) => {
              return h('p', `${params.row.put_num} / ${params.row.put_seetime}`)
            }
          },
          {
            title: '操作',
            align: 'center',
            width: 80,
            key: 'address',
            render: (h, params) => {
              return h('p', {
                style: {
                  color: '#B81314',
                  cursor: 'pointer'
                },
                on: {
                  click: (i) => {
                    this.delContent.id=params.row.put_id;
                    this.$refs.del.modal2 = true
                  }
                }
              }, '删除')
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
      cut(i) {
        this.lookList(i)
      },

      //带看报备列表
      lookList(i) {
        let v = this;
        v.spinShow = !v.spinShow;
        v.Axios.post('/partner/agent/myreport', v.Qs.stringify({
          type: 1,
          num: 10,
          page: i
        })).then(res => {
          if (res.data.error === 0) {
            v.total = res.data.data.nodes;
            v.data1 = res.data.data.info
          } else {
            v.$Message.error(res.data.errMsg)
          }
          v.spinShow = !v.spinShow
        })
      }
    },
    mounted() {
      this.lookList(1)
    }
  }
</script>

<style scoped lang="less">

</style>
