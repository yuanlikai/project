<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>经纪人/中介</BreadcrumbItem>
      <BreadcrumbItem>收藏管理</BreadcrumbItem>
    </Breadcrumb>
    <Card>
      <div style="height: 600px">
        <Table :columns="columns1" :data="data1"></Table>
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
            key: 'name'
          },
          {
            title: '用户姓名',
            key: 'address'
          },
          {
            title: '楼盘名称',
            key: 'address'
          },
          {
            title: '用户手机号',
            key: 'address'
          },
          {
            title: '装修标准',
            key: 'address'
          },
          {
            title: '均价',
            key: 'address'
          },
          {
            title: '类型',
            key: 'address'
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
    methods: {}
  }
</script>

<style lang="less">

</style>
