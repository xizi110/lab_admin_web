import Axios from "axios";
import store from '@/store/index'
import { getToken } from '@/util/auth'
import { Message, MessageBox } from 'element-ui'

const request = Axios.create({
    baseURL: "http://localhost",
    // timeout: 15000,
    // headers: { 'Authorization': "" },
});

// request拦截器
request.interceptors.request.use(config => {
  // alert(store.state.token)
    var token = getToken();
    if (token) {
        config.headers['Authorization'] = token // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// respone拦截器
request.interceptors.response.use(
    response => {
    /**
    * code为非200是抛错 可结合自己业务进行修改
    */
      const res = response.data
      if (res.code !== 10000) {
        Message({
          message: res.msg,
          type: 'error',
          duration: 3 * 1000
        })
        // return Promise.reject('error')
      } else {
        return response.data
      }
    },
    error => {
      console.log('err' + error)// for debug
      Message({
        message: error.message,
        type: 'error',
        duration: 3 * 1000
      })
      // return Promise.reject(error)
    }
  )

export default request