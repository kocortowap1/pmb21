<template>
  <div class="prestasi-akademik">

  </div>
</template>

<script>
export default {
  name: "PortofolioPA",
  data() {
    return {
      listSmt: [
        { smtId: 1, text: "Kelas 10", smt: "Ganjil" },
        { smtId: 2, text: "Kelas 10", smt: "Genap" },
        { smtId: 3, text: "Kelas 11", smt: "Ganjil" },
        { smtId: 4, text: "Kelas 11", smt: "Genap" },
        { smtId: 5, text: "Kelas 12", smt: "Ganjil" },
        { smtId: 6, text: "Kelas 12", smt: "Genap" },
      ],
      current: {
        smt: null,
        rerata: null,
        berkas: null,
        rangking: null,
      },
      dataPrestasi: [],
      fileInfo: {},
    };
  },
  methods: {},
  computed: {},
  filters: {
    kb: val => {
      return Math.floor(val / 1024);
    },
    mb: val => {
      return Math.floor(val / (1024 * 1000));
    }
  },
};
</script>

<style>
</style>