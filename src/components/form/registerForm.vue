<template>
  <div class=" h-screen">
    <div class="bg-white py-12 px-6 space-y-3">
      <div class="flex flex-col md:flex-row justify-start">
        <label for="">Kewarganegaraan
          <span class="hidden md:inline-block mr-4">:</span></label>
        <div class="space-x-2">
          <input type="radio"
name="wni" /> WNI
          <input type="radio"
name="wni" /> WNA
        </div>
      </div>
      <div>
        <label for="">Passport Number <span class="hidden md:inline">:</span></label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Passport Number"
          disabled
          class=""
        />
      </div>
      <div>
        <label for="">Nomor KK <span class="hidden md:inline">:</span></label>
        <input
          type="text"
          name=""
          id=""
          placeholder="16 Digit Nomor Kartu Keluarga"
          class=""
        />
      </div>
      <div>
        <label for="">NIK <span class="hidden md:inline">:</span></label>
        <input
          type="text"
          name=""
          id=""
          placeholder="16 Digit NIK KTP/KK"
          class=""
        />
      </div>
      <div>
        <label for="">Nama Lengkap <span class="hidden md:inline">:</span></label>
        <input type="text"
name="" id="" placeholder="Nama Lengkap" class="" />
      </div>
      <div class="flex flex-col md:flex-row justify-start">
        <label for="">Jenis Kelamin
          <span class="hidden md:inline-block mr-4">:</span></label>
        <div class="space-x-2">
          <input type="radio"
name="wni" /> Laki-laki
          <input type="radio"
name="wni" /> Perempuan
        </div>
      </div>
      <div>
        <label for="">Tempat Lahir <span class="hidden md:inline">:</span></label>
        <input type="text"
name="" id="" placeholder="Tempat Lahir" class="" />
      </div>
      <div>
        <label for="">Tanggal Lahir <span class="hidden md:inline">:</span></label>
        <input type="date"
name="" id="" placeholder="Tanggal Lahir" class="" />
      </div>
      <div>
        <label for="">Nomor HP <span class="hidden md:inline">:</span></label>
        <input type="text"
name="" id="" placeholder="Nomor HP" class="" />
      </div>
      <div>
        <label for="">Anak Ke <span class="hidden md:inline">:</span></label>
        <div class="flex flex-row gap-3 items-center w-2/3 md:w-1/5">
          <input type="number"
name="" id="" class="" />
          <span>Dari</span>
          <input type="number"
name="" id="" class="" />
          bersaudara
        </div>
      </div>
      <!-- alamat -->
      <div>
        <label for="">Negara <span class="hidden md:inline">:</span></label>
        <select name="negara"
id="">
          <option>Pilih Negara</option>
        </select>
      </div>
      <div>
        <label for="">Provinsi <span class="hidden md:inline">:</span></label>
        <select name="provinsi"
id="" disabled>
          <option>Pilih Provinsi</option>
        </select>
      </div>
      <div>
        <label for="">Kabupaten/Kota <span class="hidden md:inline">:</span></label>
        <select name="provinsi"
id="" disabled>
          <option>Pilih Kabupaten</option>
        </select>
      </div>
      <div>
        <label for="">Kecamatan <span class="hidden md:inline">:</span></label>
        <select name="provinsi"
id="" disabled>
          <option>Pilih Kecamatan</option>
        </select>
      </div>
      <div>
        <label for="">Desa/Kelurahan <span class="hidden md:inline">:</span></label>
        <select name="provinsi"
id="" disabled>
          <option>Pilih Desa</option>
        </select>
      </div>
      <div>
        <label for="">Dusun/Jalan <span class="hidden md:inline">:</span></label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Dusun/Jalan (tanpa desa/kelurahan)"
        />
      </div>
      <div>
        <label for="">RT/RW <span class="hidden md:inline">:</span></label>
        <div class="flex flex-row gap-3 items-center w-2/3 md:w-1/5">
          <input type="text"
name="" id="" class="" placeholder="RT" />
          <span>/</span>
          <input type="text"
name="" id="" class="" placeholder="RW" />
        </div>
      </div>
      <!-- Pilihan Prodi -->
      <div>
        <label for="">Jenjang Pendidikan<span class="hidden md:inline">:</span></label>
        <select name="negara"
id="">
          <option>Pilih Jenjang Pendidikan</option>
          <option>Diploma (D3)</option>
          <option>Sarjana (S1)</option>
          <option>Magister (S2)</option>
          <option>Profesi</option>
        </select>
      </div>
      <div>
        <label for="">Pilihan Prodi Pertama <span class="hidden md:inline">:</span></label>
        <select name="provinsi"
id="" disabled>
          <option>Pilih Prodi Pertama</option>
        </select>
      </div>
      <div>
        <label for="">Pilihan Prodi Kedua <span class="hidden md:inline">:</span></label>
        <select name="provinsi"
id="" disabled>
          <option>Pilih Prodi Kedua</option>
        </select>
      </div>
      <div>
        <label for="">Pilihan Prodi Ketiga <span class="hidden md:inline">:</span></label>
        <select name="provinsi"
id="" disabled>
          <option>Pilih Prodi Ketiga</option>
        </select>
      </div>
      <!-- Akun Pendaftaran -->
      <div>
        <label for="">Email <span class="hidden md:inline">:</span></label>
        <input type="text"
name="" id="" placeholder="Email" />
      </div>
      <div>
        <label for="">Password <span class="hidden md:inline">:</span></label>
        <input type="password"
name="" id="" placeholder="Password" />
      </div>
      <div>
        <label for="">Retype Password <span class="hidden md:inline">:</span></label>
        <input
          type="password"
          name=""
          id=""
          placeholder="Ketik Ulang Password"
        />
      </div>
      <div class="flex flex-row gap-1">
        <button
          class="
            bg-blue-600
            px-6
            py-3
            text-white text-xl
            font-semibold
            rounded-md
            shadow-md
            w-3/4
          "
          type="button"
        >
          Daftar
        </button>
        <button
          class="
            bg-gray-400
            px-6
            py-3
            text-white text-xl
            font-semibold
            rounded-md
            shadow-md
            w-1/3
          "
          type="button"
        >
          Batal
        </button>
      </div>
    </div>
  </div>
</template>