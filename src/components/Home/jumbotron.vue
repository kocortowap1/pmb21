<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-2 mt-md-2 emblem text-center">
          <img
            src="../../assets/emblem.png"
            class="mt-4"
            alt="Emblem"
            height="120"
            width="120"
            style="width: 120px"
          />
        </div>
        <div class="col-12 col-md-6 my-md-4">
          <h1 class="display-5">
            Universitas
            <span>Nurul Jadid</span>
          </h1>
          <p class="lead my-0">
            Kampus Berbasis Pesantren; Inovatif, Unggul dan Berkeadaban
            <span
              >dalam Pengembangan Ilmu Pengetahuan, Teknologi dan Seni.</span
            >
          </p>
          <div class="text-center mt-md-5 d-none d-md-block">
            <a
              href="/register"
              class="btn btn-lg btn-outline-primary text-white"
            >
              <b-icon icon="clipboard-check"></b-icon> Daftar
            </a>
            <a href="/login" class="btn btn-lg btn-outline-success text-white ml-md-3">
              <b-icon icon="power"></b-icon> Login
            </a>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="gelombang ml-md-5">
            <h6>Pendaftaran :</h6>
            <span>01 Maret s/d 15 Agustus 2021</span>
            <h6>Seleksi :</h6>
            <span>18 s/d 19 Agustus 2021</span>
            <h6>Pengumuman :</h6>
            <span>20 Agustus 2021</span>

            <h6>Daftar Ulang :</h6>
            <span>22 s/d 31 Agustus 2021</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <ul>
      <li>
        <a href="/register" class="btn btn-md btn-primary">
          <i class="fa fa-newspaper"></i> Daftar
        </a>
      </li>
      <li>
        <a href="/login" class="btn btn-md btn-success m-1">
          <i class="fa fa-user-lock"></i> Login
        </a>
      </li>
      <li>
        <a href="/brosur.pdf" class="btn shadow ml-2 btn-light btn-outline-danger">
          <i class="fa fa-download"></i> Brosur
        </a>
      </li>
    </ul> -->
  </div>
</template>

<script>
import { BIcon, BIconClipboardCheck, BIconPower } from "bootstrap-vue";
export default {
  name: "Jumbotron",
  components: {
    BIcon,
    BIconClipboardCheck,
    BIconPower,
  },
};
</script>

<style lang="scss" >
.jumbotron {
  margin-top: 0 !important;
  margin-bottom: 0;
  padding: 2rem 2rem;
  background-color: rgb(0, 38, 77) !important;
  color: #fff;
  h1 {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    span {
      display: inline;
    }
  }
  p.lead {
    color: rgb(241, 241, 135);
    font-size: 1em;
    span {
      display: block;
    }
  }
  .emblem {
    img {
      float: right;
    }
  }
  .gelombang {
    text-align: right;
    h4 {
      // border-bottom: 1px solid #fff;
    }
    h6 {
      margin: 0;
      padding: 0;
      color: rgb(45, 127, 209);
    }
    span {
      display: block;
      margin: 0 0 5px 0;
      font-size: 1.24em;
      color: yellow;
    }
  }
  ul {
    list-style: none;
    margin: 0 auto;
    background-color: #f1f1f1;
    padding: 5px 5px;
    text-align: center;
    bottom: 0;
    transform: translateY(50px);
    width: 30%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    // position: absolute;
    li {
      display: inline-block;
    }
  }
}
@media screen and (max-width: 456px) {
  .jumbotron {
    padding: 1rem;
    h1 {
      span {
        display: block;
      }
    }
    p.lead {
      span {
        display: inline;
      }
    }
    .emblem {
      img {
        // text-align: center;
        float: left;
        // margin: 0 auto;
      }
      // text-align: left !important;
    }
    .gelombang {
      text-align: center;
      margin-top: 20px;
    }
    ul {
      background: none;
      text-align: left;
      padding: 0;
      width: 100%;
      margin: 0 10px;

      li {
        display: inline-block;
        transform: translateY(-25px) translateX(15px);
      }
    }
  }
}
</style>