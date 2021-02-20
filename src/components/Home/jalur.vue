<template>
  <div class="jalur text-center">
    <h4 class="h4">Jalur Pendaftaran</h4>
    <div class="my-card" @click="jalur('reguler')">
      <div class="front ">Reguler</div>
      <div
        class="back "
      >Adalah jalur untuk menjaring mahasiswa baru jenjang Diploma 3 (D3), Sarjana (S1), Profesi dan Pascasarjana (S2) melalui tes Seleksi Penerimaan Mahasiswa Baru (SPMB) Universitas Nurul Jadid</div>
    </div>
    <div class="my-card" @click="jalur('beasiswa-tahfidz')">
      <div class="front ">Beasiswa Tahfidz Al-Qur'an</div>
      <div
        class="back "
      >Jalur penerimaan bagi calon mahasiswa yang memiliki kemampuan hafalan Al-Qur’an sebanyak 10, 20 dan 30</div>
    </div>
    <div class="my-card" @click="jalur('beasiswa-baca-kitab')">
      <div class="front ">Beasiswa Baca Kitab Kuning</div>
      <div
        class="back "
      >Jalur penerimaan bagi calon mahasiswa yang memiliki kemampuan baca kitab kuning (kitab gundul).</div>
    </div>
    <div class="my-card" @click="jalur('beasiswa-pa')">
      <div class="front ">Beasiswa Prestasi Akademik</div>
      <div
        class="back "
      >Jalur beasiswa Prestasi Akademik merupakan jalur penerimaan untuk menjaring calon mahasiswa baru yang memiliki prestasi akademik di sekolah asal.</div>
    </div>
    <div class="my-card" @click="jalur('beasiswa-pmdk')">
      <div class="front ">Beasiswa Penelusuran Minat & Kemampuan</div>
      <div
        class="back "
      >Adalah jalur  penelusuran prestasi minat dan kemampuan yang pernah diraih oleh calon mahasiswa mulai tingkat kabupaten, provinsi, nasional sampai internasional.</div>
    </div>
    <div class="my-card" @click="jalur('beasiswa-organisasi')">
      <div class="front ">Beasiswa Aktif Organisasi</div>
      <div
        class="back "
      >Merupakan jalur penerimaan untuk menjaring calon mahasiswa baru yang memiliki prestasi dalam keaktifan berorganisasi atau keikutsertaan keorganisasian intra maupun ekstra sekolah.</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "jalur",
  methods:{
    jalur(val){
      // window.location.href = `/jalur-pendaftaran#${val}`
      this.$router.push({path: '/jalur-pendaftaran', hash: val})
    }
  }
};
</script>

<style lang="scss">
.jalur {
  // background-color: rgb(184, 184, 5);
  padding: 30px 20px;
  .my-card {
    position: relative;
    cursor: pointer;
    width: 200px;
    height: 270px;
    margin: 0 5px;
    perspective: 100vw;
    -webkit-box-shadow: 0px 0px 5px 0px #00264d30;
    -moz-box-shadow: 0px 0px 5px 0px#00264d30;
    box-shadow: 0px 0px 5px 0px #00264d30;
    display: inline-block;

    .front,
    .back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      transition: 0.3s;
      background-size: cover;
    }
    .front {
      background-color: #00264d;
      border: 0.4px solid lightgray;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 100;
      font-size: 1.2em;
      font-weight: 500;
      padding: 0 15px;
      color: #fff;
    }
    &:hover .front {
      transform: rotateY(180deg) scale(0.5);
    }
    .back {
      background-color: lightgray;
      border: 0.4px solid #f1f1f1;
      padding: 10px;
      font-size: 0.99em;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:hover .back {
      transform: rotateY(360deg);
    }
  }

}
@media screen and (max-width:456px) {
  .jalur{
    .my-card{
      width:100%;
      height:90px;
      .back{
        font-size: .88em;
      }
    }
  }
}
</style>