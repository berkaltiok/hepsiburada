<template>
  <div>
    <template v-for="item in links">
      <router-link :to="item.link" class="flex items-center px-4 rounded-full hover:bg-gray-100 h-12 transition-all">
        <i class="icon" :class="'icon-' + item.icon"></i>
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
