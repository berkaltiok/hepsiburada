<template>
  <div class="fixed w-full h-screen z-100 bg-white left-0 top-0">
    <!-- Modal Header -->
    <div class="h-24 px-6 flex" :class="{ 'border-b border-gray-200' : steps.step1.active !== null }">
      <div
        @click="closeModal"
        class="group animate-slideButton flex focus:outline-none cursor-pointer items-center text-sm"
      >
        <div class="group-hover:bg-gray-100 bg-orange-500 bg-opacity-10 w-12 h-12 mr-2 flex justify-center items-center rounded-full transition-all">
          <i class="icon icon-categoryClose"></i>
        </div>
        <div class="text-orange-500 font-semibold">Kategoriler</div>
      </div>
    </div>

    <!-- Modal Content -->
    <div class="container mx-auto" v-if="steps.step1.active === null">
      <div class="mt-6 text-center text-gray-500 text-2xl">
        <!-- TODO: Set SF Pro Display font -->
        Her ihtiyacına uygun 25 milyondan fazla ürün çeşidi burada!
      </div>
      <div class="flex flex-wrap justify-center mt-10">
        <template v-for="(item, key) in steps.step1.list">
          <div class="w-1/5 px-2.5 mb-5" @click="selectCategory(1, key)">
            <div class="flex flex-col items-center p-4 w-full rounded-lg shadow-categoryCard border-2 border-transparent hover:border-orange-500 transition-colors cursor-pointer">
              <img class="w-24 h-24 object-center object-cover" :src="require(`../../../assets/media/category/${item.image}`)" :alt="item.title">
              <span class="h-8 text-sm font-semibold text-gray-600 w-full flex justify-center items-center text-center">{{ item.title }}</span>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="mx-6 flex h-full" v-else>
      <template v-for="(step, stepKey, index) in steps">
        <div class="mt-4 w-56 h-full">
          <ul class="h-full border-r border-gray-100" v-if="step.type === 'mainCategory'">
            <template v-for="(item, key) in step.list">
              <li
                class="categoryList relative cursor-pointer flex items-center py-1 pr-3 mb-2 transition-all"
                :class="step.active === key ? 'text-orange-500 active' : 'text-gray-700 hover:text-orange-500'"
                @click="selectCategory(1, key)"
              >
                <img class="w-10 h-10 object-center object-cover" :src="require(`../../../assets/media/category/${item.image}`)" :alt="item.title">
                <span class="ml-3 text-sm font-semibold leading-4 w-full">{{ item.title }}</span>
              </li>
            </template>
          </ul>
          <template v-if="step.type !== 'mainCategory' && steps['step'+index].active !== null">
            <div class="min-h-[3.75rem] font-bold text-lg flex items-center pl-6 pr-4 text-gray-600 leading-5">
              {{ steps['step'+index].list[steps['step'+index].active].title }}
              <i class="icon icon-rightAngle w-2 ml-auto flex-none ml-2"></i>
            </div>
            <ul class="w-full px-2 pb-2 border-r border-gray-100 h-full">
              <router-link
                v-if="step.seeAll"
                to="#"
                tag="li"
                class="categoryAll group cursor-pointer mx-4 font-medium text-sm leading-tight border-b border-gray-200 hover:text-orange-500 transition-all h-12 flex items-center"
              >
                Tümünü Gör
                <i class="icon icon-rightArrow w-3 ml-2 transition-all transform group-hover:translate-x-1"></i>
              </router-link>
              <template v-for="(item, key) in step.list">
                <li
                  v-if="step.type !== 'link'"
                  class="categoryItem min-h-[3rem] py-1 pl-4 pr-2.5 flex items-center text-sm text-gray-700 hover:text-orange-500 cursor-pointer bg-white rounded-lg leading-snug transition-all"
                  :class="{'text-orange-500 bg-orange-500 bg-opacity-10' : step.active === key }"
                  @click="selectCategory(index + 1, key)"
                >
                  {{ item.title }}
                  <i
                    class="icon icon-rightAngle w-[.3125rem] ml-auto"
                    :class="{'hovered' : step.active === key }"
                  ></i>
                </li>
                <router-link
                  v-else
                  to="/category"
                  tag="li"
                  class="categoryItem min-h-[3rem] py-1 pl-4 pr-2.5 flex items-center text-sm text-gray-700 hover:text-orange-500 cursor-pointer bg-white rounded-lg leading-snug transition-all"
                >{{ item.title }}</router-link>
              </template>
            </ul>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: {
        step1: {
          active: null,
          type: "mainCategory",
          seeAll: false,
          list: [
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
          ],
        },
        step2: {
          active: null,
          type: "subCategory",
          seeAll: false,
          list: [
            { title: "Bilgisayar/Tablet" },
            { title: "Yazıcılar & Projeksiyon" },
            { title: "Telefon & Telefon Aksesuarları" },
            { title: "TV, Görüntü & Ses Sistemleri" },
            { title: "Beyaz Eşya" },
            { title: "Elektrikli Ev Aletleri" },
            { title: "Foto & Kamera" },
            { title: "Klima ve Isıtıcılar" },
            { title: "Oyun & Oyun Konsolları" }
          ]
        },
        step3: {
          active: null,
          type: "subCategory",
          seeAll: true,
          list: [
            { title: "Yazıcılar" },
            { title: "Sarf Malzemeleri" },
            { title: "Tüm Kategoriler" },
            { title: "Projeksiyon Cihazı" },
            { title: "Projeksiyon Ekipmanları" },
            { title: "Yurt Dışından" }
          ]
        },
        step4: {
          active: null,
          type: "link",
          seeAll: true,
          list: [
            { title: "Toner" },
            { title: "Kartuş" },
            { title: "Drum" },
            { title: "Şerit" },
            { title: "Yazıcı Kağıdı" }
          ]
        }
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit("close", true);
    },
    selectCategory(step, select) {
      let stepList = this.steps;
      this.steps["step"+step].active = select;
      Object.keys(Object.fromEntries(
        Object.entries(stepList).slice(step, stepList.length)
      )).forEach(item => {
        stepList[item].active = null;
      })
    }
  },
}
</script>

<style scoped lang="scss">
.categoryList {
  &::after {
    @apply flex bottom-0 absolute top-0 bg-transparent transition-all;
    content: "";
    right: -1px;
    width: 3px;
  }
  &:hover::after, &.active::after {
    @apply bg-orange-500;
  }
}
.categoryItem {
  &:hover i, i.hovered {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 12' fill='%23ff6000'%3E%3Cpath d='M7.75 6c0 .33-.142.646-.39.864L1.784 11.77a.924.924 0 01-1.22-1.386l4.877-4.29a.125.125 0 000-.188L.564 1.616A.924.924 0 011.784.23l5.574 4.904c.249.219.392.534.392.866z'/%3E%3C/svg%3E");
  }
}
.categoryAll:hover i {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 11' stroke='%23ff6000' fill='none'%3E%3Cpath d='M.375 5.5h11.25m-5.25 5.25l5.25-5.25L6.375.25' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round' stroke-width='.75'/%3E%3C/svg%3E");
}
</style>
