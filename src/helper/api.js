import axios from 'axios'

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://api.pmb.unuja.ac.id' : '';
axios.defaults.baseURL = baseUrl

const setAuthorization = (token) => {
    axios.defaults.headers['Authorization'] = `Bearer ${token}`
}
const removeAuthorization = () => {
    delete axios.defaults.headers['Authorizazion']
}

const isStoringToken = () => {
    return !!localStorage.getItem('b')
}
const isActiveSession = (token) => {
    const tokenBody = token.split('.')[1]
    const parsedToken = JSON.parse(atob(tokenBody))
    const now = new Date().getTime() / 1000;
    const selisih = parsedToken.exp - now
    if(selisih > 1){
        return true
    }
    return false
}


const login  = async (email, password) => {
    let response = {status: false}
    if(!email){
        response['message'] = 'Email tidak boleh kosong'
    }
    if(!password) {
        response['message'] = 'Password tidak boleh kosong'
    }
    const req = await axios.post('/auth', {email : email, password: password})
    if(req.status === 200 && req.headers['x-token']){
        setAuthorization(req.headers['x-token'])
        response.status = true
        response.token = req.headers['x-token']
    }else{
        response['message'] = 'Terjadi kesalahan, silakan coba lagi'
        removeAuthorization()
    }
    return response
}

const getPublicData = async(url) => {
   const req = await axios.get(url)
    return req
}
const postPublicData = async(url, data) => {
    let response = {status: false}
    try {
        const req = await axios.post(url, data, {
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        if(!req.data.status){
            response['message'] = req.data.message
        }else{
            // response.status = true
            // response['data'] = req.data
            response = req.data
        }

    } catch (error) {
        response = error
    }
    return response
}
// const putPublicData = async(url, data) => {
//     let response = {status: false}
//     try {
//         const req = await axios.put(url, data, {
//             headers: {
//                 'Content-Type' : 'application/json'
//             }
//         })
//         if(req.status !== 200){
//             response['message'] = req.data.message
//         }else{
//             response.status = true
//             response['data'] = data
//         }

//     } catch (error) {
//         response = error
//     }
//     return response
// }


export {
    setAuthorization,
    removeAuthorization,
    isStoringToken,
    isActiveSession,
    login,
    getPublicData,
    postPublicData,

}