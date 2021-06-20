<template>
  <div class="flex flex-col justify-center items-center">
    <div class="mb-4 text-sm text-gray-500">Toplam {{ listProductCount }} / {{ totalProductCount >= 10000 ? '10000+' : totalProductCount }} ürün</div>
    <div class="w-64 h-2 rounded-full bg-gray-200 overflow-hidden">
      <div class="rounded-full bg-gray-700 h-full min-w-[10px] transition-all !duration-300" :style="{ width: (listProductCount*100)/totalProductCount + '%' }"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      listProductCount: Number,
      totalProductCount: Number,
      loaded: {
        type: Boolean,
        default: true
      }
    },
  }
</script>

<style scoped>

</style>
