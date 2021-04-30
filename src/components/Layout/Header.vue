<template>
  <header class="w-full shadow select-none relative z-100">
    <div class="lg:h-24 p-2 lg:px-8 flex flex-wrap lg:flex-nowrap items-center">
      <!-- Logo -->
      <a href="#" class="h-10 lg:h-6 mr-auto lg:mr-6 pl-2 py-2.5 lg:p-0"><Logo class="w-[114px] md:w-auto"/></a>
      <!-- /Logo -->

      <!-- Category Button -->
      <Category class="hidden lg:flex"/>

      <!-- Search -->
      <Search class="flex-auto lg:flex-1 order-last lg:order-none"/>

      <!-- Actions -->
      <Actions class="hidden lg:flex"/>

      <!-- Profile -->
      <Member class="ml-2 lg:ml-0 z-30"/>
    </div>
    <div class="h-2 hidden lg:flex">
      <div class="w-[11%] h-full bg-purple-700"></div>
      <div class="w-[18%] bg-blue-400"></div>
      <div class="w-[31%] bg-orange-500"></div>
      <div class="w-[15%] h-full bg-yellow-500"></div>
      <div class="w-[13%] h-full bg-pink-900"></div>
      <div class="w-[12%] h-full bg-green-400"></div>
    </div>
  </header>
</template>

<script>
  import Logo from "@/components/Layout/Header/Logo";
  import Search from "@/components/Layout/Header/Search";
  import Member from "@/components/Layout/Header/Member";
  import Actions from "@/components/Layout/Header/Actions";
  import Category from "@/components/Layout/Header/Category";

  export default {
    components: {
      Logo,
      Category,
      Search,
      Actions,
      Member
    },
  }
</script>

<style scoped>

</style>
