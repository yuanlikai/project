<template>
  <Layout :style="{padding: '0 16px 16px'}">
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>开发商</BreadcrumbItem>
      <template v-if="this.$route.query.hou_isadout==0">
        <BreadcrumbItem to="houses">楼盘管理</BreadcrumbItem>
        <BreadcrumbItem>楼盘名称：{{this.$route.query.hou_names}}</BreadcrumbItem>

      </template>
      <template v-if="this.$route.query.hou_isadout==1">
        <BreadcrumbItem to="deve_To">未审核楼盘</BreadcrumbItem>
        <BreadcrumbItem>楼盘名称：{{this.$route.query.hou_names}}</BreadcrumbItem>
      </template>
    </Breadcrumb>

    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">

      <Button @click="shoale()" type="primary" style="margin-bottom: 15px">
        <Icon type="md-add"></Icon>
        添加户型
      </Button>

      <Table :loading="loading2" :columns="columns1" :data="data1" height="568" border></Table>
    </Content>
    <div style="float: left;width: 100%;text-align: center;margin-top: 25px;">
      <Page :total="total" :page-size="11" @on-change="page"/>
    </div>

    <Modal
      v-model="modal1"
      title="请填写户型信息"
      :loading="loading1"
      @on-ok="handleSubmit('formValidate')"
      @on-cancel="cancel"
      :styles="{width: '420px'}">

      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <Row>

          <Col span="12">
          <FormItem label="户型名称" prop="hou_ses_name">
            <Input :maxlength="18" v-model="formValidate.hou_ses_name" placeholder="填写户型名"></Input>
          </FormItem>
          </Col>

          <Col span="12">
          <FormItem label="户型" prop="hou_size_id">
            <Select v-model="formValidate.hou_size_id" placeholder="请选择">
              <Option v-for="(item,index) in poist" :key="index" :value="String(item.hou_size_id)">
                {{item.hou_size_info}}
              </Option>
            </Select>
          </FormItem>
          </Col>

          <Col span="12">
          <FormItem label="面积(m²)" prop="hou_ses_area">
            <Input :maxlength="18" v-model="formValidate.hou_ses_area" placeholder="填写面积"></Input>
          </FormItem>
          </Col>

          <Col span="12">
          <FormItem label="单价(¥)" prop="hou_ses_price">
            <Input :maxlength="18" v-model="formValidate.hou_ses_price" placeholder="填写总价"></Input>
          </FormItem>
          </Col>

          <Col span="12">
          <FormItem label="特色" prop="hou_ses_feat">
            <Input :maxlength="18" v-model="formValidate.hou_ses_feat" placeholder="填写户型特色"></Input>
          </FormItem>
          </Col>

          <Col span="12">
          <FormItem label="朝向" prop="hou_ses_look">
            <Select v-model="formValidate.hou_ses_look" placeholder="请选择">
              <Option value="正南"></Option>
              <Option value="东南"></Option>
              <Option value="东"></Option>
              <Option value="西南"></Option>
              <Option value="北"></Option>
              <Option value="西"></Option>
            </Select>
          </FormItem>
          </Col>

          <Col span="24">
          <FormItem label="户型介绍" prop="hou_ses_content">
            <Input v-model="formValidate.hou_ses_content" type="textarea" placeholder="填写户型介绍..."/>
          </FormItem>
          </Col>

          <Col span="12">
          <FormItem label="联系电话" prop="hou_ses_tel">
            <Input :maxlength="18" v-model="formValidate.hou_ses_tel" placeholder="填写联系电话"></Input>
          </FormItem>
          </Col>

          <Col span="24">
          <FormItem label="户型图上传" prop="hou_ses_pic">
            <div class="demo-upload-list" v-for="item in uploadList">
              <template v-if="item.status === 'finished'">
                <img :src="item.url">
                <div class="demo-upload-list-cover">
                  <Icon type="ios-eye-outline" @click.native="handleView(item.url)">{{item.name}}</Icon>
                  <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                </div>
              </template>
              <template v-else>
                <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
              </template>
            </div>
            <Upload
              ref="upload"
              :show-upload-list="false"
              :default-file-list="defaultList"
              :on-success="handleSuccess"
              :format="['jpg','jpeg','png']"
              :max-size="2048"
              :on-format-error="handleFormatError"
              :on-exceeded-size="handleMaxSize"
              :before-upload="handleBeforeUpload"
              multiple
              type="drag"
              action="/publics/picture/imgouter"
              :data="{location:'hou_ses'}"
              style="display: inline-block;width:58px;">
              <div style="width: 58px;height:58px;line-height: 58px;">
                <Icon type="ios-camera" size="20"></Icon>
              </div>
            </Upload>
          </FormItem>
          </Col>

        </Row>
      </Form>
    </Modal>

    <Modal title="View Image" v-model="visible"
           :styles="{textAlign:'center'}">
      <img :src="imgName" v-if="visible" style="max-width: 100%">
    </Modal>

    <Modal title="View Image" v-model="modal2"
           :styles="{textAlign:'center'}">
      <img :src="imgSrc" style="max-width: 100%">
    </Modal>
  </Layout>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {

      const validatePassCheck = (rule, value, callback) => {
        if (this.uploadList.length !== 1) {
          callback(new Error('请选择1张图片'));
        } else {
          callback();
        }
      };
      return {
        defaultList: [],
        imgName: '',
        visible: false,
        uploadList: [],
        state: 0,
        modal2: false,
        imgSrc: '',
        hou_size_id: '',
        formValidate: {
          hou_names: '',
          hou_ses_content: '',
          hou_ses_pic: '',
          hou_ses_name: '',
          hou_size_id: '',
          hou_ses_area: '',
          hou_ses_price: '',
          hou_ses_feat: '',
          hou_ses_look: '',
          hou_ses_tel: '',
        },
        poist: [],
        ruleValidate: {
          hou_ses_name: [
            {required: true, message: '未填写户型名称', trigger: 'blur'}
          ],
          hou_size_id: [
            {required: true, message: '未选择户型', trigger: 'change'}
          ],
          hou_ses_area: [
            {required: true, message: '未填写面积', trigger: 'blur'}
          ],
          hou_ses_price: [
            {required: true, message: '未填写总价', trigger: 'blur'}
          ],
          hou_ses_feat: [
            {required: true, message: '未填写特色', trigger: 'blur'}
          ],
          hou_ses_look: [
            {required: true, message: '未选择朝向', trigger: 'change'}
          ],
          hou_ses_content: [
            {required: true, message: '未填写户型介绍', trigger: 'blur'}
          ],
          hou_ses_tel: [
            {required: true, message: '未填写联系电话', trigger: 'blur'}
          ],
          hou_ses_pic: [
            {required: true, validator: validatePassCheck, trigger: 'change'}
          ]
        },
        modal1: false,
        pag: 1,
        loading2: true,
        loading1: true,
        total: 0,
        columns1: [
          {
            title: 'ID',
            width: 80,
            align: 'center',
            key: 'hou_ses_id'
          },
          {
            title: '户型名称',
            key: 'hou_ses_name'
          },
          {
            title: '户型图',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('img', {
                  attrs: {
                    src: 'http://img.gsfzd.com/' + params.row.hou_ses_pic,
                  },
                  style: {
                    'width': '30px',
                    'cursor': 'pointer'
                  },
                  on: {
                    click: () => {
                      this.modal2 = true;
                      this.imgSrc = 'http://img.gsfzd.com/' + params.row.hou_ses_pic
                    }
                  }
                })
              ])
            }
          },
          {
            title: '面积',
            key: 'hou_ses_area',
            render: (h, params) => {
              return h('div', [
                h('p', params.row.hou_ses_area + 'm²')
              ])
            }
          },
          {
            title: '单价',
            key: 'hou_ses_price',
            render: (h, params) => {
              return h('div', [
                h('p', params.row.hou_ses_price + '元')
              ])
            }
          },
          {
            title: '朝向',
            key: 'hou_ses_look'
          },
          {
            title: '特色',
            key: 'hou_ses_feat'
          },
          {
            title: '咨询电话',
            key: 'hou_ses_tel'
          },
          {
            title: '规格',
            key: 'hou_size_info'
          },
          {
            title: '户型介绍',
            key: 'hou_ses_content'
          },
          {
            title: '操作',
            align: 'center',
            width: 100,
            render: (h, params) => {
              return h('div', [
                // h('Button', {
                //   props: {
                //     type: 'primary',
                //     size: 'small'
                //   },
                //   style: {
                //     marginRight: '5px'
                //   },
                //   on: {
                //     click: () => {
                //       let v = this;
                //       v.state = 1;
                //       v.modal1 = true;
                //       v.loading1 = true;
                //       v.hou_size_id = params.row.hou_size_id;
                //       v.formValidate.name = params.row.hou_size_info;
                //     }
                //   }
                // }, '修改'),
                h('Poptip', {
                  props: {
                    confirm: true,
                    transfer: true,
                    title: '是否继续删除该户型?',
                  },
                  on: {
                    'on-ok': () => {
                      let v = this;
                      v.loading2 = true;
                      v.Axios.post('/index.php/admin/hou/hxDel', v.Qs.stringify({
                        hou_ses_id: params.row.hou_ses_id
                      })).then((res, req) => {
                        if (res.data.error === 0) {
                          v.positList();
                        } else {
                          v.$Message.error(res.data.errMsg)
                        }
                      })
                    }
                  }
                }, [
                  h('Button', {
                    props: {
                      type: 'error',
                      size: 'small'
                    }
                  }, '删除')
                ])

              ]);
            }
          }
        ],
        data1: []
      }
    },
    methods: {

      //显示添加修改
      shoale() {
        this.$refs['formValidate'].resetFields();
        this.$refs.upload.fileList.splice(0, 1);
        this.state = 0;
        this.spec();
        this.modal1 = true;
        this.loading1 = true;
      },


      //添加楼盘户型
      handleSubmit(name) {
        console.log(this.uploadList[0])
        this.$refs[name].validate((valid) => {
          if (valid) {
            let v = this;
            v.Axios.post('/index.php/admin/hou/hxAdd', v.Qs.stringify({
              hou_ses_id: '',
              hou_id: v.$route.query.hou_id,
              hou_names: v.formValidate.hou_names,
              hou_ses_content: v.formValidate.hou_ses_content,
              hou_ses_pic: v.uploadList[0].response,
              hou_ses_name: v.formValidate.hou_ses_name,
              hou_size_id: v.formValidate.hou_size_id,
              hou_ses_area: v.formValidate.hou_ses_area,
              hou_ses_price: v.formValidate.hou_ses_price,
              hou_ses_feat: v.formValidate.hou_ses_feat,
              hou_ses_look: v.formValidate.hou_ses_look,
              hou_ses_tel: v.formValidate.hou_ses_tel,
            })).then((res, req) => {
              if (res.data.error === 0) {
                v.$Message.success('添加户型成功');
                v.modal1 = false;
                v.positList();
                v.$refs['formValidate'].resetFields();
              } else {
                v.$Message.error(res.data.errMsg);
                v.loading1 = false
              }
            });
          } else {
            this.$Message.error('添加管理员账号失败!');
            this.loading1 = false
          }
        })
      },

      //根据楼盘获取户型列表
      positList() {
        let v = this;
        v.loading2 = true;
        v.Axios.post('/index.php/admin/hou/hxIndex', v.Qs.stringify({
          hou_id: v.$route.query.hou_id,
          pag: v.pag,
          num: 11
        })).then((res, req) => {
          v.loading2 = false;
          if (res.data.error === 0) {
            v.data1 = res.data.data.info;
            v.total = res.data.data.nodes
          } else {
            v.$Message.error(res.data.errMsg)
          }
        })
      },

      //分页
      page(i) {
        this.pag = i;
        this.positList()
      },

      //权限LIST
      spec() {
        let v = this;
        v.Axios.post('/index.php/admin/hou/size').then((res, req) => {
          if (res.data.error === 0) {
            console.log(res.data)
            v.poist = res.data.data;
          } else {
            v.$Message.error(res.data.errMsg);
          }
        })
      },
      handleView(name) {
        this.imgName = name;
        this.visible = true;
      },
      handleRemove(file) {
        const fileList = this.$refs.upload.fileList;
        this.$refs.upload.fileList.splice(0, 1);
      },
      handleSuccess(res, file) {
        file.url = 'http://img.gsfzd.com/' + res;
        file.name = '7eb99afb9d5f317c912f08b5212fd69a';
      },
      handleFormatError(file) {
        this.$Notice.warning({
          title: 'The file format is incorrect',
          desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
        });
      },
      handleMaxSize(file) {
        this.$Notice.warning({
          title: 'Exceeding file size limit',
          desc: 'File  ' + file.name + ' is too large, no more than 2M.'
        });
      },
      handleBeforeUpload() {
        const check = this.uploadList.length < 1;
        if (!check) {
          this.$Notice.warning({
            title: 'Up to five pictures can be uploaded.'
          });
        }
        return check;
      },

      cancel() {
        this.$Message.info('你点击了取消');
      },
    },
    mounted() {
      this.uploadList = this.$refs.upload.fileList;
      this.positList()
    }
  }
</script>

<style lang="less">
  .demo-upload-list {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    margin-right: 4px;
  }

  .demo-upload-list img {
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
  }

  .demo-upload-list-cover {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .6);
  }

  .demo-upload-list:hover .demo-upload-list-cover {
    display: block;
  }

  .demo-upload-list-cover i {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }
</style>
