/*
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-01-05 10:16:05
 * @LastEditors: lxw
 * @LastEditTime: 2020-04-09 17:20:37
 */
import axios from 'axios'
import { Message } from 'element-ui'

console.log(process.env.VUE_APP_BASE_API)
const service = axios.create({
  baseURL: 'http://mockjs.com/api',
  withCredentials: true, // / send cookies when cross-domain requests
  timeout: 8000 // request timeout
})

// request interceptor
// service.interceptors.request.use(
//   config => {
//     // do something before request is sent

//     if (store.getters.token) {
//       // let each request carry token
//       // ['X-Token'] is a custom headers key
//       // please modify it according to the actual situation
//       config.headers['X-Token'] = getToken()
//     }
//     return config
//   },
//   error => {
//     // do something with request error
//     console.log(error) // for debug
//     return Promise.reject(error)
//   }
// )

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    console.log('返回数据', res)
    // if the custom code is not 20000, it is judged as an error.
    // 注意这里面需要在每一个接口判断是否是：页面过期，请重新登录,在对应接口的vue页面调用vuex里面的方法设置tooken为空
    if (res.message === undefined || res.message === '') {
      return res
    } else if (res.message !== '') {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      //  返回错误，error回调可以收到，方便做一些需要在对应页面执行的处理
      return Promise.reject(res.message)
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: `sorry，服务器或后台程序意外出现错误，请检查您的网络连接后再试试，或联系1143167344@qq.com`,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
