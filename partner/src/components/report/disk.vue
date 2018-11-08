<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>报备</BreadcrumbItem>
      <BreadcrumbItem>踩盘报备</BreadcrumbItem>
    </Breadcrumb>
    <Card>
      <div style="height: 570px">
        <Table :columns="columns1" :data="data1"></Table>
        <Spin size="large" fix v-if="spinShow"></Spin>
      </div>

      <!--分页-->
      <PagIng :page="total" @cut="cut"/>
    </Card>
  </Content>
</template>

<script type="text/ecmascript-6">
  import PagIng from '../public/paging'

  export default {
    components: {
      PagIng
    },
    data() {
      return {
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
            key: 'put_seetime'
          },
          {
            title: '报备手机号',
            align: 'center',
            key: 'user_mobile'
          },
          {
            title: '公司',
            align: 'center',
            key: 'put_firm'
          },
          {
            title: '踩盘时间',
            align: 'center',
            key: 'put_seetime'
          },
          {
            title: '踩盘人数',
            align: 'center',
            width: 100,
            key: 'put_num'
          },
          {
            title: '对接人/手机号',
            align: 'center',
            render: (h, params) => {
              return h('p', `${params.row.put_butt} / ${params.row.put_mobile}`)
            }
          },
          {
            title: '来往方式',
            align: 'center',
            key: 'put_status',
            render: (h, params) => {
              let sta;
              params.row.put_status === 0 ? sta = '自驾' : sta = '班车';
              return h('p', sta)
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
                }
              }, '删除')
            }
          },
        ],
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          }
        ]
      }
    },
    methods: {
      //切换页码
      cut(i) {
        this.diskList(i)
      },

      //踩盘报备列表
      diskList(i) {
        let v = this;
        v.spinShow = !v.spinShow;
        v.Axios.post('/partner/agent/myreport', v.Qs.stringify({
          type: 0,
          num: 11,
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
      this.diskList(1)
    }
  }
</script>

<style scoped lang="less">

</style>
