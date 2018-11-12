<template>
  <Modal v-model="modal2" width="360">
    <p slot="header" style="color:#f60;text-align:center">
      <Icon type="ios-information-circle"></Icon>
      <span>确认删除</span>
    </p>
    <div style="text-align:center">
      <p>是否继续删除该条数据，删除后将无法恢复。</p>
    </div>
    <div slot="footer">
      <Button type="error" size="large" long :loading="modal_loading" @click="del">删除</Button>
    </div>
  </Modal>
</template>
<script>
  export default {
    props: ['delContent'],
    data() {
      return {
        modal2: false,
        modal_loading: false,
      }
    },
    methods: {
      del() {
        let v = this;
        v.spinShow=true
        v.modal_loading = true;
        console.log(this)
        v.Axios.post(v.delContent.url, v.Qs.stringify({
          id: v.delContent.id
        })).then(res => {
          if (res.data.error === 0) {
            v.$emit('List', 1);
            v.$emit('delA',1)
            v.modal2 = false;
            v.$Message.success('删除成功');
          } else {
            v.$Message.error('删除失败');
          }
          v.modal_loading = false;
        });
      }
    },
    mounted(){


    }
  }
</script>
