<template>
  <div>
    <!-- Category Modal Button -->
    <div
      @click="openCategory = !openCategory"
      class="group flex focus:outline-none cursor-pointer items-center text-sm"
    >
      <div class="group-hover:bg-gray-100 w-12 h-12 mr-2 flex justify-center items-center rounded-full transition-all">
        <i class="icon icon-category"></i>
      </div>
      <div class="text-gray-700 font-semibold">Kategoriler</div>
    </div>

    <!-- Category Modal -->
    <CategoryModal v-if="openCategory" @close="openCategory = !openCategory"/>
  </div>
</template>

<script>
  import CategoryModal from "@/components/Layout/Header/CategoryModal";

  export default {
    components: {
      CategoryModal
    },
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
