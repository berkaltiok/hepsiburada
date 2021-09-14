<template>
  <div
    class="slider hidden lg:block relative h-[540px] z-0 select-none"
    @mouseleave="startAutoplay()"
    @mouseenter="stopAutoplay()"
    :style="{ '--item-color': activeItem.color, '--item-color-rgb': convertRGB(activeItem.color) }"
  >
    <!-- Category -->
    <div class="slider__category absolute flex justify-center w-full space-x-3 pt-[18px] z-20">
      <button
        class="slider__category-button"
        v-for="(button, key) in slider"
        :class="{ 'active': active.category === key, 'hover': hovered === key }"
        :key="key"
        @click="changeCategory(key)"
      >
        {{ button.title }}
      </button>
    </div>

    <div v-for="(category, categoryKey) in slider" :key="categoryKey" v-if="active.category === categoryKey">
      <!-- Content -->
      <div class="h-full">
        <div
          class="h-full pt-[64px] pb-[90px] absolute top-0 w-full transition-all opacity-0"
          v-for="(item, key) in category.items"
          :class="{ 'opacity-100': active.item === key }"
          :key="key"
        >
          <div class="slider__background absolute w-full h-full max-w-[1920px] mx-auto my-0 top-0 left-0 right-0 z-0">
            <img class="w-full h-full object-cover pointer-events-none" :src="item.images.background" :alt="item.content.title" draggable="false">
          </div>
          <div class="slider__card flex w-full h-full relative mx-auto rounded-lg bg-white z-10">
            <div class="flex flex-col items-start flex-1 pt-14 px-12 pb-12 tracking-[.3px]">
              <div class="min-h-[150px] flex flex-col justify-center">
                <div class="text-[32px] font-medium leading-[40px] line-clamp-2 my-1" :class="{ 'order-2' : !item.content.bold }">{{ item.content.bold ? item.content.title : item.content.text }}</div>
                <div class="text-[24px] font-light leading-[30px] line-clamp-2 my-1">{{ !item.content.bold ? item.content.title : item.content.text }}</div>
              </div>
              <a
                class="slider__card-button inline-flex items-center justify-center mt-6"
                :href="item.link"
                :style="{ backgroundColor: item.content.button.color.default, '--background-hover': item.content.button.color.hover }"
              >
                {{ item.content.button.text }}
              </a>
              <div class="mt-auto text-xs text-gray-500" v-if="item.content.info">{{ item.content.info }}</div>
            </div>
            <router-link to="/" class="p-1 w-[680px] flex-none">
              <div class="bg-gray-300 flex rounded-md overflow-hidden h-full">
                <img :src="item.images.card" :alt="item.content.title" class="pointer-events-none" draggable="false">
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <div class="absolute flex justify-center w-full bottom-0 pb-[28px] z-20">
        <div class="flex items-center relative px-4">
          <button
            @click="prevItem()"
            @mouseover="enterNavigationButton('prev')"
            @mouseout="leaveNavigationButton()"
            v-if="slider[active.category - 1] || category.items[active.item - 1]"
            class="slider__navigation-button right-[100%] opacity-0"
            :class="{
            'opacity-70 hover:opacity-100': slider[active.category - 1] || category.items[active.item - 1],
            'opener': slider[active.category - 1] && active.item === 0
          }"
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='15' height='14' viewBox="0 0 17 16" fill='none'><path d='M15.531 8H1.47m6.561 6.682L1.47 8l6.56-6.682' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/></svg>
            <span v-if="slider[active.category - 1]" v-show="active.item === 0">{{ slider[active.category - 1].title }}</span>
          </button>
          <div class="inline-flex items-center space-x-4 mx-auto">
            <div
              class="slider__navigation-item"
              v-for="(item, key) in category.items"
              :class="{ 'active': active.item === key }"
              :key="key"
              @click="changeItem(key)"
            >
              <img class="h-full w-full object-cover object-center pointer-events-none" :src="item.images.thumbnail" :alt="item.content.title" draggable="false">
            </div>
          </div>
          <button
            @click="nextItem()"
            @mouseover="enterNavigationButton('next')"
            @mouseout="leaveNavigationButton()"
            class="slider__navigation-button left-[100%] opacity-70 hover:opacity-100"
            :class="{ 'opened': !lastItem && category.items.length === (active.item + 1) }"
            v-if="!lastItem"
          >
            <span v-if="!lastItem && category.items.length === (active.item + 1)">{{ slider[active.category + 1].title }}</span>
            <svg xmlns='http://www.w3.org/2000/svg' width='15' height='14' viewBox="0 0 17 16" fill='none'><path d='M1.469 8H15.53m-6.561 6.682L15.53 8 8.97 1.318' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/></svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        timer: null,
        hovered: null,
        active: {
          category: 0,
          item: 0
        }
      }
    },
    methods: {
      startAutoplay() {
        this.timer = setInterval(() => {
          this.nextEvent()
        }, 6000000)
      },
      stopAutoplay() {
        clearInterval(this.timer);
        this.timer = null;
      },
      changeCategory(id) {
        if (this.active.category === id) return
        this.active.category = id;
        this.changeItem(0);
      },
      changeItem(id) {
        this.active.item = id;
        this.hovered = null;
      },
      prevItem() {
        let slider = this.slider;
        if (slider[this.active.category].items[this.active.item - 1]) {
          this.active.item--;
        } else {
          this.changeItem(slider[this.active.category - 1].items.length - 1);
          if (slider[this.active.category - 1]) this.active.category--;
        }
      },
      nextEvent() {
        if (this.slider[this.active.category].items[this.active.item + 1]) {
          this.active.item++;
        } else {
          if (this.slider[this.active.category + 1]) this.active.category++;
          this.changeItem(0);
        }
      },
      nextItem() {
        this.nextEvent();
      },
      enterNavigationButton(method) {
        if (
          (this.active.item === 0 && method === "prev") ||
          (this.active.item === this.activeCategory.items.length - 1 && method === "next")
        ) this.hovered = this.active.category + (method === "next" ? 1 : -1);
      },
      leaveNavigationButton() {
        this.hovered = null;
      },
      convertRGB(color) {
        color = color.replace('#', '')
        const r = parseInt(color.substring(0, 2), 16)
        const g = parseInt(color.substring(2, 4), 16)
        const b = parseInt(color.substring(4, 6), 16)
        return `${r}, ${g}, ${b}`
      }
    },
    computed: {
      activeCategory() {
        return this.slider[this.active.category];
      },
      activeItem() {
        return this.activeCategory.items[this.active.item];
      },
      lastItem() {
        return !this.slider[this.active.category + 1] && !this.slider[this.active.category].items[this.active.item + 1]
      },
      slider() {
        return this.$store.state.slider
      }
    },
    created() {
      let that = this;
      this.startAutoplay();

      document.addEventListener("visibilitychange", function() {
        if (document.hidden){
          that.stopAutoplay();
        } else {
          that.startAutoplay();
        }
      });
    },
    beforeDestroy() {
      clearInterval(this.timer)
    }
  }
</script>

<style scoped lang="scss">
  .slider {
    &__category {
      &-button {
        @apply relative h-8 px-4 rounded-full outline-none focus:outline-none text-sm font-medium whitespace-nowrap;
        @apply ring-2 ring-inset ring-transparent;
        transition: all .2s ease;
        color: var(--item-color);

        &:after {
          content: "";
          left: calc(50% - 3px);
          border-top: 3px solid transparent;
          border-left: 3px solid transparent;
          border-right: 3px solid transparent;
          transition: all .2s ease;
          @apply absolute w-0 h-0 opacity-0 bottom-[-3px];
        }
        &.active {
          @apply bg-white text-gray-600 ring-0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, .08);

          &:after {
            @apply opacity-100;
            border-top-color: #fff !important;
          }
        }
        &.hover {
          --tw-ring-color: rgba(var(--item-color-rgb), .3);

          &:after {
            @apply opacity-100 bottom-[-4px];
            left: calc(50% - 4px);
            border-top: 4px solid rgba(var(--item-color-rgb), .3);
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
          }
        }
      }
    }
    &__background {
      &::before {
        content: "";
        @apply absolute left-0 top-0 right-0 h-[88px] z-[1];
        background-image: linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,.24));
      }
    }
    &__card {
      @apply max-w-[1088px];
      box-shadow: 0 6px 26px rgba(0, 0, 0, .16);

      &-button {
        @apply text-sm rounded-full font-medium text-white py-2.5 px-6 overflow-ellipsis overflow-hidden max-w-[300px] whitespace-nowrap tracking-[-.25px] transition-colors;

        &:hover {
          background-color: var(--background-hover) !important;
        }
      }
    }
    &__navigation {
      &-button {
        @apply flex items-center justify-center absolute border-2 px-4 mx-3 rounded-full h-[36px] outline-none focus:outline-none w-[56px] transition-all;
        color: var(--item-color);
        border-color: var(--item-color);
        transition: all .2s ease;

        span {
          @apply invisible max-w-[150px] overflow-hidden whitespace-nowrap text-sm font-medium tracking-[-.15px] opacity-0;
          color: var(--item-color);
        }
        svg {
          @apply transition-all flex-none;
          transition: margin .2s ease;
          stroke: var(--item-color);
        }
        &.opened {
          @apply w-[200px];

          svg {
            @apply ml-2;
          }
          span {
            @apply visible opacity-100;
          }
        }
        &.opener {
          span {
            @apply w-0;
          }
          &:hover {
            @apply w-[200px];

            svg {
              @apply mr-2;
            }
            span {
              @apply w-auto opacity-100 visible;
            }
          }
        }
      }
      &-item {
        @apply w-14 h-10 rounded-md overflow-hidden cursor-pointer bg-gray-200 transition-all ring-2 ring-transparent;

        &.active {
          @apply ring-white;
          --tw-shadow: 0 2px 3px rgb(0, 0, 0, .15);
        }
      }
    }
  }
</style>
