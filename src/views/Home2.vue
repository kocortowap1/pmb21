<template>
  <div class="relative bg-kuning h-screen">
    <header class="flex justify-end pr-6">
      <ul class="flex font-bold text-biru py-5 space-x-3 items-center">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <div class="relative group">
            Fakultas & Program

            <ul
              class="
                hidden
                group-hover:flex
                flex-col
                w-64
                absolute
                z-20
                bg-white
                shadow-md
              "
            >
              <li
                class="py-2 px-2 hover:bg-biru hover:text-white font-semibold"
              >
                <a href="#">Fakultas Agama Islam</a>
              </li>
              <li
                class="py-2 px-2 hover:bg-biru hover:text-white font-semibold"
              >
                <a href="#">Fakultas Teknik</a>
              </li>
              <li
                class="py-2 px-2 hover:bg-biru hover:text-white font-semibold"
              >
                <a href="#">Fakultas Kesehatan</a>
              </li>
              <li
                class="py-2 px-2 hover:bg-biru hover:text-white font-semibold"
              >
                <a href="#">Fakultas Sosial & Humaniora</a>
              </li>
              <li
                class="py-2 px-2 hover:bg-biru hover:text-white font-semibold"
              >
                <a href="#">Program Pascasarjana</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div class="relative group">Info Pendaftaran</div>
          <ul class="hidden group-hover:flex absolute z-20">
            <li>
              <a href="#">Jalur Pendaftaran</a>
            </li>
            <li>
              <a href="#">Alur Pendaftaran</a>
            </li>
            <li>
              <a href="#">Panduan Pendaftaran</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Pengumuman</a>
        </li>
      </ul>
    </header>
    <div class="absolute top-0 left-0 md:left-16 w-full md:w-1/2 bg-biru pt-6 md:pt-12 pb-4 md:pb-6">
      <div class="flex flex-col px-4 md:px-16 mx-2 md:mx-16">
        <div class="self-stretch">
          <div class="text-white uppercase tracking-widest text-center md:text-left"
            >penerimaan mahasiswa baru</div
          >
          <h1
            class="
              text-2xl
              md:text-4xl
              text-white text-center
              md:text-left
              border-b-[1px]
              mb-5
            "
          >
            Universitas Nurul Jadid
          </h1>
          <h2 class="text-white font-bold">Gelombang I</h2>
          <ul>
            <li class="border-l-4 my-4 px-4 pb-3">
              <div
                class="text-yellow-200 font-semibold uppercase tracking-wider"
              >
                Pendaftaran
              </div>
              <div class="text-yellow-500 font-semibold text-xl">
                01 Januari s/d 30 Agustus 2022
              </div>
            </li>
            <li class="border-l-4 my-4 px-4 py-3">
              <div
                class="text-yellow-200 font-semibold uppercase tracking-wider"
              >
                Tes Seleksi
              </div>
              <div class="text-yellow-500 font-semibold text-xl">
                20 s/d 30 April 2022
              </div>
            </li>
            <li class="border-l-4 my-4 px-4 py-3">
              <div
                class="text-yellow-200 font-semibold uppercase tracking-wider"
              >
                Daftar Ulang
              </div>
              <div class="text-yellow-500 font-semibold text-xl">
                02 Juni 2022
              </div>
            </li>
            <li class="border-l-4 my-4 px-4 py-3">
              <div
                class="text-yellow-200 font-semibold uppercase tracking-wider"
              >
                Awal Perkuliahan
              </div>
              <div class="text-yellow-500 font-semibold text-xl">
                01 September 2022
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 ">
      <div class="col-start-8 col-end-13 pl-2 pr-6">
        <p class="text-center md:text-lg">
          Kampus Berbasis Pesantren; Inovatif, Unggul dan Berkeadaban
          <span>dalam Pengembangan Ilmu Pengetahuan, Teknologi dan Seni.</span>
        </p>
        <button>Mendaftar</button>
        <button>Login</button>
      </div>
    </div>
  </div>
</template>
scri