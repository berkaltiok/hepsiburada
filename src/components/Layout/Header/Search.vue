<template>
  <div
    ref="searchBar"
    tabindex="0"
    v-on-clickaway="inputFocusOut"
    class="searchBar focus:outline-none cursor-text flex w-full h-12 relative border border-gray-200 lg:border-0 rounded-lg lg:rounded-full bg-white lg:bg-gray-100 lg:hover:bg-white shadow-searchMobile lg:shadow-none lg:hover:shadow-search m-2 lg:my-0 lg:mx-8 transition-search"
  >
    <!-- Search Input -->
    <label for="search" class="absolute h-full w-12 flex items-center justify-center pl-1 flex-none">
      <i class="icon icon-search"></i>
    </label>
    <input
      required
      ref="searchInput"
      type="text"
      id="search"
      autocomplete="off"
      class="w-full h-full focus:outline-none bg-transparent font-semibold text-gray-700 text-opacity-95 z-30"
      :class="modal ? 'pl-3.5 pr-60 open text-2xl' : 'pl-12 pr-6 text-sm'"
      @keydown="inputFocusIn"
      @focusin="inputFocusIn"
      @click="inputFocusIn"
      @keydown.esc="inputFocusOut"
      v-model="input"
    >
    <div
      v-show="!input"
      class="pl-12 absolute z-0 h-full top-0 left-0 flex items-center text-sm text-gray-400 w-38 orange-500 w-full overflow-hidden"
    >
      <span class="whitespace-nowrap">Ürün, kategori veya marka ara</span>
    </div>

    <!-- Search Modal -->
    <SearchModal v-model="input" :open="modal" @input="inputFocus"/>
  </div>
</template>

<script>
  import { mixin as clickaway } from 'vue-clickaway';
  import SearchModal from "@/components/Layout/Header/SearchModal";

  export default {
    mixins: [ clickaway ],
    components: {
      SearchModal
    },
    data() {
      return {
        input: "",
        modal: false
      }
    },
    methods: {
      inputFocusIn() {
        this.modal = true;
      },
      inputFocusOut() {
        this.$refs.searchBar.focus();
        this.modal = false;
      },
      inputFocus() {
        this.$refs.searchInput.focus();
      }
    },
  }
</script>
