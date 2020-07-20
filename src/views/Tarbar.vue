<template>
  <mt-tabbar v-model="area">
    <mt-tab-item id="home" @click.native="toArea('Home')">
      <i class="iconfont icon-home tab-icon" slot="icon"></i>
      首頁
    </mt-tab-item>
    <mt-tab-item id="shop" @click.native="toArea('Shop')">
      <i class="iconfont icon-shop tab-icon" slot="icon"></i>
      寵物商城
    </mt-tab-item>
    <mt-tab-item id="bbs" @click.native="toArea('BBS')">
      <i class="iconfont icon-bbs tab-icon" slot="icon"></i>
      討論區
    </mt-tab-item>
    <mt-tab-item id="user" @click.native="toArea('User')">
      <i class="iconfont icon-user tab-icon" slot="icon"></i>
      會員中心
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  data() {return {
  }},
  methods: {
    toArea(name) {
      this.$router.push({ name }).catch( ()=>{} )
    }
  },
  computed: {
    area: {
      get() { return this.$route.path.split("/")[1] },
      set() {} 
    }
  },
}
</script>

<style>
.mint-tab-item{
  color: #666;
}
.tab-icon{
  font-size: 24px !important;
}
</style>

