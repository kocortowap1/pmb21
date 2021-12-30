<template>
  <div>
    <div class="card w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <form @submit.prevent="login">
          <div class="form-control">
            <label class="label">
              <span class="label-text pb-0">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered mt-0"
              v-model="form.username"
            />
          </div>
          <div class="form-control mt-2">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              class="input input-bordered"
              v-model="form.password"
            />
            <label class="label">
              <a href="#" class="label-text-alt">Forgot password?</a>
            </label>
          </div>

          <div class="flex justify-between mt-6">
            <button class="btn btn-primary">Login</button>
            <a href="#">Klik ini untuk Membuat Akun </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      form: {},
    };
  },
};
</script>

<style>
</style>