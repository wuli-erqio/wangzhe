import axios from 'axios'
import Vue from 'vue'
import router from './router'
const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/admin/api'
  // baseURL: 'http://localhost:3000/admin/api'
})

http.interceptors.response.use(res => {
  return res
}, err => {
  Vue.prototype.$message({
    type: 'error',
    message: err.response.data.message
  })
  if(err.response.status === 401) {
    router.push('/login')
  }
  return Promise.reject(err)
})

http.interceptors.request.use(function (config) {
  if(localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default http