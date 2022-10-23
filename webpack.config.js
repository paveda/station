import { resolve } from 'node:path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

/** @type {import('webpack').Configuration} */
export default {
  entry: resolve('src/index.tsx'),
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    path: resolve('dist'),
    clean: true,
  },

  devServer: {
    static: './dist',
    port: 8080,
    open: true,
    hot: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Station',
      template: resolve('src/template.html'),
    })
  ],

  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.css$/, loader: 'css-loader' },
    ]
  },

  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.tsx'
    ]
  }
}
