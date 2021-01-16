<template>
  <div class="relative">
    <!-- Member Login -->
    <div
      v-if="$store.state.isLogin"
      class="h-10 w-10 lg:h-12 lg:w-12 ml-0 lg:ml-8 flex-none bg-gray-100 hover:bg-orange-500 hover:bg-opacity-10 hover:text-orange-500 text-gray-700 rounded-full flex items-center justify-center cursor-pointer transition-all"
    >
      <span class="leading-min text-sm lg:text-base font-bold lg:font-normal">BA</span>
    </div>

    <!-- Member Not Login -->
    <div
      v-else
      class="h-10 lg:h-12 flex items-center px-2 lg:px-4 rounded-full hover:bg-gray-100 transition-all cursor-pointer"
    >
      <i class="icon icon-user"></i>
      <span class="hidden lg:block text-gray-700 text-sm font-semibold ml-3.5">Hesabım</span>
    </div>
  </div>
</template>
