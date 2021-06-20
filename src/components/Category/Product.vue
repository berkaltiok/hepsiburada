<template>
  <router-link
    :to="data.link"
    tag="div"
    class="card group flex flex-col rounded-lg cursor-pointer transition-all !duration-300 h-100"
  >
    <div @mouseleave="activeImage = 0">
      <div class="px-3 pt-4 mb-3 text-xs text-center text-gray-600 line-clamp-2 leading-[18px]">{{ data.name }}</div>
      <div class="pt-[100%] w-full relative">
        <template v-if="data.images.length > 1">
          <div class="absolute top-0 bottom-0 left-0 ring-0 h-full w-full z-20 flex">
            <div class="flex-1 h-full" v-for="(image, key) in data.images" @mouseenter="activeImage = key"></div>
          </div>
          <div class="absolute bottom-[-6px] left-0 ring-0 z-10 w-full hidden group-hover:flex justify-center items-center h-[6px]">
            <div
              class="w-3 h-[2px] bg-gray-300 mx-0.5 transition-width !duration-500 rounded-full"
              :class="{ '!w-6' : key === activeImage }"
              v-for="(image, key) in data.images"
            ></div>
          </div>
        </template>
        <div class="absolute top-0 bottom-0 left-0 ring-0 h-full w-full z-10 overflow-hidden bg-gray-200">
          <template v-for="(image, key) in data.images">
            <img
              v-if="key === activeImage"
              class="h-full w-full object-cover object-center"
              :src="image"
              :alt="data.name"
              :class="{ 'transition-transform !duration-300 transform group-hover:scale-105': data.images.length === 1 }"
            >
          </template>
        </div>
      </div>
      <div class="p-4 pt-0 mt-3 relative z-40">
        <div class="h-[84px]">
          <div class="text-green-400 text-[10px] leading-4 h-4 font-bold">
            <template v-if="data.priceInfo.discountType === 'ExtraDiscount'">Sepette <span class="text-xs">%{{ data.priceInfo.discountRate }}</span> indirimli fiyat</template>
          </div>
          <div
            class="text-[18px] leading-5 font-bold tracking-[-.3px]"
            :class="{ 'text-green-400' : data.priceInfo.discountType === 'ExtraDiscount' }"
          >
            {{ data.priceInfo.price }} <span class="text-sm">TL</span>
          </div>
          <div class="flex mt-1">
            <s class="text-gray-400 block text-sm leading-4">{{ data.priceInfo.originalPrice }} <span class="tracking-[-.3px]">TL</span></s>
            <span class="text-red-500 ml-1 leading-4 tracking-[-.14px] font-bold text-xs" v-if="data.priceInfo.discountType === 'Discount'">%{{ data.priceInfo.discountRate }}</span>
          </div>
          <div class="mt-2 text-xs flex items-center h-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" class="mr-1">
              <path fill="#F69F29" d="M11.777 4.364c-.109-.293-.389-.489-.702-.49H8.03c-.106 0-.2-.066-.236-.167L6.702.611C6.592.318 6.313.124 6 .124c-.313 0-.593.194-.702.487l-.003.008-1.09 3.088c-.035.1-.13.167-.236.167H.925c-.316 0-.598.198-.705.494-.108.297-.019.63.224.832l2.591 2.15c.08.066.11.174.078.272l-1.089 3.265c-.103.31.006.65.27.843.264.193.622.192.885-.001l2.673-1.96c.088-.064.208-.064.295 0l2.672 1.96c.264.193.622.194.886.002.265-.193.374-.534.27-.844L8.887 7.619c-.033-.097-.002-.205.077-.271l2.597-2.153c.24-.204.326-.536.216-.83z"></path>
            </svg>
            <div class="leading-5 font-semibold">4,4</div>
            <div class="w-[3px] h-[3px] rounded-full bg-gray-300 mx-1 block"></div>
            <div class="flex">
              <span class="font-bold mr-0.5">63</span>
              <span>Değerlendirme</span>
            </div>
          </div>
        </div>
        <router-link
          tag="button"
          class="bottom-4 left-0 right-0 px-4 w-full pt-1.5 absolute transition-all !duration-100 invisible opacity-0 group-hover:opacity-100 group-hover:visible bg-white"
          :to="data.button.link"
          :class="data.button.class"
        >
          <button class="btn btn-primary h-[40px] text-sm">{{ data.button.text }}</button>
        </router-link>
      </div>
    </div>
  </router-link>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object|Array,
        required: true
      },
    },
    data() {
      return {
        activeImage: 0
      }
    },
  }
</script>

<style scoped lang="scss">
  .card {
    box-shadow: 0 1px 2px 0 rgba(black, .16);

    &:hover {
      box-shadow: 0 8px 32px 0 rgba(black, .08);
    }
  }
</style>
