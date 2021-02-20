const tanggalIndo = {
    listNamaBulan: () =>{
        let listBulan = []
        const dateFormat = new Intl.DateTimeFormat('id-id',{
            month: 'long'
        });
        for (let i = 1; i <= 12; i++) {
            // const element = array[i];
            const tgl = new Date(Date.UTC(2000, i, 0, 0, 0, 0,0))
            const bln = dateFormat.format(tgl)
            listBulan.push({id: i, value: bln})
            
        }
        return listBulan
    },
    tanggalDalamBulan: (tahun, bulan) => {
        const tgl = new Date(tahun, bulan, 0)
        const max = tgl.getDate();
        let listTanggal = []
        for (let i = 1; i <= max; i++) {
            listTanggal.push(i)
            
        }
        return listTanggal
    },
    format: (tanggal) =>{
        if(tanggal){
            let newTgl = tanggal.toString()
            if (new Date(newTgl)==='Invalid Date') {
                return ''
            } else {
                // const pecah = tanggal.split('-')
                const tgl = new Date(newTgl).getTime()
                // const tanggal2 = new Date(Date.UTC(parseInt(pecah[0]), parseInt(pecah[1]), parseInt(pecah[2])))
                const optTanggal = { year: 'numeric', month: 'long', day: '2-digit' }
                const dateFormat = new Intl.DateTimeFormat('id', optTanggal)
                // return dateFormat.format(tanggal2)
                return dateFormat.format(new Date(tgl))
            }
        }else{
            return ''
        }
    },
    pecahTanggal: (tanggal) => {
        //2000-09-09 menjadi objec {tanggal: 09, bulan: 09, tahun: 2000}
        const pecah = tanggal.split('-')
        return {
            tanggal : parseInt(pecah[0]),
            bulan : parseInt(pecah[1]),
            tahun : parseInt(pecah[2])
        }
    }
}

export default tanggalIndo