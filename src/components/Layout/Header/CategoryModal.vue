<template>
  <div class="fixed w-full h-screen z-100 bg-white left-0 top-0">
    <!-- Modal Header -->
    <div class="h-24 px-6 flex">
      <div
        @click="closeModal"
        class="categoryButton animate-slideButton flex focus:outline-none cursor-pointer items-center text-sm"
      >
        <div class="categoryButton__icon bg-orange-500 bg-opacity-10 w-12 h-12 mr-2 flex justify-center items-center rounded-full transition-all">
          <i class="icon icon-categoryClose"></i>
        </div>
        <div class="text-orange-500 font-semibold">Kategoriler</div>
      </div>
    </div>

    <!-- Modal Content -->
    <div class="container mx-auto">
      <div class="mt-6 text-center text-gray-500 text-2xl">
        Her ihtiyacına uygun 25 milyondan fazla ürün çeşidi burada!
      </div>
      <div class="flex flex-wrap justify-center mt-10">
        <template v-for="item in categories">
          <div class="w-1/5 px-2.5 mb-5">
            <div class="flex flex-col items-center p-4 w-full rounded-lg shadow-categoryCard border-2 border-transparent hover:border-orange-500 transition-colors cursor-pointer">
              <img class="w-24 h-24 object-center object-cover" :src="require(`../../../assets/media/category/${item.image}`)" :alt="item.title">
              <span class="h-8 text-sm font-semibold text-gray-600 w-full flex justify-center items-center">{{ item.title }}</span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        categories: [
          {
            title: "Elektronik",
            image: "1.png"
          },
          {
            title: "Moda",
            image: "2.png"
          },
          {
            title: "Ev, Yaşam, Kırtasiye, Ofis",
            image: "3.png"
          },
          {
            title: "Oto, Bahçe, Yapı Market",
            image: "4.png"
          },
          {
            title: "Anne, Bebek, Oyuncak",
            image: "5.png"
          },
          {
            title: "Spor, Outdoor",
            image: "6.png"
          },
          {
            title: "Kozmetik, Kişisel Bakım",
            image: "7.png"
          },
          {
            title: "Süpermarket, Pet Shop",
            image: "8.png"
          },
          {
            title: "Kitap, Müzik, Film, Hobi",
            image: "9.png"
          }
        ]
      }
    },
    methods: {
      closeModal() {
        this.$emit("close", true);
      }
    },
  }
</script>

<style scoped>

</style>
