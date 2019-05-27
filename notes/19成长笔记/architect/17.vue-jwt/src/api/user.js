import axios from '../libs/ajaxRequest';

export function getUser() {
  return axios.request({
    url: '/user',
    method: 'get'
  })
}

export function login(username) {
  return axios.request({
    url: '/login',
    method: 'post',
    data: {
      username
    }
  })
}