<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <router-link to="/" class="hidden md:block pt-10 pb-14">
      <Logo :height="28"/>
    </router-link>
    <div class="p-6 md:p-[4.5rem] rounded-lg md:border border-gray-200 w-full max-w-[30rem] md:mt-auto">
      <router-link to="/" class="md:hidden flex items-center justify-center mb-4 w-10 h-10 bg-gray-100 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path fill="#484848" fill-rule="evenodd"
                d="M.723 8.657c.001-.472.204-.921.557-1.234L8.933.676a.985.985 0 0 1 1.364.112.989.989 0 0 1-.064 1.37L4.321 7.37a.172.172 0 0 0 .113.3h11.715a.987.987 0 0 1 0 1.975H4.436a.172.172 0 0 0-.113.3l5.912 5.211a.988.988 0 0 1-.316 1.708.984.984 0 0 1-.984-.226L1.28 9.891a1.653 1.653 0 0 1-.558-1.234z"></path>
        </svg>
      </router-link>
      <div class="flex w-full rounded-[10px] bg-gray-100 p-0.5 mb-7">
        <template v-for="item in tab">
          <router-link
            :to="item.link"
            class="flex-1 h-12 flex items-center justify-center rounded-lg text-gray-700 font-semibold"
            :class="{ 'bg-white' : $route.params.method === item.link }"
          >
            {{ item.title }}
          </router-link>
        </template>
      </div>
      <form v-show="$route.params.method === 'login'" method="post" action="#">
        <label for="login_email" class="mb-4 flex w-full">
          <input class="auth__input" type="email" id="login_email" name="email" placeholder="E-posta adresi">
        </label>
        <label for="login_password" class="mb-8 flex w-full">
          <input class="auth__input" type="password" id="login_password" name="password" placeholder="Şifre">
        </label>
        <button class="auth__button mb-5">Giriş yap</button>
        <router-link to="/" class="text-orange-500 font-semibold text-sm">Şifremi unuttum</router-link>
      </form>
      <form v-show="$route.params.method === 'register'" method="post" action="#">
        <div class="auth__line">E-posta adresi ile üye ol</div>
        <div class="grid grid-flow-col auto-cols-auto gap-x-4 mb-4">
          <label for="register_name" class="flex w-full">
            <input class="auth__input" type="text" id="register_name" name="name" placeholder="Ad">
          </label>
          <label for="register_surname" class="flex w-full">
            <input class="auth__input" type="text" id="register_surname" name="surname" placeholder="Soyad">
          </label>
        </div>
        <label for="register_email" class="mb-4 flex w-full">
          <input class="auth__input" type="email" id="register_email" name="email" placeholder="E-posta adresi">
        </label>
        <label for="register_password" class="mb-4 flex w-full">
          <input class="auth__input" type="password" id="register_password" name="password" placeholder="Şifre">
        </label>
        <div class="flex mb-8">
          <input id="accept" name="accept" type="checkbox" class="h-6 w-6 cursor-pointer rounded-lg border-2 border-gray-400 bg-white mr-4 !ring-0 checked:!bg-orange-500 !ring-transparent !shadow-none transition-colors duration-200">
          <label for="accept" class="block text-sm text-gray-600 leading-5 cursor-pointer select-none">Önemli kampanyalardan haberdar olmak için <b class="hover:underline">Rıza Metni</b> kapsamında elektronik ileti almak istiyorum.</label>
        </div>
        <button class="auth__button" disabled>Üye ol</button>
        <div class="mt-4 text-[11px] text-gray-500 leading-[1.5]">Kişisel verileriniz, <b>Aydınlatma Metni</b> kapsamında işlenmektedir. "Üye ol" veya "Sosyal Hesap" butonlarından birine basarak <b>Üyelik Sözleşmesi</b>'ni, <b>Rıza Metni</b>'ni, <b>Çerez Politikası</b>'nı okuduğunuzu ve kabul ettiğinizi onaylıyorsunuz.</div>
      </form>
    </div>
    <div class="px-6 md:px-0 mt-6 mb-auto">
      <div class="auth__social">
        <div class="leading-[30px] text-xl text-gray-600 font-semibold mb-0.5">Sosyal hesap ile giriş yap</div>
        <div class="text-sm text-gray-600">Hepsiburada'ya şifresiz giriş yapabilmek için Google, Apple veya Facebook hesabınızı bağlayabilirsiniz.</div>
        <div class="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 mt-6 gap-4">
          <template v-for="item in social">
            <router-link :to="item.link" class="w-full h-[50px] md:h-14 flex items-center justify-center border-2 border-gray-300 rounded-lg p-2 text-gray-600 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-200">
              <img :src="require('../assets/images/auth/' + item.icon)" :alt="item.title" class="mr-[5px]">
              <span class="text-xs font-semibold pt-[1px]">{{ item.title }}</span>
            </router-link>
          </template>
        </div>
      </div>
    </div>
    <div class="pt-10 pb-6 flex flex-col items-center justify-center">
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21">
          <g fill="none" fill-rule="evenodd">
            <path stroke="#484848" stroke-linecap="round" stroke-linejoin="round"
                  d="M1.208 3.675v6.345a9.923 9.923 0 0 0 6.36 9.261l.868.334a2.497 2.497 0 0 0 1.795 0l.867-.334a9.923 9.923 0 0 0 6.36-9.26V3.674a1.24 1.24 0 0 0-.723-1.135 18.09 18.09 0 0 0-7.402-1.509 18.09 18.09 0 0 0-7.401 1.51 1.24 1.24 0 0 0-.724 1.134z"></path>
            <path fill="#5AD363"
                  d="M3.5 6.877v3.936a5.574 5.574 0 0 0 3.6 5.148l.484.186c.321.123.677.123.999 0l.483-.186a5.574 5.574 0 0 0 3.6-5.148V6.877a.69.69 0 0 0-.402-.632 10.46 10.46 0 0 0-4.178-.838 10.462 10.462 0 0 0-4.184.838.69.69 0 0 0-.402.632z"></path>
            <path stroke="#484848" stroke-linecap="round" stroke-linejoin="round"
                  d="M6.596 15.67l8.362-8.363M13.621 4.23l-9.103 9.098"></path>
            <path stroke="#484848" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25"
                  d="M3.708 5.336v4.834a6.845 6.845 0 0 0 4.417 6.321l.593.229c.394.151.83.151 1.225 0l.592-.229a6.845 6.845 0 0 0 4.417-6.321V5.336a.847.847 0 0 0-.494-.775 12.816 12.816 0 0 0-5.125-1.03 12.82 12.82 0 0 0-5.131 1.03.847.847 0 0 0-.494.775z"></path>
          </g>
        </svg>
        <div class="ml-[11px] text-[#439e4a] text-[11px] font-bold">Güvenli alışveriş</div>
      </div>
      <div class="text-[11px] mt-3 text-gray-600 tracking-[.2px]">© Copyright 2021 <a href="https://github.com/berkaltiok/hepsiburada">Hepsişurada E-Ticaret Teması</a></div>
    </div>
  </div>
</template>

<script>
  import Logo from "@/components/Layout/Header/Logo";

  export default {
    components: {
      Logo
    },
    data() {
      return {
        tab: [
          { link: "login", title: "Giriş yap" },
          { link: "register", title: "Üye ol" }
        ],
        social: [
          {
            link: "/",
            title: "Google",
            icon: "google.svg"
          },
          {
            link: "/",
            title: "Apple",
            icon: "apple.svg"
          },
          {
            link: "/",
            title: "Facebook",
            icon: "facebook.svg"
          }
        ]
      }
    },
    metaInfo: {
      title: "Üye Giriş Sayfası & Üye Ol",
    }
  }
</script>

<style scoped lang="scss">
  .auth {
    &__button {
      @apply
        rounded-lg select-none
        bg-orange-500 hover:bg-orange-550
        text-white text-base font-semibold
        transition-colors duration-300
        h-14 w-full
        outline-none focus:outline-none
        p-2
        disabled:text-gray-400 disabled:bg-gray-300 disabled:cursor-not-allowed;
    }
    &__input {
      @apply
        h-14 w-full ring-0
        outline-none focus:outline-none
        bg-gray-100 hover:bg-gray-50 focus:bg-white
        transition-colors duration-200
        rounded-lg text-gray-700
        border-2 border-gray-100 focus:border-orange-500
        p-[14px] placeholder-gray-500;
    }
    &__line {
      @apply h-[40px] flex items-center text-gray-500 font-semibold text-sm mb-2;

      &::after {
        content: "";
        @apply h-[1px] w-full ml-8 flex-1 bg-gray-200;
      }
    }
    &__social {
      @apply p-8 max-w-[30rem] rounded-lg border border-gray-200 w-full text-center;
      background: url('../assets/images/auth/background.svg') no-repeat;
      background-size: 100%;
    }
  }
</style>
