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
    console.log(token)
    console.log(getToken())
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
        console.log(res.msg)
        Message({
          message: res.msg,
          type: 'error',
          duration: 3 * 1000
        })
  
        // 401:未登录;
        // if (res.code === 401||res.code === 403) {
        //   MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        //     confirmButtonText: '重新登录',
        //     cancelButtonText: '取消',
        //     type: 'warning'
        //   }).then(() => {
        //     store.dispatch('FedLogOut').then(() => {
        //       location.reload()// 为了重新实例化vue-router对象 避免bug
        //     })
        //   })
        // }
        return Promise.reject('error')
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
      return Promise.reject(error)
    }
  )

export default request