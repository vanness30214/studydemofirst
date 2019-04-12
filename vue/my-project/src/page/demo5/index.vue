<template>
    <div>
      <div v-if="type==='a'">A</div>
      <div v-else-if="type==='b'">B</div>
      <div v-else-if="type==='c'">C</div>
      <div v-else>not ABC</div>
      <div v-show="show">312</div>

    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
        return{
          type:'d123',
          show:true
        }
      },methods:{

      },
      computed: {

      },
      watch:{


      },filters:{

      }
    }
</script>

<style scoped>

</style>
