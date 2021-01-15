<template>
  <div class="searchBar cursor-text flex flex-1 w-full h-12 relative rounded-full bg-gray-100 hover:bg-white hover:shadow-search mx-8 transition-all">
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
      class="searchBar__input w-full h-full focus:outline-none bg-transparent text-sm font-semibold text-gray-700 text-opacity-95 z-30"
      :class="modal ? 'pl-3.5 pr-60 open' : 'pl-12 pr-6'"
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
    <!-- /Search Input -->

    <!-- Search Modal -->
    <div v-show="input && modal" class="h-12 absolute z-50 h-full top-0 right-3 inline-flex items-center text-sm text-gray-400 w-38 orange-500 overflow-hidden">
      <div class="flex items-center mr-4 text-xs cursor-default">
        Aramak için enter'a bas
        <i class="icon icon-keyboardReturn ml-1.5"></i>
      </div>
      <i class="icon icon-circleDismiss cursor-pointer" @click="inputClear()"></i>
    </div>
    <div class="searchBar__modal absolute -left-4 -right-4 rounded-2xl bg-white z-20 pt-12 pb-4" v-show="modal">
      <div class="pt-2 px-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ea explicabo in inventore minima, minus ut. Dolore eos, et ex, impedit laborum molestiae non odio porro quas suscipit ut vel.
      </div>
    </div>
    <!-- /Search Modal -->
  </div>
</template>

<script>
  export default {
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
        this.modal = false;
      },
      inputClear() {
        this.input = "";
        this.$refs.searchInput.focus();
      }
    },
  }
</script>

<style scoped lang="scss">
  .searchBar {
    &__modal {
      top: -1px;
      box-shadow: 0 2px 16px 0 rgba(0,0,0,.08);
    }
  }
</style>
