
#### 搭建的自动化单元测试环境
1. `webpack.test.conf.js`
2. `karma.conf.js` 
3 可进行.js模块测试以及.vue单元件测试

#### 编写单元测试

##### Mocha测试框架语法 
每个测试案例文件都会遵循以下基本模式。首先，有个 describe 块：
```js
describe (’ Array ’,()=>{
／／ 测试序列
} )
```
第一个参数是描述，比如我们打算测试Array功能，我们简单描述Array功能，比如Array，第二个参数是一个匿名函数，里面有若干个单元测试用例

describe的嵌套，序列的嵌套
```js
describe (’ User ’,() =>{
describe (’ Address ’,() =>{
    //
    //
  })
})
```
测试用例
测试序列内至少有 it 块，否则 Mocha 会忽略测试序列内的内容，不会执行任何的
动作。例如：
```js
describe (’ Array ’, ()=>{
it (I 应该在初始化后长度为 ’， ()=>{
／／这里编写测试代码的实现
})
})
```
it 于创建实际的测试,第一个参数的描述测试用例，一般的语句规则是 ' It should be done with .'

#### Mocha测试序列的写法，可以遵循下面的模式
1. 测试序列用类名命名。
2. 测试用例用于测试指定方法或属性默认效果时用“＃＋成员名”方式命名
3. 当测试用例的测试内容不能归属于某个方法或属成员时用“应该 输出 :xxx
应该 完成 :xxx 操作”的句式陈述。

#### 断言库——chai

#### Mocha的钩子
每一个测试序列都有一系列的钩子，给我们做一些测试前后的操作
- beforeEach－一一－在每个场景测试执行之前执行：
- erEach一一在每个场景执行完成之后执行
- before－在所有场景执行之前执行（仅执 次）
- after-一在所有场景执行之后执行（仅执行 次）
```js
describe (” Array” , ()=>{
var expectTarget = []
}) ;
beforeEach ( () => {
expectTarget .push(l)
});
afterEach ( () => {
expectTarget = []
});
it （”应该存有一个为 的整数”， ()=>{
. expect(expectTarget[OJ) .to . eqls(l)
});
it 可以有多个的期望值检测 ”， ()=>{
expect(expectTarget[OJ) . to.eqls(l)
expect(true) . to . eqls(true)
}) ; 
```
例如，我们可以创建 Vue 实例，在各个测试用例中共享：
```js
describe (”UkButton”,()=>{
let vm = undefined
before ( () => {
})
vm =new UkButton({propsData: {
color :’ primary ’
} } ) . $mount ()
after ( () => {
vm . destroy ()
})
it （”设置 Button 的颜色”， ()=>{
expect(vm.$el . getAttribute ( ’ cl as s ’) ) .to . eqls (’ uk-button
uk-button-primary ’ )
vm . componentOptions . propsData.color = ’ succes s ’
})
it （” Button 的颜色应该被改成了 success ”， ()=>{
expect(vm.$el . getAttribute ( ’ class ’)) . to.eqls ( ’ uk-button
uk-button-succes s ’) 
```
#### 异步测试
Mocha 的异步测试用法 Jasmine
样，就是在 it 内加入 done 函数，在所有的断 执行 成后调用 done（）就可以释
放测试用例并告知 Mocha 测试的执行结果。，例如，我们有一个User对象，User有一个save方法，这个方法通过ajax将数据保存到服务器，服务端没有返回错误...
```js
describe (’ User ’,()=>{
describe (’#save ()’,()=>{
it （’应该成功保存到服务端且不会返回任何错误信息’， done => {
canst user = new User (’ Luna ’)
user .save( err=> {
if (err) done(err) II 如果返回错误码直接将错误码输出至控制台
else done()
})
}) } )
} )
```

#### 编写待定的测试
`待定测试`是实际开发中用的很多的一种方式，通过`测试驱动开发`简单说就是
编写失败的测试->实现代码->使测试通过-> 重构，但是这里面会有两种情况，一种是'失败'的测试是要实现的，也就是因为没有实现而失败不符合预期，还有一种是因为代码有问题无法通过测试，需要重构的，为了区分它们，我们可以将第 步中的“编写失败的测试”调整为 编写待定的测试”，这样就能很清楚地将它们区分开来。
在 Mocha 中只要我们不向 函数传入实现测试的函数（第二个参数）， Mocha 就会默
认这个测试是待定的
```js
describe ( ’ Array ’ , ()=>{
})
describe ( ’ #indexOf () ’, ()=>{
II pending test below
it ( ’ should return - 1 when the value is not present ’ ) ;
})
```
在输出时待定的测试显示的字体颜色是黄色的（失败是红色，通过是绿色〉，这样我们
眼就能看出哪些测试的功能是要去实现的了。

#### 组件单元测试方法
使用vue开发，除了独立的js模块测试，这部分方法明确，预期明确测试用例还比较好写，但是如果是涉及到界面视图的也就是dom相关的、用户交互相关的就比较麻烦，需要涉及dom操作，事件触发等等，下面是elementui是单元测试，他们针对复用的东西封装了一个util.js。
[elementui的单元测试](https://github.com/ElemeFE/element/blob/dev/test/unit/specs/form.spec.js)
[参考例子](https://github.com/violetjack/VueStudyDemos/tree/master/VueTestDemo)
单纯一个表单的测试，其实就很多了，一个表单其实封装了很多组件，每一个组件的功能至少几个测试用例来测试是否满足预期。
```js
import { createVue, destroyVM, waitImmediate } from '../util';

const DELAY = 50;

describe('Form', () => {
  let vm;
  let hasPromise = true;
  before(() => {
    if (!window.Promise) {
      hasPromise = false;
      window.Promise = require('es6-promise').Promise;
    }
  });

  after(() => {
    if (!hasPromise) {
      window.Promise = undefined;
    }
  });

  afterEach(() => {
    destroyVM(vm);
  });

  it('label width', done => {
    vm = createVue({
      template: `
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
      `,
      data() {
        return {
          form: {
            name: ''
          }
        };
      }
    }, true);
    expect(vm.$el.querySelector('.el-form-item__label').style.width).to.equal('80px');
    expect(vm.$el.querySelector('.el-form-item__content').style.marginLeft).to.equal('80px');
    done();
  });
  it('auto label width', async() => {
    vm = createVue({
      template: `
        <el-form ref="form" :model="form" label-width="auto">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动备注信息" v-if="display">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
      `,
      data() {
        return {
          display: true,
          form: {
            name: '',
            intro: ''
          }
        };
      }
    }, true);

    await waitImmediate();

    const formItems = vm.$el.querySelectorAll('.el-form-item__content');
    const marginLeft = parseInt(formItems[0].style.marginLeft, 10);
    const marginLeft1 = parseInt(formItems[1].style.marginLeft, 10);
    expect(marginLeft === marginLeft1).to.be.true;

    vm.display = false;
    await waitImmediate();

    const formItem = vm.$el.querySelector('.el-form-item__content');
    const newMarginLeft = parseInt(formItem.style.marginLeft, 10);
    expect(newMarginLeft < marginLeft).to.be.true;
  });
  it('inline form', done => {
    vm = createVue({
      template: `
        <el-form ref="form" :model="form" inline>
          <el-form-item>
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.address"></el-input>
          </el-form-item>
        </el-form>
      `,
      data() {
        return {
          form: {
            name: '',
            address: ''
          }
        };
      }
    }, true);
    expect(vm.$el.classList.contains('el-form--inline')).to.be.true;
    done();
  });
  it('label position', done => {
    vm = createVue({
      template: `
        <div>
          <el-form :model="form" label-position="top" ref="labelTop">
            <el-form-item>
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.address"></el-input>
            </el-form-item>
          </el-form>
          <el-form :model="form" label-position="left" ref="labelLeft">
            <el-form-item>
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.address"></el-input>
            </el-form-item>
          </el-form>
        </div>
      `,
      data() {
        return {
          form: {
            name: '',
            address: ''
          }
        };
      }
    }, true);
    expect(vm.$refs.labelTop.$el.classList.contains('el-form--label-top')).to.be.true;
    expect(vm.$refs.labelLeft.$el.classList.contains('el-form--label-left')).to.be.true;
    done();
  });
  it('label size', () => {
    vm = createVue({
      template: `
        <div>
          <el-form :model="form" size="mini" ref="labelMini">
            <el-form-item>
              <el-input v-model="form.name"></el-input>
            </el-form-item>
          </el-form>
        </div>
      `,
      data() {
        return {
          form: {
            name: ''
          }
        };
      }
    }, true);
    expect(vm.$refs.labelMini.$el.children[0].classList.contains('el-form-item--mini')).to.be.true;
  });
  it('show message', done => {
    vm = createVue({
      template: `
        <el-form :model="form" ref="form">
          <el-form-item label="活动名称" prop="name" :show-message="false"
            :rules="{
              required: true,
              message: '请输入活动名称',
              trigger: 'change',
              min: 3,
              max: 6
            }"
          >
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
      `,
      data() {
        return {
          form: {
            name: ''
          }
        };
      }
    }, true);
    vm.$refs.form.validate(valid => {
      expect(valid).to.not.true;
      vm.$refs.form.$nextTick(_ => {
        expect(vm.$el.querySelector('.el-form-item__error')).to.not.exist;
        done();
      });
    });
  });
  ...
  ...
  ...
```


#### 除了观察视图样式等，其他几乎所有可以切换到单元测试环境进行测试的，不要使用重复的手动输入测试，编写几个合适的测试用例，跑起来，如果你配置了多个浏览器，可以直接在多个浏览器启动测试，，观察测试结果，对提高代码质量，开发效率是有帮助的，虽然这里面配置的环境不去（建议还是直接使用vue提供的测试环境，学习vue-cli下的单元测试，e2e测试。）而且测试用例保存着，也方便以后维护和功能更新。