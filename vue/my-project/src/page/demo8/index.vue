<template>
  <div>
    <countdown col="red" @end="ending"></countdown>

  </div>
</template>

<script>
  import countdown from '@/components/countdown.vue'
  export default {
    name: "index",
    data(){
      return{

      }
    },mounted(){

    },
    methods:{
      ending(){
        alert("jiesu")
      }
    },computed:{

    },components:{
      countdown
    }
  }
</script>

<style scoped>

</style>
