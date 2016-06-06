var express  = require('express');
var page_url = require('../../common/page-url');

exports.route = function (app) {
  //首页
  app.get('/', function (req, res) {
      res.sendFile( page_url.home);
  });
};
