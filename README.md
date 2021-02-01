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
    注意v7和之前的版本不能混着用,不然会报错

3.3节
🍳
🎈 没有写的原因是 我觉得ts挺好用的
😁

3.6-3.8节
🍳
🎈 没有写的原因是 继承框架等到整体webpack梳理完毕再回来完整的组装一个webpack-react
😁

3.9节
🍳
🎈 作者使用的是web-webpack-plugin 我这边使用的是html-webpack-plugin

    1.定义 NODE_ENV 环境变量为 production，以去除源码中只有开发时才需要的部分；
    2.压缩输出的 JavaScript 代码。
      日期: 21/2/1
      https://webpack.docschina.org/migrate/3/#uglifyjsplugin-minimize-loaders
      已被移除,设置 minimize:true 来压缩 loaders

    这两部分没有搞 暂时跳过
😁

3.10节
🍳
🎈 作者使用的是web-webpack-plugin 我这边使用的是html-webpack-plugin
   对于多页应用的的载入方式,作者的web插件暴露出来了一个方法用该方法+固定的文件格式生成entry结果和plugins中的结果
   
😁

3.16节
🍳 https://www.npmjs.com/package/husky
🎈 这个地方我推荐搞一手airbnb规范
    eslint/eslint-loader必须安装,eslint生效的基本配置
    划重点!!!编辑器的eslint插件检查一般体现在编辑器自带的[问题]展示框框,项目的运行中的eslint报错是需要eslint-loader集成的
    集成eslint-config-airbnb插件要安装前置
    "eslint-plugin-import"
    "eslint-plugin-jsx-a11y"
    "eslint-plugin-react"
    这三个,忘记了也没事,在运行的时候会warn你有xx插件找不到,对着安装就完事了
    建议再搞一手Husky,代码质量直接拉满,除了团队特殊规范需要自行设置规则
😁

4.10节
🍳
🎈 uglify-es已经不再维护，terser是其fork版本，webpack从4.26.0版本从 uglify-es 迁移到 terser
   我的terser好像没有效果,暂时跳过
😁