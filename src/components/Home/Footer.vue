<template>
  <div class="footer mt-2 bg-light d-print-none">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <h3 class="h3 mt-4 text-center">PMB UNUJA</h3>
          <p>Adalah Sistem Informasi Penerimaan Mahasiswa Baru yang berfungsi untuk memudahkan pendaftar/calon mahasiswa baru UNUJA dapat memperoleh informasi, mendaftar secara online, mengelola data pendaftaran secara mandiri, melakukan pembayaran dengan mudah, melihat pengumuman hasil seleksi secara online</p>
        </div>
        <div class="col-6 col-md-3 mt-2">
          <h6 class="h6">Link Terkait</h6>
          <ul>
            <li>
              <a href="https://www.unuja.ac.id" rel="noopener" target="_blank">Homepage UNUJA</a>
            </li>
            <li>
              <a href="https://ejournal.unuja.ac.id" rel="noopener" target="_blank">Jurnal UNUJA</a>
            </li>
            <li>
              <a href="https://fai.unuja.ac.id" rel="noopener" target="_blank">Fakultas Agama Islam</a>
            </li>
            <li>
              <a href="https://ft.unuja.ac.id" rel="noopener" target="_blank">Fakultas Teknik</a>
            </li>
            <li>
              <a href="https://fkes.unuja.ac.id" rel="noopener" target="_blank">Fakultas Kesehatan</a>
            </li>
            <li>
              <a href="https://soshum.unuja.ac.id" rel="noopener" target="_blank">Fakultas Sosial & Humaniora</a>
            </li>
            <li>
              <a href="https://pasca.unuja.ac.id" rel="noopener" target="_blank">Program Pascasarjana</a>
            </li>
          </ul>
        </div>
        <div class="col-6 col-md-3 mt-5 mt-md-2">
          <ul>
            <li>
              <a href="https://admin.pmb.unuja.ac.id"  rel="noopener noreferrer">Login Lembaga Mitra</a>
            </li>
            <li>
              <a href="https://admin.pmb.unuja.ac.id"  rel="noopener noreferrer">Login Panitia</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss">
.footer {
  border-top: 5px solid gray;
  padding: 5px;
  text-align: justify;
  ul {
    list-style: none;
    padding: 0;
    li {
      text-align: left;
      a {
        color: #444;
        cursor: pointer;
      }
    }
  }
}
</style>