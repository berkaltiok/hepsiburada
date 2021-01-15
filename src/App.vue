<template>
  <div>
    <Header/>
    <router-view/>
  </div>
</template>

<script>
  import Header from "@/components/Layout/Header";

  export default {
    components: {
      Header
    },
  }
</script>

<style lang="scss">
  @import "./assets/scss/main";
</style>
