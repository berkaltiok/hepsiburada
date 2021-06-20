<template>
  <div class="flex items-center">
    <template v-for="(item, key) in road">
      <router-link
        :to="item.link"
        class="text-[12px] font-bold text-gray-400 hover:text-gray-500 transition-colors mr-1"
        v-if="item.link"
      >
        {{ item.title }}
      </router-link>
      <div class="text-[12px] font-bold text-gray-400" v-else>{{ item.title }}</div>
      <svg
        v-if="key !== road.length - 1"
        class="stroke-current text-gray-200 h-3 w-3 mr-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
      </svg>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      road: {
        type: Array,
        required: true
      },
    },
  }
</script>
