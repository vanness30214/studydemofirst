<template>
  <div>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {}
    },mounted(){
      this.$http,get('/dsa.php').then(response => {
        console.log(response.body)
      },response=>{

      });
    },
    methods: {}, computed: {}
  }
</script>

<style scoped>

</style>
