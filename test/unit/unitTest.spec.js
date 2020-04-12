/*
 * @Description:
 * @version:
 * @Author: lxw
 * @Date: 2020-04-11 22:36:53
 * @LastEditors: lxw
 * @LastEditTime: 2020-04-11 22:52:38
 */
const expect = require('chai').expect

import { add, minus } from '../../src/libs/unitTest.js'

// eslint-disable-next-line
describe('输入两个数应该分别正确输出其相加、减的结果', function() {
  // eslint-disable-next-line
    it('1 + 2 = 3', () => {
    const result = add(1, 2)
    expect(result).to.equal(3)
  })
  // eslint-disable-next-line
  it('1 -2 = -1', () => {
    const result = minus(1, 2)
    expect(result).to.equal(-1)
  })
})
