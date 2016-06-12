'use strict';

const express      = require('express');
const page_url     = require('../../common/page-url');
const registerCtrl = require("../../controller/register/register");

exports.route = (app) => {

  //注册页
  app.get('/register', (req, res) => {
    if (req.session.user) {
      res.redirect('/home');
    }
    res.sendFile( page_url.register);
  });

  //登录请求
  app.post('/register', registerCtrl);
};
