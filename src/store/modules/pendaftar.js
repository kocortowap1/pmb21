import { getPrivateData } from '../../helper/api'
import mapField from '../../helper/_mapfield'
const state = {
    person: {},
    pendaftaran: [],
    pembayaran: [],
    berkas: [],
    seleksi: [],


}
const mutations = {
    SET_PERSON(state, payload) {
        state.person = payload
    },
    SET_PENDAFTARAN(state, payload) {
        state.pendaftaran = payload
        // state.pendaftaran.unshift(payload)
    },
    ADD_PENDAFTARAN(state, payload) {
        state.pendaftaran.unshift(payload)
    },
    ADD_BERKAS(state, payload) {
        state.berkas.push(payload)
    },
    SET_BERKAS(state, payload) {
        state.berkas = payload
    },
    // ADD_PEMBAYARAN(state, payload) {
    //     state.pembayaran.push(payload)
    // },
    SET_PEMBAYARAN(state, payload) {
        state.pembayaran = payload
    },
    SET_SELEKSI(state, payload) {
        state.seleksi = payload
    },
    SET_STATUS_KUISIONER(state, payload) {
        state.person['kuisioner'] = payload
    },
    UPDATE_PENDAFTARAN(state, payload){
        state.pendaftaran[payload['index']] = payload['data']
    },
    RESET_ALL_STATE(state, payload){
        state.person = payload || {}
        state.pendaftaran = payload || []
        state.berkas = payload || []
        state.pembayaran = payload || []
        state.seleksi = payload || []
    }

}
const actions = {
    getPendaftar({ commit }, uid) {
        return new Promise((resolve, reject) => {
            getPrivateData(`/person/${uid}`).then(res => {
                if (res.status) {
                    const person = getPersonOnly(res.data)
                    const pendaftaran = res.data.pendaftaran || []
                    const berkas = res.data.berkas || []
                    const pembayaran = res.data.pembayarn || []

                    commit('SET_PERSON', person)
                    commit('SET_PENDAFTARAN', pendaftaran)
                    commit('SET_BERKAS', berkas)
                    commit('SET_PEMBAYARAN', pembayaran)
                    resolve(res.data)
                } else {
                    reject()
                }
            })
        })
    },
    getDataPendaftaran({ commit }, uidPendaftaran) {
        return new Promise((resolve, reject) => {
            getPrivateData(`/pendaftar/${uidPendaftaran}`).then(res => {
                if (res.status) {
                    commit('SET_PENDAFTARAN', res.data)
                    resolve(res)
                } else {
                    reject()
                }
            })
        })
    },


}
const getters = {
    // pendaftar : state => state.person,
    personData: (state) => {
        let newObj = {}
        for (const key in state.person) {
            if (typeof state.person[key] !== 'object' || state.person[key] === null) {
                newObj[key] = state.person[key]
            }
        }
        return newObj
    },
    currentGelombang: (state, getters, rootState) => {
        if (!state.pendaftaran.length) {
            return {}
        } else {
            const listGelombang = rootState.gelombang.gelombang
            return listGelombang.find(k => { return new Date() > new Date(k.tanggal_mulai) && new Date <= new Date(k.tanggal_selesai) })
            // return listGelombang[0]
        }
    },
    currentPendaftaran (state, getters){
        if(state.pendaftaran.length){
            const pendaftaran  = state.pendaftaran.find(k => k.id_gelombang === getters.currentGelombang.id_gelombang)
            return pendaftaran
        }else{
            return {}
        }
    },
    pendaftaranIndex(state, getters){
        if(state.pendaftaran.length){
            const pendaftaran  = state.pendaftaran.findIndex(k => k.id_gelombang === getters.currentGelombang.id_gelombang)
            return pendaftaran
        }else{
            return 0
        }
    },
    biodataKosong: (state) => {
        const keyCheck = mapField.dataDiri
        let hasil = []
        keyCheck.forEach(({ field, desc }) => {
            if (!state.person[field]) {
                hasil.push(desc)
            }
        })
        return hasil
    },
    ortuKosong: (state) => {
        const keyCheck = mapField.dataKeluarga
        let hasil = []
        keyCheck.forEach(({ field, desc }) => {
            if (!state.person[field]) {
                hasil.push(desc)
            }
        })
        return hasil
    },

}
const getPersonOnly = (response) => {
    let newObj = {}
    for (const key in response) {
        if (typeof response[key] !== 'object' || response[key] === null) {
            newObj[key] = response[key]
        }
    }
    return newObj
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}