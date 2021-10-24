<template>
  <div class="pembayaran container">
    <b-row>
      <b-col class="h-100">
        <b-card>
          <template #header>
            <h5>Pembayaran</h5>
          </template>
          <template #default>
            <b-list-group horizontal="sm" class="pt-1">
              <b-list-group-item
                v-for="(t, idx) in filteredTagihan"
                :key="t.id_tagihan"
                class="flex-column flex-md-row align-items-start"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5>Biaya {{ t.jenis_pembayaran }}</h5>
                  <div class="status">
                    <button
                      class="btn btn-sm btn-info"
                      title="Kirim Data ke Bank"
                      v-if="!t.status"
                    >
                      Kirim
                    </button>
                    <small v-if="t.status == 1" class="badge badge-success"
                      >Lunas</small
                    >
                  </div>
                </div>
                <table class="table table-sm table-borderless">
                  <tr>
                    <td>Kode Pembayaran</td>
                    <td width="5%">:</td>
                    <th>
                      <span v-if="!t.status" class="text-muted"
                        ><em>Belum dibuat</em></span
                      >
                      <span v-else>879801{{ t.no_register }}</span>
                    </th>
                  </tr>
                  <tr>
                    <td>Nama</td>
                    <td width="5%">:</td>
                    <th>{{ t.nama }}</th>
                  </tr>
                  <tr>
                    <td>Nominal</td>
                    <td width="5%">:</td>
                    <th>{{ t.nominal_tagihan + 3000  | formatRupiah}}</th>
                  </tr>

                  <tr>
                    <td>Status</td>
                    <td width="5%">:</td>
                    <th>
                      <button v-if="!t.status" class="btn btn-sm btn-primary" @click="buatPembayaran(t, idx)">
                        Klik untuk membuat Kode Pembayaran
                      </button>
                      <span class="text-success">{{ t.status }}</span>
                    </th>
                  </tr>
                </table>
              </b-list-group-item>
              <!-- <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
              <b-list-group-item>Morbi leo risus</b-list-group-item> -->
            </b-list-group>
          </template>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getPrivateData, postPrivateData } from "../../helper/api";
import { BRow, BCol, BCard, BListGroup, BListGroupItem } from "bootstrap-vue";
export default {
  name: "Pembayaran",
  components: {
    BRow,
    BCol,
    BCard,
    BListGroup,
    BListGroupItem,
  },
  data() {
    return {
      listTagihan: [],
      listPembayaran: [],
    };
  },
  methods: {
    async getTagihan() {
      const tagihan = await getPrivateData(
        `/pendaftar/${this.currentPendaftaran.uid_pendaftar}/tagihan`
      );
      if (tagihan.status) {
        this.listTagihan = tagihan.data;
      }
    },
    async getHistoryPembayaran() {
      const history = await getPrivateData(
        `/pendaftar/${this.currentPendaftaran.uid_pendaftar}/pembayaran`
      );
      if (history.status) {
        this.listPembayaran = history.data;
      }
    },
    async buatPembayaran(data, index){
      try {
        const bayar = await postPrivateData(`/pembayaran`,data)
        if(bayar.data.status){
          this.$store.commit('pendaftar/SET_PEMBAYARAN', bayar.data.data)
        }else{
          alert(bayar.data.message)
        }

      } catch (error) {
        alert(error)
      }
    },
    checkVA(){

    }
  },
  computed: {
    ...mapGetters({
      currentPendaftaran: "pendaftar/currentPendaftaran",
      userData: "auth/userData",
    }),
    filteredTagihan: {
      get() {
        const tagihan = this.listTagihan.map((k) => {
          let newObj = { ...k, status: null };
          if (this.listPembayaran.length) {
            const pembayaran = this.listPembayaran.filter(
              (p) => p.id_tagihan === k.id_tagihan
            );
            if (!pembayaran[0].nominal_dibayar) {
              newObj.status = "Belum Lunas";
              newObj["statusClass"] = "danger";
            } else {
              newObj.status = "Lunas";
              newObj["statusClass"] = "success";
            }
          }
          return newObj;
        });
        return tagihan;
      },
      set(val) {
        return val
      },
    },
  },
  mounted() {
    this.getTagihan();
    this.getHistoryPembayaran();
  },
  filters: {
    formatRupiah: (nominal) => {
      if (!nominal) {
        return "";
      } else {
        Number(nominal);
        const optIntl = {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        };
        const numFormat = new Intl.NumberFormat("id-id", optIntl);
        return numFormat.format(nominal);
      }
    },
  },
};
</script>

<style>
</style>