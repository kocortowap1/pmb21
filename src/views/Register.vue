<template>
  <div class="register mt-4">
    <b-container>
      <b-row no-gutters>
        <b-col sm="12" md="6" lg="6">
          <b-card class="bg-primary text-white">
            <b-card-title>Keterangan</b-card-title>
            <hr class="mt-2" />
            <b-card-text>
              Form berikut ini adalah Form yang digunakan untuk melakukan
              mendaftarkan diri anda untuk mendapatkan Akun pada SIMPMB UNUJA.
              Pendataan ini bersifat tidak mengikat. Saudara tidak dipungut
              biaya pendaftaran saat membuat akun. Apabila saudara
              bersungguh-sungguh mendaftarkan diri bergabung dan menjadi bagian
              dari civitas akademik UNUJA, silakan lanjutkan ke tahap berikutnya
              sesuai dengan aturan yang telah ditetapkan dalam SIMPMB UNUJA.
              <ul>
                <li>
                  Mohon diisi dengan data yang valid, agar memudahkan
                  konfirmasi.
                </li>
                <li>
                  Data yang sudah didaftarkan, hanya bisa digunakan satu kali
                </li>
                <li>
                  Gunakan email yang valid dan dapat dibuka, karena email
                  tersebut akan digunakan sebagai kode kunci pada aplikasi lain
                  di UNUJA
                </li>
                <li>Password boleh tidak sama dengan password email</li>
              </ul>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col sm="12" md="6" lg="6">
          <b-card>
            <b-card-title>Pembuatan Akun PMB</b-card-title>
            <hr class="mt-2" />
            <ValidationObserver
              validate="{silent: false}"
              v-slot="{ handleSubmit, invalid }"
              ref="observeForm"
            >
              <form id="register" @submit.prevent="handleSubmit(registrasi)">
                <b-tabs content-class="mt-3" v-model="activeStep">
                  <b-tab title="Akun" active>
                    <div class="form-group mb-1">
                      <label for="email" class="col-form-label">Email</label>
                      <ValidationProvider
                        name="Email"
                        v-slot="v"
                        rules="required|email"
                      >
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email Aktif"
                          v-model="person.email"
                          @blur="checkEmail($event)"
                        />
                        <small class="text-danger">{{ v.errors[0] }}</small>
                      </ValidationProvider>
                    </div>
                    <div class="form-group mb-1">
                      <label for="password">Password</label>
                      <ValidationProvider
                        name="Password"
                        v-slot="v"
                        vid="password"
                        rules="required|minmax:5,20"
                      >
                        <div class="input-group">
                          <input
                            :type="passwordType"
                            v-model="person.password"
                            class="form-control"
                            placeholder="Password"
                          />
                          <div class="input-group-append">
                            <button
                              type="button"
                              class="btn btn-outline-secondary"
                              @click.prevent="showPassword"
                              tabindex="-1"
                            >
                              <b-icon :icon="passwordIcon"></b-icon>
                            </button>
                          </div>
                        </div>
                        <small class="text-danger">{{ v.errors[0] }}</small>
                      </ValidationProvider>
                    </div>
                    <div class="form-group mb-1">
                      <label for="password">Konfirmasi Password</label>
                      <ValidationProvider
                        name="Konfirmasi Password"
                        vid="confirm"
                        v-slot="v"
                        rules="confirmed:password"
                        tabindex="-1"
                      >
                        <div class="input-group">
                          <input
                            :type="passwordType"
                            v-model="confirm"
                            class="form-control"
                            placeholder="Password"
                            @keypress.enter="activeStep++"
                          />
                          <div class="input-group-append">
                            <button
                              type="button"
                              class="btn btn-outline-secondary"
                              @click.prevent="showPassword"
                            >
                              <b-icon :icon="passwordIcon"></b-icon>
                            </button>
                          </div>
                        </div>
                        <small class="text-danger">{{ v.errors[0] }}</small>
                      </ValidationProvider>
                    </div>
                    <div class="form-group d-flex justify-content-end">
                      <button
                        type="button"
                        class="btn btn-success"
                        :disabled="!person.password || !person.email"
                        @click.prevent="activeStep++"
                      >
                        Lanjut
                      </button>
                    </div>
                  </b-tab>
                  <b-tab title="Biodata Singkat" :activate.sync="activeStep">
                    <div class="form-group mb-1">
                      <label for="nama" class="col-form-label"
                        >Nama Lengkap</label
                      >
                      <ValidationProvider
                        name="Nama Lengkap"
                        rules="required|regexnama|min:3"
                        v-slot="v"
                      >
                        <input
                          type="text"
                          id="nama"
                          name="nama"
                          autofocus
                          autocomplete="false"
                          class="form-control"
                          placeholder="Nama Lengkap"
                          v-model="person.nama"
                        />
                        <small class="text-danger">{{ v.errors[0] }}</small>
                      </ValidationProvider>
                    </div>
                    <b-form-group label="Jenis Kelamin" class="mb-1">
                      <ValidationProvider
                        name="Jenis Kelamin"
                        rules="required|one_of:L,P"
                        v-slot="v"
                      >
                        <b-form-radio-group
                          v-model="person.jk"
                          :options="[
                            { text: 'Laki-laki', value: 'L' },
                            { text: 'Perempuan', value: 'P' },
                          ]"
                          name="radio-inline"
                        ></b-form-radio-group>
                        <small class="text-danger">{{ v.errors[0] }}</small>
                      </ValidationProvider>
                    </b-form-group>
                    <div class="form-group mb-1">
                      <label for="nama" class="col-form-label"
                        >Tempat Lahir</label
                      >
                      <ValidationProvider
                        name="Tempat Lahir"
                        rules="required|regexnama|min:3"
                        v-slot="v"
                      >
                        <input
                          type="text"
                          id="tempat_lahir"
                          name="tempat_lahir"
                          autofocus
                          autocomplete="false"
                          class="form-control"
                          placeholder="Tempat Lahir"
                          v-model="person.tempat_lahir"
                        />
                        <small class="text-danger">{{ v.errors[0] }}</small>
                      </ValidationProvider>
                    </div>
                    <div class="form-group mb-1">
                      <label for="tanggallahir">Tanggal Lahir</label>
                      <div class="form-control tgl">
                        <select
                          v-model="tahunlahir"
                          name="tahunlahir"
                          class="customTgl"
                        >
                          <option value>Tahun</option>
                          <option v-for="i in listTahun" :key="i" :value="i">
                            {{ i }}
                          </option>
                        </select>
                        <select
                          v-model="bulanlahir"
                          name="bulanlahir"
                          class="customTgl"
                        >
                          <option value>Bulan</option>
                          <option
                            v-for="bulan in listBulan"
                            :key="bulan.id"
                            :value="bulan.id"
                          >
                            {{ bulan.value }}
                          </option>
                        </select>
                        <select
                          v-model="tanggallahir"
                          name="tanggallahir"
                          class="customTgl"
                        >
                          <option value>Tanggal</option>
                          <option
                            v-for="tgl in listTangal"
                            :key="tgl"
                            :value="tgl"
                          >
                            {{ tgl }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group mb-1">
                      <ValidationProvider
                        name="Nomor HP"
                        :rules="{
                          required: true,
                          regex: /^\d{7,13}/,
                          minmax: [7, 13],
                        }"
                        v-slot="v"
                      >
                        <!-- rules="required|minmax:7,12"  -->
                        <label for="nomorhp">Nomor HP</label>
                        <input
                          type="text"
                          v-model="person.nomor_hp"
                          class="form-control"
                          placeholder="Nomor HP/WA/Telegram"
                          inputmode="numeric"
                        />
                        <small class="text-danger">{{ v.errors[0] }}</small>
                      </ValidationProvider>
                    </div>
                    <div class="form-group d-flex justify-content-between">
                      <button
                        class="btn btn-danger"
                        type="reset"
                        @click="resetForm"
                      >
                        Batal
                      </button>
                      <button
                        class="btn btn-primary"
                        :disabled="invalid"
                        type="submit"
                        @click.prevent="registrasi"
                      >
                        Mendaftar
                      </button>
                    </div>
                  </b-tab>
                </b-tabs>
              </form>
            </ValidationObserver>
          </b-card>
        </b-col>
      </b-row>
      <!-- <b-modal
        ref="modal-info"
        ok-only
        header-text-variant="white"
        @hidden="onHiddenModal"
        :headerBgVariant="modal.headerType"
      >
        <template #modal-title> {{ modal.title }} </template>
        <div class="d-block">
          <h6>{{ modal.content }}</h6>
        </div>
      </b-modal> -->
    </b-container>
  </div>
</template>

<script>
import {
  BContainer,
  BRow,
  BCol,
  BCard,
  BCardTitle,
  BCardText,
  BFormGroup,
  BFormRadioGroup,
  BTabs,
  BTab,
  BIcon,
  BIconEye,
  BIconSlash,
  BButton,
} from "bootstrap-vue";
import Vue from "vue";
import { VueReCaptcha } from "vue-recaptcha-v3";
Vue.use(VueReCaptcha, { siteKey: "6LeaVG8aAAAAANZCXDIJ6otJrrD0Mf3N42hgW4BI" });
import tanggalIndo from "../helper/date";
import { ValidationProvider, ValidationObserver } from "vee-validate";

require("../helper/_validationRules");

export default {
  name: "register",
  components: {
    ValidationProvider,
    ValidationObserver,
    BContainer,
    BRow,
    BCol,
    BCard,
    BCardTitle,
    BCardText,
    BFormGroup,
    BFormRadioGroup,
    BTabs,
    BTab,
    BIcon,
    BIconEye,
    BIconSlash,
    BButton,
  },

  data() {
    return {
      listTahun: [],
      listBulan: [],
      listTangal: [],
      tahunlahir: "",
      bulanlahir: "",
      tanggallahir: "",
      passwordType: "password",
      passwordIcon: "eye",
      confirm: "",
      // person: {},
      activeStep: 0,
      modal: {
        title: null,
        content: null,
        headerType: null,
        actionAfter: false,
      },
    };
  },
  methods: {
    getNamaBulan() {
      this.listBulan = tanggalIndo.listNamaBulan();
    },
    getListTanggal() {
      // this.tanggallahir = "";
      this.listTangal = tanggalIndo.tanggalDalamBulan(
        parseInt(this.tahunlahir),
        parseInt(this.bulanlahir)
      );
    },
    showPassword() {
      this.passwordType = this.passwordType == "password" ? "text" : "password";
      this.passwordIcon = this.passwordIcon == "eye" ? "eye-slash" : "eye";
    },
    onHiddenModal() {
      if (this.modal.actionAfter) {
        // this.$refs.observeForm.reset();
        this.$router.push(`/login?email=${this.person.email}`);
      } else {
        return false;
      }
    },
    async registrasi() {
      // let response = {}
      await this.$recaptchaLoaded();

      const GResponse = await this.$recaptcha("login");
      let data = this.person;
      const request = await this.$store.dispatch("auth/registrasi", {
        data: { person: data },
        header: { ["x-recaptcha"]: GResponse },
      });
      if (request.status) {
        await this.createModal(
            "Sukses",
          "success",
          "Pendaftaran berhasil dilakukan, silakan login untuk melengkapi data"
        )

            await this.resetForm();
            setTimeout(() => {
              this.$router.push(`/login?email=${this.person.email}`);
            }, 2000);
            return false;
        // this.modal.headerType = "success";
        // this.modal.title = "Pendaftaran Sukses !!";
        // this.modal.content =
        //   "Pendaftaran berhasil. Selanjutnya silakan login untuk melengkapi data";
        // this.modal.actionAfter = true;
      } else {
        this.createModal("Gagal!!", "danger", request.errMessage).then(() => {
          return false;
        });
        // this.modal.headerType = "danger";
        // this.modal.title = "Pendaftaran Gagal !!";
        // this.modal.content = "Pendaftaran Gagal. " + request.errMessage;
        // this.modal.actionAfter = true
      }
      // this.$refs["modal-info"].show();
      // data["tanggal_lahir"] = this.tanggalLahir;
      // this.$store
      //   .dispatch("auth/registrasi", { person: data })
      //   .then((res) => {
      //     console.log(res);
      //     this.createModal(
      //       "Sukses",
      //       "success",
      //       "Pendaftaran berhasil dilakukan, silakan login untuk melengkapi data"
      //     )
      //       .then(() => {
      //         this.$nextTick(() => {
      //           this.resetForm();
      //         });
      //         this.$router.push(`/login?email=${this.person.email}`);
      //       })
      //       .catch(() => {
      //         return false;
      //       });
      //   })
      //   .catch((err) => {
      //     this.createModal("Gagal!!", "danger", err.errorMessage).then(() => {
      //       return false;
      //     });
      //   });
    },
    resetForm() {
      // Object.keys(this.person).forEach((x) => (this.person[x] = ""));
      this.person = {};
      this.confirm = "";
      this.$refs.observeForm.reset();
      this.activeStep = 0;
    },
    showModal() {
      this.$refs["modal-info"].show();
    },
    createModal(title, type, content) {
      const option = {
        title: title,
        size: "md",
        buttonSize: "md",
        headerClass: `p-2 border-bottom-0 bg-${type} text-white`,
        footerClass: "p-2 border-top-0",
        centered: true,
        okVariant: type,
      };
      this.$bvModal.msgBoxOk(content, option);
    },
    checkEmail(e) {
      this.$store
        .dispatch("auth/checkExistEmail", e.target.value)
        .then((res) => {
          if (!res.status) {
            return false;
          } else {
            const nama = res.data[0].nama;
            this.$bvModal
              .msgBoxConfirm(
                `Email ini sudah terdaftar atas nama ${nama.toUpperCase()}, Silakan masuk melalui menu LOGIN, apakah anda masih ingat password anda?`,
                {
                  title: "Perhatian",
                  size: "sm",
                  buttonSize: "sm",
                  okVariant: "warning",
                  okTitle: "Ya, saya ingat",
                  cancelTitle: "Tidak, saya ingin reset password",
                  footerClass: "p-2",
                  hideHeaderClose: false,
                  centered: true,
                }
              )
              .then((md) => {
                if (md) {
                  // this.parseTanggalLahir(res.data[0].tanggal_lahir)
                  // this.$store.commit("auth/SET_REGISTRASI", {...res.data[0], email: e.target.value});
                  this.$router.push(`/login?email=${e.target.value}`);
                } else {
                  this.$router.push(`/reset-password?email=${e.target.value}`);
                }
              })
              .catch(() => {
                return false;
              });
          }
        });
    },
    parseTanggalLahir(tanggal) {
      const parse = tanggal.split("-");
      this.tahunlahir = parseInt(parse[0]);
      this.bulanlahir = parseInt(parse[1]);
      this.tanggallahir = parseInt(parse[2]);
    },
  },
  computed: {
    person: {
      get() {
        return this.$store.state.auth.person;
      },
      set(val) {
        this.$store.commit("auth/SET_REGISTRASI", val);
      },
    },
    tanggalLahir() {
      if (this.tahunlahir && this.bulanlahir && this.tanggallahir) {
        const tgl =
          this.tanggallahir < 10 ? "0" + this.tanggallahir : this.tanggallahir;
        const bln =
          this.bulanlahir < 10 ? "0" + this.bulanlahir : this.bulanlahir;
        return `${this.tahunlahir}-${bln}-${tgl}`;
      }
      return "";
    },
    // listTanggalLahir() {
    //   if (this.tahunlahir && this.bulanlahir) {
    //     return tanggalIndo.tanggalDalamBulan(
    //       parseInt(this.tahunlahir),
    //       parseInt(this.bulanlahir)
    //     );
    //   }
    //   return [];
    // },
  },
  mounted() {
    for (let i = new Date().getFullYear() - 12; i > 1950; --i) {
      this.listTahun.push(i);
    }
    this.getNamaBulan();
  },
  // created(){
  //   this.$refs['modal-info'].show()
  // },
  watch: {
    bulanlahir: {
      handler: function (val) {
        if (val) {
          this.getListTanggal();
        }
      },
    },
  },
};
</script>

<style lang="scss">
.tgl {
  padding: 0.375rem 0.3rem;
  .customTgl {
    border: none;
    background: none;
    & select {
      appearance: none;
      -webkit-appearance: none;
    }
  }
}
</style>