<template>
  <div>
    <button type="button" @click="change">on</button>
    <div>{{msg}}</div>
  </div>

</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            msg:'123'
          }
      },methods:{
        change(){
          //VUEX取数据

          //写数据
          this.$store.dispatch('inc',10000);
          this.msg=this.$store.state.num;
        }
      }
    }
</script>

<style scoped>

</style>
