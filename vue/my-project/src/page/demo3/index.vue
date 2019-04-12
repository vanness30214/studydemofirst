<template>
  <div>
    <div @click="sya('hi')">1</div>
    <div v-bind:class="redbox">{{redbox}}</div>
    <div @click="change(1)">change1</div>
    <div @click="change(2)">change2</div>
    <div>{{messgae|guolu }}</div>
    <div>{{reveredMessage}}</div>
  </div>

</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        redbox: 'red box',
        messgae: 'abc1'
      }
    },
    methods: {//方法
      sya(a) {
        console.log(a)
      },
      change(a) {
        if (a === 1) {
          this.redbox = 'blue';
          console.log(this.redbox);

        } else if (a === 2) {
          this.redbox = 'red box';
          console.log(this.redbox);
        }
      }
    },
    computed:{//计算
      reveredMessage(){
        return this.messgae.split("").reverse().join("");
      }
    },
    filters: {//过滤器
      guolu() {
        return '123' ;
      }
    }
  }
</script>

<style scoped>

</style>
