<template>
  <div class="px-6 md:px-0 mt-6 mb-auto">
    <div class="social">
      <div class="leading-[30px] text-xl text-gray-600 font-semibold mb-0.5">Sosyal hesap ile giriş yap</div>
      <div class="text-sm text-gray-600">Hepsişurada'ya şifresiz giriş yapabilmek için Google, Apple veya Facebook hesabınızı bağlayabilirsiniz.</div>
      <div class="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 mt-6 gap-4">
        <template v-for="item in method">
          <router-link :to="item.link" class="w-full h-[50px] md:h-14 flex items-center justify-center border-2 border-gray-300 rounded-lg p-2 text-gray-600 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-200">
            <img :src="require('@/assets/images/auth/' + item.icon)" :alt="item.title" class="mr-[5px]">
            <span class="text-xs font-semibold pt-[1px]">{{ item.title }}</span>
          </router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      method: {
        type: Object|Array
      },
    },
  }
</script>

<style scoped lang="scss">
  .social {
    @apply p-8 max-w-[30rem] rounded-lg border border-gray-200 w-full text-center;
    background: url('../../assets/images/auth/background.svg') no-repeat;
    background-size: 100%;
  }
</style>
