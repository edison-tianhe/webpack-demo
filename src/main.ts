// main.ts
require('./css/main.css');
require('./css/main.scss');
// 通过 ES6 模块规范导入 show 函数
import { show } from './show';
// 执行 show 函数
show('Webpack');