<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>报备</BreadcrumbItem>
      <BreadcrumbItem>带看报备</BreadcrumbItem>
      <BreadcrumbItem>添加报备 </BreadcrumbItem>
    </Breadcrumb>
    <Card>
      <div style="height: 570px">

        <Row>
          <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <Col span="8">
            <FormItem label="楼盘名称" prop="name">
              <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
            </FormItem>

            <FormItem label="客户姓名" prop="name">
              <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
            </FormItem>
            <FormItem label="客户号码" prop="name">
              <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
            </FormItem>
            <FormItem label="看房时间" prop="name">
              <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
            </FormItem>
            <FormItem label="看房人数" prop="name">
              <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
            </FormItem>
            <FormItem>
              <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
              <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
            </FormItem>
          </Col>
          <Col span="8">
            <FormItem label="公司" prop="name">
              <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
            </FormItem>
            <FormItem label="分行" prop="name">
              <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
            </FormItem>
            <FormItem label="市场对接人" prop="name">
              <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
            </FormItem>
            <FormItem label="对接人号码" prop="name">
              <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
            </FormItem>
            <FormItem label="报备人号码" prop="name">
              <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
            </FormItem>
          </Col>
          </Form>
        </Row>
      </div>
    </Card>
  </Content>
</template>
<script>
  export default {
    data () {
      return {
        formValidate: {
          name: '',
          mail: '',
          city: '',
          gender: '',
          interest: [],
          date: '',
          time: '',
          desc: ''
        },
        ruleValidate: {
          name: [
            { required: true, message: 'The name cannot be empty', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
            { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
          ],
          city: [
            { required: true, message: 'Please select the city', trigger: 'change' }
          ],
          gender: [
            { required: true, message: 'Please select gender', trigger: 'change' }
          ],
          interest: [
            { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
            { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
          ],
          date: [
            { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
          ],
          time: [
            { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
            { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>
