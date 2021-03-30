<template>
  <div>
    <validation-observer
      ref="formPendaftaran"
      v-slot="{ handleSubmit, invalid }"
    >
      <b-form @submit.prevent="handleSubmit(handleSimpan)">
        <validation-provider
          name="Jenis Pendaftaran"
          rules="required"
          v-slot="{ valid, errors }"
        >
          <b-form-group
            label="Jenis Pendaftaran"
            label-class="col-form-label mb-0 pb-0"
            label-cols="12"
            label-cols-sm="4"
          >
            <b-form-select
              v-model="form.jenis_pendaftaran"
              class="col-sm-8 col-md-7"
              :state="errors[0] ? false : valid ? true : null"
            >
              <b-form-select-option :value="null"
                >Pilih Jenis Pendaftaran</b-form-select-option
              >

              <b-form-select-option value="1"
                >Mahasiswa Baru</b-form-select-option
              >
              <b-form-select-option value="2">Pindahan</b-form-select-option>
              <b-form-select-option value="11"
                >Alih Jenjang</b-form-select-option
              >
            </b-form-select>
          </b-form-group>
        </validation-provider>
        <validation-provider
          name="Jenjang Pendidikan"
          rules="required"
          v-slot="{ valid, errors }"
        >
          <b-form-group
            label="Jenjang Pendidikan"
            class=""
            label-class="col-form-label mb-0 pb-0"
            label-cols="12"
            label-cols-sm="4"
          >
            <b-form-select
              v-model="form.id_jenjang_pendidikan"
              class="col-sm-8 col-md-7"
              :state="errors[0] ? false : valid ? true : null"
            >
              <b-form-select-option :value="null"
                >Pilih Jenjang Pendidikan</b-form-select-option
              >
              <b-form-select-option value="15"
                >Diploma & Sarjana</b-form-select-option
              >
              <b-form-select-option value="17"
                >Magister (S2)</b-form-select-option
              >
              <b-form-select-option value="23"
                >Pendidikan Profesi</b-form-select-option
              >
            </b-form-select>
          </b-form-group>
        </validation-provider>
        <validation-provider
          name="Jalur Pendaftaran"
          rules="required"
          v-slot="{ valid, errors }"
        >
          <b-form-group
            label="Jalur Pendaftaran"
            class=""
            label-class="col-form-label mb-0 pb-0"
            label-cols="12"
            label-cols-sm="4"
          >
            <b-form-select
              v-model="form.id_jalur"
              class="col-sm-8 col-md-7"
              :state="errors[0] ? false : valid ? true : null"
            >
              <b-form-select-option :value="null"
                >Pilih Jalur Pendaftaran</b-form-select-option
              >
              <b-form-select-option
                v-for="p in listJalur"
                :key="p.id_jalur"
                :value="p.id_jalur"
                >{{ p.jalur_pendaftaran }}</b-form-select-option
              >
            </b-form-select>
          </b-form-group>
        </validation-provider>
        <validation-provider
          name="Pilihan Prodi Utama"
          rules="required"
          v-slot="{ valid, errors }"
        >
          <b-form-group
            label="Pilihan Prodi Utama"
            label-cols="12"
            label-cols-sm="4"
          >
            <b-form-select
              v-model="form.pilihan_prodi_1"
              class="col-sm-8 col-md-7"
              :state="errors[0] ? false : valid ? true : null"
            >
              <b-form-select-option :value="null"
                >Pilih Prodi Utama</b-form-select-option
              >
              <b-form-select-option
                v-for="prodi1 in listProdi"
                :key="prodi1.id_prodi"
                :value="prodi1.id_prodi"
                >{{ prodi1.program_studi }}</b-form-select-option
              >
            </b-form-select>
          </b-form-group>
        </validation-provider>
        <validation-provider
          v-if="listProdi.length > 1"
          name="Pilihan Prodi Kedua"
          rules="required"
          v-slot="{ valid, errors }"
        >
          <b-form-group
            label="Pilihan Prodi Kedua"
            label-cols="12"
            label-cols-sm="4"
          >
            <b-form-select
              v-model="form.pilihan_prodi_2"
              class="col-sm-8 col-md-7"
              :state="errors[0] ? false : valid ? true : null"
            >
              <b-form-select-option :value="null"
                >Pilih Prodi Kedua</b-form-select-option
              >

              <b-form-select-option
                v-for="prodi1 in pilihanProdi2"
                :key="prodi1.id_prodi"
                :value="prodi1.id_prodi"
                >{{ prodi1.program_studi }}</b-form-select-option
              >
            </b-form-select>
          </b-form-group>
        </validation-provider>
        <validation-provider
          v-if="pilihanProdi2.length > 1"
          name="Pilihan Prodi Ketiga"
          rules=""
          v-slot="{ valid, errors }"
        >
          <b-form-group
            label="Pilihan Prodi Ketiga"
            label-cols="12"
            label-cols-sm="4"
          >
            <b-form-select
              v-model="form.pilihan_prodi_3"
              class="col-sm-8 col-md-7"
              :state="errors[0] ? false : valid ? true : null"
            >
              <b-form-select-option :value="null"
                >Pilih Prodi Ketiga</b-form-select-option
              >
              <b-form-select-option
                v-for="prodi1 in pilihanProdi3"
                :key="prodi1.id_prodi"
                :value="prodi1.id_prodi"
                >{{ prodi1.program_studi }}</b-form-select-option
              >
            </b-form-select>
          </b-form-group>
        </validation-provider>
        <hr class="my-3" />
        <b-form-group
          label="Asal Sekolah/Perguruan Tinggi"
          label-class="mb-0 pb-0"
          class=""
        >
          <b-input-group class="">
            <b-form-input
              placeholder="Asal Sekolah/Perguruan Tinggi"
              disabled
              class="col-sm-10 col-md-8"
              v-model="displaySekolah"
            ></b-form-input>
            <b-input-group-append>
              <b-button variant="info" @click="showModal">
                <b-icon-search></b-icon-search>
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
        <validation-provider
          name="Jurusan/Prodi"
          rules="required"
          v-slot="{ valid, errors }"
        >
          <b-form-group
            label="Jurusan/Prodi"
            class=""
            label-class="col-form-label mb-0 pb-0"
            label-cols="12"
            label-cols-sm="4"
          >
            <b-form-select
              v-model="form.id_jurusan_asal_sekolah"
              :state="errors[0] ? false : valid ? true : null"
              class="col-sm-8"
            >
              <b-form-select-option :value="null"
                >Pilih Jurusan/Prodi</b-form-select-option
              >
              <b-form-select-option
                v-for="p in listJurusan"
                :key="p.id_jurusan_asal_sekolah"
                :value="p.id_jurusan_asal_sekolah"
                >{{ p.nama_jurusan }}</b-form-select-option
              >
            </b-form-select>
          </b-form-group>
        </validation-provider>
        <validation-provider
          name="Tahun Lulus"
          rules="required"
          v-slot="{ valid, errors }"
        >
          <b-form-group
            label="Tahun Lulus"
            class=""
            label-class="col-form-label mb-0 pb-0"
            label-cols="12"
            label-cols-sm="4"
          >
            <b-form-select
              v-model="form.tahun_lulus"
              :state="errors[0] ? false : valid ? true : null"
              class="col-sm-6"
            >
              <b-form-select-option :value="null"
                >Pilih Tahun Lulus</b-form-select-option
              >
              <b-form-select-option
                v-for="p in listTahunLulus"
                :key="p"
                :value="p"
                >{{ p }}</b-form-select-option
              >
            </b-form-select>
          </b-form-group>
        </validation-provider>
        <validation-provider
          name="NISN/NIM"
          rules="required"
          v-slot="{ valid, errors }"
        >
          <b-form-group
            label="NISN/NIM"
            class=""
            label-class="col-form-label mb-0 pb-0"
            label-cols="12"
            label-cols-sm="4"
          >
            <b-form-input
              v-model="form.nomor_induk"
              :state="errors[0] ? false : valid ? true : null"
              class="col-sm-6 col-md-5"
              placeholder="NISN/NIM"
            ></b-form-input>
          </b-form-group>
        </validation-provider>
        <validation-provider
          name="Ukuran Almamater"
          rules="required"
          v-slot="{ valid, errors }"
        >
          <b-form-group
            label="Ukuran Almamater"
            class=""
            label-class="col-form-label mb-0 pb-0"
            label-cols="12"
            label-cols-sm="4"
          >
            <b-form-select
              v-model="form.almamater"
              :state="errors[0] ? false : valid ? true : null"
              class="col-sm-3"
            >
              <b-form-select-option :value="null"
                >Pilih Ukuran Almamater</b-form-select-option
              >
              <b-form-select-option value="S">S</b-form-select-option>
              <b-form-select-option value="M">M</b-form-select-option>
              <b-form-select-option value="L">L</b-form-select-option>
              <b-form-select-option value="XL">XL</b-form-select-option>
              <b-form-select-option value="XXL">XXL</b-form-select-option>
            </b-form-select>
          </b-form-group>
        </validation-provider>
        <b-form-group>
          <b-button
            variant="success"
            :disabled="invalid && !form.id_asal_sekolah"
            type="submit"
            >Simpan</b-button
          >
        </b-form-group>
      </b-form>
    </validation-observer>
    <b-modal ref="search-modal" size="lg" ok-only>
      <template #modal-title> Detail Asal Sekolah/Perguruan Tinggi </template>
      <div class="d-block">
        <div class="table-responsive">
          <table class="table table-sm table-bordered">
            <thead>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    name="select-all"
                    class="form-checkbox"
                  />
                </td>
                <th>NPSN</th>
                <th>Nama Sekolah</th>
                <th>Kecamatan</th>
                <th>Kabupaten</th>
                <th>Provinsi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="!listSekolah.length">
                <td colspan="5">Data sekolah tidak ditemukan</td>
              </tr>
              <tr v-else v-for="l in listSekolah" :key="l.id_asal_sekolah">
                <td>
                  <input
                    type="checkbox"
                    name="idsekolah"
                    :value="l.id_asal_sekolah"
                    @click="onSelectSekolah(l)"
                  />
                </td>
                <td>{{ l.npsn }}</td>
                <td>{{ l.nama_sekolah }}</td>
                <td>{{ l.kec }}</td>
                <td>{{ l.kab }}</td>
                <td>{{ l.prop }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import {
  BForm,
  BFormGroup,
  BFormSelect,
  BFormSelectOption,
  BInputGroup,
  BInputGroupAppend,
  BFormInput,
  BButton,
} from "bootstrap-vue";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import "../../helper/_validationRules";
import { postPrivateData, putPrivateData } from "../../helper/api";
import { mapGetters } from "vuex";
export default {
  name: "FormPendaftaran",
  props: {
    pendaftaran: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  components: {
    BForm,
    BFormGroup,
    BFormSelect,
    BFormSelectOption,
    BInputGroup,
    BInputGroupAppend,
    BFormInput,
    BButton,
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      form: {},
      listTahunLulus: [],
      listSekolah: [],
      listJurusan: [],
      listJalur: [],
    };
  },
  methods: {
    async simpanPendaftaran() {
      try {
        const simpan = await postPrivateData(
          `/pendaftar/${this.userData.id_person}`,
          this.form
        )
          .then((res) => res)
          .catch((err) => err);
        if (simpan.data.status) {
          this.$store.commit("pendaftar/ADD_PENDAFTARAN", simpan.data.data);
          alert("Pilihan jalur dan prodi berhasil disimpan");
        } else {
          alert(simpan.data.message);
        }
      } catch (error) {
        alert(error);
      }
    },
    async updatePendaftaran() {
      try {
        const update = await putPrivateData(
          `/pendaftar/${this.form.uid_pendaftar}`,
          this.form
        );
        if (update.data.status) {
          alert("Berhasil disimpan");
        } else {
          alert(update.data.message);
        }
      } catch (error) {
        alert(error);
      }
    },
    handleSimpan() {
      if (this.form.uid_pendaftar) {
        this.updatePendaftaran();
      } else {
        this.simpanPendaftaran();
      }
    },
    getMostSekolah() {
      getPrivateData(`/asal-sekolah/most`).then((res) => {
        if (res.status) {
          // console.log(res)
          this.listSekolah = res.data;
        }
      });
    },
    getSekolahById(id) {
      getPrivateData(`/asal-sekolah/${id}`).then((res) => {
        if (res.status) {
          this.listSekolah.push(...res.data);
        }
      });
    },
    getJurusan() {
      getPrivateData(
        `/jurusan-sekolah?id_jenis=${this.selectedSekolah.id_jenis}`
      ).then((res) => {
        if (res.status) {
          this.listJurusan = res.data;
        }
      });
    },
    filterJalur() {
      const jalur = this.$store.state.prodi.listJalur;
      this.listJalur = jalur.filter(
        (k) =>
          k.id_jenjang_pendidikan === parseInt(this.form.id_jenjang_pendidikan)
      );
    },
    onSelectSekolah(item) {
      this.selectedSekolah = item;
      this.form.id_asal_sekolah = item.id_asal_sekolah;
      this.form.id_jurusan_asal_sekolah = null;
      this.$refs["search-modal"].hide();
    },
    async initLoad() {},
  },
  computed: {
    ...mapGetters({
      userData: "auth/userData",
      currentGelombang: "pendaftar/currentGelombang",
      pendaftaranIndex: "pendaftar/pendaftaranIndex",
    }),
  },
  watch: {
    selectedSekolah: {
      handler: function (val, oldVal) {
        if (val !== oldVal) {
          this.getJurusan();
        }
      },
    },
    "form.id_jenjang_pendidikan": {
      handler: function (val, oldVal) {
        if (val !== oldVal) {
          this.filterJalur();
        } else {
          this.listJalur = this.$store.state.prodi.listJalur;
        }
      },
    },
  },
};
</script>

<style>
</style>