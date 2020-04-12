/*
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-04-09 17:21:10
 * @LastEditors: lxw
 * @LastEditTime: 2020-04-09 17:24:00
 */
import request from '../libs/request'

function getUser() {
  return request({
    url: '/posts',
    method: 'get'
  })
}
export { getUser }
