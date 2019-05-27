import axios from '../libs/ajaxRequest';

export const getUser = () => {
  return axios.request({
    url: '/user',
    method: 'get'
  })
}

export const login = username => {
  return axios.request({
    url: '/login',
    method: 'post',
    data: {
      username
    }
  })
}

export const validate = () => {
  return axios.request({
    url: '/validate',
    method: 'get'
  })
}