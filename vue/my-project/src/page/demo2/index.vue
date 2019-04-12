<template>
  <div>
    <div>{{msg1}}</div>
    <div>{{msg2}}</div>
    <div>{{msg3}}</div>
    <div @click="say(1)">{{aDouble}}</div>

  </div>
</template>

<script>
    export default {

      data(){
        return{
          msg1:'《诗经国风 .周南》',
          msg2:'关关雎鸠，在河之洲。',
          msg3:'窈窕淑女，君子好逑。',
          a:2
        }
      },
      computed:{
        aDouble(){
          return this.a*2;
        }
      },methods:{
        say(h){
          console.log(h)
        }
      }
    }
</script>

<style scoped>

</style>
