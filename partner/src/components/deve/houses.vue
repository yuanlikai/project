<template>
  <Content :style="{padding: '0 16px 16px'}">
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem>开发商</BreadcrumbItem>
      <BreadcrumbItem>楼盘管理</BreadcrumbItem>
    </Breadcrumb>
    <Card>
      <div style="height: 570px">
        <Row style="margin-bottom:16px">
          <Col span="12">
          <Button @click="$router.push({name:'superiorAdd',query:{deve:'true'}})" type="primary">
            <Icon type="md-add"></Icon>
            添加开楼盘
          </Button>
          </Col>
          <Col span="12">
          <!--<Input style="width: 300px;float: right;" search enter-button placeholder="Enter something..."/>-->
          </Col>
        </Row>
        <Table :columns="columns1" :data="data1"></Table>
        <Spin size="large" fix v-if="spinShow"></Spin>
      </div>

      <!--分页-->
      <PagIng :page="total" @cut="cut" />

      <!--删除弹窗-->
      <alertDel ref="del" :delContent="delContent" @List="housesList" @delA="del" />
    </Card>
    <Modal
      v-model="modal1"
      title="请认真填写优惠时间"
      :loading="loading1"
      @on-ok="handleSubmit('formValidate')"
      @on-cancel="cancel"
      :styles="{width: '420px'}">

      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="优惠状态" prop="name">
          <RadioGroup v-model="formValidate.name">
            <Radio label="0">展示</Radio>
            <Radio label="1">不展示</Radio>
          </RadioGroup>
        </FormItem>

        <FormItem label="优惠时间" prop="time">
          <DatePicker style="width: 200px" v-model="formValidate.time" placement="bottom-end" placeholder="Select date" format="yyyy/MM/dd"
                      :editable="false" type="daterange"></DatePicker>
        </FormItem>
      </Form>
    </Modal>
  </Content>
</template>

<script type="text/ecmascript-6">
  import PagIng from '../public/paging'
  import alertDel from '../public/aletDel'
  export default {
    components:{
      PagIng,
      alertDel
    },
    data() {
      const validateTime = (rule, value, callback) => {
        console.log(this.formValidate)
        if (this.formValidate.time[0].length < 1) {
          callback(new Error('请选择日期'));
        } else {
          callback();
        }
      };
      return {
        modal1: false,
        loading1:false,
        delContent:{ //删除
          url:'/index.php/partner/hou/del',
          id:''
        },
        spinShow:false,
        total:1,
        formValidate: {
          name: '0',
          time: [],
        },

        ruleValidate: {
          name: [
            {required: true, message: '请填写活动标题!', trigger: 'blur'}
          ],
          time: [
            {required: true, validator: validateTime, trigger: 'change'}
          ],
        },
        columns1: [
          {
            title: 'id',
            width:80,
            align:'center',
            key: 'hou_id',
          },
          {
            title: '楼盘名称',
            key: 'hou_names'
          },
          {
            title: '楼盘地址',
            key: 'hou_address'
          },
          {
            title: '均价(元/m²)',
            align:'center',
            key: 'hou_pirce'
          },
          {
            title: '状态',
            align:'center',
            key: 'hou_isadout',
            render:(h,params)=>{
              let sta;
              switch (params.row.hou_isadout){
                case 0:
                  return h('p','已通过');
                case 1:
                  return h('p',{
                    style:{
                      color:'#3590F1'
                    }
                  },'审核中');
                case 2:
                  return h('p',{
                    style:{
                      color:'#F16646'
                    }
                  },'未通过');
              }
            }
          },
          {
            title: '操作',
            align:'center',
            key: 'address',
            render:(h,params)=>{
              return h('div',{
                style:{
                  cursor:'pointer'
                }
              },[
                h('span',{
                  style:{
                    color:'#37C57B',
                    marginRight:'10px',
                  },
                  on: {
                    click: () => {
                      let v = this;
                      v.hou_id=params.row.hou_id;
                      v.modal1 = true;
                      v.formValidate.time = [];
                      v.formValidate.name='0';
                      v.Axios.post('/index.php/admin/hou/cIndex', v.Qs.stringify({
                        hou_id: params.row.hou_id
                      })).then((res, req) => {
                        if(res.data.error===0){
                          if(res.data.data.length===0){
                            v.hou_count_id=''
                          }else {
                            v.hou_count_id=res.data.data[0].hou_count_id;
                            v.formValidate.name=String(res.data.data[0].hou_count_show);
                            v.formValidate.time = [];
                            v.formValidate.time.push(String(v.timestampToTime(res.data.data[0].hou_count_addtime)))
                            v.formValidate.time.push(String(v.timestampToTime(res.data.data[0].hou_count_endtime)))
                          }
                        }else{
                          v.$Message.error(res.data.errMsg)
                        }
                      })
                    }
                  }
                },'优惠'),
                h('span',{
                  style:{
                    color:'#3590F1',
                    marginRight:'10px',
                  },
                  on: {
                    click: () => {
                      this.$router.push({
                        name: 'superiorAdd',
                        query: {
                          hou_id: params.row.hou_id
                        }
                      })
                    }
                  }
                },'详情'),
                h('span',{
                  style:{
                    color:'#FFAD36',
                    marginRight:'10px',
                  },
                  on: {
                    click: () => {
                      this.$router.push({
                        name: 'deveType',
                        query: {
                          hou_id: params.row.hou_id,
                          hou_names: params.row.hou_names,
                          hou_isadout: params.row.hou_isadout
                        }
                      })
                    }
                  }
                },'户型'),
                h('span',{
                  style:{
                    color:'#F16646',
                  },
                  on: {
                    click: (i) => {
                      this.delContent.id=params.row.hou_id;
                      this.$refs.del.modal2 = true
                    }
                  }
                },'删除')
              ])
            }
          },
        ],
        data1: []
      }
    },
    methods: {

      //添加管理员账号列表
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            let v = this;
            let star = new Date(v.formValidate.time[0]).getTime() / 1000;
            let end = new Date(v.formValidate.time[1]).getTime() / 1000;
            v.Axios.post('/index.php/admin/hou/cdd', v.Qs.stringify({
              hou_id: v.hou_id,
              hou_count_id: v.hou_count_id,
              hou_count_addtime: star,
              hou_count_endtime: end,
              hou_count_show: v.formValidate.name,
            })).then((res, req) => {
              if(res.data.error===0){
                v.modal1 = false;
                v.$Message.success(res.data.errMsg)
              }else {
                v.$Message.error(res.data.errMsg)
                v.loading1 = false
              }
            })
          } else {
            this.$Message.error('添加活动失败!');
            this.loading1 = false
          }
        })
      },

      //删除
      del(q){
        this.total=q
      },

      //切换页码
      cut(i){
        this.housesList(i)
      },

      //楼盘列表
      housesList(i) {
        let v = this;
        v.spinShow=!v.spinShow
        v.Axios.post('/index.php/partner/hou/index', v.Qs.stringify({
          num: 10,
          page: i,
        })).then(res => {
          if (res.data.error === 0) {
            v.total=res.data.data.nodes;
            v.data1 = res.data.data.info
          } else {
            v.$Message.error(res.data.errMsg)
          }
          v.spinShow=!v.spinShow
        })
      },

      cancel() {
        this.$Message.info('你点击了取消');
      },
    },
    mounted() {
      this.housesList(1);
    }
  }
</script>

<style scoped lang="less">
</style>
