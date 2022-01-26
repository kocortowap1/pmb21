<template>
  <div class=" h-screen">
    <ul class="flex flex-row justify-start w-full">
      <li class="bg-white rounded-t-md px-2 py-2 border-[1px]">
        Membuat Kode Pembayaran
      </li>
      <li class="bg-white rounded-t-md px-2 py-2 border-[1px]">
        Membayar di Bank
      </li>
      <li class="bg-white rounded-t-md px-2 py-2 border-[1px]">
        Status Pembayaran
      </li>
    </ul>
    <!-- step 1 -->
    <div class="bg-white px-4 py-4">
      <div class="flex flex-row gap-2">
        <div class="border-[1px] px-4 py-4">
          <input type="checkbox" class="hidden" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M22 4h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm-19 5.78c0-.431.349-.78.78-.78h.428v1.125h-1.208v-.345zm0 .764h1.208v.968h-1.208v-.968zm0 1.388h1.208v1.068h-.428c-.431 0-.78-.349-.78-.78v-.288zm3 5.068h-3v-1h3v1zm1-4.78c0 .431-.349.78-.78.78h-.429v-1.068h1.209v.288zm0-.708h-1.209v-.968h1.209v.968zm0-1.387h-1.629v2.875h-.743v-4h1.592c.431 0 .78.349.78.78v.345zm4 6.875h-3v-1h3v1zm1-6.5c0-1.381 1.119-2.5 2.5-2.5.484 0 .937.138 1.32.377-.531.552-.857 1.3-.857 2.123 0 .824.327 1.571.857 2.123-.383.239-.836.377-1.32.377-1.381 0-2.5-1.119-2.5-2.5zm4 6.5h-3v-1h3v1zm5 0h-3v-1h3v1zm-2.5-4c-1.38 0-2.5-1.119-2.5-2.5s1.12-2.5 2.5-2.5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5z"
            />
          </svg>
        </div>
        <div class="border-[1px] px-4 py-4">
          <input type="checkbox" class="hidden" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M22 4h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm-19 5.78c0-.431.349-.78.78-.78h.428v1.125h-1.208v-.345zm0 .764h1.208v.968h-1.208v-.968zm0 1.388h1.208v1.068h-.428c-.431 0-.78-.349-.78-.78v-.288zm3 5.068h-3v-1h3v1zm1-4.78c0 .431-.349.78-.78.78h-.429v-1.068h1.209v.288zm0-.708h-1.209v-.968h1.209v.968zm0-1.387h-1.629v2.875h-.743v-4h1.592c.431 0 .78.349.78.78v.345zm4 6.875h-3v-1h3v1zm1-6.5c0-1.381 1.119-2.5 2.5-2.5.484 0 .937.138 1.32.377-.531.552-.857 1.3-.857 2.123 0 .824.327 1.571.857 2.123-.383.239-.836.377-1.32.377-1.381 0-2.5-1.119-2.5-2.5zm4 6.5h-3v-1h3v1zm5 0h-3v-1h3v1zm-2.5-4c-1.38 0-2.5-1.119-2.5-2.5s1.12-2.5 2.5-2.5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5z"
            />
          </svg>
        </div>
      </div>
      <ul class="w-3/4">
        <li class="flex flex-row gap-2">
          <span class="flex-1">ID Pendaftar</span>
          <span class="flex-1">: 2022010101</span>
        </li>
        <li class="flex flex-row gap-2">
          <span class="flex-1">Nama</span>
          <span class="flex-1">: <strong>Ahmad Sholehuddin</strong></span>
        </li>

        <li class="flex flex-row gap-2">
          <span class="flex-1">Nominal Pembayaran</span>
          <span class="flex-1">: Rp. 150.000</span>
        </li>
        <li class="flex flex-row gap-2 border-b-[1px]">
          <span class="flex-1">Admin Bank</span>
          <span class="flex-1">: Rp. 3.000</span>
        </li>
        <li class="flex flex-row gap-2">
          <span class="flex-1">Total</span>
          <span class="flex-1">: <strong>Rp. 153.000</strong></span>
        </li>
        <li class="text-center mt-5">
          <button
            class="px-6 py-3 border-2 shadow-sm rounded-lg border-gray-300"
          >
            Bayar
          </button>
        </li>
      </ul>
    </div>
    <!-- step 2 -->
    <div>
      <div class="text-center">
        <p>KODE PEMBAYARAN</p>
        <p class="text-2xl font-bold tracking-widest">879801 202101010</p>
        <p class="text-xs mt-4 text-gray-400">
          *) Sebelum membayar, pastikan data di Bank sesuai dengan nama anda di
          atas
        </p>
      </div>
      <!-- counter -->
      <!-- cara membayar -->
    </div>
    <!-- step 3 -->
    <div>
      <!-- status pembayaran, kapan, berapa -->
    </div>
  </div>
</template>