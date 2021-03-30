<template>
  <div class="pendaftar" style="background-color: #f2f2f3">
    <ul
      class="desktop-menu d-none d-sm-flex justify-content-sm-start justify-content-md-center"
    >
      <li class="text-center">
        <router-link :to="`/pendaftar/${$route.params.id}`">
          <b-icon-calendar-4-range scale="2"></b-icon-calendar-4-range>
          <p>Beranda</p>
        </router-link>
      </li>
      <li class="text-center">
        <router-link :to="`/pendaftar/${$route.params.id}/pendaftaran`">
          <b-icon-card-list scale="2"></b-icon-card-list>
          <p>Pendaftaran</p>
        </router-link>
      </li>
      <li class="text-center">
        <router-link :to="`/pendaftar/${$route.params.id}/formulir`">
          <b-icon-journal-bookmark-fill
            scale="2"
          ></b-icon-journal-bookmark-fill>
          <p>Formulir</p>
        </router-link>
      </li>
      <li class="text-center">
        <router-link :to="`/pendaftar/${$route.params.id}/kuisioner`">
          <b-icon-ui-checks scale="2"></b-icon-ui-checks>
          <p>Kuisioner</p>
        </router-link>
      </li>
      <li class="text-center">
        <router-link :to="`/pendaftar/${$route.params.id}/pembayaran`">
          <b-icon-credit-card-fill scale="2"></b-icon-credit-card-fill>
          <p>Pembayaran</p>
        </router-link>
      </li>
      <li class="text-center">
        <router-link :to="`/pendaftar/${$route.params.id}/berkas`">
          <b-icon-cloud-upload-fill scale="2"></b-icon-cloud-upload-fill>
          <p>Berkas</p>
        </router-link>
      </li>
      <li class="text-center">
        <router-link :to="`/pendaftar/${$route.params.id}/seleksi`">
          <b-icon-person-check-fill scale="2"></b-icon-person-check-fill>
          <p>Seleksi</p>
        </router-link>
      </li>
    </ul>

    <b-container class="mt-2" fluid>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import {
  BContainer,
  BIcon,
  BIconCloudUploadFill,
  BIconPersonCheckFill,
  BIconUiChecks,
  BIconCreditCardFill,
  BIconFilePersonFill,
  BIconSpeakerFill,
  BIconJournalBookmarkFill,
  BIconCalendar4Range,
  BIconCardList,
} from "bootstrap-vue";
import { mapGetters } from "vuex";
export default {
  name: "Pendaftar",
  components: {
    BContainer,
    BIcon,
    BIconCloudUploadFill,
    BIconPersonCheckFill,
    BIconUiChecks,
    BIconCreditCardFill,
    BIconFilePersonFill,
    BIconSpeakerFill,
    BIconJournalBookmarkFill,
    BIconCalendar4Range,
    BIconCardList,
  },
  data() {
    return {
      // showHello: true,
    };
  },

  computed: {
    ...mapGetters({
      userData: "auth/userData",
    }),
    gelombang() {
      return this.$store.state.gelombang.gelombang || [];
    },
    tahunAkademik() {
      return this.$store.state.gelombang.tahunAkademik || {};
    },
  },
  mounted() {
    if (!this.gelombang.length) {
      this.$store.dispatch("gelombang/getTahunAkademikAktif").then((res) => {
        this.$store.dispatch("gelombang/getGelombang", res.id_tahun_akademik);
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.pendaftar {
  min-height: 100vh;
  ul.desktop-menu {
    list-style: none;
    background-color: #f2f2f3;

    margin: 0;
    padding: 0;
    overflow-x: auto;
    li {
      padding: 0.6em 1em;
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
.recaptcha-badge {
  display: none !important;
}
</style>