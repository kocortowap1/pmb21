<template>
  <div class="formulir container">
    <h5 class="h5">Formulir Pendaftaran</h5>
    <hr />
    <ul class="nav nav-pills flex-column flex-sm-row my-nav">
      <a
        class="flex-sm-fill text-sm-center nav-link clearfix"
        :class="stepTab === 1 ? 'active' : 'text-dark'"
        href="#"
        @click.prevent="stepTab = 1"
      >
        Biodata
        <span v-if="!biodata.length" class="badge badge-success ml-2">
          Lengkap
        </span>
        <span v-else class="badge badge-danger ml-2">{{ biodata.length }}</span>
      </a>

      <a
        class="flex-sm-fill text-sm-center nav-link clearfix"
        :class="stepTab === 2 ? 'active' : 'text-dark'"
        href="#"
        @click.prevent="stepTab = 2"
      >
        Data Orang Tua/Wali
        <span v-if="!dataOrtu.length" class="badge badge-success ml-2">
          Lengkap
        </span>
        <span v-else class="badge badge-danger ml-2">{{
          dataOrtu.length
        }}</span>
      </a>
      <!-- <a
        class="flex-sm-fill text-sm-center nav-link clearfix"
        :class="stepTab === 3 ? 'active' : 'text-dark'"
        href="#"
        @click.prevent="stepTab = 3"
      >
        Data Asal Sekolah
        <span v-if="!asalSekolah.length" class="badge badge-success ml-2">
         Lengkap
        </span>
        <span v-else class="badge badge-danger ml-2">{{
          asalSekolah.length
        }}</span>
      </a> -->
    </ul>
    <hr class="mt-0" />
    <validation-observer ref="formulir" v-slot="{ handleSubmit }">
      <b-form @submit.prevent.stop="handleSubmit(simpan)">
        <!-- STEP 1 -->
        <div v-if="stepTab === 1" class="mb-5">
          <validation-provider
            name="Nama Lengkap"
            rules="required"
            v-slot="{ valid, errors }"
          >
            <b-form-group
              label="Nama Lengkap"
              label-cols="12"
              label-cols-sm="5"
              label-cols-md="3"
              label-class="mb-0 pb-1"
              class="mb-1"
            >
              <b-form-input
                v-model="form.nama"
                :state="errors[0] ? false : valid ? true : null"
                class="col-12 col-sm-8 col-md-6"
              ></b-form-input>
              <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <validation-provider
            name="Jenis Kelamin"
            rules="required"
            v-slot="{ valid, errors }"
          >
            <b-form-group
              label="Jenis Kelamin"
              label-cols="12"
              label-cols-sm="5"
              label-cols-md="3"
              label-class="mb-0 pb-1"
              class="mb-1"
            >
              <b-form-radio-group
                :state="errors[0] ? false : valid ? true : null"
                v-model="form.jk"
                class="col-12 col-sm-8 col-md-6"
              >
                <b-form-radio value="L">Laki-laki</b-form-radio>
                <b-form-radio value="P">Perempuan</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
            <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
          </validation-provider>
          <validation-provider
            name="Tempat Lahir"
            rules="required"
            v-slot="{ valid, errors }"
          >
            <b-form-group
              label="Tempat Lahir"
              label-cols="12"
              label-cols-sm="5"
              label-cols-md="3"
              label-class="mb-0 pb-1"
              class="mb-1"
            >
              <b-form-input
                v-model="form.tempat_lahir"
                :state="errors[0] ? false : valid ? true : null"
                class="col-12 col-sm-8 col-md-6"
              ></b-form-input>
              <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <validation-provider
            name="Tanggal Lahir"
            rules="required"
            v-slot="{ valid, errors }"
          >
            <b-form-group
              label="Tanggal Lahir"
              label-cols="12"
              label-cols-sm="5"
              label-cols-md="3"
              label-class="mb-0 pb-1"
              class="mb-1"
            >
              <b-form-datepicker
                v-model="form.tanggal_lahir"
                :state="errors[0] ? false : valid ? true : null"
                class="col-12 col-md-6"
                locale="id-ID"
              ></b-form-datepicker>
              <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <validation-provider
            name="Nomor HP"
            :rules="{ required: true, regex: /^\d{7,13}/, minmax: [7, 13] }"
            v-slot="{ valid, errors }"
          >
            <b-form-group
              label="Tempat Lahir"
              label-cols="12"
              label-cols-sm="5"
              label-cols-md="3"
              label-class="mb-0 pb-1"
              class="mb-1"
            >
              <b-form-input
                v-model="form.nomor_hp"
                :state="errors[0] ? false : valid ? true : null"
                class="col-12 col-sm-8 col-md-6"
                placeholder="Nomor HP/WA/Telegram"
              ></b-form-input>
              <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <validation-provider
            name="Rencana Domisili"
            rules="required"
            v-slot="{ valid, errors }"
          >
            <b-form-group
              label="Rencana Domisili"
              label-cols="12"
              label-cols-sm="5"
              label-cols-md="3"
              label-class="mb-0 pb-1"
              class="mb-1"
            >
              <b-form-select
                v-model="form.id_domisili"
                :state="errors[0] ? false : valid ? true : null"
                class="col-12 col-sm-8 col-md-6"
              >
                <b-form-select-option :value="null"
                  >Rencana Domisili</b-form-select-option
                >
                <b-form-select-option value="1"
                  >Mondok di PP Nurul Jadid</b-form-select-option
                >
                <b-form-select-option value="2"
                  >Mondok di selain PPNJ</b-form-select-option
                >
                <b-form-select-option value="3">Rumah</b-form-select-option>
              </b-form-select>
            </b-form-group>
          </validation-provider>
          <validation-provider
            name="NIK KTP"
            rules="required|digits:16"
            v-slot="{ valid, errors }"
          >
            <b-form-group
              label="NIK KTP"
              label-cols="12"
              label-cols-sm="5"
              label-cols-md="3"
              label-class="mb-0 pb-1"
              class="mb-1"
            >
              <b-form-input
                v-model="form.nik"
                :state="errors[0] ? false : valid ? true : null"
                class="col-12 col-sm-8 col-md-6"
                placeholder="16 Digit NIK"
              ></b-form-input>
              <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <validation-provider
            name="Nomor KK"
            rules="required|digits:16"
            v-slot="{ valid, errors }"
          >
            <b-form-group
              label="Nomor KK"
              label-cols="12"
              label-cols-sm="5"
              label-cols-md="3"
              label-class="mb-0 pb-1"
              class="mb-1"
            >
              <b-form-input
                v-model="form.nomor_kk"
                :state="errors[0] ? false : valid ? true : null"
                class="col-12 col-sm-8 col-md-6"
                placeholder="16 Digit Nomor KK"
                @blur="getDesa($event)"
              ></b-form-input>
              <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <validation-provider
            name="Provinsi"
            rules="required"
            v-slot="{ valid, errors }"
          >
            <b-form-group
              label="Provinsi"
              label-cols="12"
              label-cols-sm="5"
              label-cols-md="3"
              label-class="mb-0 pb-1"
              class="mb-1"
            >
              <b-form-select
                v-model="selectedProvinsi"
                :state="errors[0] ? false : valid ? true : null"
                class="col-12 col-sm-8 col-md-6"
              >
                <b-form-select-option :value="null"
                  >Pilih Provinsi</b-form-select-option
                >
                <b-form-select-option
                  v-for="p in listProvinsi"
                  :key="p.id_provinsi"
                  :value="p.id_provinsi"
                  >{{ p.provinsi }}</b-form-select-option
                >
              </b-form-select>
              <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <validation-provider
            name="Kabupaten"
            rules="required"
            v-slot="{ valid, errors }"
          >
            <b-form-group
              label="Kabupaten"
              label-cols="12"
              label-cols-sm="5"
              label-cols-md="3"
              label-class="mb-0 pb-1"
              class="mb-1"
            >
              <b-form-select
                v-model="selectedKabupaten"
                :state="errors[0] ? false : valid ? true : null"
                class="col-12 col-sm-8 col-md-6"
              >
                <b-form-select-option :value="null"
                  >Pilih Kabupaten</b-form-select-option
                >
                <b-form-select-option
                  v-for="p in listKabupaten"
                  :key="p.id_kabupaten"
                  :value="p.id_kabupaten"
                  >{{ p.kabupaten }}</b-form-select-option
                >
              </b-form-select>
              <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <validation-provider
            name="Kecamatan"
            rules="required"
            v-slot="{ valid, errors }"
          >
            <b-form-group
              label="Kecamatan"
              label-cols="12"
              label-cols-sm="5"
              label-cols-md="3"
              label-class="mb-0 pb-1"
              class="mb-1"
            >
              <b-form-select
                v-model="selectedKecamatan"
                :state="errors[0] ? false : valid ? true : null"
                class="col-12 col-sm-8 col-md-6"
              >
                <b-form-select-option :value="null"
                  >Pilih Kecamatan</b-form-select-option
                >
                <b-form-select-option
                  v-for="p in listKecamatan"
                  :key="p.id_kecamatan"
                  :value="p.id_kecamatan"
                  >{{ p.kecamatan }}</b-form-select-option
                >
              </b-form-select>
              <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <validation-provider
            name="Desa"
            rules="required"
            v-slot="{ valid, errors }"
          >
            <b-form-group
              label="Desa"
              label-cols="12"
              label-cols-sm="5"
              label-cols-md="3"
              label-class="mb-0 pb-1"
              class="mb-1"
            >
              <b-form-select
                v-model="form.id_desa"
                :state="errors[0] ? false : valid ? true : null"
                class="col-12 col-sm-8 col-md-6"
              >
                <b-form-select-option :value="null"
                  >Pilih Desa</b-form-select-option
                >
                <b-form-select-option
                  v-for="p in listDesa"
                  :key="p.id_desa"
                  :value="p.id_desa"
                  >{{ p.desa }}</b-form-select-option
                >
              </b-form-select>
              <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <validation-provider name="Dusun" rules="">
            <b-form-group
              label="Dusun"
              label-cols="12"
              label-cols-sm="5"
              label-cols-md="3"
              label-class="mb-0 pb-1"
              class="mb-1"
            >
              <b-form-input
                v-model="form.dusun"
                class="col-12 col-sm-8 col-md-6"
                placeholder="Dusun"
              ></b-form-input>
            </b-form-group>
          </validation-provider>
          <validation-provider name="Jalan" rules="">
            <b-form-group
              label="Jalan"
              label-cols="12"
              label-cols-sm="5"
              label-cols-md="3"
              label-class="mb-0 pb-1"
              class="mb-1"
            >
              <b-form-input
                v-model="form.jalan"
                class="col-12 col-sm-8 col-md-6"
                placeholder="Jalan"
              ></b-form-input>
            </b-form-group>
          </validation-provider>

          <div class="form-group row mb-0 mb-sm-1">
            <label for class="col-sm-3 mb-sm-0 mb-md-2">RT / RW</label>
            <div class="col col-sm-2 col-md-2">
              <ValidationProvider name="RT" rules="numeric" v-slot="v">
                <input
                  type="text"
                  class="form-control"
                  placeholder="RT"
                  v-model="form.rt"
                />
                <small class="text-danger">{{ v.errors[0] }}</small>
              </ValidationProvider>
            </div>
            /
            <div class="col col-sm-2 col-md-2">
              <ValidationProvider name="RT" rules="numeric" v-slot="v">
                <input
                  type="text"
                  class="form-control"
                  placeholder="RW"
                  v-model="form.rw"
                />
                <small class="text-danger">{{ v.errors[0] }}</small>
              </ValidationProvider>
            </div>
          </div>
          <b-button
            class="float-right"
            :disabled="!!biodata.length"
            type="button"
            variant="primary"
            @click="stepTab++"
            >Lanjut</b-button
          >
        </div>
        <!--STEP 2 -->
        <div class="mb-5" v-if="stepTab === 2">
          <validation-provider
            name="Rentang Usia Ayah"
            rules="required"
            v-slot="{ valid, errors }"
          >
            <b-form-group
              label="Rentang Usia Ayah"
              label-cols="12"
              label-cols-sm="5"
              label-cols-md="3"
              label-class="mb-0 pb-1"
              class="mb-1"
            >
              <b-form-select
                v-model="form.is_ayah_wafat"
                :state="errors[0] ? false : valid ? true : null"
                class="col-12 col-sm-8 col-md-6"
              >
                <b-form-select-option value="T"
                  >Rentang Usia Ayah</b-form-select-option
                >
                <b-form-select-option value="30"
                  >30 - 40 Tahun</b-form-select-option
                >
                <b-form-select-option value="40"
                  >40 - 50 Tahun</b-form-select-option
                >
                <b-form-select-option value="30"
                  >50 - 60 Tahun</b-form-select-option
                >
                <b-form-select-option value="30">
                  > 60 Tahun</b-form-select-option
                >
                <b-form-select-option value="Y">Wafat</b-form-select-option>
              </b-form-select>
              <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <validation-provider name="Nama Ayah" rules="required" v-slot="{valid, errors}">
             <b-form-group
              label="Nama Ayah"
              label-cols="12"
              label-cols-sm="5"
              label-cols-md="3"
              label-class="mb-0 pb-1"
              class="mb-1"
            >
              <b-form-input
                v-model="form.nama_ayah"
                :state="errors[0] ? false : valid ? true : null"
                class="col-12 col-sm-8 col-md-6"
                placeholder="Nama Ayah"
              ></b-form-input>
              <b-form-invalid-feedback>{{ errors[0] }}</b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
        </div>
      </b-form>
    </validation-observer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { ValidationProvider, ValidationObserver } from "vee-validate";
require("../../helper/_validationRules");
import {
  BForm,
  BFormGroup,
  BFormInput,
  BFormRadio,
  BFormRadioGroup,
  BFormInvalidFeedback,
  BFormDatepicker,
  BFormSelect,
  BFormSelectOption,
  BButton,
} from "bootstrap-vue";

export default {
  name: "formulir",
  data() {
    return {
      stepTab: 1,
      selectedProvinsi: null,
      selectedKabupaten: null,
      selectedKecamatan: null,
    };
  },
  components: {
    ValidationProvider,
    ValidationObserver,
    BForm,
    BFormGroup,
    BFormInput,
    BFormRadio,
    BFormRadioGroup,
    BFormInvalidFeedback,
    BFormDatepicker,
    BFormSelect,
    BFormSelectOption,
    BButton,
  },
  computed: {
    form: {
      get() {
        return this.$store.state.pendaftar.person;
      },
      set(val) {
        this.$store.commit("pendaftar/SET_PERSON", val);
      },
    },
    listProvinsi() {
      return this.$store.state.referensi.referensi["provinsi"] || [];
    },
    listKabupaten() {
      return this.$store.state.referensi.referensi["kabupaten"] || [];
    },
    listKecamatan() {
      return this.$store.state.referensi.referensi["kecamatan"] || [];
    },
    listDesa() {
      return this.$store.state.referensi.referensi["desa"] || [];
    },
    ...mapGetters({
      biodata: "pendaftar/biodataKosong",
      dataOrtu: "pendaftar/ortuKosong",
    }),
  },
  methods: {
    getPendaftar() {
      const person = this.$store.state.pendaftar.person;
      if (!Object.entries(person).length) {
        this.$store
          .dispatch("pendaftar/getPendaftar", this.$route.params.id)
          .then((res) => {
            if (res.id_desa) {
              this.selectedProvinsi = parseInt(res.id_desa.substr(0, 2));
              this.selectedKabupaten = parseInt(res.id_desa.substr(0, 4));
              this.selectedKecamatan = parseInt(res.id_desa.substr(0, 6));
            }
          });
      } else {
        if (person.id_desa) {
          this.selectedProvinsi = parseInt(person.id_desa.substr(0, 2));
          this.selectedKabupaten = parseInt(person.id_desa.substr(0, 4));
          this.selectedKecamatan = parseInt(person.id_desa.substr(0, 6));
        }
      }
    },
    simpan() {
      return true;
    },
    async getDesa(e) {
      let val = e.target.value;
      this.selectedProvinsi = parseInt(val.substr(0, 2));
      this.selectedKabupaten = parseInt(val.substr(0, 4));
      this.selectedKecamatan = parseInt(val.substr(0, 6));
      // this.$store.dispatch("referensi/getDesa", val.substr(0, 6));
      // console.log(`${typeof val} : ${val.substr(0,6)}`)
    },
  },
  mounted() {
    if (!Object.entries(this.form).length) {
      this.getPendaftar();
      this.$store.dispatch("referensi/getReferensi");
    }
  },
  watch: {
    selectedProvinsi: {
      handler: function (val, oldVal) {
        if (val && val !== oldVal) {
          this.$store.dispatch("referensi/getKabupaten", val);
        }
      },
    },
    selectedKabupaten: {
      handler: function (val, oldVal) {
        if (val && val !== oldVal) {
          this.$store.dispatch("referensi/getKecamatan", val);
        }
      },
    },
    selectedKecamatan: {
      handler: function (val, oldVal) {
        if (val && val !== oldVal) {
          this.$store.dispatch("referensi/getDesa", val);
        }
      },
    },
  },
};
</script>

<style>
</style>