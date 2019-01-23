
<template>
  <div class="content content-abc" style="padding: 0 20px;height: 100%;"  @click="menucli('4')">

    <Row>
      <Col span="24" style="padding-top: 20px">
        <Cascader :clearable="false" :data="data" v-model="value1" style="width: 150px;float:left;margin-right: 5px"></Cascader>
        <Select v-model="model1"  style="width: 150px;float:left;margin-right: 5px">
          <Option value="全部" >平台</Option>
          <Option value="美团" >美团</Option>
          <Option value="饿了么" >饿了么</Option>
        </Select>
        <Select v-model="model2"  style="width: 150px;float:left;margin-right: 5px">
          <Option value="全部" >品类</Option>
          <Option value="快餐便当" >快餐便当</Option>
          <Option value="甜品" >甜品</Option>
        </Select>
      </Col>
    </Row>
    <Row style="margin: 20px 0">
      <Col span="8" style="text-align: center">
        <div style="float: left;margin-right: 20px">
          <Card style="width:320px">
            <div style="text-align:center">
              <Icon type="ios-analytics-outline" style="float: left;" size="70" color="#2b85e4"/>
              <h1 style="margin-bottom: 10px">
                <countTo :startVal='startVal1' :endVal='endVal1' :duration='3000' ></countTo>
              </h1>
              <p>全城商铺总数</p>
            </div>
          </Card>
        </div>
      </Col>

      <Col span="8" style="text-align: center">
        <div style="margin: 0 auto;width: 320px;">
          <Card style="width:320px">
            <div style="text-align:center">
              <Icon type="ios-analytics" style="float: left;" size="70" color="#2b85e4"/>
              <h1 style="margin-bottom: 10px">
                <countTo :startVal='startVal2' :endVal='endVal2' :duration='3000' ></countTo>
              </h1>
              <p>全城月销总数</p>
            </div>
          </Card>
        </div>
      </Col>
      <Col span="8" style="text-align: center">
        <div style="float: right;">
          <Card style="width:320px">
            <div style="text-align:center">
              <Icon type="md-analytics" style="float: left;" size="70" color="#2b85e4"/>
              <h1 style="margin-bottom: 10px">
                <countTo :startVal='startVal3' :endVal='endVal3' :duration='3000' ></countTo>
              </h1>
              <p>全城商铺平均月销</p>
            </div>
          </Card>
        </div>
      </Col>
    </Row>

    <Table :columns="columns1" :data="data1"></Table>
    <Modal v-model="modal3" width="250">
      <p slot="header" style="color:#2d8cf0;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>用户登录</span>
      </p>
      <div style="text-align:center">

        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
          <FormItem prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password" style="margin-bottom: 0">
            <Input type="password" v-model="formInline.password" placeholder="Password">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <p style="width: 100%;color: #999;margin-top: 12px">如没有账号，请联系运营人员注册。如有账号，请直接登</p>
          <!--<FormItem>-->
          <!--<Button type="primary" @click="handleSubmit('formInline')">Signin</Button>-->
          <!--</FormItem>-->
        </Form>
      </div>
      <div slot="footer">
        <Button type="primary" size="large" long :loading="modal_loading" @click="handleSubmit('formInline')">立即登录</Button>
      </div>
    </Modal>
  </div>

</template>

<script type="text/ecmascript-6">

  import countTo from 'vue-count-to';
  export default {
    components: { countTo },
    name: 'home',
    data() {
      return {
        modal3: false,
        modal_loading: false,
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            {required: true, message: 'Please fill in the user name', trigger: 'blur'}
          ],
          password: [
            {required: true, message: 'Please fill in the password.', trigger: 'blur'},
            {type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur'}
          ]
        },
        model1:'全部',
        model2:'全部',
        value1: ['beijing','gugong'],
        data: [{
          value: 'beijing',
          label: '北京',
          children: [
            {
              value: 'gugong',
              label: '故宫'
            },
            {
              value: 'tiantan',
              label: '天坛'
            },
            {
              value: 'wangfujing',
              label: '王府井'
            }
          ]
        }, {
          value: 'jiangsu',
          label: '江苏',
          children: [
            {
              value: 'nanjing',
              label: '南京',
              children: [
                {
                  value: 'fuzimiao',
                  label: '夫子庙',
                }
              ]
            },
            {
              value: 'suzhou',
              label: '苏州',
              children: [
                {
                  value: 'zhuozhengyuan',
                  label: '拙政园',
                },
                {
                  value: 'shizilin',
                  label: '狮子林',
                }
              ]
            }
          ],
        }],
        startVal1: 0,
        endVal1: 29278,
        startVal2: 0,
        endVal2: 12422,
        startVal3: 0,
        endVal3: 9999,
        columns1: [
          {
            title: '店铺',
            key: 'shop',
            align:'center'
          },
          {
            title: '品类',
            key: 'class',
            align:'center'
          },
          {
            title: '月销',
            key: 'onpin',
            align:'center'
          },
          {
            title: '平分',
            key: 'divide',
            align:'center'
          }
        ],
        data1: [
          {
            shop: '阿财烧腊店',
            class: '快餐便当',
            onpin: '12.4万家',
            divide: '9分'
          },
          {
            shop: '阿财烧腊店',
            class: '快餐便当',
            onpin: '12.4万家',
            divide: '9分'
          },
          {
            shop: '阿财烧腊店',
            class: '快餐便当',
            onpin: '12.4万家',
            divide: '9分'
          },
          {
            shop: '阿财烧腊店',
            class: '快餐便当',
            onpin: '12.4万家',
            divide: '9分'
          },
        ]

      }
    },
    methods: {
      menucli(e){
        let _this = this;
        switch (e) {
          case '4':
            _this.modal3=true;
            break
        }
      },
      del() {
        let _this = this;
        _this.modal_loading = true;
        setTimeout(() => {
          _this.modal_loading = false
        }, 1000)
      },
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      }
    },
    mounted() {
    }
  }
</script>
<style lang="less" scoped>
  .content-abc{
    background: url("https://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/51182f91cfa0fd0b3c8754d7ca23e877.png") no-repeat;
  }

</style>
