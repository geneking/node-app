'use strict';

const express      = require('express');
const pageUrl      = require('../../common/page-url');
const registerCtrl = require("../../controller/register/register");

exports.route = (app) => {

  //注册页
  app.get('/register', (req, res) => {
    res.sendFile(pageUrl.register);
  });

  //登录请求
  app.post('/register', registerCtrl);
};
