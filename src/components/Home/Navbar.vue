<template>
    <b-navbar toggleable="lg" type="light" variant="light" class="shadow-sm">
      <div class="container">
        <b-navbar-brand href="/">PMB UNUJA</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item-dropdown text="Fakultas" left>
              <!-- <b-dropdown-item :href="{ name: 'Fakultas', params: {id: 'fai' }}">Fakultas Agama Islam</b-dropdown-item> -->
              <b-dropdown-item href="#" @click="$router.push({name: 'FAI'})">Fakultas Agama Islam</b-dropdown-item>
              <b-dropdown-item href="#" @click="$router.push({name: 'FT'})">Fakultas Teknik</b-dropdown-item>
              <b-dropdown-item href="#" @click="$router.push({name: 'FKES'})">Fakultas Kesehatan</b-dropdown-item>
              <b-dropdown-item href="#" @click="$router.push({name: 'SOSHUM'})">Fakultas Sosial & Humaniora</b-dropdown-item>
              <b-dropdown-item href="#" @click="$router.push({name: 'PASCA'})">Program Pascasarjana</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Info Pendaftaran" left>
              <b-dropdown-item href="#" @click="$router.push({name:'JalurPendaftaran'})">Jalur Pendaftaran</b-dropdown-item>
              <!-- <b-dropdown-item href="#">Prosedur Pendaftaran</b-dropdown-item> -->
              <b-dropdown-item href="#" @click="$router.push({name:'Biaya'})">Biaya Pendidikan</b-dropdown-item>
              <b-dropdown-item href="#" @click="$router.push({name:'Panduan'})">Panduan</b-dropdown-item>
              <!-- <b-dropdown-item href="#">Petunjuk Pendaftaran</b-dropdown-item> -->
            </b-nav-item-dropdown>
            <!-- <b-nav-item href="#">Pengumuman</b-nav-item> -->
            <b-nav-item href="/faq">FAQ</b-nav-item>
            <b-nav-item href="/pengumuman">Hasil Seleksi</b-nav-item>
            <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <!--  <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>-->
            <div v-if="isLoggedIn">
              <b-nav-item>
                <button class="btn btn-danger" @click.prevent="logout">Logout</button>
                <button v-if="$route.path !== '/pendaftar'" class="btn btn-primary mx-1" @click.prevent="toLink('/pendaftar')">Beranda</button>

                <!-- <button class="btn btn-danger" @click.prevent="logout">Logout</button> -->
                <!-- <a href="/login" class="btn btn-success"> Login</a> -->
                <!-- <a href="/register" class="btn btn-primary mx-1"> Mendaftar</a> -->
              </b-nav-item>
            </div>
            <div v-else>
                <button v-if="$route.path !== '/login'" class="btn btn-success" @click.prevent="toLink('/login')">Login</button>
                <button v-if="$route.path !== '/register'" class="btn btn-primary mx-1" @click.prevent="toLink('/register')">Mendaftar</button>
              <!-- <b-nav-item href="/login" class="btn btn-primary">Login</b-nav-item> -->
              <!-- <b-nav-item href="/register" class="btn btn-success">Register</b-nav-item> -->
            </div>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "mainNavbar",
  methods: {
    logout() {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.push("/login");
        // window.removeEventListener('beforeunload', false)
      });
    },
    toLink(link){
      this.$router.push(link)

    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: "auth/isLoggedIn"
    })
  }
};
</script>

<style lang="scss">
// .navbar {
  // background-color: #fff !important;
  // z-index: 9000;
// }
</style>