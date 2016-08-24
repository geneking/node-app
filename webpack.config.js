'use strict';

const fs          = require('fs');
const openBrowser = require('open-browser-webpack-plugin');
const buildPath   = './client/build/';

//获取打包入口路径配置
const getEntry = () => {
  const pages = JSON.parse(fs.readFileSync('app.json', 'utf-8')).pages;
  let entry = {};

  for (let i = 0; i < pages.length; i++) {
    entry[pages[i].name] = pages[i].src;
  }
  return entry;
};

module.exports = {
  entry: getEntry(),
  output: {
    publicPath: buildPath,
    path: buildPath,
    filename: '/js/[name].js'
  },

  module: {
    loaders: [
      { test: /\.less|\.css$/, loaders: ['style', 'css', 'less'] },
      { test: /\.(?:jpg|gif|png)$/, loader: 'url?limit=10240&name=images/[name].[ext]' },
      { test: /\.js$/, exclude: /node_modules/, loader: ['babel'], query:{presets:['es2015']} }
    ]
  },

  resolve:{
    extensions:['','.js','.json']
  },

  plugins: [
    new openBrowser({
      url: 'http://127.0.0.1/login'
    })
  ]
};
