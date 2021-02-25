<template>
  <!-- <div class="beranda">
      <b-container>
          <b-row>
              <b-col cols="12" sm="12" md="3">
                  <b-img alt="foto profil" src="https://pointchurch.com/wp-content/uploads/2019/02/Blank-Person-Image.png" height="300"></b-img>
              </b-col>
              <b-col cols="12" sm="12" md="9">
                  <h4>Identitas Pendaftar</h4>
                  <table class="table table-sm table-borderless">
                      <tr>
                          <td width="20%">Nama</td>
                          <td width="2%">:</td>
                          <th>Sample</th>
                      </tr>
                      <tr>
                          <td width="20%">Jenis Kelamin</td>
                          <td>:</td>
                          <td>Sample</td>
                      </tr>
                      <tr>
                          <td width="20%">Nomor HP</td>
                          <td>:</td>
                          <td>Sample</td>
                      </tr>
                  </table>
              </b-col>
          </b-row>
      </b-container>
  </div> -->
  <div class="row gutters-sm">
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
            <div class="col-sm-9 text-secondary">{{person.nama}}</div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Jenis Kelamin</h6>
            </div>
            <div class="col-sm-9 text-secondary">{{person.jk === 'L' ? "Laki-laki" : "Perempuan"}}</div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Tempat, Tanggal Lahir</h6>
            </div>
            <div class="col-sm-9 text-secondary">{{person.tempat_lahir}}, {{person.tanggal_lahir}}</div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Email</h6>
            </div>
            <div class="col-sm-9 text-secondary">{{person.email}}</div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Nomor HP</h6>
            </div>
            <div class="col-sm-9 text-secondary">{{person.nomor_hp}}</div>
          </div>
          <hr />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BContainer, BRow, BCol, BImg } from "bootstrap-vue";
export default {
  name: "Beranda",
  components: {
    BContainer,
    BRow,
    BCol,
    BImg,
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
};
</script>

<style>
</style>