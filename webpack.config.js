const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');

module.exports = {
  devServer: {
    overlay: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9527,
    hot: true,
  },
  // mode: 'production',
  mode: 'development',
  // 输出 source-map 方便直接调试 ES6 源码
  devtool: 'cheap-module-eval-source-map',
  // devtool: 'source-map',
  // JavaScript 执行入口文件
  entry: './src/show.jsx',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
    // 输出的代码符合 CommonJS 模块化规范，以供给其它模块导入使用。
    // libraryTarget: 'commonjs2',
  },
  resolve: {
    // 先尝试 ts 后缀的 TypeScript 源码文件
    extensions: ['.js', '.ts'],
    // 使用绝对路径指明第三方模块存放的位置，以减少搜索步骤
    // 其中 __dirname 表示当前工作目录，也就是项目根目录
    modules: [path.resolve(__dirname, 'node_modules')],
    // 只采用 main 字段作为入口文件描述字段，以减少搜索步骤
    // mainFields: ['main'],
  },
  module: {
    rules: [
      {
        // 用正则去匹配要用该 loader 转换的 CSS 文件
        test: /\.css$/,
        // 直接生成页面的style标签
        // use: ['style-loader', 'css-loader'],
        // 生成css文件
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
      },
      {
        // 增加对 SCSS 文件的支持
        test: /\.scss$/,
        // SCSS 文件的处理顺序为先 sass-loader 再 css-loader 再 style-loader
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            // 30KB 以下的文件采用 url-loader
            limit: 1024 * 30,
            // 否则采用 file-loader，默认值就是 file-loader
            fallback: 'file-loader',
          },
        }],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // 从 .js 文件中提取出来的 .css 文件的名称
      filename: '[name]_[contenthash:8].css',
    }),
    new OptimizeCssAssetsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
    }),
    // 告诉 Webpack 使用了哪些动态链接库
    new DllReferencePlugin({
      // 描述 react 动态链接库的文件内容
      // eslint-disable-next-line global-require
      manifest: require('./dist/react.manifest.json'),
    }),
  ],
};
