import axios from '../libs/ajaxRequest';

export function getUser() {
  return axios.request({
    url: '/user',
    method: 'get'
  })
}