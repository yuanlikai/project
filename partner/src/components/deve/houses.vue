<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>开发商</BreadcrumbItem>
      <BreadcrumbItem>楼盘管理</BreadcrumbItem>
    </Breadcrumb>
    <Card>
      <div style="height: 600px">
        <Row style="margin-bottom:16px">
          <Col span="12">
          <Button type="primary" icon="md-add">
            添加楼盘
          </Button>
          </Col>
          <Col span="12">
            <Input style="width: 300px;float: right;" search enter-button placeholder="Enter something..." />
          </Col>
        </Row>
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
            title: '楼盘名称',
            key: 'address'
          },
          {
            title: '楼盘地址',
            key: 'address'
          },
          {
            title: '均价',
            key: 'address'
          },
          {
            title: '装修',
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
    methods: {

    },
    mounted(){
    }
  }
</script>

<style lang="less">

</style>
