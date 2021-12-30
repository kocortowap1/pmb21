<template>
  <div id="app">
    <!-- <Navbar /> -->
    <!-- <router-view/> -->
    <component :is="layout" ></component>
  </div>
</template>
<script>
// import Navbar from './components/Home/Navbar'
import HomeLayout from './layouts/FrontLayout.vue'
import PendaftarLayout from './layouts/PendaftarLayout.vue'
export default {
  components: {
    // Navbar
    'home-layout': HomeLayout,
    'pendaftar-layout': PendaftarLayout
  },
  computed: {
    layout(){
      return `${this.$route.meta.layout || 'home'}-layout`
    }
  }
}
</script>
<style src="./scss/main.css">

</style>