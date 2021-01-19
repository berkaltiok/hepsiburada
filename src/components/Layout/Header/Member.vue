<template>
  <div class="relative" v-on-clickaway="closeMenu">
    <!-- Member Login -->
    <div
      v-if="$store.state.isLogin"
      class="h-10 w-10 lg:h-12 lg:w-12 ml-0 lg:ml-8 flex-none bg-gray-100 hover:bg-orange-500 hover:bg-opacity-10 hover:text-orange-500 text-gray-700 rounded-full flex items-center justify-center cursor-pointer transition-all"
      :class="{ 'bg-orange-500 bg-opacity-10 text-orange-500': menu.isOpen }"
      @click="toggleMenu"
    >
      <span class="leading-min text-sm lg:text-base font-bold lg:font-normal">BA</span>
    </div>

    <!-- Member Not Login -->
    <div
      v-else
      class="h-10 lg:h-12 flex items-center px-2 lg:px-4 rounded-full hover:bg-gray-100 transition-all cursor-pointer"
      :class="{ 'bg-gray-100': menu.isOpen }"
      @click="toggleMenu"
    >
      <i class="icon icon-user"></i>
      <span class="hidden lg:block text-gray-700 text-sm font-semibold ml-3.5">Hesabım</span>
    </div>

    <!-- Member Menu -->
    <div
      v-show="menu.isOpen"
      class="absolute right-0 w-72 rounded-lg shadow-memberMenu mt-2 text-sm z-10 bg-white"
    >
      <div class="flex space-x-2 p-4" v-if="!$store.state.isLogin">
        <template v-for="item in menu.auth">
          <router-link
            :to="item.link"
            tag="button"
            class="flex-1 bg-orange-500 bg-opacity-8 hover:bg-opacity-20 rounded-lg text-orange-500 h-10 tracking-tight font-semibold transition-all"
          >
            {{ item.title }}
          </router-link>
        </template>
      </div>
      <router-link
        to="#"
        tag="div"
        class="h-15 flex items-center cursor-pointer w-full"
        :class="$store.state.isLogin ? 'pl-6 pr-4 bg-gray-100 justify-between bg-gray-100' : 'justify-center bg-white border-t border-b border-gray-200'"
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='100' height='29' fill='#595956'>
          <path
            d='M3.524 10.769h5.335v3.307H0V.295h8.761v3.288H3.524v1.91h4.744v3.248H3.524v2.028m15.474-7.068h-4.942v2.244h4.843v3.406h-4.843v4.725h-3.524V.295h8.466v3.406m6.437 10.67c-1.457 0-2.664-.308-3.622-.925-.958-.617-1.628-1.45-2.008-2.5l3.012-1.752c.512 1.22 1.417 1.83 2.717 1.83 1.076 0 1.614-.305 1.614-.917 0-.403-.31-.728-.93-.975-.263-.109-.838-.291-1.728-.548-1.26-.368-2.257-.883-2.992-1.546-.735-.663-1.103-1.585-1.103-2.766 0-1.273.456-2.303 1.369-3.09C22.676.393 23.814 0 25.179 0c1.155 0 2.179.27 3.071.807.893.538 1.575 1.32 2.048 2.343l-2.953 1.732c-.433-1.023-1.149-1.535-2.146-1.535-.42 0-.738.086-.955.257a.802.802 0 00-.325.653c0 .304.16.561.482.772.32.212.946.456 1.876.733l1.605.578c.414.15.864.384 1.35.705.487.321.848.733 1.085 1.238.236.504.355 1.096.355 1.777 0 1.352-.48 2.409-1.437 3.17-.959.76-2.225 1.141-3.8 1.141m10.552-5.315h2.776l-1.398-4.685-1.378 4.685zm4.444 5.02l-.66-1.988h-4.69l-.595 1.988h-3.814L35.063.296H39.5l4.559 13.78H40.43zM52.662.295h3.504v13.781h-2.717l-4.862-6.93v6.93h-3.524V.295h2.736l4.863 6.93V.295m9.213 10.474h5.335v3.307h-8.859V.295h8.761v3.288h-5.237v1.91h4.745v3.248h-4.745v2.028m10.532-.099h4.745v3.406h-8.269V.295h3.524V10.67m9.548.099h5.336v3.307h-8.86V.295h8.761v3.288h-5.237v1.91H86.7v3.248h-4.745v2.028m10.532-7.225v3.09h1.95c.432.014.787-.124 1.062-.413.276-.289.414-.663.414-1.122 0-.46-.138-.833-.414-1.122-.275-.289-.63-.433-1.062-.433h-1.95zm3.663 10.532l-2.403-4.45h-1.26v4.45h-3.524V.296h5.513c1.404 0 2.582.449 3.533 1.348.952.899 1.428 2.037 1.428 3.415 0 .827-.21 1.585-.63 2.274a4.623 4.623 0 01-1.713 1.644l2.835 5.1h-3.78zm-78.932 5.58h1.436v2.728l1.232-2.728h1.58l-1.592 3.506 1.676 5.588h-1.508l-1.065-3.59-.323.706v2.884h-1.436v-9.094m12.528 7.299v-7.299h1.436v7.395c0 .323.215.538.538.538.324 0 .539-.215.539-.538v-7.395h1.436v7.3c0 1.196-.778 1.974-1.975 1.974-1.184 0-1.974-.79-1.974-1.975m12.983-7.299h1.436v7.754h2.034v1.34h-3.47v-9.094m13.94-1.113c0-.383.275-.658.658-.658.395 0 .658.263.658.658 0 .42-.275.658-.658.658-.395 0-.658-.263-.658-.658zm-1.915 0c0-.383.276-.658.659-.658.394 0 .658.263.658.658 0 .407-.264.658-.658.658-.395 0-.659-.263-.659-.658zm-.358 8.412v-7.299h1.435v7.395c0 .323.216.538.539.538.323 0 .538-.215.538-.538v-7.395h1.436v7.3c0 1.196-.778 1.974-1.974 1.974-1.185 0-1.974-.79-1.974-1.975zm14.957.455c.323 0 .538-.215.538-.539v-1.46c0-.322-.215-.538-.538-.538h-.539v2.537h.539zm0-3.877c.323 0 .538-.215.538-.538v-1.46c0-.323-.215-.539-.538-.539h-.539v2.537h.539zm-1.975-3.877h1.975c1.184 0 1.974.79 1.974 1.974v1.137c0 .598-.203 1.09-.55 1.436.347.347.55.838.55 1.436v1.137c0 1.196-.778 1.974-1.974 1.974h-1.975v-9.094zm14.958-1.113c0-.383.275-.658.658-.658.394 0 .658.263.658.658 0 .42-.275.658-.658.658-.395 0-.658-.263-.658-.658zm-1.915 0c0-.383.275-.658.658-.658.395 0 .658.263.658.658 0 .407-.263.658-.658.658s-.658-.263-.658-.658zm-.359 8.412v-7.299h1.436v7.395c0 .323.215.538.538.538.323 0 .539-.215.539-.538v-7.395h1.436v7.3c0 1.196-.778 1.974-1.975 1.974-1.184 0-1.974-.79-1.974-1.975z'
            fill-rule='evenodd'/>
        </svg>
        <div v-if="$store.state.isLogin" class="rounded-full bg-gray-900 text-white px-4 py-1 tracking-tight font-semibold">Sen de katıl</div>
      </router-link>
      <div v-if="$store.state.isLogin" class="p-5 border-b border-gray-200">
        <div class="text-lg leading-snug mb-3.5 tracking-tight">Hesabım</div>
        <div class="flex space-x-6 font-semibold">
          <router-link to="#" class="group transition-all hover:text-orange-500 flex items-center">
            <svg class="stroke-current" xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none'>
              <g fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.25'>
                <rect width='18.75' height='18.75' x='.626' y='.625' rx='1.25'/>
                <path d='M10.626 13.125h5m-11.25 0h2.5m3.75 0a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.25-6.25h-7.5m11.25 0a1.875 1.875 0 10-3.75 0 1.875 1.875 0 003.75 0z'/>
              </g>
            </svg>
            <span class="ml-2">Ayarlarım</span>
          </router-link>
          <router-link to="#" class="group transition-all hover:text-orange-500 flex items-center">
            <svg class="stroke-current" xmlns='http://www.w3.org/2000/svg' width='20' height='20' stroke='#484848' fill='none'>
              <path
                d='M6.25 10.003h13.125m-3.125 3.068l3.125-3.068-3.125-3.068m-3.125 6.747v3.682a1.184 1.184 0 01-1.137 1.227H1.761a1.184 1.184 0 01-1.136-1.227V2.636A1.183 1.183 0 011.761 1.41h10.227c.659.032 1.167.58 1.137 1.227v3.682'
                fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.25'/>
            </svg>
            <span class="ml-2">Çıkış yap</span>
          </router-link>
        </div>
      </div>
      <div class="p-4 pb-6">
        <ul class="mb-4">
          <li v-for="item in menu.links">
            <router-link
              :to="item.link"
              class="py-2 px-3 flex transition-all rounded-lg hover:bg-gray-100 font-semibold">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
        <ul class="mb-4">
          <li class="text-xs leading-tight py-2 px-3 text-gray-400 font-semibold">LİSTELER</li>
          <li v-for="item in menu.list">
            <router-link
              :to="item.link"
              class="py-2 px-3 flex transition-all rounded-lg hover:bg-gray-100 font-semibold">
              {{ item.title }}
            </router-link>
          </li>
          <li>
            <router-link
              to="#"
              class="py-2 px-3 transition-all hover:text-orange-500 text-gray-400 flex">
              Tüm Listelerim
            </router-link>
          </li>
        </ul>
        <ul>
          <li class="text-xs leading-tight py-2 px-3 text-gray-400 font-semibold">MÜŞTERİ HİZMETLERİ</li>
          <li v-for="item in menu.help">
            <router-link
              :to="item.link"
              class="py-2 px-3 flex transition-all rounded-lg hover:bg-gray-100 font-semibold">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { mixin as clickaway } from 'vue-clickaway';

  export default {
    mixins: [ clickaway ],
    data() {
      return {
        menu: {
          isOpen: true,
          links: [
            {
              link: "#",
              title: "Cüzdanım"
            },
            {
              link: "#",
              title: "Hesabım"
            },
            {
              link: "#",
              title: "Değerlendirmelerim"
            },
            {
              link: "#",
              title: "Adreslerim"
            },
            {
              link: "#",
              title: "Hediye çeklerim"
            },
            {
              link: "#",
              title: "Hızlı alışveriş profilim"
            }
          ],
          list: [
            {
              link: "#",
              title: "Beğendiklerim"
            }
          ],
          help: [
            {
              link: "#",
              title: "Mesajlarım"
            },
            {
              link: "#",
              title: "Çözüm Merkezi"
            }
          ],
          auth: [
            {
              link: "#",
              title: "Üye Ol"
            },
            {
              link: "#",
              title: "Giriş yap"
            }
          ]
        }
      }
    },
    methods: {
      toggleMenu() {
        this.menu.isOpen = !this.menu.isOpen;
      },
      closeMenu() {
        this.menu.isOpen = false;
      }
    },
  }
</script>
