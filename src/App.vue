<template>
  <div>
    <Header v-if="layout.header" :bar="layout.bar"/>
    <router-view/>
  </div>
</template>

<script>
  import Header from "@/components/Layout/Header";

  export default {
    data() {
      return {
        scrollTop: 0,
        bars: false,
        layoutBase: {
          header: false,
          bar: true,
          footer: false
        },
        layout: {}
      }
    },
    created() {
      let that = this;

      // Set Layout Elements
      this.layout = { ...this.layoutBase }

      // Set Screen Size
      that.screenSize();
      window.addEventListener('resize', function () {
        that.screenSize();
      });

      // Detect iPhone Bars
      let iPhone = /iPhone/.test(navigator.userAgent) && !window.MSStream
      let aspect = window.screen.width / window.screen.height
      if (iPhone && aspect.toFixed(3) === "0.462") {
        that.bars = true;
      }
    },
    components: {
      Header
    },
    methods: {
      screenSize() {
        document.documentElement.style.setProperty('--app-height', `${document.documentElement.clientHeight}px`)
        document.documentElement.style.setProperty('--app-width', `${document.documentElement.clientWidth}px`)
      }
    },
    watch: {
      $route(to, from) {
        this.layout = {...this.layoutBase, ...to.meta}
      }
    }
  }
</script>

<style lang="scss">
  @tailwind base;
  @tailwind components;

@import "./assets/scss/main";

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: .4s;
    transition-property: opacity;
    transition-timing-function: ease-in-out;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

  .transition {
    &-search {
      transition-property: background-color, border-color, color, fill, stroke, box-shadow;
    }
    &-all, &-shadow, &-colors, &-search {
      transition-timing-function: ease-in-out;
      transition-duration: .15s;
    }
  }
  @tailwind utilities;
</style>
