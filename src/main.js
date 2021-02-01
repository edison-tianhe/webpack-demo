// 通过 CommonJS 规范导入 CSS 模块
// require('./css/main.css');
// require('./css/footer.css');
import show from './show';
import './css/main.scss';

show('Webpack1');

window.a = 122;

if (module.hot) {
  module.hot.accept();
}
