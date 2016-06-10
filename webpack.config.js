var webpack     = require('webpack');
var fs          = require('fs');
var openBrowser = require('open-browser-webpack-plugin');

//获取打包入口路径配置
var getEntry = function(){
  var pages = JSON.parse(fs.readFileSync('app.json', 'utf-8')).pages;
  var entry = {};

  for (var i = 0; i < pages.length; i++) {
    entry[pages[i].name] = pages[i].src;
  }
  return entry;
};

module.exports = {
  entry: getEntry(),
  output: {
    publicPath: './client/build/',
    path: './client/build/',
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
