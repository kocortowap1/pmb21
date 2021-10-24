<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <b-card header-bg-variant="white" header-tag="header">
          <template #header>
            <div class="d-flex justify-content-between">
              <h5>
                Pendaftaran Tahun Akademik {{ tahunAkademik.tahun_akademik }}
              </h5>
            </div>
          </template>
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
                      <b-form-select-option value="2"
                        >Pindahan</b-form-select-option
                      >
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
                      <b-form-select-option value="XXL"
                        >XXL</b-form-select-option
                      >
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
          </div>
        </b-card>
      </b-col>
    </b-row>

    <b-modal ref="search-modal" size="lg" ok-only>
      <template #modal-title> Detail Asal Sekolah/Perguruan Tinggi </template>
      <div class="d-block">
        <div class="alert alert-info" v-if="!cariSekolah">
          Daftar sekolah di bawah ini adalah Asal Sekolah/PT yang sering dipilih
          oleh calon mahasiswa baru. Anda dapat melakukan pencarian jika Asal
          Sekolah anda tidak tercantum dalam list berikut
        </div>
        <div class="d-flex justify-content-between">
          <div>Filter</div>
          <div>
            <b-form-input
              class="mb-1"
              placeholder="Cari Sekolah"
              @input="pencarianSekolah($event)"
            ></b-form-input>
          </div>
        </div>

        <b-table
          small
          sticky-header
          :items="listSekolah"
          :fields="listSekolahField"
        >
          <template #cell(id_asal_sekolah)="data">
            <input
              type="checkbox"
              name="idsekolah"
              :value="data.item.id_asal_sekolah"
              @click="onSelectSekolah(data.item)"
            />
          </template>
          <template #cell(kec)="data">
            {{ data.item.kec }} {{ data.item.kab }} {{ data.item.prop }}
          </template>
        </b-table>
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
  BCard,
  BCardTitle,
  BTable,
  // BFormInvalidFeedback,
  BIcon,
  BIconSearch,
} from "bootstrap-vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import {
  getPrivateData,
  postPrivateData,
  putPrivateData,
} from "../../helper/api";
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

    BIcon,
    BCard,
    BCardTitle,

    BIconSearch,
    BTable,
  },
  data() {
    return {
      listSekolah: [],
      listSekolahField: [
        { key: "id_asal_sekolah", label: "#" },
        { key: "nama_sekolah", label: "Asal Sekolah" },
        { key: "kec", label: "Alamat" },
      ],
      listTahunLulus: [],
      listJurusan: [],
      // listJalur: [],
      form: {},
      listMostSekolah: [],
      cariSekolah: "",
      selectedSekolah: {},
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
    showModal() {
      this.$refs["search-modal"].show();
    },
    pencarianSekolah(e) {
      if (e.length % 3 === 2) {
        getPrivateData(`/asal-sekolah?cari=${e}`).then((res) => {
          if (res.status) {
            this.listSekolah = res.data;
          }
        });
      }
    },
    getMostSekolah() {
      getPrivateData(`/asal-sekolah/most`).then((res) => {
        if (res.status) {
          // console.log(res)
          this.listSekolah = res.data;
          this.listMostSekolah = res.data;
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
    onSelectSekolah(item) {
      // alert(JSON.stringify(item));
      this.selectedSekolah = item;
      this.form.id_asal_sekolah = item.id_asal_sekolah;
      this.form.id_jurusan_asal_sekolah = null;
      // this.getJurusan();
      this.$refs["search-modal"].hide();
    },
    filterJalur(val) {
      // console.log(`filter => ${typeof val}`)
      const jalur = this.$store.state.prodi.listJalur;
      this.listJalur = jalur.filter((k) => k.id_jenjang_pendidikan === val);
    },
    initPendaftaran() {
      let newObj = {};
      if (Object.entries(this.pendaftaran).length) {
        //  return pendaftaran
        newObj = this.pendaftaran;
      } else {
        newObj = {
          almamater: null,
          pilihan_prodi_1: null,
          pilihan_prodi_2: null,
          pilihan_prodi_3: null,
          id_jalur: null,
          id_asal_sekolah: null,
          jenis_pendaftaran: null,
          id_jenjang_pendidikan: null,
          id_jurusan_asal_sekolah: null,
          tahun_lulus: null,
        };
      }
      this.form = newObj;
    },
  },
  computed: {
    ...mapGetters({
      userData: "auth/userData",
      currentGelombang: "pendaftar/currentGelombang",
      pendaftaranIndex: "pendaftar/pendaftaranIndex",
      pendaftaran: "pendaftar/currentPendaftaran"
    }),

    tahunAkademik() {
      return this.$store.state.gelombang.tahunAkademik || {};
    },
    listJalur :{
      get(){
        const jalur = this.$store.state.prodi.listJalur
        if(jalur.length && this.form.id_jenjang_pendidikan){
          return jalur.filter(k => k.id_jenjang_pendidikan === parseInt(this.form.id_jenjang_pendidikan))
        }else{
          return []
        }

      },
      set(val){
        return val
      }
    },
    listProdi() {
      const prodi = this.$store.state.prodi.listProdi;
      if (prodi.length) {
        return prodi.filter((k) => k.id_jalur === parseInt(this.form.id_jalur));
      } else {
        return [];
      }
    },
    pilihanProdi2() {
      if (this.listProdi.length > 1) {
        return this.listProdi.filter(
          (k) => k.id_prodi !== parseInt(this.form.pilihan_prodi_1)
        );
      } else {
        return this.listProdi;
      }
    },
    pilihanProdi3() {
      if (this.pilihanProdi2.length > 1) {
        return this.listProdi.filter(
          (k) =>
            k.id_prodi !== parseInt(this.form.pilihan_prodi_1) &&
            k.id_prodi !== parseInt(this.form.pilihan_prodi_2)
        );
      } else {
        return this.pilihanProdi2;
      }
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

    displaySekolah: {
      get() {
        if (this.form.id_asal_sekolah && this.listSekolah.length) {
          const sek = this.listSekolah.find(
            (k) => k.id_asal_sekolah === this.form.id_asal_sekolah
          );
          return `${sek.nama_sekolah} ${sek.kec} ${sek.kab} [${sek.npsn}]`;
        } else {
          return "";
        }
      },
      set(val) {
        return val;
      },
    },
  },
  mounted() {
    const tahunSekarang = new Date().getFullYear();
    for (let i = tahunSekarang; i > tahunSekarang - 50; i--) {
      this.listTahunLulus.push(i);
    }
    this.$store.dispatch("prodi/getJalurPendaftaran");
    this.getMostSekolah();
    if (Object.entries(this.tahunAkademik).length) {
      this.$store.dispatch(
        "prodi/getProdiperTahun",
        this.tahunAkademik.id_tahun_akademik
      );
    }
    this.$store.dispatch("pendaftar/getPendaftar", this.$route.params.id);
  },
  created() {
    this.initPendaftaran();

  },
  watch: {
    selectedSekolah: {
      handler: function (val, oldVal) {
        if (val !== oldVal) {
          this.getJurusan();
        }
      },
    },
    "form.id_asal_sekolah": {
      handler: function (val, oldVal) {
        if (val !== oldVal) {
          this.getJurusan();
        }
      },
    },
    // "form.id_jenjang_pendidikan": {
    //   handler: function (val, oldVal) {
    //     if (val && val !== oldVal) {
    //       // this.filterJalur(val);
    //       const jalur = this.$store.state.prodi.listJalur;
    //       this.listJalur = jalur.filter((j) => j.id_jenjang_pendidikan == val);
    //     } else {
    //       this.listJalur = this.$store.state.prodi.listJalur;
    //     }
    //   },
    // },
    cariSekolah: {
      handler: function (val, oldVal) {
        if (oldVal && !val) {
          this.listSekolah = this.listMostSekolah;
        }
      },
    },
  },
};
</script>

<style>
</style>