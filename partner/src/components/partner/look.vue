<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>报备</BreadcrumbItem>
      <BreadcrumbItem>带看报备</BreadcrumbItem>
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
            key: 'put_id'
          },
          {
            title: '楼盘名称',
            align:'center',
            key: 'hou_name'
          },
          {
            title: '报备时间',
            align:'center',
            key: 'addtime'
          },
          {
            title: '报备手机号',
            align:'center',
            key: 'user_mobile'
          },
          {
            title: '公司/分行',
            align:'center',
            render: (h, params) => {
              return h('p', `${params.row.put_firm} / ${params.row.put_branch}`)
            }
          },
          {
            title: '对接人/手机',
            align:'center',
            key: 'put_mobile/put_butt',
            render: (h, params) => {
              return h('p', `${params.row.put_mobile} / ${params.row.put_butt}`)
            }
          },
          {
            title: '客户/手机号',
            align:'center',
            key: 'username/usermobile',
            render: (h, params) => {
              return h('p', `${params.row.username} / ${params.row.usermobile}`)
            }
          },
          {
            title: '看房人数/时间',
            align:'center',
            key: 'put_num/put_seetime',
            render: (h, params) => {
              return h('p', `${params.row.put_num} / ${params.row.put_seetime}`)
            }
          }
        ],
        data1: []
      }
    },
    methods: {
      //切换页码
      cut(i){
        this.lookList(i)
      },

      //带看报备列表
      lookList(i) {
        let v = this;
        v.spinShow=!v.spinShow
        v.Axios.post('/partner/par/put', v.Qs.stringify({
          type: 1,
          num: 11,
          page: i
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
      this.lookList(1)
    }
  }
</script>

<style scoped lang="less">

</style>
