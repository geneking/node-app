'use strict';

const express  = require('express');
const pageUrl  = require('../../common/page-url');

exports.route = (app) => {
  //首页
  app.get('/', (req, res) => {
    if(!req.session.user){
      res.redirect('/login');
    }
    res.sendFile(pageUrl.home);
  });
};
