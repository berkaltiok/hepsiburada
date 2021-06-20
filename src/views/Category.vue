<template>
  <div class="container mx-auto my-8 px-4 lg:px-8">
    <div class="text-[28px] font-bold tracking-[.3px]">Oto Paspas Fiyatları</div>
    <div class="flex items-center h-12 mb-8">
      <Breadcrumb :road="breadcrumb" class="flex-1"/>
      <Dropdown v-model="sorting.active" :options="sorting.list"/>
    </div>
    <div :class="{ 'grid lg:grid-cols-[230px,1fr] gap-5' : sidebar }">
      <div class="border border-gray-100 rounded-lg w-full h-[1000px]" v-if="sidebar"></div>
      <div class="w-full">
        <div class="grid gap-x-5 gap-y-6 grid-cols-1 sm:grid-cols-2" :class="[ sidebar ? 'md:grid-cols-3' : 'md:grid-cols-4' ]">
          <template v-for="item in products">
            <Product :data="item"/>
          </template>
        </div>
        <Pagination class="mt-12" :list-product-count="products.length" :total-product-count="products.length"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Breadcrumb from "@/components/Product/Breadcrumb";
  import Product from "@/components/Category/Product";
  import Dropdown from "@/components/Category/Dropdown";
  import Pagination from "@/components/Category/Pagination";

  export default {
    components: {
      Breadcrumb,
      Pagination,
      Dropdown,
      Product
    },
    data() {
      return {
        sidebar: true,
        breadcrumb: [
          { title: "Ana Sayfa", link: "/" },
          { title: "Yapı Market Bahçe Oto", link: "/" },
          { title: "Oto Aksesuarları", link: "/" },
          { title: "Oto Aksesuar Ürünleri", link: "/" },
          { title: "Oto Paspasları" }
        ],
        sorting: {
          active: null,
          list: [
            "En Çok Satanlar",
            "Değerlendirme Sayısı",
            "Artan Fiyat",
            "Azalan Fiyat",
            "En Yeniler",
            "Ürün Puanı"
          ]
        },
        products: [
          {
            link: "/product",
            name: "Burç Havuzlu Paspas 3D Siyah 5 Parça Üniversal Tüm Araçlar Için Uyumlu",
            images: [
              "https://productimages.hepsiburada.net/s/26/550/10161158815794.jpg",
              "https://productimages.hepsiburada.net/s/26/550/10161158783026.jpg",
              "https://productimages.hepsiburada.net/s/26/550/10161158848562.jpg"
            ],
            priceInfo: {
              price: 55.19,
              originalPrice: 59.99,
              discountRate: 8,
              discountType: "ExtraDiscount" // Discount|ExtraDiscount
            },
            review: {
              count: 60,
              rating: 4.8,
            },
            button: {
              link: "/",
              text: "Şimdi Satın Al",
              class: ""
            }
          },
        ]
      }
    },
  }
</script>

<style scoped>

</style>
