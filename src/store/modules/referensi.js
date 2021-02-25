import { getPublicData, getPrivateData } from "../../helper/api"

const state = {
    referensi: {}
}
const mutations = {
    SET_REFERENSI(state, payload) {
        state.referensi = payload
    },
    ADD_REFERENSI(state, payload) {
        state.referensi = { ...state.referensi, ...payload }
    },
    SET_LIST_KABUPATEN(state, payload) {
        state.referensi['kabupaten'] = payload
    },
    SET_LIST_KECAMATAN(state, payload) {
        state.referensi['kecamatan'] = payload
    },
    SET_LIST_DESA(state, payload) {
        state.referensi['desa'] = payload
    },

}
const actions = {
    getReferensi({ commit }) {
        getPublicData(`/referensi`).then(res => {
            if (res.status) {
                commit('SET_REFERENSI', res.data)
            }
        })
    },
    getKabupaten({ commit }, idProvinsi) {
        getPrivateData(`/provinsi/${idProvinsi}/kabupaten`).then(res => {
            if (res.status) {
                commit('ADD_REFERENSI',{kabupaten :  res.data})
            }
        })
    },
    getKecamatan({ commit }, idKabupaten) {
        getPrivateData(`/kabupaten/${idKabupaten}/kecamatan`).then(res => {
            if (res.status) {
                commit('ADD_REFERENSI',{kecamatan : res.data})
            }
        })
    },
    getDesa({ commit }, idKecamatan) {
        getPrivateData(`/kecamatan/${idKecamatan}/desa`).then(res => {
            if (res.status) {
                commit('ADD_REFERENSI', {desa : res.data})
            }
        })
    }
}
const getters = {}


export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}