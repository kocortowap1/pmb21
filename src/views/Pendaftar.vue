<template>
  <div class="pendaftar">
    <ul class="desktop-menu d-none d-sm-flex justify-content-sm-start justify-content-md-center">
      <li class="text-center">
        <router-link :to="`/pendaftar/${$route.params.id}`">
          <b-icon icon="calendar-4-range" scale="2"></b-icon>
          <p>Beranda</p>
        </router-link>
      </li>
      <li class="text-center">
        <router-link :to="`/pendaftar/${$route.params.id}/formulir`">
          <b-icon icon="journal-bookmark-fill" scale="2"></b-icon>
          <p>Formulir</p>
        </router-link>
      </li>
      <li class="text-center">
        <router-link :to="`/pendaftar/${$route.params.id}/kuisioner`">
          <b-icon icon="ui-checks" scale="2"></b-icon>
          <p>Kuisioner</p>
        </router-link>
      </li>
      <li class="text-center">
        <router-link :to="`/pendaftar/${$route.params.id}/pembayaran`">
          <b-icon icon="credit-card-fill" scale="2"></b-icon>
          <p>Pembayaran</p>
        </router-link>
      </li>
      <li class="text-center">
        <router-link :to="`/pendaftar/${$route.params.id}/berkas`">
          <b-icon icon="cloud-upload-fill" scale="2"></b-icon>
          <p>Berkas</p>
        </router-link>
      </li>
      <li class="text-center">
        <router-link :to="`/pendaftar/${$route.params.id}/seleksi`">
          <b-icon icon="person-check-fill" scale="2"></b-icon>
          <p>Seleksi</p>
        </router-link>
      </li>
    </ul>

    <b-container class="mt-2" fluid>
      <b-alert :show="showHello">
        <h4>Selamat Datang {{ userData.nama }}</h4>
        Di Sistem Informasi Penerimaan Mahasiswa Baru Universitas Nurul Jadid
      </b-alert>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import {
  BContainer,
  BAlert,
  BIcon,
  BIconCloudUploadFill,
  BIconPersonCheckFill,
  BIconUiChecks,
  BIconCreditCardFill,
  BIconFilePersonFill,
  BIconSpeakerFill,
  BIconJournalBookmarkFill,
  BIconCalendar4Range
} from "bootstrap-vue";
import { mapGetters } from "vuex";
export default {
  name: "Pendaftar",
  components: {
    BContainer,
    BAlert,
    BIcon,
    BIconCloudUploadFill,
    BIconPersonCheckFill,
    BIconUiChecks,
    BIconCreditCardFill,
    BIconFilePersonFill,
    BIconSpeakerFill,
    BIconJournalBookmarkFill,
    BIconCalendar4Range
  },
  data() {
    return {
      showHello: true,
    };
  },
  computed: {
    ...mapGetters({
      userData: "auth/userData",
    }),
  },
  created() {
    setTimeout(() => {
      this.showHello = false;
    }, 5000);
  },
};
</script>

<style lang="scss" scoped>
.pendaftar {
  ul.desktop-menu {
    list-style: none;
    background-color: #f2f2f3;

    margin: 0;
    padding: 0;
    overflow-x: auto;
    li {
      padding: .6em 1em;
      .b-icon {
    // justify-content: center;
        // display: inline-block;
        margin: 16px 0 8px 0;
      }
      // flex: 1;
    }
  }

  .container-fluid {
  }
}
</style>