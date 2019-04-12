<template>
    <div>
      <div :class="{'red':isred,'blue':isblue}">bind1</div>
      <div :class="isclassname">bind2</div>
      <div :class="[avtred,avtblue]">bind3</div>
      <!------------------------------->
      <div :style="{'font-size': sizenum +'px','color':'red'}">NUM1</div>
      <div :style="styleOBJ">NUM2</div>
      <div :style="[textfont,textcolor]">NUM3</div>
    </div>
</template>

<script>
    export default {
        name: "index",
      data() {
        return{
          isred:true,
          isblue:true,
          /////
          isclassname:{
            'red':true,
            'blue':true
          },
          /////
          avtred:'red',
          avtblue:'blue',
          ////////
          sizenum:20,
          styleOBJ:{
            'font-size':'20px',
            'color':'red'
          },
          //////
          textcolor:{
            'color':'red'
          },
          /////
          textfont:{
            'font-size':'20px'
          }
        }


      },methods:{

      },computed:{

      },
      filters:{

      }



    }

</script>

<style scoped>

</style>
