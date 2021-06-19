<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <router-link to="/" class="hidden md:block pt-10 pb-14">
      <Logo :height="28"/>
    </router-link>
    <div class="p-6 md:p-[4.5rem] rounded-lg md:border border-gray-200 w-full max-w-[30rem] md:mt-auto relative">
      <button
        @click="$router.go(-1)"
        class="flex items-center justify-center mb-4 w-10 h-10 bg-gray-100 rounded-full cursor-pointer transition-colors !duration-200 hover:bg-gray-200 focus:outline-none"
        :class="[ showElements ? 'md:hidden' : 'md:absolute top-8 left-8' ]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          <path fill="#484848" fill-rule="evenodd" d="M.723 8.657c.001-.472.204-.921.557-1.234L8.933.676a.985.985 0 0 1 1.364.112.989.989 0 0 1-.064 1.37L4.321 7.37a.172.172 0 0 0 .113.3h11.715a.987.987 0 0 1 0 1.975H4.436a.172.172 0 0 0-.113.3l5.912 5.211a.988.988 0 0 1-.316 1.708.984.984 0 0 1-.984-.226L1.28 9.891a1.653 1.653 0 0 1-.558-1.234z"></path>
        </svg>
      </button>
      <div class="flex w-full rounded-[10px] bg-gray-100 p-0.5 mb-7" v-show="showElements">
        <template v-for="item in tab">
          <router-link
            v-if="item.show"
            :to="item.link"
            class="flex-1 h-12 flex items-center justify-center rounded-lg text-gray-700 font-semibold"
            :class="{ 'bg-white' : $route.params.method === item.link }"
          >
            {{ item.title }}
          </router-link>
        </template>
      </div>
      <template v-for="item in tab">
        <component
          v-if="$route.params.method === item.link"
          :is="item.component"
        />
      </template>
    </div>
    <Social :method="social"/>
    <Footer/>
  </div>
</template>

<script>
  import Logo from "@/components/Layout/Header/Logo";
  import Login from "@/components/Auth/Login";
  import Register from "@/components/Auth/Register";
  import Social from "@/components/Auth/Social";
  import Footer from "@/components/Auth/Footer";

  export default {
    components: {
      Logo,
      Footer,
      Login,
      Register,
      Social
    },
    data() {
      return {
        tab: [
          { link: "login", title: "Giriş yap", component: "Login", show: true },
          { link: "register", title: "Üye ol", component: "Register", show: true },
          { link: "reset", title: "Şifre yenileme", component: "ResetPassword", show: false }
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
    },
    computed: {
      showElements() {
        return this.tab.find(e => e.link === this.$route.params.method).show;
      }
    }
  }
</script>
