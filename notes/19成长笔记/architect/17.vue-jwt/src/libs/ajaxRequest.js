// ajaxRequest 获取
import axios from 'axios';

import store from '../store';

import { getLocal } from '../libs/saveLocal';

const baseURL = 'http://127.0.0.1:3000';

class AjaxRequest {

  constructor(baseURL) {
    // 请求路径
    this.baseURL = process.env.NODE_ENV === 'producttion' ? '/' : baseURL;
    this.timeout = 3000;  // 超时时间
    this.queue = {};  // 存放请求队列
  }

  merge(options) {
    return {baseURL: this.baseURL, timeout: this.timeout, ...options};
  }
  // 配置请求、响应拦截器
  setInterceptor(instance, url) {

    instance.interceptors.request.use(config => { // 请求拦截
      config.headers.authorization = getLocal('token');
      if (Object.keys(this.queue).length === 0) {
        store.commit('changeShowT');    // 开启加载
      }
      this.queue[url] = url;
      return config;
    })

    instance.interceptors.response.use(res => { // 响应拦截器, 请求成功的回调
      delete this.queue[url];  // 当前请求完成, 删除
      if (Object.keys(this.queue).length === 0) {
        store.commit('changeShowF');  // 请求全部完成， 关闭loading动画
      }
      return res.data;
    });
  }

  request(options) { // url, method
    let instance = axios.create();
    let config = this.merge(options);
    this.setInterceptor(instance, options.url); // 拦截器
    return instance(config);
  }
}

export default new AjaxRequest(baseURL);
