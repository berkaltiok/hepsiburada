<template>
  <div class="searchModal cursor-auto">
    <div v-show="input.length > 1 && open" class="h-12 absolute z-50 h-full top-0 right-2 inline-flex items-center text-sm text-gray-400 w-38 orange-500 overflow-hidden">
      <div class="flex items-center mr-4 text-xs cursor-default">
        Aramak için enter'a bas
        <i class="icon icon-keyboardReturn ml-1.5"></i>
      </div>
      <i class="icon icon-circleDismiss cursor-pointer" @click="$emit('clear', true)"></i>
    </div>
    <div v-show="open" class="searchModal__card absolute -left-4 -right-4 rounded-2xl bg-white z-20 pt-12 pb-4">
      <div v-if="input.length > 1">
        <ul class="pr-4 pl-4 pb-4 focus:outline-none" tabindex="-1" role="listbox">
          <template v-for="list in getCategory">
            <template v-for="item in list.categories">
              <router-link
                :to="item.link"
                tag="li"
                role="option"
                aria-selected="false"
                class="group flex w-full py-2 px-4 rounded-none bg-white rounded-full hover:bg-gray-100 transition-all flex items-center cursor-pointer"
              >
                <span class="text-gray-700 text-opacity-95 text-sm leading-4" v-html="highlightText(input, list.name)"/>
                <i class="icon icon-arrowRight mx-2 mt-0.5"></i>
                <span class="text-gray-500 text-xs leading-4"><strong class="group-hover:text-orange-500">{{ item.name }}</strong> içinde ara</span>
              </router-link>
            </template>
          </template>
          <template v-for="item in suggestions.brand">
            <router-link
              :to="item.link"
              tag="li"
              role="option"
              aria-selected="false"
              class="flex w-full py-2 px-4 rounded-none bg-white rounded-full hover:bg-gray-100 transition-all flex items-center cursor-pointer"
            >
              <span class="text-gray-700 text-opacity-95 text-sm flex-1 leading-4" v-html="highlightText(input, item.name)"/>
              <span class="ml-8 text-gray-500 text-opacity-80 leading-4 font-semibold text-xs">Marka</span>
            </router-link>
          </template>
          <template v-for="item in getKeywords">
            <router-link
              :to="item.link"
              tag="li"
              role="option"
              aria-selected="false"
              class="flex w-full py-2 px-4 rounded-none bg-white rounded-full hover:bg-gray-100 transition-all flex items-center cursor-pointer"
            >
              <span class="text-gray-700 text-opacity-95 text-sm flex-1 leading-4" v-html="highlightText(input, item.name)"/>
            </router-link>
          </template>
          <template v-for="item in suggestions.page">
            <router-link
              :to="item.link"
              tag="li"
              role="option"
              aria-selected="false"
              class="flex w-full py-2 px-4 rounded-none bg-white rounded-full hover:bg-gray-100 transition-all flex items-center cursor-pointer"
            >
              <span class="text-gray-700 text-opacity-95 text-sm flex-1 leading-4">{{ item.name }}</span>
              <span class="ml-8 text-gray-500 text-opacity-80 leading-4 font-semibold text-xs">{{ item.label }}</span>
            </router-link>
          </template>
        </ul>
        <div class="flex px-8 pb-2 justify-end space-x-4">
          <div class="flex items-center text-xs text-gray-400"><i class="icon icon-direction"></i> <span class="ml-3 leading-3 pt-0.5"><strong>Yön tuşları</strong> ile seçim</span></div>
          <div class="flex items-center text-xs text-gray-400"><i class="icon icon-close"></i> <span class="ml-3 leading-3 pt-0.5"><strong>Esc</strong> ile kapat</span></div>
        </div>
      </div>
      <div v-else class="text-xs leading-4 text-gray-400 pt-2 px-8">
        Aramaya başlamak için <strong>en az 2 karakter</strong> yazmalısınız
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      input: {
        type: String,
        required: true
      },
      open: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        suggestions: {
          keywords: [
            {
              name: "iphone 12 pro",
              categories: [
                { link: "#", name: "iphone 12 Pro" },
                { link: "#", name: "iPhone 11 Pro Max" },
                { link: "#", name: "Kılıflar" }
              ]
            },
            {
              link: "#",
              name: "iphone 11 kılıf",
              categories: null
            },
            {
              link: "#",
              name: "iphone 8 plus",
              categories: null
            },
            {
              link: "#",
              name: "iphone 7 plus",
              categories: null
            },
            {
              link: "#",
              name: "apple iphone se 2020",
              categories: null
            },
            {
              link: "#",
              name: "iphone 11 pro max",
              categories: null
            }
          ],
          page: [
            {
              name: "Dört Dörtlük Kampanya",
              label: "Kampanya",
              link: "#"
            }
          ],
          brand: [
            {
              name: "Iphisi",
              link: "#"
            }
          ],
        },
      }
    },
    methods: {
      highlightText(text, name) {
        return text ?
          name.replace(new RegExp('('+text+')','gi'), '<strong>$1</strong>')
          : name;
      }
    },
    computed: {
      getKeywords() {
        return this.suggestions.keywords.filter(item => item.categories === null);
      },
      getCategory() {
        return this.suggestions.keywords.filter(item => item.categories !== null);
      }
    },
  }
</script>

<style scoped lang="scss">
  .searchModal {
    &__card {
      top: -1px;
      box-shadow: 0 2px 16px 0 rgba(0,0,0,.08);
    }
  }
</style>
