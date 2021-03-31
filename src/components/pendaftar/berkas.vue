<template>
  <div class="berkas">
    <b-modal
      ref="my-modal"
      ok-only
      title="Perhatian"
      header-text-variant="light"
      header-bg-variant="warning"
    >
      <div class="d-block">
        <p class="my-0">
          Sebelum mengunggah berkas, mohon perhatikan beberapa hal berikut:
        </p>
        <ol>
          <li>File berupa gambar dengan extensi (jpg/jpeg/png)</li>
          <li>Merupakan hasil Scan Kartu Keluarga, KTP, Ijazah, SKHUN, SKL</li>
          <li>Dimensi gambar minimal 800x800 pixel</li>
          <small class="text-danger"
            >Khusus untuk pendaftar jalur Beasiswa PMDK, Beasiswa Prestasi
            Akademik & Beasiswa Aktif Organisasi. Silakan unggah portofolio di
            menu Data Prestasi</small
          >
        </ol>
      </div>
    </b-modal>
    <!--- JIKA PEMBAYARAN TIDAK LUNAS -->
    <!-- <div class="d-flex align-items-center justify-content-center">
      Pastikan anda telah melakukan pembayaran untuk dapat mengunggah berkas
    </div> -->
    <!--- JIKA PEMBAYARAN LUNAS -->
    <div class="container-fluid">
      <b-row class="row-eq-height">
        <b-col cols="12" sm="4">
          <b-card header-bg-variant="white" header-tag="header">
            <template #header>
              <div class="d-flex justify-content-between">
                <h5>Unggah Berkas</h5>
              </div>
            </template>
            <validation-observer
              ref="uploadForm"
              v-slot="{ handleSubmit, invalid }"
            >
              <b-form @submit.prevent="handleSubmit(uploadBerkas)">
                <validation-provider
                  name="Jenis Berkas"
                  v-slot="{ valid, errors }"
                  rules="required"
                >
                  <b-form-group label="Jenis Berkas">
                    <b-form-select
                      v-model="berkas.id_jenis_berkas"
                      :state="errors[0] ? false : valid ? true : null"
                    >
                      <b-form-select-option :value="undefined"
                        >Pilih Jenis Berkas</b-form-select-option
                      >
                      <b-form-select-option value="1"
                        >Foto Diri</b-form-select-option
                      >
                      <b-form-select-option value="2"
                        >Ijazah</b-form-select-option
                      >
                      <b-form-select-option value="3"
                        >SKHUN/Transkrip Nilai</b-form-select-option
                      >
                      <b-form-select-option value="4"
                        >Kartu Keluarga</b-form-select-option
                      >
                      <b-form-select-option value="5">KTP</b-form-select-option>
                      <b-form-select-option value="6"
                        >Akte Lahir</b-form-select-option
                      >
                      <b-form-select-option value="7"
                        >STL/Bukti Lulus</b-form-select-option
                      >
                      <b-form-select-option value="8"
                        >Lainnya</b-form-select-option
                      >
                    </b-form-select>
                    <b-form-invalid-feedback>{{
                      errors[0]
                    }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
                <validation-provider name="Keterangan" v-slot="{ errors }">
                  <b-form-group label="Keterangan">
                    <b-form-textarea
                      v-model="berkas.keterangan"
                      rows="2"
                      max-rows="2"
                      :state="null"
                      placeholder="Berikan keterangan singkat tentang berkas"
                    ></b-form-textarea>
                    <b-form-invalid-feedback>{{
                      errors[0]
                    }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
                <validation-provider
                  name="Berkas"
                  rules="required|image"
                  ref="fileProvider"
                  v-slot="{ errors }"
                >
                  <b-form-group label="Pilih File Berkas">
                    <b-form-file
                      accept="image/*"
                      v-model="berkas.file"
                      @change="handleUpload"
                      ref="file-input"
                      :state="fileState"
                    ></b-form-file>
                    <small v-if="!!berkas.file && !errors[0]"
                      >{{ fileInfo.size | mb }}MB | {{ fileInfo.width }} x
                      {{ fileInfo.height }} pixel
                    </small>
                    <small
                      v-if="!!berkas.file && !errors[0]"
                      class="badge badge-danger"
                      @click="removeSelectedFile"
                      >ganti file</small
                    >
                    <b-form-invalid-feedback>{{
                      errors[0]
                    }}</b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>
                <b-form-group>
                  <b-button variant="success" :disabled="invalid" type="submit"
                    >Simpan</b-button
                  >
                </b-form-group>
              </b-form>
            </validation-observer>
          </b-card>
        </b-col>
        <b-col cols="12" sm="8" md="8">
          <b-card header-bg-variant="white" header-tag="header">
            <template #header>
              <div class="d-flex justify-content-between">
                <h5>Berkas yang diunggah</h5>
              </div>
            </template>
            <div v-if="!displayBerkas.length">
              <b-card-text>Belum ada berkas yang diunggah</b-card-text>
            </div>
            <div
              v-else
              style="max-height: 500px; overflow-y: auto; overflow-x: hidden"
            >
              <b-row>
                <b-col
                  cols="12"
                  sm="6"
                  v-for="b in displayBerkas"
                  :key="b.id_berkas"
                >
                  <div class="d-flex flex-sm-row shadow my-2">
                    <div
                      style="
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center;
                        position: relative;
                        margin: 1em;
                      "
                      :style="{
                        backgroundImage: `url('${imageUrl}/berkas/images/${b.nama_file}?token=${$store.state.auth.token}')`,
                        width: '100px',
                        height: '150px',
                      }"
                    >
                      <span
                        class="label"
                        style="
                          position: absolute;
                          top: 0.5em;
                          left: -0.6em;
                          padding: 0.5em 1em;
                          color: #fff;
                          background-color: #7e7ed0;
                          font-size: 0.7rem;
                        "
                        >{{ b.jenis_berkas }}</span
                      >
                    </div>
                    <div class="flex-row">
                      <span class="sub-label d-block">Status :</span>
                      {{
                        b.is_valid == 2
                          ? "Tidak Valid"
                          : b.is_valid === 1
                          ? "Valid"
                          : "Belum divalidasi"
                      }}
                      <span class="sub-label d-block">Ket. Validasi :</span>
                      {{
                        b.keterangan_validasi
                          ? b.keterangan_validasi
                          : "Belum ada"
                      }}
                      <div v-if="b.is_valid == 2" class="mt-4">
                        <button class="btn btn-sm btn-danger">Hapus</button>
                      </div>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {
  BIcon,
  BIconUpload,
  BRow,
  BCol,
  BCard,
  BCardText,
  BForm,
  BFormGroup,
  BFormFile,
  BFormSelect,
  BFormSelectOption,
  BFormInvalidFeedback,
  BFormTextarea,
  BButton,
  BMedia,
  BMediaAside,
  BMediaBody,
} from "bootstrap-vue";
import { getPrivateData, uploadPrivateData } from "../../helper/api";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import "../../helper/_validationRules";
export default {
  name: "berkas",
  components: {
    BIcon,
    BIconUpload,
    BRow,
    BCol,
    BCard,
    BCardText,
    ValidationObserver,
    ValidationProvider,
    BForm,
    BFormGroup,
    BFormFile,
    BFormSelect,
    BFormSelectOption,
    BFormInvalidFeedback,
    BFormTextarea,
    BButton,
    BMedia,
    BMediaAside,
    BMediaBody,
  },
  data() {
    return {
      listBerkas: [],
      jenisBerkas: [],
      berkas: {},
      file: null,
      fileInfo: {},
      fileState: null,
      imageUrl : process.env.NODE_ENV === 'production' ? 'https://api.pmb.unuja.ac.id' : 'http://localhost:8080'
    };
  },

  methods: {
    getListBerkas() {},
    getJenisBerkas() {
      getPrivateData(`/berkas/jenis-berkas`).then((res) => {
        this.jenisBerkas = res.data;
      });
    },
    getBerkasPendaftar() {
      getPrivateData(`/berkas/${this.$route.params.id}/list`).then((res) => {
        this.listBerkas = res.data;
      });
    },
    async uploadBerkas() {
      let formData = new FormData();
      formData.append("id_person", this.idPerson);
      for (const key in this.berkas) {
        formData.append([key], this.berkas[key]);
      }
      try {
        const upload = await uploadPrivateData(`/berkas/upload`, formData);
        if (upload.data.status) {
          let newData = {
            ...upload.data.data,
            jenis_berkas: this.displayJenisBerkas,
          };
          this.listBerkas.push(newData);
          this.berkas = {};
          this.file = null;
          this.$refs.uploadForm.reset();
        } else {
          alert(upload.data.message);
        }
      } catch (error) {
        alert(error);
      }
    },

    async handleUpload(e) {
      this.fileState = null;
      this.$refs.fileProvider.setErrors({});
      const { valid } = await this.$refs["fileProvider"].validate(e);

      let file = e.target.files[0];
      this.handleFile(file);
      if (valid) {
        this.fileInfo["size"] = this.berkas.file.size;
        this.fileInfo["oriName"] = this.berkas.file.name;
      } else {
        this.fileState = false;
        this.$refs.fileProvider.setErrors({
          0: "Pastikan file yang anda unggah berupa gambar",
        });
      }
    },
    handleFile(file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let img = new Image();
        img.src = reader.result;
        img.onload = () => {
          if (img.width >= 800 && img.height >= 800) {
            this.fileInfo["width"] = img.width;
            this.fileInfo["height"] = img.height;
            this.file = file;
          } else {
            this.$refs.fileProvider.setErrors({
              0: "Dimensi file harus lebih dari 800x800pixel",
            });
            this.fileState = false;
          }
        };
        // img.src = evt.target.result;
      };
    },
    removeSelectedFile() {
      this.$refs["file-input"].reset();
    },
  },
  computed: {
    ...mapGetters({
      currentPendaftaran: "pendaftar/currentPendaftaran",
    }),
    idPerson() {
      return this.listBerkas[0].id_person;
    },
    displayBerkas() {
      return this.listBerkas.filter((k) => !!k.id_berkas);
    },
    displayJenisBerkas() {
      if (!!this.berkas.id_jenis_berkas) {
        const cari = this.jenisBerkas.find(
          (k) => k.id_jenis_berkas === parseInt(this.berkas.id_jenis_berkas)
        );
        return cari.jenis_berkas;
      } else {
        return "";
      }
    },
  },
  mounted() {
    this.getBerkasPendaftar();
    this.$refs["my-modal"].show();
  },
  created() {
    this.getJenisBerkas();
  },
  filters: {
    kb: (val) => {
      return Math.floor(val / 1024);
    },
    mb: (val) => {
      return Math.floor(val / (1024 * 1000));
    },
  },
};
</script>

<style lang="scss">
.berkas {
  span.sub-label {
    font-size: 0.78em;
    margin-top: 0.54rem;
    font-weight: 600;
    font-style: italic;
    color: grey;
  }
}
</style>