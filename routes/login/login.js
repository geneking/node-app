'use strict';

const express   = require('express');
const pageUrl   = require('../../common/page-url');
const loginCtrl = require("../../controller/login/login");

exports.route = (app) => {

  //登录页
  app.get('/login', (req, res) => {
    if (req.session.user) {
      res.redirect('/home');
    }
    res.sendFile(pageUrl.login);
  });

  //登录请求
  app.post('/login', loginCtrl);

};
