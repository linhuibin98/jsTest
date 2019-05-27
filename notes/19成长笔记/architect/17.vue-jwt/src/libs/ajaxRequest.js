// ajaxRequest 获取
import axios from 'axios';

const baseURL = 'http://127.0.0.1:3000';

class AjaxRequest {

  constructor(baseURL) {
    // 请求路径
    this.baseURL = process.env.NODE_ENV === 'producttion' ? '/' : baseURL;
    this.timeout = 3000;  // 超时时间
  }

  merge(options) {
    return {baseURL: this.baseURL, timeout: this.timeout, ...options};
  }
  // 配置请求、响应拦截器
  setInterceptor(instance) {

    instance.interceptors.request.use(config => {
      return config;
    })

    instance.interceptors.response.use(res => { // 响应拦截器, 请求成功的回调
      return res.data;
    });
  }

  request(options) { // url, method
    let instance = axios.create();
    let config = this.merge(options);
    this.setInterceptor(instance); // 拦截器
    return instance(config);
  }
}

export default new AjaxRequest(baseURL);
