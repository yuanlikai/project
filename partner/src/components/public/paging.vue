<template>
  <div class="page-list">
    <Page :total="page" :page-size="10" @on-change="cut" />
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
        this.$emit('cut',i)
      }
    },
    mounted(){

    }
  }
</script>

<style scoped lang="less">
</style>
