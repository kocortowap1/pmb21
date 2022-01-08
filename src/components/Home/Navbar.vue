<template>
  <div
    class="flex px-4 py-4 justify-between sticky top-0 z-20 bg-biru shadow-lg"
  >
    <div class="px-2 mx-2 flex-none w-64">
      <a class="text-2xl font-bold cursor-pointer text-yellow-200" href="/">
        PMB UNUJA
      </a>
    </div>
    <!-- mobile menu button -->
    <div class="block md:hidden">
      <button @click="isShowMobileMenu = !isShowMobileMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
    <!-- desktop menu list -->
    <div class="hidden md:flex justify-end px-2 w-full mr-4">
      <div class="flex text-white space-x-3 transition-all">
        <a class="rounded-btn text-white" href="/">Home</a>

        <div class="relative group">
          <div tabindex="0" class="rounded-btn">Fakultas</div>
          <ul
            tabindex="0"
            class="
              shadow-lg
              hidden
              group-hover:flex
              flex-col
              absolute
              z-20
              bg-biru
              cursor-pointer
              w-64
            "
          >
            <li class="py-2 px-3 hover:bg-indigo-600">
              <a>Fakultas Agama Islam</a>
            </li>
            <li class="py-2 px-3 hover:bg-indigo-600">
              <a>Fakultas Teknik</a>
            </li>
            <li class="py-2 px-3 hover:bg-indigo-600">
              <a>Fakultas Kesehatan</a>
            </li>
            <li class="py-2 px-3 hover:bg-indigo-600">
              <a>Fakultas Sosial & Humaniora</a>
            </li>
            <li class="py-2 px-3 hover:bg-indigo-600">
              <a>Program Pascasarjana</a>
            </li>
          </ul>
        </div>
        <div class="relative group">
          <div tabindex="0" class="rounded-btn">Info Pendaftaran</div>
          <ul
            tabindex="0"
            class="
              shadow-lg
              hidden
              group-hover:flex
              flex-col
              absolute
              z-20
              bg-biru
              cursor-pointer
              w-64
            "
          >
            <li class="py-2 px-3 hover:bg-indigo-600">
              <a>Jalur Pendaftaran</a>
            </li>
            <li class="py-2 px-3 hover:bg-indigo-600">
              <a>Biaya Pendidikan</a>
            </li>
            <li class="py-2 px-3 hover:bg-indigo-600">
              <a>Panduan</a>
            </li>
          </ul>
        </div>

        <a class="rounded-btn"> Pengumuman </a>
      </div>
    </div>
    <div class="hidden md:flex-none">
      <button class="btn btn-square btn-ghost flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>
        Login
      </button>
    </div>
    <aside
      v-if="isShowMobileMenu"
      class="
        fixed
        top-0
        right-0
        z-20
        bg-white
        h-screen
        w-2/3
        transition-opacity
      "
    >
      <button class="absolute top-1 right-3" @click="isShowMobileMenu = !isShowMobileMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <ul class="space-y-2">
        <li class="px-4 py-2 border-b-2">
          <a href="#">Home</a>
        </li>
        <li class="px-4 py-2 border-b-2">
          <div>Fakultas & Program</div>
          <ul>
            <li class="pl-2 hover:bg-gray-400">
              <a href="#">Fakultas Agama Islam</a>
            </li>
            <li class="pl-2 hover:bg-gray-400">
              <a href="#">Fakultas Teknik</a>
            </li>
            <li class="pl-2 hover:bg-gray-400">
              <a href="#">Fakultas Kesehatan</a>
            </li>
            <li class="pl-2 hover:bg-gray-400">
              <a href="#">Fakultas Sosial & Humaniora</a>
            </li>
            <li class="pl-2 hover:bg-gray-400">
              <a href="#">Program Pascasarjana</a>
            </li>
          </ul>
        </li>
        <li class="px-4 py-2 border-b-2">
          <div>Info Pendaftaran</div>
          <ul>
            <li class="pl-2 hover:bg-gray-400">
              <a href="#">Jalur Pendaftaran</a>
            </li>
            <li class="pl-2 hover:bg-gray-400">
              <a href="#">Biaya Pendaftaran</a>
            </li>
            <li class="pl-2 hover:bg-gray-400">
              <a href="#">Panduan Pendaftaran</a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "mainNavbar",
  data() {
    return {
      isShowMobileMenu: false,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout").then(() => {
        if (this.$route.path !== "/login") {
          this.$router.push("/login");
        }
        // window.removeEventListener('beforeunload', false)
      });
    },
    toLink(link) {
      this.$router.push(link);
    },
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "auth/isLoggedIn",
    }),
  },
};
</script>

<style >
</style>