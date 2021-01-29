// 通过 CommonJS 规范导入 CSS 模块
require('./css/main.css');
require('./css/footer.css');
// 通过 CommonJS 规范导入 show 函数
const show = require('./show.js');
// 执行 show 函数
show('Webpack1');

window.a = 1;
