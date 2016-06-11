'use strict';

const express  = require('express');
const page_url = require('../../common/page-url');

exports.route = (app) => {
  //首页
  app.get('/', (req, res) => {
    if(!req.session.user){
      res.redirect('/login');
    }
    res.sendFile( page_url.home);
  });
};
