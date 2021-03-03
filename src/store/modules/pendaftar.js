import { getPrivateData } from '../../helper/api'
import mapField from '../../helper/_mapfield'
const state = {
    person: {},
    pendaftaran: [],
    pembayaran : [],
    berkas: [],
    seleksi: [],

}
const mutations = {
    SET_PERSON(state, payload) {
        state.person = payload
    },
    SET_PENDAFTARAN(state, payload) {
        // state.person['pendaftaran'].u = payload
        state.pendaftaran.unshift(payload)
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
    },
    SET_PENDAFTARAN(state, payload){
        state.pendaftaran = payload
    }
}
const actions = {
    getPendaftar({ commit }, uid) {
        return new Promise((resolve, reject) => {
            getPrivateData(`/person/${uid}`).then(res => {
                if (res.status) {
                    const person = getPersonOnly(res.data)
                    commit('SET_PERSON', person)

                    resolve(res.data)
                } else {
                    reject()
                }
            })
        })
    },
    getDataPendaftaran({commit},uidPendaftaran){
        return new Promise((resolve, reject) => {
            getPrivateData(`/pendaftar/${uidPendaftaran}`).then(res => {
                if(res.status){
                    commit('SET_PENDAFTARAN', res.data)
                    resolve(res)
                }else{
                    reject()
                }
            })
        })
    }
}
const getters = {
    // pendaftar : state => state.person,
    personData : (state) =>{
        let newObj = {}
        for (const key in state.person) {
            if(typeof state.person[key] !== 'object' || state.person[key] === null){
                newObj[key] = state.person[key]
            }
        }
        return newObj
    },
    currentPendaftaran : (state) => {
        if(!state.pendaftaran.length){
            return {}
        }else{
            return state.pendaftaran[0]
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
        if(typeof response[key] !== 'object' || response[key] === null){
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