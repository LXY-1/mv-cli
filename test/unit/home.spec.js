/*
 * @Description:测试组件：About.vue是否符合预期功能
 * @version:
 * @Author: lxw
 * @Date: 2020-04-12 11:06:46
 * @LastEditors: lxw
 * @LastEditTime: 2020-04-12 17:55:29
 */
import { destroyVM, createTest } from '../util.js'
import Home from '@/views/Home.vue'
const expect = require('chai').expect

// eslint-disable-next-line
describe('Hello.vue', function () {
  let vm

  // eslint-disable-next-line
  afterEach(function() {
    destroyVM(vm)
  })

  // eslint-disable-next-line
  it('测试元素内容', () => {
    // 即测试实际对应的元素dom的文本内容是否符合预期的输出

    // 创建home测试组件实例，挂载到dom返回实例对象
    vm = createTest(Home, {}, true)
    // eslint-disable-next-line
    expect(vm.$el.querySelector('.home .version').textContent).to.equal('1.0')
  })

  // eslint-disable-next-line
  it('测试组件实例对象vue中数据', () => {
    vm = createTest(Home, {}, true)
    // eslint-disable-next-line
    expect(vm.version).to.equal('1.0');
  })

  // eslint-disable-next-line
  it('测试获取dom中是否存在某个class', () => {
    vm = createTest(Home, {}, true)
    // eslint-disable-next-line
     expect(vm.$el.classList.contains('home')).to.be.true;
  })
})
