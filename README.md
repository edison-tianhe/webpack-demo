# 深入浅出webpack

## <http://webpack.wuhaolin.cn/>

time: 2021/1/23

本书Webpack已经迭代到了3.8.1
现在是webpack5了
本项目走webpack4
____________________________________________________________________

1.4节
🍳 <https://github.com/webpack-contrib/css-loader/pull/741>
🎈 minimize 高版本被删除
😁 <https://github.com/NMFR/optimize-css-assets-webpack-plugin>可以使用这个插件达到压缩相同css样式的问题

1.5节
🍳 <https://github.com/webpack-contrib/extract-text-webpack-plugin>
🎈 extract-text-webpack-plugin 已经被弃用
😁 改为 mini-css-extract-plugin

1.6节
🍳
🎈 我记得webpack-dev-server在webpack5中有报错问题、现在不知道有没有修复 备注一下！
😁

3.1节
🍳
🎈 babel v7的一些知识点
😁 babel-core                         v7之后是@babel/core
    babel-preset-env                   v7之后是@babel/preset-env
    babel-plugin-transform-runtime     v7之后是@babel/plugin-transform-runtime
    其他文中没有提到的babel插件也是这样的

3.3节
🍳
🎈 没有写的原因是 我觉得ts挺好用的
😁

3.6-3.8节
🍳
🎈 没有写的原因是 继承框架等到整体webpack梳理完毕再回来完整的组装一个webpack-react
😁