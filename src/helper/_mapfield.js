const dataDiri = [
    {field: 'nama', desc: 'Nama Lengkap', required: true},
    {field: 'jk', desc: 'Jenis Kelamin', required: true},
    {field: 'tempat_lahir', desc: 'Tempat Lahir', required: true},
    {field: 'tanggal_lahir', desc: 'Tanggal Lahir', required: true},
    {field: 'id_domisili', desc: 'Rencana Domisili', required: true},
    {field: 'nik', desc: 'NIK KTP/KK', required: true},
    {field: 'nomor_kk' , desc: 'Nomor Kartu Keluarga', required: true},
    // {field: 'foto', desc: 'Foto Diri', required: true},
    {field: 'dusun', desc: 'Dusun', required: true},
    {field: 'jalan', desc: 'Jalan', required: false},
    {field: 'rt', desc: 'RT', required: true},
    {field: 'rw', desc: 'RW', required: true},
    {field: 'id_desa', desc: 'Desa', required: true},
    {field: 'nomor_hp', desc: 'Nomor HP', required: true},

]
const dataKeluarga = [
    {field: 'nama_ayah', desc: 'Nama Ayah', required: true},
    {field: 'tempat_lahir_ayah', desc: 'Tempat Lahir Ayah', required: true},
    {field: 'tanggal_lahir_ayah', desc: 'Tanggal Lahir Ayah', required: true},
    {field: 'nik_ayah',desc: 'NIK Ayah', required: true},
    {field: 'nomor_hp_ayah', desc: 'Nomor HP Ayah', required: true},
    {field: 'pekerjaan_ayah', desc: 'Pekerjaan Ayah', required: true},
    {field: 'pendidikan_ayah', desc: 'Pendidikan Terakhir Ayah', required: true},
    {field: 'penghasilan_ayah', desc: 'Rerata Penghasilan Ayah', required: true},
    {field: 'nama_ibu', desc: 'Nama Ibu', required: true},
    {field: 'tempat_lahir_ibu', desc: 'Tempat Lahir Ibu', required: true},
    {field: 'tanggal_lahir_ibu', desc: 'Tanggal Lahir Ibu', required: true},
    {field: 'nik_ibu',desc: 'NIK Ibu', required: true},
    {field: 'nomor_hp_ibu', desc: 'Nomor HP Ibu', required: true},
    {field: 'pekerjaan_ibu', desc: 'Pekerjaan Ibu', required: true},
    {field: 'pendidikan_ibu', desc: 'Pendidikan Terakhir Ibu', required: true},
    {field: 'penghasilan_ibu', desc: 'Rerata Penghasilan Ibu', required: true},
    {field: 'nama_wali', desc: 'Nama Wali', required: true},
    {field: 'tempat_lahir_wali', desc: 'Tempat Lahir Wali', required: true},
    // {field: 'tanggal_lahir_wali', desc: 'Tanggal Lahir Wali', required: true},
    {field: 'nik_wali',desc: 'NIK Wali', required: true},
    {field: 'nomor_hp_wali', desc: 'Nomor HP Wali', required: true},
    {field: 'pekerjaan_wali', desc: 'Pekerjaan Wali', required: true},
    {field: 'pendidikan_wali', desc: 'Pendidikan Terakhir Wali', required: true},
    {field: 'penghasilan_wali', desc: 'Rerata Penghasilan Wali', required: true},
    // {field: 'jk_wali', desc: 'Jenis Kelamin Wali', required: true}
]
const asalPendidikan= [
    {field: 'tahun_lulus', desc: 'Tahun Lulus', required: true},
    {field: 'asal_pendidikan', desc: 'Nama Sekolah/PT', required: true},
    {field: 'jurusan_asal_pendidikan', desc: 'Jurusan/Prodi Asal Sekolah/PT', required: true},
    {field: 'nisn',desc: 'NISN/NIM', required: true}
]

const pilihanProdi=[
    {field: 'jenis_pendaftaran', desc: 'Jenis Pendaftaran', required: true},
    {field: 'jalur_pendaftaran', desc: 'Jalur Pendaftaran', required: true},
    {field: 'jenjang_pendaftaran',desc: 'Jenjang Pendaftaran', required: true},
    {field: 'pilihan_prodi_1', desc: 'Pilihan Prodi Utama', required: true},
    {field: 'pilihan_prodi_2', desc: 'Pilihan Prodi Kedua', required: true},
    {field: 'pilihan_prodi_3', desc: 'Pilihan Prodi Ketiga', required: true},
    // {field: 'is_kuisioner', desc: 'Mengisi Kuisioner',required: true}
]
export default {
    dataDiri,
    dataKeluarga,
    asalPendidikan,
    pilihanProdi
}