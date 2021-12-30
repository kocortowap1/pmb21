<template>
<!-- class="bg-gradient-to-br from-blue-900 to-blue-500 min-w-full min-h-screen" -->
  <div
    class="bg-indigo-900"
  >
    <div class="flex flex-col-reverse md:flex-row justify-between hero-content">
      <div class="w-full md:w-96">
        <div class="flex justify-center">
          <img
            src="../../assets/emblem.png"
            class=""
            alt="Emblem"
            height="220"
            width="220"
            style="width: 120px"
          />
          <img
            src="../../assets/emblem.png"
            class=""
            alt="Emblem"
            height="220"
            width="220"
            style="width: 120px"
          />
        </div>
        <h1 class="text-3xl md:text-4xl text-white text-center md:text-left">
          Universitas Nurul Jadid
        </h1>
        <p class="text-yellow-100 text-center md:text-left md:text-lg">
          Kampus Berbasis Pesantren; Inovatif, Unggul dan Berkeadaban
          <span>dalam Pengembangan Ilmu Pengetahuan, Teknologi dan Seni.</span>
        </p>
      </div>
      <div class="w-full md:w-96 backdrop-filter backdrop-blur-0">
        <login-form />
      </div>
    </div>
    <event-list />
  </div>
</template>

<script>
import LoginForm from "../Home/LoginForm.vue";
import EventList from "../Home/eventlist.vue";
export default {
  name: "Hero",
  components: {
    LoginForm,
    EventList,
  },
};
</script>
