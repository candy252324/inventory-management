import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 30000,
})

service.interceptors.request.use(config => {
  //   if (store.getters.token) {
  //     config.headers['X-Token'] = getToken()
  //   }
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    if (response.data.code) {
      response.data.message && alert(response.data.message)
    }
    // var method = response.config.method.toLowerCase();
    return response;
  },
  error => {
    return Promise.reject(error)
  })

export default service
