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
              v-if="person.foto_diri"
              :src="`${imageUrl}/berkas/images/${person.foto_diri}?token=${
                $store.state.auth.token
              }`"
              class="rounded-circle"
              width="190"
              height="200"
              alt="Foto Diri"
              style="object-fit:cover;"
            />
            <img
              v-else
              :src="
                require(`../../assets/${
                  person.jk === 'L' ? 'man.svg' : 'woman.svg'
                }`)
              "
              alt="Blank Images"
              class="rounded-circle"
              width="190"
              height="200"
              style="object-fit:cover;"

            />
            <div class="mt-3">
              <h4>{{ person.nama }}</h4>
              <p class="text-muted font-size-sm">
                {{ person.tempat_lahir }}, {{ person.tanggal_lahir }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <div class="card mb-3">
        <div class="card-body">
          <h5>Persyaratan yang harus dilengkapi</h5>
          <div class="table-responsive">
            <table class="table table-sm table-bordered table-striped">
              <thead>
                <th>Item</th>
                <th>Isian</th>
                <th>Unggah Berkas</th>
                <th>Status</th>
              </thead>
              <tbody>
                <tr>
                  <td>Jalur Pendaftaran</td>
                  <td>&check;</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Pilihan Prodi</td>
                  <td>&check;</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Asal Pendidikan Sebelumnya</td>
                  <td>&check;</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Data Diri</td>
                  <td>&check;</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Data Orang tua & Wali</td>
                  <td>&check;</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="3">Pembayaran Biaya Pendaftaran</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Kuisioner</td>
                  <td>&check;</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Foto Diri (Terbaru)</td>
                  <td></td>
                  <td>&check;</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Scan Kartu Keluarga</td>
                  <td></td>
                  <td>&check;</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Scan Surat Tanda Lulus (STL)</td>
                  <td></td>
                  <td>&check;</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Scan Ijazah</td>
                  <td></td>
                  <td>&check;</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Scan SKHUN/Transkrip Nilai</td>
                  <td></td>
                  <td>&check;</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- <ul style="columns: 2">
            <li>Pendaftaran</li>
            <li>
              Isian Formulir
              <ul>
                <li>Data Diri</li>
                <li>Data Orang Tua</li>
              </ul>
            </li>
            <li>Pembayaran</li>
            <li>Kuisioner</li>
            <li>
              Berkas
              <ul>
                <li>Foto Diri</li>
                <li>Scan Kartu Keluarga</li>
                <li>Scan Ijazah</li>
                <li>Scan STL</li>
              </ul>
            </li>
            <li>Seleksi</li>
          </ul> -->
          <!-- <div class="row">
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
          <hr /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BAlert } from "bootstrap-vue";
export default {
  name: "Beranda",
  components: {
    BAlert,
  },
  data() {
    return {
      showHello: true,
      imageUrl:
        process.env.NODE_ENV === "production"
          ? "https://api.pmb.unuja.ac.id"
          : "http://localhost:3000",
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