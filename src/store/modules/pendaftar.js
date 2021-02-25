import { getPrivateData } from '../../helper/api'
import mapField from '../../helper/_mapfield'
const state = {
    person: {},
}
const mutations = {
    SET_PERSON(state, payload) {
        state.person = payload
    },
    SET_PENDAFTARAN(state, payload, index) {
        state.person['pendaftaran'][index] = payload
    },
    ADD_PENDAFTARAN(state, payload) {
        state.person['pendaftaran'].push(payload)
    },
    ADD_BERKAS(state, payload) {
        state.person['berkas'].push(payload)
    },
    SET_BERKAS(state, payload, index) {
        state.person['berkas'][index] = payload
    },
    ADD_PEMBAYARAN(state, payload) {
        state.person['pembayaran'].push(payload)
    },
    SET_PEMBAYARAN(state, payload, index) {
        state.person['pembayaran'][index] = payload
    },
    SET_SELEKSI(state, payload) {
        state.person['seleksi'] = payload
    },
    SET_STATUS_KUISIONER(state, payload) {
        state.person['kuisioner'] = payload
    }
}
const actions = {
    getPendaftar({ commit }, uid) {
        return new Promise((resolve, reject) => {
            getPrivateData(`/person/${uid}`).then(res => {
                if (res.status) {
                    commit('SET_PERSON', res.data)

                    resolve(res.data)
                } else {
                    reject()
                }
            })
        })
    }
}
const getters = {
    // pendaftar : state => state.person,
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

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}