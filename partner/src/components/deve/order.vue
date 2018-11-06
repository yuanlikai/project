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
            title: '订单号',
            key: 'address'
          },
          {
            title: '支付时间',
            key: 'address'
          },
          {
            title: '支付方式',
            key: 'address'
          },
          {
            title: '支付状态',
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
