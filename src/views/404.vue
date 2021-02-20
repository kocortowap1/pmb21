<template>
  <div class="not-found">
    <h1>Not Found</h1>
    <p>Halaman yang anda cari tidak ada</p>
    <button class="btn btn-lg btn-outline-light" @click="$router.go(-1)"><i class="fa fa-arrow-left"></i> Kembali</button>
    <!-- <button class="btn btn-lg btn-outline-primary" @click="$router.go(-1)"><i class="fa fa-arrow-left"></i></button> -->
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style lang="scss">
.not-found {
  background-color: #00264d;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  button.btn{
    //   display: inline;
    flex-direction: row;
  }
}
</style>