import { getPrivateData } from '../../helper/api'
const state = {
    listProdi  : [],
    listJalur : []
}
const mutations = {
    SET_LIST_PRODI(state, payload){
        state.listProdi = payload
    },
    SET_LIST_JALUR(state, payload){
        state.listJalur = payload
    }
}
const actions = {
    getProdiperTahun({commit}, idTahun){
        return new Promise((resolve, reject) => {
            getPrivateData(`/prodi/pertahun/${idTahun}`).then(res => {
                if(res.status){
                    commit('SET_LIST_PRODI', res.data)
                    resolve(res)
                }else{
                    reject(res)
                }
            })
        })
    },
    getJalurPendaftaran({commit}){
        return new Promise((resolve, reject) => {
            getPrivateData(`/jalur/aktif`).then(res => {
                if(res.status){
                    commit(`SET_LIST_JALUR`, res.data)
                    resolve(res)
                }else{
                    reject(res)
                }
            })
        })
    }
}
const getters = {
    // filteredJalur(state, getters){
    //     return state.listJalur.filter(k => k.id_jenjang_pendidikan === parseInt(getters['pendaftar/currentPendaftaran'].id_jenjang_pendidikan))
    // }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}