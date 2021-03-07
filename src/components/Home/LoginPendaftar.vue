<template>
  <div>
    <div class="login-pendaftar mt-5">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 offset-md-4 col-lg-4">
            <div class="card">
              <div class="card-header">
                <h2 class="card-title">Login Pendaftar</h2>
              </div>
              <div class="card-body">
                <ValidationObserver
                  v-slot="{ handleSubmit, invalid }"
                  ref="loginForm"
                >
                  <form
                    id="loginForm"
                    @submit.stop.prevent="handleSubmit(login)"
                  >
                    <div class="form-group">
                      <label for="email" class="mb-0">Email</label>
                      <ValidationProvider
                        name="Email"
                        rules="required|email"
                        v-slot="v"
                      >
                        <input
                          type="email"
                          autocomplete="false"
                          autofocus
                          v-model="email"
                          class="form-control"
                          placeholder="Email"
                        />
                        <small class="text-danger">{{ v.errors[0] }}</small>
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <label for="password" class="mb-0">Password</label>
                      <ValidationProvider
                        name="Password"
                        rules="required"
                        v-slot="v"
                      >
                        <input
                          type="password"
                          v-model="password"
                          class="form-control"
                          placeholder="Password"
                        />
                        <small class="text-danger">{{ v.errors[0] }}</small>
                      </ValidationProvider>
                    </div>
                    <div class="form-group mt-2">
                      <button
                        type="submit"
                        class="btn btn-primary btn-block"
                        :disabled="invalid"
                      >
                        <span
                          v-show="isLoading"
                          class="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Login
                      </button>
                      <a href="/reset-password" class="btn btn-link"
                        >Lupa Password ?</a
                      >
                    </div>
                  </form>
                  <!-- <p class="alert alert-danger" v-show="isError">{{ errorMessage }}</p> -->
                  <b-alert variant="danger" dismissible :show="isError">{{
                    errorMessage
                  }}</b-alert>
                </ValidationObserver>
              </div>
              <div class="card-footer text-center">
                <a href="/register" class="btn btn-link">Buat Akun</a>
                <a href="/panduan" class="btn btn-link">Panduan</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { BAlert } from "bootstrap-vue";
require("../../helper/_validationRules");
import Vue from "vue";
import { VueReCaptcha } from "vue-recaptcha-v3";
Vue.use(VueReCaptcha, { siteKey: "6LeaVG8aAAAAANZCXDIJ6otJrrD0Mf3N42hgW4BI" });
export default {
  name: "loginPendaftar",
  components: {
    ValidationObserver,
    ValidationProvider,
    BAlert,
  },
  data() {
    return {
      email: "",
      password: "",
      userData: {},
    };
  },
  methods: {
    async login() {
      await this.$recaptchaLoaded();
      this.isSubmiting = true;

      this.$store.commit("SET_LOADING", true, { root: true });
      const GResponse = await this.$recaptcha("login");
      const dispatchLogin = await this.$store.dispatch("auth/getToken", {
        email: this.email,
        password: this.password,
        GToken: GResponse,
      });
      console.log(dispatchLogin);
      if (dispatchLogin.status) {
        const userData = this.tokenParser(dispatchLogin.token);
        this.$router.push(`/pendaftar/${userData.id_user}`);
      } else {
        this.$store.commit("SET_ERROR", dispatchLogin.message, { root: true });
      }
      setTimeout(() => {
        this.$store.commit("SET_LOADING", false, { root: true });
      }, 1000);
      // .then((res) => {
      //   if (res.status) {
      //     const userData = this.tokenParser(res.token);
      //     this.$router.push(`/pendaftar/${userData.id_user}`);
      //   }
      // })
      // .catch((err) => {
      //   this.$store.commit("SET_ERROR", err, { root: true });
      // })
      // .finally(() => {
      //   this.$store.commit("SET_LOADING", false, { root: true });
      // });
      // .then(() => {
      // });
    },
    tokenParser(token) {
      const tokenBody = token.split(".")[1];
      return JSON.parse(atob(tokenBody));
    },
  },
  computed: {
    // ...mapGetters({
    //   isLoading: "isLoading",
    //   isError: "isError",
    //   errorMessage: "errorMessage"
    // })
    isLoading: {
      get() {
        return this.$store.state.isLoading;
      },
      set(val) {
        this.$store.commit("SET_LOADING", val, { root: true });
      },
    },
    isError: {
      get() {
        return this.$store.state.isError;
      },
      set(val) {
        this.$store.commit("SET_ERROR", val, { root: true });
      },
    },
    errorMessage() {
      return this.$store.state.errorMessage;
    },
  },
  mounted() {
    if (this.$route.query) {
      this.email = this.$route.query.email;
    }
  },
  beforeDestroy() {
    this.$store.commit("SET_ERROR", "", { root: true });
  },
};
</script>

<style>
</style>