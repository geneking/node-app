var express    = require('express');
var page_url   = require('../../common/page-url');
var loginCtrl  = require("../../controller/login/login");

exports.route = function (app) {

  //登录页
  app.get('/login', function (req, res) {
    res.sendFile( page_url.login);
  });

  //登录请求
  app.post('/login', loginCtrl);
  
};
