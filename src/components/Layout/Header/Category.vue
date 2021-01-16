<template>
  <div>
    <!-- Category Modal Button -->
    <div
      @click="openCategory = !openCategory"
      class="categoryButton flex focus:outline-none cursor-pointer items-center text-sm"
    >
      <div class="categoryButton__icon w-12 h-12 mr-2 flex justify-center items-center rounded-full transition-all">
        <i class="icon icon-category"></i>
      </div>
      <div class="text-gray-700 font-semibold">Kategoriler</div>
    </div>

    <!-- Category Modal -->
    <div v-if="openCategory" class="fixed w-full h-screen z-100 bg-white left-0 top-0">
      <div class="h-24 px-6 flex">
        <div
          @click="openCategory = !openCategory"
          class="categoryButton animate-slideButton flex focus:outline-none cursor-pointer items-center text-sm"
        >
          <div class="categoryButton__icon bg-orange-500 bg-opacity-15 w-12 h-12 mr-2 flex justify-center items-center rounded-full transition-all">
            <i class="icon icon-categoryClose"></i>
          </div>
          <div class="text-orange-500 font-semibold">Kategoriler</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        openCategory: false
      }
    },
    watch: {
      openCategory: (open) => {
        let bodyClassList = document.body.classList;
        (open) ?
          bodyClassList.add("overflow-hidden") :
          bodyClassList.remove("overflow-hidden");
      }
    }
  }
</script>

<style scoped lang="scss">
  .categoryButton {
    &:hover > &__icon {
      @apply bg-gray-100;
    }
  }
</style>
