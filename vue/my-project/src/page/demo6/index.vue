<template>
    <div>
      <ul id="example-1">
        <li v-for="item in items">
          {{item.message}}
        </li>
      </ul>
      <ul id="example-2">
        <li v-for="(item,index) in items">
          {{index}}-{{item.message}}
        </li>
      </ul>
      <ul id="example-3">
        <li v-for="(value,key) in object">
          {{key}}:{{value}}
        </li>
      </ul>
      <div v-html="button" @click="btn1">1</div>
    </div>

</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            items:[
              {message:'foo'},
              {message:'goo'}
            ],
            object:{
              firstname:'liu',
              lastname:'oo',
              age:14
            },


            btn:'cds',

          }
      },methods:{
        btn1(){
          console.log("asdsa")
        }
      },computed:{

      }
    }
</script>

<style scoped>

</style>
