<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>合作伙伴</BreadcrumbItem>
      <BreadcrumbItem>管理分销</BreadcrumbItem>
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
            title: '分销名',
            key: 'address'
          },
          {
            title: '联系人',
            key: 'address'
          },
          {
            title: '带看量（月）',
            key: 'address'
          },
          {
            title: '踩盘数（月）',
            key: 'address'
          },
          {
            title: '操作',
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
