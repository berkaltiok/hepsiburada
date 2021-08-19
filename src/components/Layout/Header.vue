<template>
  <header class="w-full shadow select-none relative z-100">
    <div class="lg:h-24 p-2 lg:px-8 flex flex-wrap lg:flex-nowrap items-center">
      <!-- Logo -->
      <router-link to="/" class="h-10 lg:h-6 mr-auto lg:mr-6 pl-2 py-2.5 lg:p-0"><Logo class="w-[104px] md:w-auto"/></router-link>

      <!-- Category Button -->
      <Category class="hidden lg:flex"/>

      <!-- Search -->
      <Search class="flex-auto lg:flex-1 order-last lg:order-none"/>

      <!-- Location -->
      <Location class="ml-2 lg:ml-0 z-30"/>

      <!-- Actions -->
      <Actions class="hidden lg:flex"/>

      <!-- Profile -->
      <Member class="ml-2 lg:ml-0 z-30"/>
    </div>
    <div class="h-2 hidden lg:flex" v-if="bar">
      <div class="w-[11%] h-full bg-[#7622da]"></div>
      <div class="w-[18%] h-full bg-[#47c6eb]"></div>
      <div class="w-[31%] h-full bg-orange-500"></div>
      <div class="w-[15%] h-full bg-[#f59f28]"></div>
      <div class="w-[13%] h-full bg-[#6b1e5b]"></div>
      <div class="w-[12%] h-full bg-[#45b794]"></div>
    </div>
  </header>
</template>

<script>
  import Logo from "@/components/Layout/Header/Logo";
  import Search from "@/components/Layout/Header/Search";
  import Member from "@/components/Layout/Header/Member";
  import Actions from "@/components/Layout/Header/Actions";
  import Category from "@/components/Layout/Header/Category";
  import Location from "@/components/Layout/Header/Location";

  export default {
    components: {
      Logo,
      Category,
      Search,
      Actions,
      Member,
      Location
    },
    props: {
      bar: {
        type: Boolean,
        default: true
      },
    },
  }
</script>

<style scoped>

</style>
