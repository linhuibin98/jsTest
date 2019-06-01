const axios = require('axios');

class AjaxRequest {
  constructor() {
    this.defaultConfig = {  // 默认配置
      baseURL: 'http://127.0.0.1:3000',  // 默认请求
      method: 'get',  // 默认请求方法： get
      timeout: 3000   // 响应超时时间
    },
    this.queue = {} //  存放请求队列
  }

  merge(options) {
    return {
      ...this.defaultConfig,
      ...options
    }
  }
  
  // 配置拦截器
  setInterceptors(instance) {

    // 请求拦截器
    instance.interceptors.request.use(config => {  // config 为请求的配置参数, 可以拦截更改，比如：headers
      return config;
    })

    // 响应拦截器 
    instance.interceptors.response.use(res => { // res 为响应的返回结果
      return res.data;
    })
  }

  request(options) {
    const instance = axios.create();
    const config = this.merge(options);
    this.setInterceptors(instance);
    return instance(config);
  }
}

module.exports = new AjaxRequest();