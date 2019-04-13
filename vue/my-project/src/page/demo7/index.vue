<template>
    <div>
      <div><input type="text" v-model="input1"><span>{{input1}}</span></div>
      <div><label><input type="checkbox" v-model="input2" value="jack">jack</label>
        <label><input type="checkbox" v-model="input2" value="jack1">jack1</label>
        <label><input type="checkbox" v-model="input2" value="jack2">jack2</label>
        <span>{{input2}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            input1:'',
            input2:[],
          }
      },methods:{

      },computed:{

      }
    }
</script>

<style scoped>

</style>
