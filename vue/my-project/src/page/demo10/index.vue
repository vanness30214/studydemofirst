<template>
  <div>
    <router-link :to="{ name:'demo9',params:{userId:123}}">demo9</router-link>
    <router-link :to="{ name:'demo9',params:{userId:123},query:{
      uid:'dsa'
      }}">demo9
    </router-link>
    <div @click="urlTO">to</div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {}
    }, methods: {
      urlTO() {
        this.$router.push({
          path: '/demo8',
          params: {
            userId: 123
          },
          query: {
            uid: 'dsa'
          }
        })
      }
    }, computed: {}
  }
</script>

<style scoped>

</style>
