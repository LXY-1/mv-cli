/*
 * @Description:这是一个异步测试例子，毕竟很多模块都是异步的比如请求
 * @version:
 * @Author: lxw
 * @Date: 2020-04-12 00:34:35
 * @LastEditors: lxw
 * @LastEditTime: 2020-04-12 00:49:15
 */
const expect = require('chai').expect
import { getUser } from '../../src/api/user.js'

// eslint-disable-next-line
describe('请求用户数据接口测试', done => {
  // eslint-disable-next-line
  before(function() {
    // 在本区块的所有测试用例之前执行
  })
  // eslint-disable-next-line
  after(function() {
    // 在本区块的所有测试用例之后执行
  })
  // eslint-disable-next-line
  beforeEach(function() {
    // 在本区块的每个测试用例之前执行
  })
  // eslint-disable-next-line
  afterEach(function() {
    // 在本区块的每个测试用例之后执行
  })
  getUser().then((result) => {
    expect(result).to.be.an('object')
    done()
  }).catch((err) => {
    done(err)
  })
})
