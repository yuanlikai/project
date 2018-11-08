<template>
  <div class="page-list">
    <Page :total="page" @on-change="cut" />
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['page'],
    data() {
      return {
        a:1,
        b:2,
      }
    },
    methods: {
      //切换页码回调
      cut(i){
        this.b=2;
        this.$emit('cut',i)
      }
    }
  }
</script>

<style scoped lang="less">
</style>
