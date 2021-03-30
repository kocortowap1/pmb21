<template>
  <div class="row gutters-sm">
    <div class="col-12">
      <b-alert :show="showHello">
        <h4>Selamat Datang {{ person.nama }}</h4>
        Di Sistem Informasi Penerimaan Mahasiswa Baru Universitas Nurul Jadid
      </b-alert>
    </div>
    <div class="col-md-4 mb-3">
      <div class="card">
        <div class="card-body">
          <div class="d-flex flex-column align-items-center text-center">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar7.png"
              alt="Admin"
              class="rounded-circle"
              width="150"
            />
            <div class="mt-3">
              <h4>{{ person.nama }}</h4>
              <p class="text-muted font-size-sm">
                {{ person.tempat_lahir }}, {{ person.tanggal_lahir }}
              </p>
              <!-- <button class="btn btn-primary">Follow</button>
              <button class="btn btn-outline-primary">Message</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <div class="card mb-3">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Nama</h6>
            </div>
            <div class="col-sm-9 text-secondary">{{ person.nama }}</div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Jenis Kelamin</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              {{ person.jk === "L" ? "Laki-laki" : "Perempuan" }}
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Tempat, Tanggal Lahir</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              {{ person.tempat_lahir }}, {{ person.tanggal_lahir }}
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Email</h6>
            </div>
            <div class="col-sm-9 text-secondary">{{ person.email }}</div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Nomor HP</h6>
            </div>
            <div class="col-sm-9 text-secondary">{{ person.nomor_hp }}</div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BContainer, BRow, BCol, BImg, BAlert } from "bootstrap-vue";
export default {
  name: "Beranda",
  components: {
    BContainer,
    BRow,
    BCol,
    BImg,
    BAlert,
  },
  data() {
    return {
      showHello: true,
    };
  },
  computed: {
    person() {
      return this.$store.state.pendaftar.person;
    },
  },
  mounted() {
    if (!Object.entries(this.person).length) {
      this.$store.dispatch("pendaftar/getPendaftar", this.$route.params.id);
    }
  },
  created() {
    setTimeout(() => {
      this.showHello = false;
    }, 5000);
  },
};
</script>

<style>
</style>