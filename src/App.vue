<template>
  <div>
    <router-view></router-view>
    <Tarbar></Tarbar>
  </div>
</template>

<script>
  import Tarbar from "@/views/Tarbar.vue"
  export default {
    components: { Tarbar }
  }
</script>

<style>
  body{
    margin: 0;
  }
</style>
