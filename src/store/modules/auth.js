import { login, removeAuthorization, postPublicData, getPublicData, setAuthorization } from '../../helper/api'
const state = {
    token: localStorage.getItem('b') || '',
    person: {},

}
const mutations = {
    SET_TOKEN(state, payload) {
        localStorage.setItem('b', payload)
        state.token = payload
    },
    SET_REGISTRASI(state, payload) {
        state.person = payload
    }
}
const actions = {
    getToken({ commit }, { email, password, GToken }) {
        return new Promise((resolve, reject) => {
            try {
                login(email, password, GToken).then(res => {
                    if (res.status) {
                        commit('SET_TOKEN', res.token)
                        setAuthorization(res.token)
                        resolve(res)
                    } else {
                        commit('SET_ERROR', { isError: true, errorMessage: res.message }, { root: true })
                    }
                    commit("SET_LOADING", false, { root: true });

                })

            } catch (error) {
                removeAuthorization()
                localStorage.removeItem('b')
                reject(error)
            }
        })
    },
    logout({commit}) {
        return new Promise((resolve) => {
            removeAuthorization()
            commit('SET_TOKEN', '')
            commit('pendaftar/RESET_ALL_STATE', null, {root: true})
            localStorage.removeItem('b')
            resolve()
        })

    },
    registrasi({ commit }, {data, header}) {
        return new Promise((resolve, reject) => {
            postPublicData(`/register`, data, header).then(res => {
                if (res.status) {
                    commit('SET_REGISTRASI', data.person)
                    resolve(res)
                } else {
                    const err = { isError: true, errorMessage: res.message }
                    commit('SET_ERROR', err, { root: true })
                    reject(err)
                }
            })
        })
    },
    checkExistEmail({ commit }, email) {
        commit('SET_LOCAL_LOADING', true, { root: true })
        return new Promise((resolve, reject) => {
            getPublicData(`/register/check-email/${email}`).then(res => {
                if (res.status) {
                    resolve(res.data)
                } else {
                    reject()
                }
            }).finally(() => {
                commit('SET_LOCAL_LOADING', false, { root: true })
            })

        })
    },
    resetPassword({commit}, email){
        commit('SET_LOCAL_LOADING', true, { root: true })
        return new Promise((resolve, reject) => {
            postPublicData(`/register/reset-password`, {email: email})
            .then(res => {
                    resolve(res)

            })
            .catch(err => {
                reject(err)
            })
            .finally(() => {
                commit('SET_LOCAL_LOADING', false, { root: true })
            })

        })
    }
}
const getters = {
    isLoggedIn: state => !!state.token,
    userData(state) {
        if (!state.token) {
            return {}
        } else {
            const tkn = state.token
            const tokenBody = tkn.split('.')[1]
            return JSON.parse(atob(tokenBody))

        }
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}