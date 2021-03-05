<template>
  <div class="kuisioner">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title">Kuisioner</h5>
      </div>
      <div class="card-body">
        <div v-if="is_kuisioner">
          <h5 class="h5 text-center">Terimakasih</h5>
          <p class="card-text text-center">
            Anda telah meluangkan waktu untuk mengisi kuisioner ini, Hasil isian
            kuesioner ini sangat bermanfaat bagi Universitas Nurul Jadid untuk
            memperbaiki kekurangan dalam penerimaan mahasiswa baru.
          </p>
          <div class="text-center">
            <button
              class="btn btn-secondary"
              @click.prevent="$router.push(`/pendaftar/${$route.params.id}/`)"
            >
              Kembali ke Beranda
            </button>
          </div>
        </div>
        <div v-else-if="!is_kuisioner && !isStart">
          <p class="card-text mb-0">
            Kuesioner ini berisi pendapat calon mahasiswa baru tentang
            Universitas Nurul Jadid (UNUJA) Paiton Probolinggo. Hasil isian
            kuesioner ini sangat bermanfaat bagi Universitas Nurul Jadid untuk
            memperbaiki kekurangan dalam penerimaan mahasiswa baru.
          </p>
          <p class="card-text mb-0">
            Berdasar kode etik penelitian, isian data dalam kuesioner ini akan
            dijamin kerahasiaannya.
          </p>
          <p class="card-text">
            Atas kerjasamanya, kami sampaikan terimakasih.
          </p>
          <button class="btn btn-primary" @click="onStart">
            Mulai Mengisi
          </button>
          <button
            class="btn btn-secondary mx-sm-1 mx-md-2 my-1 my-md-0"
            @click.prevent="$router.push(`/pendaftar/${$route.params.id}/`)"
          >
            Kembali ke Beranda
          </button>
        </div>
        <div v-else>
          <p>Pertanyaan ke-{{ urut < listPertanyaan.length ? urut + 1: listPertanyaan.length}} dari {{listPertanyaan.length}} pertanyaan</p>
          <validation-observer ref="observeForm" v-slot="{ invalid }">
            <validation-provider
              :name="`Pertanyaan ke-${urut + 1}`"
              rules="required"
              v-slot="{ valid, errors }"
            >
              <b-form-group
                label-size="lg"
                :label="currentPertanyaan[0].angket_pertanyaan"
              >
                <b-form-radio
                  size="lg"
                  :name="`pertanyaan-${urut + 1}`"
                  v-model="currentJawaban.id_angket_jawaban"
                  v-for="i in listPilihan"
                  :key="i.id_angket_jawaban"
                  :value="i.id_angket_jawaban"
                  @change="checkTambahan(i.is_tambahan)"
                  >{{ i.angket_jawaban }}</b-form-radio
                >
              </b-form-group>
              <b-form-input
              v-if="listPilihan.some(k => k.is_tambahan)"
                placeholder="deskripsikan jika tidak terdapat jawaban"
                :disabled="isTambahan"
                class="col-12 col-sm-8 col-md-6"
                v-model="currentJawaban.tambahan_jawaban"
              ></b-form-input>
            </validation-provider>
          </validation-observer>
        </div>
      </div>
      <div v-if="isStart" class="card-footer d-flex justify-content-between">
        <button class="btn btn-secondary" v-if="urut > 0" @click="onPrev">Kembali</button>
        <button class="btn btn-primary" v-if="urut < listPertanyaan.length -1" @click="onNext">Lanjut</button>
        <button class="btn btn-success" v-if="urut === listPertanyaan.length -1" @click.prevent="simpan">Simpan</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getPrivateData, postPrivateData } from "../../helper/api";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import "../../helper/_validationRules";
import { BFormGroup, BFormRadio, BFormInput } from "bootstrap-vue";
export default {
  name: "kuisioner",
  data() {
    return {
      listKuisioner: [],
      is_kuisioner: 0,
      isStart: false,
      listJawaban: [],
      urut: 0,
      isTambahan : true
      // currentJawaban : {}
    };
  },
  components: {
    ValidationObserver,
    ValidationProvider,
    BFormGroup,
    BFormRadio,
    BFormInput,
  },
  methods: {
    onStart() {
      // return true;
      this.$store.commit("SET_LOADING", true, { root: true });
      getPrivateData(`/kuisioner`)
        .then((res) => {
          this.listKuisioner = res.data;
          // console.log(res.data)
        })
        .finally(() => {
          this.$store.commit("SET_LOADING", false, { root: true });

          this.isStart = true;
        });
    },
    onNext(){

      this.listJawaban[this.urut] = this.currentJawaban
      this.isTambahan = true
      this.urut++
    },
    onPrev(){
      this.listJawaban[this.urut] = this.currentJawaban
      this.isTambahan = true
      this.urut--
    },
    getStatusKuisioner() {
      getPrivateData(`/kuisioner/${this.userData.uid_pendaftar}`).then(
        (res) => {
          if (res.data.status) {
            this.is_kuisioner = res.data.is_kuisioner;
          }
        }
      );
    },
    checkTambahan(val){
      // console.log(val)
      if(!!val){
        this.isTambahan = false
      }else{
        this.isTambahan = true
      }
    },
    simpan(){
      let data = []
      this.listJawaban.forEach(k => {
        if(k.id_angket_jawaban){
          data.push({...k, id_pendaftar: this.userData.id_pendaftar})
        }
      });
      postPrivateData(`/kuisioner/${this.$route.params.id}`,data).then(res => {
        if(res.statusText == 'ok'){
          this.is_kuisioner = 1
        }else{
          alert(res.message)
        }
      })
    }
  },
  computed: {
    ...mapGetters({
      userData: "auth/userData",
    }),
    currentPertanyaan() {
      if (this.listKuisioner.length) {
        const id = this.listKuisioner[this.urut].id_angket_pertanyaan;
        return this.listKuisioner.filter((k) => k.id_angket_pertanyaan === id);
      } else {
        return [];
      }
    },
    currentJawaban(){
          return this.listJawaban[this.urut] || {}

    },

    listPertanyaan(){
      return this.listKuisioner.filter((v,i,a)=>a.findIndex(t=>(t.id_angket_pertanyaan === v.id_angket_pertanyaan))===i)
    },
    listPilihan(){
      // const id = this.listPertanyaan
      if(this.listPertanyaan.length){
        const id = this.listPertanyaan[this.urut].id_angket_pertanyaan
        return this.listKuisioner.filter((k) => k.id_angket_pertanyaan === id);

      }else{
        return []
      }
    }
  },
};
</script>

<style>
</style>