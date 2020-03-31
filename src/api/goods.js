
import request from '../utils/request'
export function getGoodsList(params) {
    return request({
      url: '/goods/list',
      method: 'get',
      params
    })
}

export function addGoods(data) {
    return request({
      url: '/goods/add',
      method: 'post',
      data
    })
}
  
export function delGoods(data) {
    return request({
      url: '/goods/del',
      method: 'post',
      data
    })
}
export function updateGoods(data) {
    return request({
      url: '/goods/update',
      method: 'post',
      data
    })
}