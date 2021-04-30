<template>
  <div>
    <template v-for="item in links">
      <router-link :to="item.link" class="flex items-center px-4 rounded-full hover:bg-gray-100 h-12 transition-all">
        <span class="flex relative">
          <span class="absolute -top-3.5 -right-3.5 p-0.5 h-6 w-6 font-semibold text-white rounded-full bg-orange-500 flex items-center justify-center text-[11px] border-2 border-white" v-if="item.badge">{{ item.badge }}</span>
          <i class="icon" :class="'icon-' + item.icon"></i>
        </span>
        <span class="text-gray-700 text-sm font-semibold ml-3.5">{{ item.title }}</span>
      </router-link>
    </template>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          {
            icon: "cart",
            title: "Sepetim",
            badge: 2,
            link: "/"
          },
          {
            icon: "box",
            title: "Siparişlerim",
            link: "/"
          }
        ]
      }
    },
  }
</script>
