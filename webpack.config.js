const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/index.js', // Entry chính
  output: {
    filename: 'js/bundle.js', // File JS sau khi gộp
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Xử lý JS với Babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(scss|sass)$/, // Xử lý cả SCSS và SASS
        use: [
          MiniCssExtractPlugin.loader, // Tách CSS ra file riêng
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Xử lý hình ảnh
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.css', // File CSS sau khi xử lý
    }),
  ],
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 8080,
    hot: true,
  },
};
