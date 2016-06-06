var webpack = require('webpack');
var fs      = require('fs');

//获取打包入口路径配置
var getEntry = function(){
  var pages = JSON.parse(fs.readFileSync('app.json', 'utf-8')).pages;
  var entryObj = {};

  for (var i = 0; i < pages.length; i++) {
    entryObj[pages[i].name] = pages[i].src;
  }
  return entryObj;
};

module.exports = {
  entry: getEntry(),
  output: {
      path: './client/build/',
      filename: '[name].js'
  },

  module: {
    loaders: [
      { test: /\.less|\.css$/, loaders: ['style', 'css', 'less'] }
    ]
  },

  resolve:{
    extensions:['','.js','.json']
  },
};
