<template>
  <div class="c-footer">
    <ul class="footer-ul">
      <li v-for="item in arrlist">
        <img :src="item.imgUrl">
        <span>{{item.name}}</span>
      </li>

    </ul>
  </div>
</template>

<script>
  import Home from '@/assets/home.png'
  import Sea from '@/assets/sea.png'
  import Download from '@/assets/download.png'
  import Me from '@/assets/me.png'

  export default {
    name: "index",
    data() {
      return {
        arrlist: []
      }
    },
    mounted() {
      this.arrlist = [{
        imgUrl: Home,
        name: '首页'
      }, {
        imgUrl: Sea,
        name: '发现'
      }, {
        imgUrl: Download,
        name: '下载'
      }, {
        imgUrl: Me,
        name: '我的'
      }
      ]
    }
  }
</script>

<style scoped>
  .c-footer {
    position: fixed;
    z-index: 3;
    width: 100%;
    background: #fff;
    border-top: 1px solid #F3F5F7;
    bottom: 0;
  }

  .footer-ul {
    display: flex;
  }

  .footer-ul li {
    display: flex;
    height: 50px;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 10px;
  }

  .footer-ul li img {
    width: 24px;
  }
</style>
