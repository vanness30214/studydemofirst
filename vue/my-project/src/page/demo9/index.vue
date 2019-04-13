<template>
  <div>
    <button type="button" @click="show = !show">1</button>
      <transition name="faces">
        <p v-if="show">hellow</p>
      </transition>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        show:true
      }
    }, mounted() {
      alert(this.$route.params.userId);
      alert(this.$route.query.uid)
    },
    methods:{

    }
  }
</script>

<style>
  .faces-enter-active,.faces-leave-active{
    transition: opacity 500ms;
  }
  .faces-enter,.faces-leave-to{
    opacity: 0;
  }
  .faces-enter-to{
    opacity: 1;
  }
</style>
