<template>
  <div class="container-fluid alur-smpt">
    <div class="content">
      <h4 class="mt-2 mb-3 text-center">Alur Pendaftaran</h4>
      <div class="row">
        <div class="col-sm-12 col-md-4 col-lg-3 mb-3">
          <div class="step-box">
            <div class="step-counter">1</div>
            <span class="step-icon">
              <b-icon icon="person-check-fill" font-scale="4"></b-icon>
            </span>
            <p>Membuat Akun SIMPMB</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-3 mb-3">
          <div class="step-box">
            <div class="step-counter">2</div>
            <span class="step-icon">
              <b-icon icon="file-person-fill" font-scale="4"></b-icon>
            </span>
            <p>Lengkapi Data</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-3 mb-3">
          <div class="step-box">
            <div class="step-counter">3</div>
            <span class="step-icon">
              <b-icon icon="credit-card-fill" font-scale="4"></b-icon>
            </span>
            <p>Membayar Pendaftaran</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-3 mb-3">
          <div class="step-box">
            <div class="step-counter">4</div>
            <span class="step-icon">
              <b-icon icon="cloud-upload-fill" font-scale="4"></b-icon>
            </span>
            <p>Unggah Berkas</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-3 mb-3">
          <div class="step-box">
            <div class="step-counter">5</div>
            <span class="step-icon">
               <b-icon icon="ui-checks" font-scale="4"></b-icon>
            </span>
            <p>Ikut Seleksi</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-3 mb-3">
          <div class="step-box">
            <div class="step-counter">6</div>
            <span class="step-icon">
              <b-icon icon="speaker-fill" font-scale="4"></b-icon>
            </span>
            <p>Pengumuman Seleksi</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-3 mb-3">
          <div class="step-box">
            <div class="step-counter">7</div>
            <span class="step-icon">
              <b-icon icon="journal-bookmark-fill" font-scale="4"></b-icon>
            </span>
            <p>Daftar Ulang</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BIcon,
  BIconCloudUploadFill,
  BIconPersonCheckFill,
  BIconUiChecks,
  BIconCreditCardFill,
  BIconFilePersonFill,
  BIconSpeakerFill,
  BIconJournalBookmarkFill
} from "bootstrap-vue";
export default {
  name: "Alur",
  components: {
    BIcon,
    BIconCloudUploadFill,
    BIconPersonCheckFill,
    BIconUiChecks,
    BIconCreditCardFill,
    BIconFilePersonFill,
    BIconSpeakerFill,
    BIconJournalBookmarkFill
  },
};
</script>

<style lang="scss">
.alur-smpt {
  background: #7f7fd5; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #91eae4,
    #86a8e7,
    #7f7fd5
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #91eae4,
    #86a8e7,
    #7f7fd5
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  h1 {
    text-align: center;
    line-height: 2em;
    // font-size: 1.6rem;
  }
  .content {
    padding: 20px 30px;
    .step-box {
      padding: 1.3em;
      border: 1.5px solid #fff;
      border-radius: 10px;
      z-index: 10;
      .step-counter {
        position: absolute;
        transform: translate(-20px, -20px);
        width: 15%;
        text-align: center;
        background-color: #fff;
        font-size: 2em;
        color: darkviolet;
        z-index: 1;
        border-bottom-right-radius: 10px;
        border-top-left-radius: 7px;
        padding: 5px 0;
      }
      span.step-icon {
        display: block;
        text-align: center;
      }
      p {
        text-align: center;
        font-size: 1.4em;
      }
    }
  }
}
</style>