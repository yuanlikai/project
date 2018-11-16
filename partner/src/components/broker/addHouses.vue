<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>经纪人/中介</BreadcrumbItem>
      <BreadcrumbItem>房源管理</BreadcrumbItem>
      <BreadcrumbItem v-if="!$route.query.id">添加房源</BreadcrumbItem>
      <BreadcrumbItem v-else>修改房源</BreadcrumbItem>
    </Breadcrumb>
    <Card>
      <div style="height: 570px">
        <Row>
          <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">

            <Col offset="2" span="9">
            <FormItem label="楼盘名称" prop="user_post_title">
              <Input v-model="formValidate.user_post_title" placeholder="请填写楼盘名称"></Input>
            </FormItem>

            <Row>
              <Col span="9">
              <FormItem label="楼盘省份" prop="city_id">
                <Select v-model="formValidate.city_id" placeholder="请选择省份">
                  <Option v-for="(item,index) in positLi" :key="index" :value="String(item.areaId)">{{item.areaName}}
                  </Option>
                </Select>
              </FormItem>
              </Col>
              <Col span="15">
              <FormItem label="楼盘地址" prop="user_address">
                <Input v-model="formValidate.user_address" placeholder="请填写详细地址"></Input>
              </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span="8">
              <FormItem label="面积" prop="user_post_area">
                <InputNumber :max="1000" :min="0"
                             v-model="formValidate.user_post_area"
                             :formatter="value => `${value}m²`"
                             :parser="value => value.replace('m²', '')"
                ></InputNumber>
              </FormItem>
              </Col>
              <Col span="8">
              <FormItem label="总价" prop="user_post_pirce">
                <InputNumber :max="10000"
                             :min="0"
                             v-model="formValidate.user_post_pirce"
                             :formatter="value => `${value}万`"
                             :parser="value => value.replace('万', '')"></InputNumber>
              </FormItem>
              </Col>
              <Col span="8">
              <FormItem label="产权" prop="user_post_right">
                <InputNumber :max="100"
                             :min="0"
                             v-model="formValidate.user_post_right"
                             :formatter="value => `${value}年`"
                             :parser="value => value.replace('年', '')"></InputNumber>
              </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span="12">
              <FormItem label="建筑类型" prop="user_type_id">
                <Select v-model="formValidate.user_type_id" placeholder="请选择建筑类型">
                  <Option value="住宅">住宅</Option>
                  <Option value="商铺">商铺</Option>
                  <Option value="别墅">别墅</Option>
                  <Option value="花园洋房">花园洋房</Option>
                  <Option value="商住楼">商住楼</Option>
                  <Option value="写字楼">写字楼</Option>
                  <Option value="公寓">公寓</Option>
                  <Option value="其他">其他</Option>
                </Select>
              </FormItem>
              </Col>
              <Col span="12">
              <FormItem label="建筑年代" prop="user_post_year">
                <InputNumber :max="2080" :min="0" v-model="formValidate.user_post_year"
                             :formatter="value => `${value}年`"
                             :parser="value => value.replace('年', '')"></InputNumber>
              </FormItem>
              </Col>
            </Row>

            <FormItem label="项目简介" prop="user_post_content">
              <Input v-model="formValidate.user_post_content" type="textarea" placeholder="请填写项目简介"/>
            </FormItem>

            <FormItem>

              <Button type="primary" :loading="loading" @click="handleSubmit('formValidate')">
                <span v-if="!loading">提交</span>
                <span v-else>Loading...</span>
              </Button>
              <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
            </FormItem>


            </Col>
            <Col offset="2" span="9">
            <FormItem label="户型标题" prop="user_post_plot">
              <Input v-model="formValidate.user_post_plot" placeholder="请填写户型标题"></Input>
            </FormItem>

            <Row>
              <Col span="8">
              <FormItem label="室" prop="user_post_room">
                <InputNumber :max="10" :min="1" v-model="formValidate.user_post_room"></InputNumber>
              </FormItem>
              </Col>
              <Col span="8">
              <FormItem label="厅" prop="ting">
                <InputNumber :max="10" :min="1" v-model="formValidate.ting"></InputNumber>
              </FormItem>
              </Col>
              <Col span="8">
              <FormItem label="卫" prop="wei">
                <InputNumber :max="10" :min="1" v-model="formValidate.wei"></InputNumber>
              </FormItem>
              </Col>
            </Row>

            <Row>
              <Col span="12">
              <FormItem label="共" prop="user_post_floors">
                <InputNumber :max="100"
                             :min="1"
                             v-model="formValidate.user_post_floors"
                             :formatter="value => `${value}层`"
                             :parser="value => value.replace('层', '')"></InputNumber>
              </FormItem>
              </Col>
              <Col span="12">
              <FormItem label="第" prop="user_post_floor">
                <InputNumber :max="100"
                             :min="0"
                             v-model="formValidate.user_post_floor"
                             :formatter="value => `${value}层`"
                             :parser="value => value.replace('层', '')"></InputNumber>
              </FormItem>
              </Col>
            </Row>
            <Col span="24">
            <FormItem label="图片上传" prop="imgUpload">
              <div class="demo-upload-list" v-for="item in uploadList">
                <template v-if="item.status === 'finished'">
                  <img :src="item.url">
                  <div class="demo-upload-list-cover">
                    <Icon type="ios-eye-outline" @click.native="handleView(item.url)"></Icon>
                    <Icon v-if="shows" type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
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
                :on-format-error="handleFormatError"
                :on-exceeded-size="handleMaxSize"
                :before-upload="handleBeforeUpload"
                multiple
                type="drag"
                action="/publics/picture/imgouter"
                :data="{location:'you'}"
                style="display: inline-block;width:58px;">
                <div style="width: 58px;height:58px;line-height: 58px;">
                  <Icon type="ios-camera" size="20"></Icon>
                </div>
              </Upload>

              <Modal title="View Image" v-model="visible"
                     :styles="{textAlign:'center'}">
                <img :src="imgName" v-if="visible" style="max-width: 100%">
              </Modal>
            </FormItem>

            </Col>

            </Col>
          </Form>
        </Row>
      </div>
    </Card>
  </Content>
</template>
<script>
  export default {
    data() {
      const validatePass = (rule, value, callback) => {
        if (this.uploadList.length < 2) {
          callback(new Error('至少上传2张图片'));
        } else {
          callback();
        }
      };
      const validateNumber = (rule, value, callback) => {
        console.log(this)
        if (this.uploadList.length < 2) {
          callback(new Error('至少上传2张图片'));
        } else {
          callback();
        }
      };
      return {
        loading: false,
        shows: true,
        defaultList: [],
        imgName: '',
        visible: false,
        uploadList: [],
        positLi: [],
        formValidate: {
          user_post_title: '',
          user_post_plot: '',
          city_id: '',
          user_address: '',
          user_post_room: 1,
          ting: 0,
          wei: 0,
          user_post_type: '',
          user_post_area: 0,
          user_post_pirce: 0,
          user_post_adron: '',
          user_post_aspect: '',
          user_type_id: '',
          user_post_year: 2000,
          user_post_floors: 0,
          user_post_floor: 0,
          user_post_right: 0,
          user_post_content: ''
        },
        ruleValidate: {
          user_post_content: [
            {required: true, message: 'Please fill in the content.', trigger: 'blur'}
          ],
          user_type_id: [
            {required: true, message: 'Please fill in the content.', trigger: 'change'}
          ],
          user_post_year: [
            {required: true, type: 'number', message: 'Please fill in the content.', trigger: 'blur'}
          ],
          user_post_floor: [
            {required: true, type: 'number', message: 'Please fill in the content.', trigger: 'blur'}
          ],
          user_post_floors: [
            {required: true, type: 'number', message: 'Please fill in the content.', trigger: 'blur'}
          ],
          user_post_right: [
            {required: true, type: 'number', message: 'Please fill in the content.', trigger: 'blur'}
          ],
          user_post_pirce: [
            {required: true, type: 'number', message: 'Please fill in the content.', trigger: 'blur'}
          ],
          user_post_area: [
            {required: true, type: 'number', message: 'Please fill in the content.', trigger: 'blur'}
          ],
          imgUpload: [
            {required: true, validator: validatePass, trigger: 'change'}
          ],
          user_post_plot: [
            {required: true, message: 'Please fill in the content.', trigger: 'blur'}
          ],
          user_post_title: [
            {required: true, message: 'Please fill in the content.', trigger: 'blur'}
          ],
          city_id: [
            {required: true, message: 'Please fill in the content.', trigger: 'change'}
          ],
          user_address: [
            {required: true, message: 'Please fill in the content.', trigger: 'blur'}
          ],
          user_post_room: [
            {required: true, type: 'number', message: 'Please fill in the content.', trigger: 'blur'}
          ],
          ting: [
            {required: true, type: 'number', message: 'Please fill in the content.', trigger: 'blur'}
          ],
          wei: [
            {required: true, type: 'number', message: 'Please fill in the content.', trigger: 'blur'}
          ],

        }
      }
    },
    methods: {

      //添加房源详情
      handleSubmit(name) {
        let v = this;
        v.$refs[name].validate((valid) => {
          if (valid) {
            v.loading = true;
            v.Axios.post('/index.php/partner/agent/add', v.Qs.stringify({
              user_post_id: v.$route.query.id ? v.$route.query.id : '',
              city_id: v.formValidate.city_id,
              user_agent: 1,
              user_post_title: v.formValidate.user_post_title,
              user_post_plot: v.formValidate.user_post_plot,
              user_post_room: v.formValidate.user_post_room,
              user_post_type: v.formValidate.ting + ',' + v.formValidate.wei,
              user_post_area: v.formValidate.user_post_area,
              user_post_pirce: v.formValidate.user_post_pirce,
              user_post_adron: v.formValidate.user_post_adron,
              user_post_aspect: v.formValidate.user_post_aspect,
              user_type_id: v.formValidate.user_type_id,
              user_post_year: v.formValidate.user_post_year,
              user_post_floor: v.formValidate.user_post_floor,
              user_post_floors: v.formValidate.user_post_floors,
              user_post_content: v.formValidate.user_post_content,
              user_post_right: v.formValidate.user_post_right,
              user_address: v.formValidate.user_address,
              user_pics: String(JSON.stringify(v.uploadList)),

            })).then(res => {
              if (res.data.error === 0) {
                v.$Message.success('添加房源成功！')
                v.$router.push({
                  name: 'brokerHouses'
                })
              } else {
                v.$Message.error(res.data.errMsg)
              }
              v.loading = false;
            });

          } else {
            v.$Message.error('Fail!');
          }
        })
      },
      handleReset(name) {
        this.$refs[name].resetFields();
      },

      //根据ID获取房源详情
      getHouses() {
        let _this = this;
        _this.Axios.post('/index.php/partner/agent/xiang', _this.Qs.stringify({
          user_post_id: _this.$route.query.id
        })).then(res => {
          console.log(res.data.data);
          if (res.data.error === 0) {
            let data = res.data.data[0];
            _this.formValidate.city_id = String(data.city_id);
            _this.formValidate.user_post_title = data.user_post_title;
            _this.formValidate.user_post_plot = data.user_post_plot;
            _this.formValidate.user_address = data.user_address;
            _this.formValidate.user_post_room = Number(data.user_post_room)
            _this.formValidate.ting = Number(data.user_post_type.split(',')[0]);
            _this.formValidate.wei = Number(data.user_post_type.split(',')[1]);
            _this.formValidate.user_post_area = data.user_post_area;
            _this.formValidate.user_post_pirce = data.user_post_pirce;
            _this.formValidate.user_post_right = Number(data.user_post_right);
            _this.formValidate.user_post_floors = Number(data.user_post_floors);
            _this.formValidate.user_post_floor = Number(data.user_post_floor);
            _this.formValidate.user_type_id = data.user_type_id;
            _this.formValidate.user_post_year = data.user_post_year;
            _this.formValidate.user_post_content = data.user_post_content;

            _this.defaultList = JSON.parse(data.user_pics);
            setTimeout(function () {
              _this.uploadList = _this.$refs.upload.fileList;
            }, 0);
          } else {
            v.$Message.error(res.data.errMsg)
          }
        })
      },

      //地区列表
      city() {
        let v = this;
        v.Axios.post('/index.php/admin/banner/city').then((res, req) => {
          if (res.data.error === 0) {
            v.positLi = res.data.data;
          } else {
            v.$Message.error(res.data.errMsg)
          }
        })
      },

      handleReset(name) {
        this.$refs[name].resetFields();
      },
      handleView(name) {
        console.log(name)
        this.imgName = name;
        this.visible = true;
      },
      handleRemove(file) {
        const fileList = this.$refs.upload.fileList;
        this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      },
      handleSuccess(res, file) {
        console.log(res)
        file.url = 'http://img.gsfzd.com/' + res;
        file.name = '7eb99afb9d5f317c912f08b5212fd69a';
        console.log(this.uploadList)
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
        const check = this.uploadList.length < 1000;
        if (!check) {
          this.$Notice.warning({
            title: 'Up to five pictures can be uploaded.'
          });
        }
        return check;
      },
    },
    mounted() {
      this.getHouses();
      this.city();
      this.uploadList = this.$refs.upload.fileList;
    }
  }
</script>

<style lang="less">
  .zanw {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid red;
    background: rgb(255, 255, 255);
    opacity: .2;
    top: 0;
    bottom: 0;
    z-index: 2;
  }

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
