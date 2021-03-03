<template>
  <b-container>
    <!-- <div class="d-flex justify-content-between"> -->
    <h4>Pendaftaran</h4>
    <!-- <b-button variant="primary" type="button">Tambah</b-button> -->

    <!-- </div> -->
    <hr class="mt-0" />
    <validation-observer ref="formPendaftaran" v-slot="{ handleSubmit }">
      <b-form @submit.prevent="handleSubmit(tambahPendaftaran)">
        <b-row>
          <b-col cols="12" sm="6">
            <h6 class="text-muted">A. Informasi Pendidikan Terakhir</h6>
            <b-form-group
              label="Asal Sekolah/Perguruan Tinggi"
              label-class="mb-0"
              class="mb-sm-1 mb-md-2"
            >
              <b-input-group class="">
                <b-form-input
                  placeholder="Asal Sekolah/Perguruan Tinggi :"
                  disabled
                  class="col-sm-10 col-md-8"
                ></b-form-input>
                <b-input-group-append>
                  <b-button variant="info" @click="showModal">
                    <b-icon icon="search"></b-icon>
                  </b-button>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
            <validation-provider
              name="Tahun Lulus"
              rules="required"
              v-slot="{ valid, errors }"
            >
              <b-form-group label="Tahun Lulus :" class="mb-sm-1 mb-md-2">
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
              <b-form-group label="NISN/NIM :" class="mb-sm-1 mb-md-2">
                <b-form-input
                  v-model="form.nomor_induk"
                  :state="errors[0] ? false : valid ? true : null"
                  class="col-sm-6 col-md-5"
                  placeholder="NISN/NIM"
                ></b-form-input>
              </b-form-group>
            </validation-provider>
          </b-col>
          <b-col cols="12" sm="6">
            <h6 class="text-muted">B. Pilihan Jalur dan Prodi</h6>
            <validation-provider
              name="Jenis Pendaftaran"
              rules="required"
              v-slot="{ valid, errors }"
            >
              <b-form-group label="Jenis Pendaftaran :" class="mb-sm-1 mb-md-2">
                <b-form-select
                  v-model="form.jenis_pendaftaran"
                  class="col-sm-8 col-md-7"
                  :state="errors[0] ? false : valid ? true : null"

                >
                  <b-form-select-option :value="null"
                    >Pilih Jenis Pendaftaran</b-form-select-option
                  >
                  <b-form-select-option value="1">Mahasiswa Baru</b-form-select-option>
                  <b-form-select-option value="2">Pindahan</b-form-select-option>
                  <b-form-select-option value="11">Alih Jenjang</b-form-select-option>
                </b-form-select>
              </b-form-group>
            </validation-provider>
            <validation-provider
              name="Jenjang Pendidikan"
              rules="required"
              v-slot="{ valid, errors }"
            >
              <b-form-group
                label="Jenjang Pendidikan :"
                class="mb-sm-1 mb-md-2"
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
              name="Jalur Pendaftaran :"
              rules="required"
              v-slot="{ valid, errors }"
            >
              <b-form-group label="Jalur Pendaftaran :" class="mb-sm-1 mb-md-2">
                <b-form-select
                  v-model="form.jalur_pendaftaran"
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
          </b-col>
          <b-col cols="12">
            <b-button
              type="submit"
              variant="primary"
              @click="handleSubmit(tambahPendaftaran)"
              class="btn-block"
              >Simpan</b-button
            >
          </b-col>
        </b-row>
      </b-form>
    </validation-observer>
    <b-row class="mt-4">
      <b-col cols="12">
        <h6>History Pendaftaran terdahulu</h6>
      </b-col>
    </b-row>
    <b-modal ref="search-modal" size="lg">
      <template #modal-title> Detail Asal Sekolah/Perguruan Tinggi </template>
      <div class="d-block">
        <table class="table table-sm table-bordered">
          <thead>
            <tr>
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
          </tbody>
        </table>
      </div>
    </b-modal>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import {
  BContainer,
  BButton,
  BRow,
  BCol,
  BForm,
  BFormGroup,
  BFormSelect,
  BFormSelectOption,
  BInputGroup,
  BInputGroupAppend,
  BFormInput,
  // BFormInvalidFeedback,
  BIcon,
  // BIconSearch,
} from "bootstrap-vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
require("../../helper/_validationRules");
export default {
  name: "Pendaftaran",

  components: {
    ValidationProvider,
    ValidationObserver,
    BContainer,
    BButton,
    BRow,
    BCol,
    BForm,
    BFormGroup,
    BFormSelect,
    BFormSelectOption,
    BInputGroup,
    BInputGroupAppend,
    BFormInput,
    // BFormInvalidFeedback,
    BIcon,
    // BIconSearch
  },
  data() {
    return {
      form: {
        jenis_slta: null,
        id_asal_pendidikan: null,
        tahun_lulus: null,
        nomor_induk: null,
        jenis_pendaftaran: null,
        id_jenjang_pendidikan: null,
        jalur_pendaftaran: null,
        pilihan_prodi_1: null,
        pilihan_prodi_2: null,
        pilihan_prodi_3: null,
      },
      listSekolah: [],
      listTahunLulus: [],
      listJalur: [],
      listProdi: [],
    };
  },
  methods: {
    getPendaftar() {},
    tambahPendaftaran() {
      return true;
    },
    showModal() {
      this.$refs["search-modal"].show();
    },
  },
  computed: {
    ...mapGetters({
      userData: "auth/userData",
      currentPendaftaran: "pendaftar/currentPendaftaran",
    }),
    pendaftaran: {
      get() {
        return this.$store.state.pendaftar.pendaftaran;
      },
      set(val) {
        this.$store.commit("pendaftar/SET_PENDAFTARAN", val);
      },
    },
    filteredProdi() {
      if (!this.listProdi.length) {
        return [];
      } else {
        return this.listProdi.filter((k) => {
          return (
            k.id_prodi !== parseInt(this.form.pilihan_prodi_1) ||
            k.id_prodi !== parseInt(this.form.pilihan_prodi_2) ||
            k.id_prodi !== parseInt(this.form.pilihan_prodi_3)
          );
        });
      }
    },
  },
  mounted() {
    const tahunSekarang = new Date().getFullYear();
    for (let i = tahunSekarang; i > tahunSekarang - 50; i--) {
      this.listTahunLulus.push(i);
    }
  },
};
</script>

<style>
</style>