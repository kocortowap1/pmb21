import { getPrivateData } from '../../helper/api'

const state = {
    gelombang: [],
    tahunAkademik: {},
    // gelombangAktif:{}
}
const mutations = {
    SET_GELOMBANG(state, payload){
        state.gelombang = payload
    },
    SET_TAHUN_AKADEMIK(state, payload){
        state.tahunAkademik = payload
    },
    // SET_GELOMBANG_AKTIF(state, payload){
    //     state.gelombangAktif = payload
    // },
}
const actions = {
    getGelombang({commit}, id){
        return new Promise((resolve) => {
            getPrivateData(`/tahun-akademik/${id}/gelombang`).then(res => {
                commit('SET_GELOMBANG', res.data)
                resolve(res)
            })
        })
    },
    getGelombangAktif({commit}){
        return new Promise((resolve) => {
            getPrivateData(`/gelombang?aktif=y`).then(res => {
                commit('SET_GELOMBANG_AKTIF', res.data[0])
                resolve(res)
            })
        })
    },
    getTahunAkademikAktif({commit}){
        return new Promise((resolve) => {
            getPrivateData(`/tahun-akademik?aktif=y`).then(res => {
                commit('SET_TAHUN_AKADEMIK', res.data)
                resolve(res.data)
            })
        })
    }
}
const getters = {
gelombangAktif(state){
    if(state.gelombang.length){
        return state.gelombang.find(k => {
            return new Date() > new Date(k.tanggal_mulai) && new Date() <= new Date(k.tanggal_selesai)
        })
    }else{
        return {}
    }
}
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}