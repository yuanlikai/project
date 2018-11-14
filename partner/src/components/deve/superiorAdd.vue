<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Breadcrumb :style="{margin: '16px 0'}">

      <template v-if="this.$route.query.quality_id">
        <BreadcrumbItem to="superior">优质房源</BreadcrumbItem>
        <BreadcrumbItem v-if="$route.query.quality_id">修改房源</BreadcrumbItem>
      </template>

      <template v-else-if="this.$route.query.agent_id">
        <BreadcrumbItem>中介楼盘</BreadcrumbItem>
        <BreadcrumbItem>楼盘详情</BreadcrumbItem>
      </template>

      <template v-else-if="this.$route.query.hou_id">
        <BreadcrumbItem>开发商楼盘</BreadcrumbItem>
        <BreadcrumbItem>楼盘详情</BreadcrumbItem>
      </template>

      <template v-else-if="this.$route.query.deve">
        <BreadcrumbItem>楼盘管理</BreadcrumbItem>
        <BreadcrumbItem>添加楼盘</BreadcrumbItem>
      </template>

      <template v-else>
        <BreadcrumbItem>添加楼盘</BreadcrumbItem>
      </template>

    </Breadcrumb>
    <Card>
      <div style="height: 600px">
        <Row>
          <Spin fix v-if="spinShow"></Spin>
          <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <Col offset="2" span="9">
            <!--<div class="zanw"></div> &lt;!&ndash; 占位 &ndash;&gt;-->
            <FormItem label="楼盘名称" prop="quality_names">
              <Input v-model="formValidate.quality_names" placeholder="请输入楼盘地址"></Input>
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
              <FormItem label="楼盘地址" prop="quality_address">
                <Input v-model="formValidate.quality_address" placeholder="请填写详细地址"></Input>
              </FormItem>
              </Col>
              <Col span="12">

              <FormItem label="绿化率%" prop="quality_greerate">
                <InputNumber :max="99" :min="1" v-model="formValidate.quality_greerate"></InputNumber>
              </FormItem>
              </Col>
              <Col span="12">
              <FormItem label="容积率" prop="quality_plotrate">

                <InputNumber :max="99" :min="0.1" v-model="formValidate.quality_plotrate"></InputNumber>
                <!--<Input :max="100" :min="1" v-model="formValidate.quality_plotrate"></Input>-->
              </FormItem>
              </Col>

              <Col span="12">

              <FormItem label="规划车位" prop="quality_spot">
                <InputNumber :max="100000" :min="1" v-model="formValidate.quality_spot"></InputNumber>
              </FormItem>
              </Col>


              <Col span="12">
              <FormItem label="物业费¥" prop="quality_pertyfee">
                <InputNumber :max="999" :min="1" v-model="formValidate.quality_pertyfee"></InputNumber>
                <!--<Input :max="100" :min="1" v-model="formValidate.quality_pertyfee"></Input>-->
              </FormItem>
              </Col>

              <Col span="12">
              <FormItem label="占地面m²" prop="quality_area">
                <InputNumber :max="100000000" :min="1" v-model="formValidate.quality_area"></InputNumber>
                <!--<Input :max="100" :min="1" v-model="formValidate.quality_area"></Input>-->
              </FormItem>
              </Col>

              <Col span="12">
              <FormItem label="规划户数." prop="quality_number">

                <InputNumber :max="1000000" :min="1" v-model="formValidate.quality_number"></InputNumber>
                <!--<Input :max="100" :min="1" v-model="formValidate.quality_number"></Input>-->
              </FormItem>
              </Col>

              <Col span="12">
              <FormItem label="供水方式" prop="quality_tel">
                <Select v-model="formValidate.quality_tel" placeholder="请选择供水方式">
                  <Option value="住宅">住宅</Option>
                  <Option value="商用">商用</Option>
                  <Option value="公寓">公寓</Option>
                </Select>
              </FormItem>
              </Col>

              <Col span="12">
              <FormItem label="供电方式" prop="quality_water">
                <Select v-model="formValidate.quality_water" placeholder="请选择供电方式">
                  <Option value="住宅">住宅</Option>
                  <Option value="商用">商用</Option>
                  <Option value="公寓">公寓</Option>
                </Select>
              </FormItem>
              </Col>

              <Col span="12">

              <FormItem label="预售证" prop="quality_card">

                <Input v-model="formValidate.quality_card" placeholder="请填写预售证"></Input>

              </FormItem>

              </Col>

              <Col span="12">
              <FormItem label="楼盘类型" prop="quality_type">
                <Select v-model="formValidate.quality_type" placeholder="请选择楼盘类型1">
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


              <Col span="24">
              <FormItem label="项目简介" prop="quality_content">
                <Input v-model="formValidate.quality_content" type="textarea" placeholder="请填写项目简介"/>

              </FormItem>
              </Col>
              <Col span="24" v-if="!this.$route.query.agent_id">
              <FormItem>

                <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>

              </FormItem>
              </Col>
            </Row>
            </Col>
            <Col offset="2" span="9">

            <FormItem label="开发商" prop="quality_steel">
              <Input v-model="formValidate.quality_steel" placeholder="请填写开发商"></Input>
            </FormItem>
            <Row>


              <Col span="12">
              <FormItem label="销售状态" prop="quality_status">
                <Select v-model="formValidate.quality_status" placeholder="请选择楼盘状态">
                  <Option value="0">在售</Option>
                  <Option value="1">待售</Option>
                  <Option value="2">售罄</Option>
                </Select>
              </FormItem>
              </Col>

              <Col span="12">
              <FormItem label="装修标准" prop="quality_br">
                <Select v-model="formValidate.quality_br" placeholder="请选择装修标准">
                  <Option value="0">毛坯</Option>
                  <Option value="1">简装</Option>
                  <Option value="2">中等装</Option>
                  <Option value="3">精装</Option>
                  <Option value="4">豪华装</Option>
                </Select>
              </FormItem>
              </Col>
              <Col span="12">
              <FormItem label="均价/m²" prop="quality_pirce">
                <InputNumber :max="20000000" :min="1" v-model="formValidate.quality_pirce"></InputNumber>
                <!--<Input :max="100" :min="1" v-model="formValidate.quality_pirce"></Input>-->
              </FormItem>
              </Col>

              <Col span="12">
              <FormItem label="产权(年)" prop="quality_equity">

                <InputNumber :max="99" :min="1" v-model="formValidate.quality_equity"></InputNumber>
                <!--<Input :max="100" :min="1" v-model="formValidate.quality_equity"></Input>-->
              </FormItem>
              </Col>

              <Col span="12">
              <FormItem label="物业公司" prop="quality_perty">
                <Input v-model="formValidate.quality_perty" placeholder="请填写物业公司"></Input>
              </FormItem>
              </Col>

              <Col span="12">
              <FormItem label="物业类型" prop="quality_pertype">
                <Select v-model="formValidate.quality_pertype" placeholder="请选择物业类型">
                  <Option value="住宅">住宅</Option>
                  <Option value="商业">商业</Option>
                  <Option value="公寓">公寓</Option>
                </Select>
              </FormItem>
              </Col>

              <Col span="12">
              <FormItem label="开盘时间" prop="quality_opentime">
                <DatePicker :editable="false" v-model="formValidate.quality_opentime" type="date"
                            placeholder="请选择开盘时间"></DatePicker>
              </FormItem>
              </Col>

              <Col span="12">
              <FormItem label="交房时间" prop="quality_datetime">
                <DatePicker :editable="false" v-model="formValidate.quality_datetime" type="date"
                            placeholder="请选择交房时间"></DatePicker>
              </FormItem>
              </Col>

              <Col span="12">
              <FormItem label="通燃气" prop="quality_gas">
                <Select v-model="formValidate.quality_gas" placeholder="请选择是否通燃气">
                  <Option value="是">是</Option>
                  <Option value="否">否</Option>
                </Select>
              </FormItem>
              </Col>

              <Col span="12" v-if="!this.$route.query.agent_id&&!this.$route.query.hou_id">
              <FormItem label="房源专区" prop="quality_isyou">
                <Select v-model="formValidate.quality_isyou">
                  <Option value="0">优质</Option>
                  <Option value="1">优惠</Option>
                </Select>
              </FormItem>
              </Col>

              <Col span="24">
              <FormItem label="项目卖点" prop="quality_point">
                <Input :max="100" :min="1" v-model="formValidate.quality_point" placeholder="请填写项目卖点"></Input>
              </FormItem>
              </Col>

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
            </Row>

            </Col>

          </Form>
        </Row>
      </div>
    </Card>
  </Content>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      const validatePass = (rule, value, callback) => {
        if (this.uploadList.length < 2) {
          callback(new Error('至少上传2张图片'));
        } else {
          callback();
        }
      };
      return {
        shows: !this.$route.query.agent_id,
        spinShow: true,
        positLi: [],
        formValidate: {
          city_id: '',
          quality_card:'',
          quality_type:'',
          quality_names: '',
          quality_steel: '',
          quality_address: '',
          quality_pirce: '',
          quality_greerate: '',
          quality_plotrate: '',
          quality_spot: '',
          quality_pertype: '',
          quality_area: '',
          quality_number: '',
          quality_tel: '',
          quality_water: '',
          quality_equity: '',
          quality_status: '',
          quality_br: '',
          quality_perty: '',
          quality_pertyfee: '',
          quality_opentime: '',
          quality_datetime: '',
          quality_content: '',
          quality_isyou: '',
          quality_point: '',
          quality_gas: '',
        },
        ruleValidate: {
          quality_type: [
            {required: true, message: 'The name cannot be empty', trigger: 'change'}
          ],
          quality_gas: [
            {required: true, message: 'The name cannot be empty', trigger: 'change'}
          ],
          imgUpload: [
            {required: true, validator: validatePass, trigger: 'change'}
          ],
          city_id: [
            {required: true, message: 'The name cannot be empty', trigger: 'change'}
          ],
          quality_names: [
            {required: true, message: 'The name cannot be empty', trigger: 'blur'}
          ],
          quality_steel: [
            {required: true, message: 'The name cannot be empty', trigger: 'blur'}
          ],
          quality_address: [
            {required: true, message: 'The name cannot be empty', trigger: 'blur'}
          ],
          quality_pirce: [
            {required: true, type: 'number', message: 'The name cannot be empty', trigger: 'change'}
          ],
          quality_equity: [
            {required: true, type: 'number', message: 'The name cannot be empty', trigger: 'change'}
          ],
          quality_greerate: [
            {required: true, type: 'number', message: 'The name cannot be empty', trigger: 'change'}
          ],
          quality_plotrate: [
            {required: true, type: 'number', message: 'The name cannot be empty', trigger: 'change'}
          ],
          quality_br: [
            {required: true, message: 'The name cannot be empty', trigger: 'change'}
          ],
          quality_status: [
            {required: true, message: 'The name cannot be empty', trigger: 'change'}
          ],
          // quality_spot: [
          //   {required: true, type: 'number', message: 'The name cannot be empty', trigger: 'change'}
          // ],
          quality_pertype: [
            {required: true, message: 'The name cannot be empty', trigger: 'change'}
          ],
          // quality_perty: [
          //   {required: true, message: 'The name cannot be empty', trigger: 'blur'}
          // ],
          // quality_pertyfee: [
          //   {required: true, type: 'number', message: 'The name cannot be empty', trigger: 'change'}
          // ],
          quality_area: [
            {required: true, type: 'number', message: 'The name cannot be empty', trigger: 'change'}
          ],
          // quality_number: [
          //   {required: true, type: 'number', message: 'The name cannot be empty', trigger: 'change'}
          // ],
          quality_opentime: [
            {required: true, type: 'date', message: 'The name cannot be empty', trigger: 'change'}
          ],
          quality_datetime: [
            {required: true, type: 'date', message: 'The name cannot be empty', trigger: 'change'}
          ],
          quality_tel: [
            {required: true, message: 'The name cannot be empty', trigger: 'change'}
          ],
          quality_water: [
            {required: true, message: 'The name cannot be empty', trigger: 'change'}
          ],
          quality_isyou: [
            {required: true, message: 'The name cannot be empty', trigger: 'change'}
          ],
          quality_content: [
            {required: true, message: 'The name cannot be empty', trigger: 'blur'}
          ],
          quality_point: [
            {required: true, message: 'The name cannot be empty', trigger: 'blur'}
          ]
        },

        defaultList: [],
        imgName: '',
        visible: false,
        uploadList: []
      }
    },
    methods: {
      handleSubmit(name) {
        let v = this;
        this.$refs[name].validate((valid) => {
          if (valid) {
            let quality_datetime = new Date(v.formValidate.quality_datetime).getTime() / 1000;
            let quality_opentime = new Date(v.formValidate.quality_opentime).getTime() / 1000;
            if (v.$route.query.hou_id || v.$route.query.deve) {
              v.Axios.post('/index.php/partner/hou/add', v.Qs.stringify({
                hou_id: v.$route.query.hou_id ? v.$route.query.hou_id : '',
                hou_pic: String(JSON.stringify(v.uploadList)),
                city_id: v.formValidate.city_id,
                hou_card:v.formValidate.quality_card,
                hou_type:v.formValidate.quality_type,
                hou_names: v.formValidate.quality_names,
                hou_steel: v.formValidate.quality_steel,
                hou_address: v.formValidate.quality_address,
                hou_pirce: v.formValidate.quality_pirce,
                hou_greerate: v.formValidate.quality_greerate,
                hou_plotrate: v.formValidate.quality_plotrate,
                hou_spot: v.formValidate.quality_spot,
                hou_pertype: v.formValidate.quality_pertype,
                hou_area: v.formValidate.quality_area,
                hou_number: v.formValidate.quality_number,
                hou_tel: v.formValidate.quality_tel,
                hou_water: v.formValidate.quality_water,
                hou_equity: v.formValidate.quality_equity,
                hou_status: v.formValidate.quality_status,
                hou_br: v.formValidate.quality_br,
                hou_perty: v.formValidate.quality_perty,
                hou_pertyfee: v.formValidate.quality_pertyfee,
                hou_opentime: quality_opentime,
                hou_datetime: quality_datetime,
                hou_content: v.formValidate.quality_content,
                hou_point: v.formValidate.quality_point,
                hou_gas: v.formValidate.quality_gas,
                hou_isyou: v.formValidate.quality_isyou,
              })).then((res, req) => {
                if (res.data.error === 0) {
                  v.$Message.success('Success!');
                } else {
                  v.$Message.error(res.data.errMsg);
                }
              });
            } else {
              v.Axios.post('/index.php/admin/quality/add', v.Qs.stringify({
                quality_id: v.$route.query.quality_id ? v.$route.query.quality_id : '',
                quality_pic: String(JSON.stringify(v.uploadList)),
                city_id: v.formValidate.city_id,
                quality_card:v.formValidate.quality_card,
                quality_type:v.formValidate.quality_type,
                quality_names: v.formValidate.quality_names,
                quality_steel: v.formValidate.quality_steel,
                quality_address: v.formValidate.quality_address,
                quality_pirce: v.formValidate.quality_pirce,
                quality_greerate: v.formValidate.quality_greerate,
                quality_plotrate: v.formValidate.quality_plotrate,
                quality_spot: v.formValidate.quality_spot,
                quality_pertype: v.formValidate.quality_pertype,
                quality_area: v.formValidate.quality_area,
                quality_number: v.formValidate.quality_number,
                quality_tel: v.formValidate.quality_tel,
                quality_water: v.formValidate.quality_water,
                quality_equity: v.formValidate.quality_equity,
                quality_status: v.formValidate.quality_status,
                quality_br: v.formValidate.quality_br,
                quality_perty: v.formValidate.quality_perty,
                quality_pertyfee: v.formValidate.quality_pertyfee,
                quality_opentime: quality_opentime,
                quality_datetime: quality_datetime,
                quality_content: v.formValidate.quality_content,
                quality_point: v.formValidate.quality_point,
                quality_gas: v.formValidate.quality_gas,
                quality_isyou: v.formValidate.quality_isyou,
              })).then((res, req) => {
                if (res.data.error === 0) {
                  v.$Message.success('Success!');
                } else {
                  v.$Message.error(res.data.errMsg);
                }
              })
            }
          } else {
            this.$Message.error('Fail!');
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

      //优质详情
      superiorDetail() {
        let v = this;
        v.Axios.post('/index.php/admin/quality/xiang', v.Qs.stringify({
          quality_id: v.$route.query.quality_id
        })).then((res, req) => {

          if (res.data.error === 0) {
            console.log(res.data.data[0].quality_gas)
            v.formValidate = {
              city_id: String(res.data.data[0].city_id),

              quality_card:res.data.data[0].quality_card,
              quality_type:res.data.data[0].quality_type,
              quality_names: res.data.data[0].quality_names,
              quality_steel: res.data.data[0].quality_steel,
              quality_address: res.data.data[0].quality_address,
              quality_pirce: res.data.data[0].quality_pirce,
              quality_greerate: res.data.data[0].quality_greerate,
              quality_plotrate: res.data.data[0].quality_plotrate,
              quality_spot: res.data.data[0].quality_spot,
              quality_pertype: res.data.data[0].quality_pertype,
              quality_area: res.data.data[0].quality_area,
              quality_number: res.data.data[0].quality_number,
              quality_tel: res.data.data[0].quality_tel,
              quality_water: res.data.data[0].quality_water,
              quality_equity: res.data.data[0].quality_equity,
              quality_status: String(res.data.data[0].quality_status),
              quality_br: String(res.data.data[0].quality_br),
              quality_perty: res.data.data[0].quality_perty,
              quality_pertyfee: res.data.data[0].quality_pertyfee,
              quality_opentime: String(v.timestampToTime(res.data.data[0].quality_opentime).split(' ')[0]),
              quality_datetime: String(v.timestampToTime(res.data.data[0].quality_datetime).split(' ')[0]),
              quality_content: res.data.data[0].quality_content,
              quality_isyou: String(res.data.data[0].quality_isyou),
              quality_point: res.data.data[0].quality_point,
              quality_gas: res.data.data[0].quality_gas,
            };
            v.defaultList = JSON.parse(res.data.data[0].quality_pic);
            setTimeout(function () {
              v.uploadList = v.$refs.upload.fileList;
            }, 0);
            v.spinShow = false;
          } else {
            v.$Message.error(res.data.errMsg)
          }

        })
      },

      //中介详情
      agentDetail() {
        let v = this;
        v.Axios.post('/index.php/admin/agent/xiang', v.Qs.stringify({
          agent_id: v.$route.query.agent_id
        })).then((res, req) => {
          if (res.data.error === 0) {
            v.formValidate = {
              quality_card:res.data.data[0].agent_card,
              quality_type:res.data.data[0].agent_type,
              city_id: String(res.data.data[0].city_id),
              quality_names: res.data.data[0].agent_names,
              quality_steel: res.data.data[0].agent_steel,
              quality_address: res.data.data[0].agent_address,
              quality_pirce: String(res.data.data[0].agent_pirce),
              quality_greerate: String(res.data.data[0].agent_greerate),
              quality_plotrate: String(res.data.data[0].agent_plotrate),
              quality_spot: String(res.data.data[0].agent_spot),
              quality_pertype: res.data.data[0].agent_pertype,
              quality_area: String(res.data.data[0].agent_area),
              quality_number: String(res.data.data[0].agent_number),
              quality_tel: res.data.data[0].agent_tel,
              quality_water: res.data.data[0].agent_water,
              quality_equity: res.data.data[0].agent_equity,
              quality_status: String(res.data.data[0].agent_status),
              quality_br: String(res.data.data[0].agent_br),
              quality_perty: res.data.data[0].agent_perty,
              quality_pertyfee: String(res.data.data[0].agent_pertyfee),
              quality_opentime: String(v.timestampToTime(res.data.data[0].agent_opentime).split(' ')[0]),
              quality_datetime: String(v.timestampToTime(res.data.data[0].agent_datetime).split(' ')[0]),
              quality_content: res.data.data[0].agent_content,
              quality_isyou: String(res.data.data[0].agent_isyou),
              quality_point: res.data.data[0].agent_point,
              quality_gas: res.data.data[0].agent_gas,
            };
            v.defaultList = JSON.parse(res.data.data[0].agent_pic);
            setTimeout(function () {
              v.uploadList = v.$refs.upload.fileList;
            }, 0);
            v.spinShow = false;
          } else {
            v.$Message.error(res.data.errMsg)
          }
        })
      },

      //开发商详情
      deveDetail() {
        let v = this;
        v.Axios.post('/index.php/partner/hou/xiang', v.Qs.stringify({
          hou_id: v.$route.query.hou_id
        })).then((res, req) => {
          v.spinShow = false;
          console.log(res.data.data)
          if (res.data.error === 0) {
            v.formValidate = {

              quality_card:res.data.data[0].hou_card,
              quality_type:res.data.data[0].hou_type,
              city_id: String(res.data.data[0].city_id),
              quality_names: res.data.data[0].hou_names,
              quality_steel: res.data.data[0].hou_steel,
              quality_address: res.data.data[0].hou_address,
              quality_pirce: res.data.data[0].hou_pirce,
              quality_greerate: res.data.data[0].hou_greerate,
              quality_plotrate: res.data.data[0].hou_plotrate,
              quality_spot: res.data.data[0].hou_spot,
              quality_pertype: res.data.data[0].hou_pertype,
              quality_area: res.data.data[0].hou_area,
              quality_number: res.data.data[0].hou_number,
              quality_tel: res.data.data[0].hou_tel,
              quality_water: res.data.data[0].hou_water,
              quality_equity: res.data.data[0].hou_equity,
              quality_status: String(res.data.data[0].hou_status),
              quality_br: String(res.data.data[0].hou_br),
              quality_perty: res.data.data[0].hou_perty,
              quality_pertyfee: res.data.data[0].hou_pertyfee,
              quality_opentime: String(v.timestampToTime(res.data.data[0].hou_opentime).split(' ')[0]),
              quality_datetime: String(v.timestampToTime(res.data.data[0].hou_datetime).split(' ')[0]),
              quality_content: res.data.data[0].hou_content,
              quality_isyou: String(res.data.data[0].hou_isyou),
              quality_point: res.data.data[0].hou_point,
              quality_gas: res.data.data[0].hou_gas,
            };
            v.defaultList = JSON.parse(res.data.data[0].hou_pic);
            setTimeout(function () {
              v.uploadList = v.$refs.upload.fileList;
            }, 0);
          } else {
            v.$Message.error(res.data.errMsg)
          }
        })
      }
    },
    mounted() {
      this.city();

      //开发商
      if (this.$route.query.deve || this.$route.query.hou_id) {
        this.location = 'xin'
      } else {
        this.location = 'you'
      }


      if (this.$route.query.quality_id) {
        this.superiorDetail()
      } else if (this.$route.query.agent_id) {
        this.agentDetail()
      } else if (this.$route.query.hou_id) {
        this.deveDetail()
      } else {
        this.spinShow = false
      }
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
