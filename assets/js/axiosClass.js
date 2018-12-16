import axios from 'axios'
// import qs from 'qs'
// import Vue from 'vue'
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
class AxiosClass {
  constructor(url) {
    this.service = axios.create({ baseURL: url })
    this.intercept()
    this.error()
    return this.service
  }
  intercept() {
    // 拦截器
    this.service.interceptors.request.use(config => {
      // post方法并且数据不是formData，序列化参数
      // if (config.method === 'post' && config.headers['Content-Type'] !== 'multipart/form-data') {
      //   config.data = qs.stringify(config.data)
      // }
      config.headers.common['Content-Type'] = 'application/json'
      // config.headers.common['Access-Control-Max-Age'] = '60'
      // if (~config.url.indexOf('?')) {
      //   config.url = config.url + '&t=' + Date.now()
      // } else {
      //   config.url = config.url + '?t=' + Date.now()
      // }
      return config
    }, error => {
      return Promise.reject(error)
    })
  }
  error() {
    this.service.interceptors.response.use(res => {
      if (parseInt(res.status) === 204) { return res }
      if (parseInt(res.status) !== 200) return Promise.reject(res)
    /*
     * 状态码0判断，成功返回，失败则根据error.status判断是请求成功还是请求失败
     * error.status为true，则表示请求成功，此时根据后台返回状态码编写回调逻辑
     * error.status不存在，则表示请求失败（网络原因、请求状态不为200等原因）
     */
      if (res.data.errno === 'OK' || res.data.statusCode === 200) return res.data
      return Promise.reject(res.data)
    }, error => {
      return Promise.reject(error)
    })
  }
}

export default AxiosClass
