<template>
  <div class="login-pendaftar mt-5">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 offset-md-4 col-lg-4">
          <div class="card">
            <div class="card-header">
              <h2 class="card-title mb-0">Reset Password</h2>
              <small>Pastikan email anda aktif dan dapat dibuka</small>
            </div>
            <div class="card-body">
              <b-alert :show="!!response" :variant="responseStatus">{{
                response
              }}</b-alert>
              <form id="loginForm" @submit.stop.prevent="resetPassword">
                <div class="form-group">
                  <label for="email" class="mb-0">Email</label>

                  <input
                    type="email"
                    autocomplete="false"
                    autofocus
                    v-model="email"
                    class="form-control"
                    placeholder="Email"
                  />
                </div>

                <div class="form-group mt-2">
                  <button
                    type="submit"
                    class="btn btn-primary btn-block"
                    :disabled="!email"
                  >
                    <span
                      v-show="isLoading"
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Reset Password
                  </button>
                </div>
              </form>
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
</template>

<script>
import { BAlert } from "bootstrap-vue";
export default {
  name: "resetPassword",
  components: {
    BAlert,
  },
  data() {
    return {
      email: "",
      response: "",
      responseStatus: "",
    };
  },
  methods: {
    resetPassword() {
        this.response = ''
        this.responseStatus = ''
      this.$store
        .dispatch("auth/resetPassword", this.email)
        .then((res) => {
          if (res.status) {
            this.responseStatus = "success";
          } else {
            this.responseStatus = "danger";
          }
          this.response = res.message;
        })
        .catch((err) => {
          this.responseStatus = "danger";
          this.response = err;
        });
    },
  },
  computed: {
    isLoading: {
      get() {
        return this.$store.state.isLocalLoading;
      },
      set(val) {
        this.$store.commit("SET_LOCAL_LOADING", val);
      },
    },
  },
  mounted(){
    if(this.$route.query){
        this.email = this.$route.query.email
    }
  }
};
</script>

<style>
</style>