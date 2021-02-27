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
                  <p class="text-danger" v-show="isError">{{ errorMessage }}</p>
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
require("../../helper/_validationRules");
export default {
  name: "loginPendaftar",
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      email: "",
      password: "",
      userData: {},
    };
  },
  methods: {
    login() {
      this.isSubmiting = true;

      this.$store.commit("SET_LOADING", true, { root: true });

      this.$store
        .dispatch("auth/getToken", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          if (res.status) {
            const userData = this.tokenParser(res.token);
            this.$router.push(`/pendaftar/${userData.id_user}`);
          }

        })
        .catch((err) => {
          this.$store.commit("SET_ERROR", err, { root: true });
        })
        .finally(() => {
          this.$store.commit("SET_LOADING", false, { root: true });
        });
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
  // metaInfo: {
  //   title: "Login Pendaftar",
  //   titleTemplate: "%s PMB UNUJA",
  //   meta: [
  //     {
  //       name: "description",
  //       content:
  //         "Sistem Informasi Penerimaan Mahasiswa Baru (SIMPMB) Universitas Nurul Jadid Probolinggo Jawa Timur"
  //     },
  //     {
  //       property: "og:description",
  //       content:
  //         "Sistem Informasi Penerimaan Mahasiswa Baru (SIMPMB) Universitas Nurul Jadid Probolinggo Jawa Timur"
  //     },
  //     { property: "og:type", content: "website" },
  //     { property: "og:url", content: "https://pmb.unuja.ac.id/login" },
  //     {
  //       property: "og:image",
  //       content: "https://pmb.unuja.ac.id/img/thumb.jpg"
  //     },

  //     { itemprop: "name", content: "PMB Universitas Nurul Jadid" },
  //     {
  //       itemprop: "description",
  //       content:
  //         "Sistem Informasi Penerimaan Mahasiswa Baru (SIMPMB) Universitas Nurul Jadid Probolinggo Jawa Timur"
  //     },
  //     //twitter
  //     { name: "twitter:card", content: "summary" },
  //     { name: "twitter:site", content: "https://pmb.unuja.ac.id/login" },
  //     { name: "twitter:title", content: "PMB Universitas Nurul Jadid" },
  //     {
  //       name: "twitter:description",
  //       content:
  //         "Sistem Informasi Penerimaan Mahasiswa Baru (SIMPMB) Universitas Nurul Jadid Probolinggo Jawa Timur"
  //     },
  //     // Your twitter handle, if you have one.
  //     { name: "twitter:creator", content: "@unujaofficial" }
  //   ],
  //   link: [{ rel: "canonical", href: "https://pmb.unuja.ac.id/login" }]
  // }
};
</script>

<style>
</style>