<template>
  <div class="dropdown relative" v-on-clickaway="closeMenu">
    <button
      @click="toggleMenu"
      class="dropdown__button bg-white rounded-lg h-[46px] border border-gray-200 px-4 flex items-center outline-none focus:outline-none transition-colors !duration-300 select-none"
      :class="{ 'text-orange-500' : value !== null }"
    >
      <span class="mr-2 text-sm font-semibold tracking-tight">Sıralama</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        fill='currentColor'
        class="fill-current text-gray-700 transition-all !duration-300 transform"
        :class="{ 'text-orange-500' : value !== null, 'rotate-180' : isOpen }"
      >
        <g fill-rule='evenodd'>
          <path d='M.262 0h20v20h-20z' fill="transparent"/>
          <path d='M8.352 8.333c-.617 0-1.01.082-1.18.244-.254.244-.325.853 0 1.179l2.5 2.5a.836.836 0 001.18 0l2.5-2.5c.325-.326.259-.935 0-1.179-.174-.162-.567-.244-1.18-.244h-3.82z'/>
        </g>
      </svg>
    </button>
    <ul v-show="isOpen" class="dropdown__list absolute mt-2 right-0 bg-white rounded-lg z-10 min-w-[260px] p-2">
      <li
        class="flex items-center h-12 px-4 hover:bg-gray-100 bg-opacity-80 rounded-lg transition-colors duration-300 cursor-pointer hover:text-orange-500 font-medium select-none"
        @click="selectOption(null)"
        v-if="value !== null"
      >Varsayılan</li>
      <li
        v-for="(option, key) in options"
        class="flex items-center h-12 px-4 hover:bg-gray-100 bg-opacity-80 rounded-lg transition-colors duration-300 cursor-pointer hover:text-orange-500 font-medium select-none"
        :class="{ 'text-orange-500 !bg-orange-100' : value === key }"
        @click="selectOption(key)"
      >
        <span class="flex-1">{{ option }}</span>
        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' v-if="value === key">
          <path fill='#FF6000' d='M13.18 1.427L5.133 12.925a.176.176 0 01-.141.076.172.172 0 01-.142-.07L2.8 10.2a1 1 0 00-1.6 1.2l2.048 2.73a2.168 2.168 0 001.776.87 2.17 2.17 0 001.748-.93l8.047-11.497a.999.999 0 10-1.638-1.146z' fill-rule='evenodd'/>
        </svg>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mixin as clickaway } from 'vue-clickaway';

  export default {
    mixins: [ clickaway ],
    props: {
      value: {
        required: true
      },
      options: {
        type: Array|Object,
        required: true
      }
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      },
      closeMenu() {
        this.isOpen = false;
      },
      selectOption(key) {
        this.closeMenu();
        this.$emit('input', key)
      }
    },
    data() {
      return {
        isOpen: false
      }
    },
  }
</script>

<style scoped lang="scss">
  .dropdown {
    &__button {
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .08);
    }
    &__list {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.16);
    }
  }
</style>
